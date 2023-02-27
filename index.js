
var num=document.querySelectorAll(".drum").length;
for(var i=0;i<num;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
var imp=this.innerHTML;
makesound(imp);
//alert("hi");
});
}

document.addEventListener("keypress",function(event){
 makesound(event.key);

});

function makesound(fun){
  if(fun=="w"){
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
  }
  else if(fun=="a"){
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
  }
  else if(fun=="s"){
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
  }
  else if(fun=="d"){
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
  }
  else if(fun=="j"){
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
  }
  else if(fun=="k"){
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
  }
  else if(fun.innerHTML=="l"){
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
  }

}
