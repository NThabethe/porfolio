/*--------------- SHOW MENU ---------------*/
const navMenu = document.getElementById('nav-menu'),
	  navToggle = document.getElementById('nav-toggle'),
	  navClose = document.getElementById('nav-close')
	  
	/*----- MENU SHOW -----*/
	/* Validate if constant exists */
	  if(navToggle){
		navToggle.addEventListener('click', () =>{
			navMenu.classList.add('show-menu')
		})
	  }

	/*----- MENU HIDDEN -----*/
	/* validate if constant exists */
	if(navClose){
		navClose.addEventListener('click', () =>{
			navMenu.classList.remove('show-menu')
		})
	}
	

/*--------------- REMOVE MENU MOBILE ---------------*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// when we click on each nav_link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
	

/*--------------- CHANGE BACKGROUND HEADER ---------------*/
function scrollHeader(){
	const header = document.getElementById('header')
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)	

/*--------------- SHOW SCROLL UP ---------------*/ 
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top
	if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)	

	

/*--------------- SCROLL SECTIONS ACTIVE LINK ---------------*/
const section = document.querySelectorAll('section[id]')

function scrollActive(){
	const scrollY = window.pageYOffset

	section.forEach(current =>{
		const	sectionHeight = current.offsetHeight,
				sectionTop = current.offsetTop - 58,
				sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}


	})
}
window.addEventListener('scroll', scrollActive)

	

/*--------------- SCROLL REVEAL ANIMATION ---------------*/
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay: 400,
	reset: true
})

sr.reveal(`.home_title, .popular_container, .features_img, .featured_filters`)
sr.reveal(`.home_subtitle, .features-title,`, {delay: 500})
sr.reveal(`.home_elec`, {delay: 600})
sr.reveal(`.home_img`, {delay: 800})
sr.reveal(`.section_title`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home_button, .skills_title, .skills_title i, .skills_blob, .skills_name`, {delay: 1000, origin: 'bottom'})
sr.reveal(`.about_group, .about_group-main, .offer_data, .container .main-video video, .button`, {origin: 'left'})
sr.reveal(`.about_data, .offer_img, .skills_container`, {origin: 'right'})
sr.reveal(`.features_map, .contact_content`, {delay: 600, interval: 100, origin: 'bottom'})
sr.reveal(`.features_card`, {interval: 300})
sr.reveal(`.featured_card, .logos_content, .footer_content `, {interval: 100})

/*--------------- EMAIL JS ---------------*/
const contactForm = document.getElementById('contact-form'),
	  contactName = document.getElementById('contact-name'),
	  contactEmail = document.getElementById('contact-email'),
	  contactProject = document.getElementById('contact-project'),
	  contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
	e.preventDefault()

	// Check if the field has a value
	if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
		// Add and remove color
		contactMessage.classList.remove('color-blue')
		contactMessage.classList.add('color-red')

		// Show message
		contactMessage.textContent = 'Write all the input fields 📩'
	}else{
		// serviceID - templateID - #form - publickey
		emailjs.sendForm('service_8ii265v','template_85g6ftk','#contact-form','VQaq6RG_bXgUd7BNm')
			.then(() =>{
				// Show message and add color
				contactMessage.classList.add('color-blue')
				contactMessage.textContent = 'Message sent ✅'

				// Remove message after five seconds
				setTimeout(() =>{
					contactMessage.textContent = ''
				}, 5000)
			}, (error) =>{
				alert('OOPS! SOMETHING WENT WRONG...', error)
			})

		// To clear the input field
		contactName.value = ''
		contactEmail.value = ''
		contactProject.value = ''
	}
}
contactForm.addEventListener('submit', sendEmail)

	  
