async function ChangeWords (words) {

    for(let i=0; i<words.length; i++) {
        setTimeout(
            ()=>{
            let word = words[i];

            for(let a=0; a<word.length+1; a++){
                let dividingWord = word.slice(0, a)
                changeDo(dividingWord)
            }
        }, 3000 * i)
    }
}


const changeDo = async (word) => {
    const wordToChange = null || document.getElementById("word-to-change");
    console.log(word);
    wordToChange.innerHTML = await Texto(word);

}

const Texto = (word) => {
    const view = `<h1>I'm <span>${word}</span></h1>` ;
    return view;
}


export default ChangeWords;