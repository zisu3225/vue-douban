import { getSingleMovie, getSingleBook } from '@/lib/api'

export const getSubject = async function (classify, id) {
  let res, subject
  try {
    if (classify === 'movie') {
      res = await getSingleMovie(id)
      subject = res.data
      subject.subjectMeta = subject.year + ' / ' +
        subject.genres.join(' / ') + ' / ' +
        subject.casts.map(item => item.name).join(' / ') + ' / ' +
        subject.directors.map(item => item.name).join(' / ') + ' / ' +
        subject.countries.join(' / ')
    } else if (classify === 'book') {
      res = await getSingleBook(id)
      subject = res.data
      subject.subjectMeta = subject.author.join(' / ') +
        subject.translator.join(' / ') + ' / ' +
        subject.publisher + ' / ' +
        subject.binding + ' / ' + subject.pages + ' / ' +
        subject.price + ' / ' + subject.pubdate
      subject.genres = subject.tags
    }
    if (subject.summary) {
      subject.shortSummary = subject.summary.slice(0, 120)
    }
  } catch (err) {
    throw err
  }
  return subject
}
