
const homophoneList = [
  ['à','a','as','ha','ah'] ,
  ['an','en'],
  ['bientôt','bien tôt'],
  ['ce', 'se'],
  ['ces' ,'ses','c\’est','s\’est', 'sais','sait'],
  ['dans','d\'en', 'dent'],
  ['davatage','d\'avantage'],
  ['don','donc','dont'],
  ['la', 'là' , 'l\’a', 'l\’as', 'las'],
  ['mon','m\'ont', 'mont'],
  ['ni','n\'y','nie','nies','nient','nid'],
  ['notre','nôtre'], ['on','ont','on n\''],
  ['ou','où','août','hou','houe','houx'],
  ['peut être', 'pêut-être'],
  ['plutôt','plus tôt'],
  ['pris','prit','prie','prie','prix'],
  ['quand','quant' ,'qu\’en', 'camp','khan'],
  ['sa','ça','çà' ],
  ['sans', 's\’en', 'c\'en' ,'sens', 'sent', 'sang','cent'],
  ['son', 'sont'],
  ['ton','t\’ont', 'thon','taon'],
  ['tout','tous','toux'],
  ['votre','vôtre']
]
export default class Checker {

static checkConjugaison  (wordTrue, wordFalse) {
  return true
}

static checkHomophonie  (wordTrue, wordFalse) {
  let ret = false
  homophoneList.forEach(list => {
    list.forEach(each => {
      if (wordTrue === each) {
        list.forEach(each2 => {
          if (wordFalse === each2 && each2 != each ) {
            ret = true
          }
        })
      }
    })
  })
   return ret
 }

static checkAccord (wordTrue, wordFalse) {
  let ret = false
  const wordTrueSplit = wordTrue.replace(/[.,:?!]/g, '').split('')
  const wordFalseSplit = wordFalse.replace(/[.,:?!]/g, '').split('')
  if (wordTrueSplit[wordTrueSplit.length - 1] === 's' && wordFalseSplit[wordFalseSplit.length - 1] != 's') {
    ret = true
  }
  return ret
}

static checkPonctuation  (wordTrue, wordFalse) {
  return true
}


}
