// Navigation Submenu 
(function(){
    let subMenuNav = document.querySelectorAll(".submenu");
    let subNavLink = document.querySelectorAll("#nav>li");

    subMenuNav.forEach(el=>{
        el.classList.add("hideEle");
    });
    
    subNavLink.forEach(el=>{
        el.addEventListener("click",()=>{
            if(el.children[1]){
                console.log(el.children[1])
                el.children[1].classList.toggle("hideEle");
            }
        });
        el.addEventListener("mouseleave",()=>{
            if(el.children[1]){
                el.children[1].classList.add("hideEle");
            }
        });        
    })

})();
// Home Page Main Slider
(function(){
    let slider = document.querySelector("#slider ul");
    let sliderFlyers = document.querySelectorAll("#slider>ul>li");
    let slidetDot = document.querySelector(".sliderPoints>div");



    slider.style.width = slider.clientWidth * sliderFlyers.length +"px";

    sliderFlyers.forEach(el=>{
        let dotEle = document.createElement("div");
        slidetDot.appendChild(dotEle);       
     })

    let slidetDots = document.querySelectorAll(".sliderPoints>.wrapper>div");

    var num = 0;
    slidetDots[num].style.backgroundColor="#19CCA3";

    setInterval(()=>{
        if(num<sliderFlyers.length){                       
            num++;           
            slidetDots[num].style.backgroundColor="#19CCA3";
            // slidetDots[num].style.backgroundColor = "red";
            slider.style.transform = "translateX(-"+ sliderFlyers[0].clientWidth * num +"px)";            
        }else{
            num=-1;
            slidetDots.forEach(el=>{
                el.style.backgroundColor="#138CF7";  
            })
        }

    },5000);



    let angerDots = document.querySelectorAll(".sliderPoints>div>div");
    angerDots.forEach((el,index) =>{
        el.innerHTML = "<h5>Learn the Way</h5>"
        el.addEventListener("click",()=>{
            num = index;
            slider.style.transform = "translateX(-"+ sliderFlyers[0].clientWidth * num +"px)";
           console.log(num);
        })
    })

})();