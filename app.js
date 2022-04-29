 const title = document.querySelector(".hello h1");

 title.innerText = "Hello"

 console.log(title);

 function handelTitleClick(){
     title.style.color = "blue";
 }
 
 function handelMouseEnter(){
    title.innerText = "mouse is here";
 }

function handelMouseLeave(){
    title.innerText = "mouse is gone";
}

 title.addEventListener("click", handelTitleClick)
 title.addEventListener("mouseenter", handelMouseEnter)
 title.addEventListener("mouseleave", handelMouseLeave)