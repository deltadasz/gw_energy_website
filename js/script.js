// Make mobile navigation 

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function() {
    headerEl.classList.toggle('nav-open');
});


// Make menu close after click


// Sticky navigation //

const sectionHeroEl = document.querySelector('.section-hero');
const obs = new IntersectionObserver(function(entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
}, {
    root: null,
    threshold: 1,
    rootMargin: '-76px'
});

obs.observe(sectionHeroEl);