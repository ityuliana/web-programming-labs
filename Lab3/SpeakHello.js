//IIFE
let b = (function(){
    let speakWord = 'Hello';
    function speak(name) {
        console.log(speakWord + ' ' + name);
    }
    return speak;
})();