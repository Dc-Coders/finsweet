

window.addEventListener("DOMContentLoaded",() =>{
    let menu  = document.getElementById("menu");

    menu.addEventListener("click",function(){
        let list = document.getElementById("list");
        list.classList.toggle('open');
      
    })
})