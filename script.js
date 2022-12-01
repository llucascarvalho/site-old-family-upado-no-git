function hiddenLoading(){
  document.getElementById('loading').classList.add(`loadingHidden`) 
  
}

window.addEventListener('scroll', onScroll)

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionBundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBundaries){
    menuElement.classList.add('active')
  }
}

function showNavOnScroll(){
  const nav = document.getElementById('navigation')
  if (scrollY > 40) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  if (scrollY > 800) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    distance: '30px',
    origin: 'top',
    duration: 700,
  }).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);