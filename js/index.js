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