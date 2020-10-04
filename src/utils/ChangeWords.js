function ChangeWords (word, phrases, dom) {
    for(let i=1; i<word.length+1; i++){
        setTimeout(() => {
            let dividingWord = word.slice(0, i);
            changeDo(dividingWord, dom);
        }, 180*i)
    }
    setTimeout(() => {
        let newPhrase = chooseTheNextSentenceToBeWrittenAtRandom(phrases, word);
        deleteWord(word, newPhrase, phrases, dom);
    }, 460*word.length);
}

const chooseTheNextSentenceToBeWrittenAtRandom = (phrases, word) => {
    phrases = phrases.filter(item => !word.includes(item));
    return phrases[Math.floor(Math.random() * phrases.length)];
}

const deleteWord = (word, newPhrase, phrases, dom) => {
    for(let a=1; a<word.length+1; a++){
        setTimeout(async () => {
            let dividingWord = await word.slice(0, word.length-a);
            changeDo(dividingWord, dom);
        }, 100*a)
    }
    setTimeout(() => {
        ChangeWords(newPhrase, phrases, dom);
    }, 100*word.length+400);
}

const changeDo = async (word, dom) => {
    const wordToChange = null || document.getElementById(dom);
    wordToChange.innerHTML = await NewPhrase(word);
}

const NewPhrase = (word) => {
    const view = `<h1>I like to <span>${word}</span></h1>` ;
    return view;
}


export default ChangeWords;