window.addEventListener('DOMContentLoaded' , function(){
    window.addEventListener('scroll', function(){
      const header = document.querySelector('header');
      header.classList.toggle('sticky' , window.scrollY > 0)
    })

    const btnx = document.querySelector('.btnx');
    const header_ul = document.querySelector('.header_ul');

    btnx.addEventListener('click',()=>{
      btnx.classList.toggle('active');
      header_ul.classList.toggle('active')
    })
const scrollToTop_btn = document.querySelector('.scrollToTop-btn');
window.addEventListener('scroll', ()=>{
  scrollToTop_btn.classList.toggle('active',window.scrollY>400)
})
scrollToTop_btn.addEventListener('click',()=>{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
  })







