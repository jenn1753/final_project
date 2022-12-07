let links = document.querySelectorAll(".links a");
let bodyId = document.querySelector("body").id;

for(let link of links){
    if(link.dataset.active == bodyId){
        link.classList.add("active");
    }
}

// window.addEventListener("scroll", function(){
//     if(document.documentElement.scrollTop > 0){
//         console.log("this works");
//         document.getElementById("navbar").classList.add("sticky");
//     }
// });
     
var item1 = document.querySelector("#item");
var item2 = document.querySelector("#item2");
var item3 = document.querySelector("#item3");

if (item1 && item2 && item3){
    drag_main(item1);
    drag_main(item2);
    drag_main(item3);
};

function drag_main(dragItem){

    var container = document.querySelector("#container");

    var active = false;
    var currentX = 0;
    var currentY = 0;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    var speedX = 0;
    var speedY = 0;    
    var gravity = 0.05;
    var gravitySpeed = 0;

    var first_run = true;
    var up = false;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);
    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    window.requestAnimationFrame(falling);


    function dragStart(e) {
        if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;
        } else {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        }
    
        if (e.target === dragItem) {
        active = true;
        }
    }
    
    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;
    
        active = false;
        falling();
    }

    function falling(){

        if (currentY > container.offsetHeight && first_run == true){

            first_run = false;
            currentY += speedY + gravitySpeed; 
            
            console.log(speedX, speedY);
        }

        else if (first_run == false && gravitySpeed < 10){

            gravitySpeed += gravity;
            currentX += speedX;

            if (currentY > document.querySelector(".home_main").offsetHeight){
                currentY -= speedY + gravitySpeed; 
                up = true;
            }
            else if(currentY < 0){
                currentY += speedY + gravitySpeed;
                up = false;
            }
            if(up == true){
                currentY -= speedY + gravitySpeed;
            }
            else{
                currentY += speedY + gravitySpeed;  
            }
        }
        
        else if (first_run == false){
            currentX += speedX;

            console.log(gravitySpeed);

            if (currentY > document.querySelector(".home_main").offsetHeight){
                currentY -= speedY + gravitySpeed; 
                up = true;
            }
            else if(currentY < 0){
                currentY += speedY + gravitySpeed;
                up = false;
            }
           
            if(up == true){
                currentY -= speedY + gravitySpeed;
            }
            else{
                currentY += speedY + gravitySpeed;  
            }
        }

        setTranslate(currentX, currentY, dragItem);
        requestAnimationFrame(falling);
           
    }
    
    function drag(e) {
        if (active) {
        
        e.preventDefault();
        
        if (e.type === "touchmove" && (e.clientX < window.innerWidth) && (e.clientY < window.innerHeight)) {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else if ((e.clientX < window.innerWidth) && (e.clientY < window.innerHeight)){
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }
    
        xOffset = currentX;
        yOffset = currentY;
    
        setTranslate(currentX, currentY, dragItem);
        }
    }
    
    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }

}


var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('#navbar, button,#item, #item2, #item3, footer');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('cursordown');
  cursorinner.classList.add('cursordown')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('cursordown')
  cursorinner.classList.remove('cursordown')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
    cursorinner.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    cursorinner.classList.remove('hover');
  });
})

// var height = document.querySelector("#card_img").clientHeight;

// console.log(height);

// document.querySelector(".card-container").style.height = height;

document.querySelector('#image1').addEventListener("mouseover", function(){
    document.getElementById("cap1").style.opacity = 2;
});

document.querySelector('#image1').addEventListener("mouseout", function(){
    document.getElementById("cap1").style.opacity = 0;
});


document.querySelector('#image2').addEventListener("mouseover", function(){
    document.getElementById("cap2").style.opacity = 2;
});

document.querySelector('#image2').addEventListener("mouseout", function(){
    document.getElementById("cap2").style.opacity = 0;
});

document.querySelector('#image3').addEventListener("mouseover", function(){
    document.getElementById("cap3").style.opacity = 2;
});

document.querySelector('#image3').addEventListener("mouseout", function(){
    document.getElementById("cap3").style.opacity = 0;
});

document.querySelector('#image4').addEventListener("mouseover", function(){
    document.getElementById("cap4").style.opacity = 2;
});

document.querySelector('#image4').addEventListener("mouseout", function(){
    document.getElementById("cap4").style.opacity = 0;
});

document.querySelector('#image5').addEventListener("mouseover", function(){
    document.getElementById("cap5").style.opacity = 2;
});

document.querySelector('#image5').addEventListener("mouseout", function(){
    document.getElementById("cap5").style.opacity = 0;
});

document.querySelector('#image6').addEventListener("mouseover", function(){
    document.getElementById("cap6").style.opacity = 2;
});

document.querySelector('#image6').addEventListener("mouseout", function(){
    document.getElementById("cap6").style.opacity = 0;
});

document.querySelector('#image7').addEventListener("mouseover", function(){
    document.getElementById("cap7").style.opacity = 2;
});

document.querySelector('#image7').addEventListener("mouseout", function(){
    document.getElementById("cap7").style.opacity = 0;
});

document.querySelector('#image8').addEventListener("mouseover", function(){
    document.getElementById("cap8").style.opacity = 2;
});

document.querySelector('#image8').addEventListener("mouseout", function(){
    document.getElementById("cap8").style.opacity = 0;
});

document.querySelector('#image9').addEventListener("mouseover", function(){
    document.getElementById("cap9").style.opacity = 2;
});

document.querySelector('#image9').addEventListener("mouseout", function(){
    document.getElementById("cap9").style.opacity = 0;
});