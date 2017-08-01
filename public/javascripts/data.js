$(function() {
    var projects = [{
        "img": "/images/simon.png",
        "url": "https://roblowe1992.github.io/simon/",
        "title": "Simon",
        "github": "https://github.com/RobLowe1992/simon"
    }, {
        "img": "/images/techCrunch_mock.png",
        "url": "https://roblowe1992.github.io/techCrunch/",
        "title": "TechCrunch Mock Site",
        "github": "https://github.com/RobLowe1992/techCrunch"
    }, {
        "img": "/images/rqg.png",
        "url": "https://roblowe1992.github.io/Random-Quote-Generator/",
        "title": "Random Quote Generator",
        "github": "https://github.com/RobLowe1992/Random-Quote-Generator"
    }];

    var $projects = $('#projects');
    var $topText = $('.top-text');


    // for (var i = 0; i < projects.length; i++) {
    //     $projects.append(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href="${projects[i].url}"><img src="${projects[i].img}" id="project-${[i + 1]}" style="width: 350px; height: 300px" alt="Featured Image 1" class="img-rounded"></a><h2 class="proj-title">${projects[i].title}</h2><a class="orange" target="_blank" href="${projects[i].github}">${projects[i].github}</a></div>`);
    // }

    var $thumbnailImage = $('header section:nth-of-type(2) img');
    setTimeout(function () {
        $('.fly-in-text').removeClass('temp-hide');
        setTimeout(function () {
            $topText.css({
                "border": "solid 1em white",
                "padding": "2.5em 0 0 0",
                "background-color": "#fff"
            });
        }, 2500)
    }, 500);
    $thumbnailImage.fadeIn(500);

    window.sr = ScrollReveal();
    sr.reveal('.top-nav', {
        duration: 2500,
        origin: 'bottom'
    })
    sr.reveal('.left-scroll', {
        duration: 1500,
        origin: 'left'
    })
    sr.reveal('.right-scroll', {
        duration: 1500,
        origin: 'right'
    })

    $('.slide').click(function(e){
        e.preventDefault();
        var linkedHref = $(this).attr('href');
        console.log(linkedHref);
        $('html,body').animate({scrollTop: $(linkedHref).offset().top}, 1000);
    });
});

