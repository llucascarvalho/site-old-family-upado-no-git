$(document).scroll(function () {

    var y = $(this).scrollTop();
    console.log(y)
    if (window.screen.width > 600) {
        if (y > 50) {
            $('.header')
                .css({
                    'background': '#1d1e20',
                    'height': '60px',
                    'transition-duration': '0.7s',
                });
            $('.logo')
                .css({
                    'width': '50px',
                    'transition': '0.7s ease-in',
                });
            $('.linkmenu')
                .css({
                    'margin-top': '4px',
                    'transition': '0.7s ease-in',
                })
        } else {
            $('.header')
                .css({
                    'background': '#1d1e20',
                    'height': '85px',

                });
            $('.logo')
                .css({
                    'width': '100px',
                    'transition': '0.5s ease-in',
                });
            $('.linkmenu')
                .css({
                    
                    'margin-top': '20px',

                })
        }
    }
});

ScrollReveal({
  distance: '1px',
  origin: 'bottom',
  duration: 1500,
}).reveal(`
#home`);
window.sr = ScrollReveal({reset: false});

sr.reveal('.homer', {origin: 'top', distance: '30px', duration: 2500})