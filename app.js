const navSlide=function(){
  const burger=document.querySelector('.burger'); 
  const nav=document.querySelector('.nav-links');
  const navLinks=document.querySelectorAll('.nav-links li');

burger.addEventListener('click',function(){
    // Toogle  Nav
    nav.classList.toggle('nav-active');

   


    // Burger Animation
    burger.classList.toggle('toggle');
});
}

const app=function(){
 navSlide();
 
}
app();
