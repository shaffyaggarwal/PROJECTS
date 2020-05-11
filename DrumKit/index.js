var totalButton = document.querySelectorAll(".drum").length;
//alert(totalButton);
for(i=0; i < totalButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function() 
    {        
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)
    });

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    
        switch(key){
            case "w":
               var tom4 = new Audio("sounds/tom-4.mp3");
               tom4.play();
               break;
            case "a":
                   var tom3 = new Audio("sounds/tom-3.mp3");
                   tom3.play();
                   break;
             case "s":
                   var tom2 = new Audio("sounds/tom-2.mp3");
                   tom2.play();
                   break;
             case "d":
                   var tom1 = new Audio("sounds/tom-1.mp3");
                   tom1.play();
                   break;
             case "j":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;
             case "k":
                   var kickBass = new Audio("sounds/kick-bass.mp3");
                   kickBass.play();
                    break;
            case "l":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    break;
                   
                   
            default:
                console>log("press the mentioned keys");

      }
       
    
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
w