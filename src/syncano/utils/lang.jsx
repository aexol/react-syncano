import nlp from 'nlp_compromise'
import nlpSyllables from 'nlp-syllables'
nlp.plugin(nlpSyllables);
class LangProcessor{
  constructor(){
    this.commands = {}
  }
  addCommand = ({command, result}) => {
    const syllables = nlp.term(command).t2.syllables()
    this.commands[syllables.join("-")] = {
      syllables,
      result
    };
  }
  resolveCommand = ({command}) =>{
    const syllables = nlp.term(command).t2.syllables()
    let maxLength = 0
    let bestMatch = {}
    for(var [key,value] of this.commands){
      const syls = value.syllables.filter(s => syllables.indexOf(s) !== -1)
      if(syls.length > maxLength){
        bestMatch = key
        maxLength = syls.length
      }
    }
    return this.commands[bestMatch].result()
  }
}
