import React, { Component, PropTypes } from 'react'
import { fromJS } from 'immutable'
import Checker from '../utils.js'
import "./style.scss"

class Input extends Component {

  static propTypes = {}


  state = {
    text :  '',
    resulte : `Pour parler sans ambiguïté, ce dîner à Sainte-Adresse, près du Havre, malgré les effluves embaumés de la mer, malgré les vins de très bons crus, les cuisseaux de veau et les cuissots de chevreuil prodigués par l’amphitryon, fut un vrai guêpier. Quelles que soient, et quelque exiguës qu’aient pu paraître, à côté de la somme due, les arrhes qu’étaient censés avoir données la douairière et le marguillier, il était infâme d’en vouloir pour cela à ces fusiliers jumeaux et mal bâtis3, et de leur infliger une raclée, alors qu’ils ne songeaient qu’à prendre des rafraîchissements avec leurs coreligionnaires. Quoi qu’il en soit, c’est bien à tort que la douairière, par un contresens exorbitant, s’est laissé entraîner à prendre un râteau et qu’elle s’est crue obligée de frapper l’exigeant marguillier sur son omoplate vieillie. Deux alvéoles furent brisés ; une dysenterie se déclara suivie d’une phtisie, et l’imbécillité du malheureux s’accrut. — Par saint Martin ! quelle hémorragie ! s’écria ce bélître. À cet événement, saisissant son goupillon, ridicule excédent de bagage, il la poursuivit dans l’église tout entière.`,
    showResult : false,
    frenchErrors : [{
      error: 'lexical',
      nb: 0
    }, {
      error: 'conjugaison',
      nb: 0
    }, {
      error: 'Homophonie',
      nb: 0
    }, {
      error: 'accord',
      nb: 0
    }, {
      error: 'ponctuation',
      nb: 0
    }]
  }

  addLeter = (e) => { this.state.text = e.target.value }
  handelCorrection = ()  => {

    const meText = this.state.text.trim().replace(/\n/g, ' ').replace(/ +(?= )/g,'')
    const shouldBe  = this.state.resulte.trim()

    console.log('in the correction handle');
    console.log(meText)
    console.log(shouldBe);
    if (meText === shouldBe)  {
      this.setState({ showResult: true })
      return
    } else {
      let shouldBeSplit = shouldBe.split(' ')
      let meTextSplit = meText.split(' ')
      shouldBeSplit.forEach((wordTrue, x) => {

        if (Checker.checkConjugaison(wordTrue, meTextSplit[x])) ;//console.log('checkConjugaison');
        if (Checker.checkHomophonie(wordTrue, meTextSplit[x])) { this.state.frenchErrors[2].nb = this.state.frenchErrors[2].nb + 1 }//console.log('checkHomophonie');
        if (Checker.checkAccord(wordTrue, meTextSplit[x])) { this.state.frenchErrors[3].nb = this.state.frenchErrors[3].nb + 1 }
        if (Checker.checkPonctuation(wordTrue, meTextSplit[x])) ;//console.log('checkPonctuation');
        //if (lexical)
      })
      this.setState({ showResult: true })
      console.log(meTextSplit);
      console.log(shouldBeSplit);
    }
  }



  render () {
    const { showResult, frenchErrors }  = this.state
    return (
      <div className="inputPart">
      <textarea
      className="dicter"
      onChange={(e) => this.addLeter(e)}
      />
      <button
      onClick={(e) => this.handelCorrection()}
      >
      correction
      </button>
      {showResult  &&(
        <div>
        {"Resulta: "}
        {frenchErrors.map(res => {
          return (
          <div>
        {res.error + " : " + res.nb}
          </div>
        )
        })}
        </div>
      )}
      </div>
    )
  }
}

export default Input
