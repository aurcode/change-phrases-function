import words from './utils/words';
import ChangeWords from './utils/ChangeWords';

console.log('test')
// setInterval
//window.addEventListener("load", changeWords);

setTimeout(()=>{ChangeWords(words)}, 10000)