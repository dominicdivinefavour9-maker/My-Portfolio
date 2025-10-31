let meanIcon =document.querySelector('#menu-icon');
let navbar= document.querySelector('.navbar')

meanIcon.onclick = () => {
    meanIcon.classList.toggle('bx-x')
    meanIcon.classList.toggle("active");
}