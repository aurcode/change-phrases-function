function ChangeWords (word) {

    for(let i=1; i<word.length+1; i++){
        setTimeout(() => {
            let dividingWord = word.slice(0, i);
            changeDo(dividingWord);
        }, 200*i)
    }
    setTimeout(() => {
        deleteWord(word)
    }, 500*word.length);
}

const deleteWord = (word) => {
    for(let a=1; a<word.length+1; a++){
        setTimeout(async () => {
            let dividingWord = await word.slice(0, word.length-a);
            changeDo(dividingWord);
        }, 100*a)
    }
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