function ChangeWords (word, phrases) {
    
    for(let i=1; i<word.length+1; i++){
        setTimeout(() => {
            let dividingWord = word.slice(0, i);
            changeDo(dividingWord);
        }, 180*i)
    }
    setTimeout(() => {
        let newPhrase = chooseTheNextSentenceToBeWrittenAtRandom(phrases);
        console.log("futura a escribri", newPhrase)
        deleteWord(word, newPhrase, phrases);
    }, 460*word.length);
}

const chooseTheNextSentenceToBeWrittenAtRandom = (phrases) => {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

const deleteWord = (word, newPhrase, phrases) => {
    console.log(document.getElementById("word-to-change").textContent)
    for(let a=1; a<word.length+1; a++){
        setTimeout(async () => {
            let dividingWord = await word.slice(0, word.length-a);
            changeDo(dividingWord);
        }, 100*a)
    }
    setTimeout(() => {
        ChangeWords(newPhrase, phrases);
    }, 100*word.length+400);
}

const changeDo = async (word) => {
    const wordToChange = null || document.getElementById("word-to-change");
    console.log(word);
    wordToChange.innerHTML = await NewPhrase(word);
}

const NewPhrase = (word) => {
    const view = `<h1>I like to <span>${word}</span></h1>` ;
    return view;
}


export default ChangeWords;