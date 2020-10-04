import phrases from './utils/phrases';
import ChangeWords from './utils/ChangeWords';

window.addEventListener("load", () => setTimeout(function(){
    ChangeWords(phrases[0], phrases, "word-to-change")
}, 1300));
