# vue-douban
> 基于vue + webpack + vuex + vue-router + axios + element ui的仿豆瓣项目  
> 实现首页、电影、图书、广播、小组、搜索、详情等页面  
> 重点在于vue的学习，及vuex以及vue-router的最佳实践

#### 项目结构
```
.
├── build                                       // webpack配置文件
├── config                                      // 项目打包路径
├── src                                         // 源码目录
│   ├── assets                                  // 资源文件
│   │   ├── image                               // 图片
│   │   ├── theme                               // element自定义主题
│   │   ├── data                                // 数据文件
│   ├── components                              // 公共组件
│   ├── layouts                                 // 页面模板
│   │   ├── Default.vue                         // 默认页面模板文件
│   ├── pages
│   ├── router
│   │   └── index.js                            // 基于layout的路由配置
│   ├── lib                                     // 封装过后的js文件
│   │   ├── api.js                              // 统一封装的api请求
│   │   ├── mixin.js                            // 错误处理
│   │   └── util.js                             // 与vue无关的工具函数
│   ├── store                                   // vuex的状态管理
│   │   ├── action.js                           // 配置actions
│   │   ├── index.js                            // 引用vuex，创建store
│   │   ├── modules                             // store模块
│   ├── App.vue                                 // 页面入口文件，加载各种公共组件
│   ├── main.js                                 // 程序入口文件
├── index.html                                  // 入口html文件
.

```
示例项目遵循组件化开发原则，视图层面由component -> layout -> page逐步构建而来，同时为了组件的可重用性，禁止组件内直接与后台进行交互，将与后台交互的api统一封装入api.js，交互工具选择axios。
#### 项目启动
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
### 项目中重点问题
#### 利用代理解决跨域问题
以前跨域通常需要使用jsonp方式，结合webpack,在config/index.js中添加proxyTable属性，即可实现跨域。如果需要请求多个前缀接口时，可写入多个对象
```
proxyTable: {
  '/api': {
    target: 'https://api.douban.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/v2'
    }
  }
}
```
#### 基于layout的路由配置
```
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Default,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
```
**路由模式的选择hash与history**：  
hash模式：是改变URL中`#`之后的内容在不同路由之间进行切换，传统单页面应用程序通常选择hash模式，hash模式下，页面首次加载时会将所有路由下的页面全部请求回来，再根据不同路由显示不同内容，即一次请求，按需显示。  
history模式：随着history api的出现，history模式的路由切换被大多应用于复杂的web app项目。利用history api中的pushState()和replaceState()方法，修改URL地址，可以做到按需请求，按需显示。  

**history模式下需注意到的问题**    
如果手动刷新新的页面会出现404问题，vue-cli开发模式下，官方脚手架已经帮我们配置好了，当如果自己配置nginx，需要注意。  
```
historyApiFallback: {
  rewrites: [
    { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
  ],
}
```
vue-router中结合嵌套子路由，可以实现component -> layout -> page整个流程，避免构建页面时需要重复写页头和页尾部分。  
#### vuex的处理
vuex集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。简单一点说，store中定义state，mutations，actions，其中actions中封装异步方法，mutations中封装无副作用的纯函数，且作为唯一修改state的途径。整个流程为组件通过dispatch调用action，action中通过commit调用mutations，mutations修改state的值，通过state的改变触发视图的更新。   

本项目采用官方推荐的模块化处理，分为activities,books,movies,search,group模块。其中每一个action对应三个mutation，即PENDING, FULLIED, REJECTED，分别代表异步请求提交、成功、失败时的三种状态。  
