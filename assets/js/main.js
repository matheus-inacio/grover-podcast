/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Core JS file
========================================================================== */

"use strict";

$(document).ready(function ($) {
	initNavbar();
	initLandingNavbar();
	initMobileMenu();
	initLandingMobileMenu();
	initEcommerceNavbar();
	initSmoothScrolling();
})

function initSmoothScrolling() {
	const navLinks = document.querySelectorAll('a[href^="#"]');
	
	navLinks.forEach(link => {
		link.addEventListener('click', function(e) {
			e.preventDefault();
			
			const targetId = this.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			
			if (targetElement) {
				const navbarHeight = 90; // Height of your navbar
				const targetPosition = targetElement.offsetTop - navbarHeight;
				
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		});
	});
}