//detecting the button press

for(var i=0;i<7;i++){//we took 7 coz our button in html drum kit is 7 only
document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
    var buttonInnerHtml = this.innerHTML;
   makeSound(buttonInnerHtml)
   buttonAnimation(buttonInnerHtml)
})
}

//detecting the keyboard

document.addEventListener("keypress" , function(event){
    makeSound(event.key)
   buttonAnimation(event.key)

})

function makeSound(key) {
    switch(key) {
        case "w" :
            var audio = new Audio("/sounds/crash.mp3")
            audio.play()
        break

        case "a" :
            var audio = new Audio("/sounds/kick-bass.mp3")
            audio.play()
        break   
            
        case "s" :
            var audio = new Audio("/sounds/snare.mp3")
            audio.play()
        break

        case "d" :
            var audio = new Audio("/sounds/tom-1.mp3")
            audio.play()
        break

        case "j" :
            var audio = new Audio("/sounds/tom-2.mp3")
            audio.play()
        break

        case "k" :
            var audio = new Audio("/sounds/tom-3.mp3")
            audio.play()
        break

        case "l" :
            var audio = new Audio("/sounds/tom-4.mp3")
            audio.play()
        break
        default :
                console.log("buttomInnerHtml")       

    }
} 

function buttonAnimation(currentKey) {
    var buttonActive = document.querySelector("."+currentKey);
    buttonActive.classList.add("pressed");

    setTimeout(function(){
    buttonActive.classList.remove("pressed");

    },300)
}