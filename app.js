// OPEN/CLOSE BUTTON
function openMenu() {
    document.body.classList += " menu--open";
};

function closeMenu() {
    document.body.classList.remove('menu--open');
}
// FADE IN ANIMATION
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 650,
    reset: false
});

sr.reveal('.title', {delay:300, origin:'top'});
sr.reveal('.nav__link--list', {delay:300, origin:'top'});
sr.reveal('.fa-bars', {delay:200, origin:'top'});
sr.reveal('.featured__title', {delay:300, origin:'top'});
sr.reveal('.section__title', {delay:300, origin:'top'});
sr.reveal('.socials__title', {delay:300, origin:'top'});
sr.reveal('.section__title', {delay:300, origin:'top'});
sr.reveal('.footer__title', {delay:300, origin:'top'});
sr.reveal('#location', {delay:300, origin:'top'});
sr.reveal('.contact', {delay:300, origin:'top'});
sr.reveal('.about__section--title', {delay:300, origin:'top'});
sr.reveal('.left__column', {delay:450, origin:'left'});
sr.reveal('.contact__left-column', {delay:400, origin:'left'});
sr.reveal('.contact__right-column', {delay:400, origin:'right'});
sr.reveal('#social__box1', {delay:450, origin:'left'});
sr.reveal('#social__box2', {delay:450, origin:'right'});
sr.reveal('#social__box3', {delay:650, origin:'left'});
sr.reveal('#social__box4', {delay:650, origin:'right'});
sr.reveal('p', {delay:300, origin:'bottom'});
sr.reveal('.social__link', {delay:300, origin:'bottom'});
sr.reveal('#featured__product1', {delay:400, origin:'bottom'});
sr.reveal('#featured__product2', {delay:650, origin:'bottom'});
sr.reveal('#featured__product3', {delay:900, origin:'bottom'});
sr.reveal('#service__product1', {delay:400, origin:'bottom'});
sr.reveal('#service__product2', {delay:650, origin:'bottom'});
sr.reveal('#service__product3', {delay:900, origin:'bottom'});