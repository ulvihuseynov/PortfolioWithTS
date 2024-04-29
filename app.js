
const hamburger=document.getElementById('hamBtn');
const menu=document.getElementById('resMenu')
const hlink=document.querySelectorAll('#hlink');
const body=document.querySelector('body');
const moon=document.querySelector('#moon')
hamburger.addEventListener('click',()=>{
menu.classList.toggle('hidden')
hamburger.classList.toggle('bg-white')
})
hlink.forEach(link=>{
    link.addEventListener('click',()=>{
        menu.classList.toggle('hidden')
        hamburger.classList.toggle('bg-white')})})
moon.addEventListener('click',()=>{
    body.classList.toggle('dark')
})
