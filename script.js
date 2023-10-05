
const throttleFunction=(func, delay)=>{
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if(now - prev> delay){
        prev = now;
        return func(...args); 
      }
    }
  }

document.querySelector(".main").addEventListener("mousemove", throttleFunction((e) => {

    let div = document.createElement("div")
    div.classList.add("card")
  document.body.appendChild(div)
    div.style.left = e.clientX + "px"
  div.style.top = e.clientY + "px"
  

  let diveImage = document.createElement("img")
  diveImage.setAttribute("src", "https://images.unsplash.com/photo-1692800148019-2f17672c1d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
  div.appendChild(diveImage)


  gsap.to("img", {
    y: "0",
    duration: .5,
    ease: Power1,
  })

  gsap.to("img", {
    y: "100%",
    delay: .5,
    ease:Power2
  })


  setTimeout(() => {
      div.remove()
    }, 2000)
  
  
}, 500))