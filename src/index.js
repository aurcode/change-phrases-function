import words from './utils/words';
import ChangeWords from './utils/ChangeWords';

const wordToChange = document.getElementById("word-to-change");


window.addEventListener('load', () => {
    setTimeout(()=> {
        ChangeWords(words)
    },3000);
    console.log("primero script")
})