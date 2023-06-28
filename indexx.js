
$(".drum").on("click", function(){
    var kbliss = this.innerHTML;
    var sam = $(this).html();
   /*  alert("i just got clicked " + sam) */
    makesound(kbliss)
    animation(kbliss)
})
document.keypress(function(event){
    makesound(event.key)
    animation(event.key)
})

function makesound(key) {
    switch (key) {
        case "a":
            var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
            break;
            case "b":
            var sound = new Audio("sounds/tom-2.mp3");
    sound.play();
                break;
                case "c":
            var sound = new Audio("sounds/tom-3.mp3");
    sound.play();
            break;
            case "d":
            var sound = new Audio("sounds/tom-4.mp3");
    sound.play();
            break;
            case "e":
            var sound = new Audio("sounds/crash.mp3");
    sound.play();
            break;
            case "f":
            var sound = new Audio("sounds/kick-bass.mp3");
    sound.play();
            break;
            case "g":
            var sound = new Audio("sounds/snare.mp3");
    sound.play();
            break;
        default:console.log()
            break;
    }
}
/* $(".drum").click(function(vic){
    $(this).classList.add("pressed");
  });  */
   function animation(sam) {
    var active = document.querySelector("." + sam);
    active.classList.add("pressed")
    setTimeout(function(){
        active.classList.remove("pressed")
        }, 100)
    }