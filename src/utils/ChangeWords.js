function ChangeWords (word) {

    for(let i=1; i<word.length+1; i++){
        setTimeout(() => {
            let dividingWord = word.slice(0, i);
            changeDo(dividingWord);
            console.log(300*i);
        }, 400*i/2)
    }
    setTimeout(() => {
        deleteWord(word)
        console.log(800*word.length)
    }, 700*word.length);
}

const deleteWord = async (word) => {
    console.log("funcionando", word)
    for(let a=1; a<word.length+1; a++){
        setTimeout(() => {
            let dividingWord = word.slice(0, word.length-a);
            changeDo(dividingWord);
            console.log(dividingWord);
        }, 100*a)
    }
}

const changeDo = async (word) => {
    const wordToChange = null || document.getElementById("word-to-change");
    console.log(word);
    let change= document.getElementById("word-to-change");
    console.log(change);
    wordToChange.innerHTML = await NewPhrase(word);
}

const NewPhrase = (word) => {
    const view = `<h1>I'm <span>${word}</span></h1>` ;
    return view;
}


export default ChangeWords;