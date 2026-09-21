//IIFE
let a = (function (){
    let speakWord = 'Good Bye';
    function speak(name){
    console.log(speakWord + ' ' + name);
    }
    return speak;
})();