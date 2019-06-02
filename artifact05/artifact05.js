var myImages =
    ["https://images-na.ssl-images-amazon.com/images/I/41dHEuSFORL._SX425_.jpg",
     "https://images-na.ssl-images-amazon.com/images/I/71EK2xl-2SL._SX425_.jpg",
     "https://i.pinimg.com/originals/ee/09/55/ee09552975cb5e6d26da1ce74e7fb785.png",
     "https://i.pinimg.com/originals/f5/b4/14/f5b414176f99d8e133dd7fec5f9cb328.jpg",
     "https://i.pinimg.com/originals/d3/cf/43/d3cf431c66d73cb8ebb564a72f54f475.jpg",
     "https://displate.com/displates/355747/zoom/2019-01-08/b8d3c4237e3277c34b8c307848617d62_d4d47198cd0471fff7a955db459605ae.jpg",
     "https://i.pinimg.com/originals/5d/b7/4f/5db74fd043ccdd4dcac8384f6ff1088c.png",
     "https://i.pinimg.com/originals/91/71/f4/9171f455c604a9cd1c2764f2a892928e.jpg",
     "https://images-na.ssl-images-amazon.com/images/I/81TbBFuWUGL._SY606_.jpg",
     "https://i.pinimg.com/originals/b1/51/0d/b1510dbbe33c7f576185b2c5e162c320.jpg",
     "https://i.pinimg.com/736x/5b/21/72/5b21729f418bc129465ff4be438c799d.jpg",
     "http://i.imgur.com/BNVXJLA.jpg"];


var captionImages =["Onepiece, flag","Captain Luffy","Vice captain Zoro","Usopp","Sanji","Nami","Chopper","Nico Robin","Franky","Brook","Jinbe","Straw Hat Crew"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,3000); // Next
