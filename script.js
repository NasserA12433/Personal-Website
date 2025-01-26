"use strict"

const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll', DisplayContent);
DisplayContent();

function DisplayContent(){
    const TriggerBottom= (window.innerHeight /5)*4;

    boxes.forEach((box)=>{
        const topBox=box.getBoundingClientRect().top;

        if(topBox<TriggerBottom){
            box.classList.add("show")
        }
        else{
            box.classList.remove("show");
        }
    })
}

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
