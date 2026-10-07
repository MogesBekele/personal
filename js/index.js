const navLinks = document.querySelectorAll('header nav a')
const logoLink = document.querySelector('.logo')
const sections = document.querySelectorAll('section')
const menuIcon = document.querySelector('#menu-icon')
const navbar = document.querySelector('header nav')


menuIcon.addEventListener('click', ()=>{
menuIcon.classList.toggle('bx-x')
navbar.classList.toggle('active')
})

const activePage = ()=>{
const header = document.querySelector('header') 


header.classList.remove('active')
header.classList.add('active')

  navLinks.forEach(link=>{
    link.classList.remove('active')
  })
  sections.forEach(section=>{
    section.classList.remove('active')
  })
  menuIcon.classList.remove('bx-x')
navbar.classList.remove('active')
}
navLinks.forEach((link, idx)=>{
  link.addEventListener('click', ()=>{
    if(!link.classList.contains('active')) {
      activePage();
      link.classList.add('active');
      sections[idx].classList.add('active')
    }
  })
})

logoLink.addEventListener('click', ()=>{
  if(!navLinks[0].classList.contains('active')){
    activePage()
    navLinks[0].classList.add('active')

    sections[0].classList.add('active')
  }
})


const resumeBtn = document.querySelectorAll('.resume-btn')
resumeBtn.forEach((btn, inx)=>{
  btn.addEventListener('click', ()=>{
    const resumeDetails = document.querySelectorAll('.resume-detail')
    resumeBtn.forEach(btn=>{
      btn.classList.remove('active')
    })
    btn.classList.add('active')
    resumeDetails.forEach(detail=>{
      detail.classList.remove('active')
    })
    resumeDetails[inx].classList.add('active')
  })
})



const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right')
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left')

let index = 0;

const activePortfolio = ()=>{
  const imgSlide = document.querySelector('.portfolio-carousel .img-slide')
  const portfolioDetails = document.querySelectorAll('.portfolio-detail')
  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`

  portfolioDetails.forEach(detail=>{
    detail.classList.remove('active')
  })
  portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', () =>{
if(index<8){
  index++;
  arrowLeft.classList.remove('disabled')
}
else{
  index = 9
  arrowRight.classList.add('disabled')
}
activePortfolio()
})


arrowLeft.addEventListener('click', () =>{
  if(index>1){
    index--;
    arrowRight.classList.remove('disabled')
  }
  else{
    index = 0
    arrowLeft.classList.add('disabled')
  }
  activePortfolio()
  })


  
  const form = document.getElementById("web3Form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    result.style.color = "var(--main-color)";
    result.innerText = "Sending message...";

    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    })
    .then(async (response) => {
      const data = await response.json();
      if (response.status === 200 && data.success) {
        result.style.color = "var(--main-color)";
        result.innerText = "Thank you! Your message has been sent to me successfully.";
        form.reset();
      } else {
        result.style.color = "#ff5f56";
        result.innerText = data.message || "Failed to send message. Please try again.";
      }
    })
    .catch((error) => {
      result.style.color = "#ff5f56";
      result.innerText = "Something went wrong. Please try again later.";
    })
    .finally(() => {
      setTimeout(() => {
        result.innerText = "";
      }, 6000);
    });
  });