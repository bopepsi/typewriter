// Our goal is to animate the sentence, revealing one character at a time. This would make it look as though it is being typed in by someone

const sentence = "hello there from lighthouse labs";
const print = ((sentence) => {
    let ans = '';
    let timer = 0;
    for (const char of sentence) {
        setTimeout(()=>{
            ans+=char;
            console.log(ans);
        },timer)
        timer+=100;
    }
})(sentence);