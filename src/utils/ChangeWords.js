function ChangeWords (word) {

    for(let i=1; i<word.length+1; i++){
        setTimeout(() => {
            let dividingWord = word.slice(0, i);
            changeDo(dividingWord);
            console.log(300*i);
        }, 400*i/2)
        // .then(()=>{
        //     console.log('despues del for')
        // })
        setTimeout(() => {
            //deleteWord(word)
            console.log(1000*word.length)
        }, 1000*word.length);
    }
}

const deleteWord = async (word) => {
    for(let a=1; a<word.length+1; a++){
        setTimeout(() => {
            //let dividingWord = word.slice(0, i);
            //changeDo(dividingWord);
            console.log(funcionando);
        }, 400*i)
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