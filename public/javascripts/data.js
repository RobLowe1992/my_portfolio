$(function() {
    // Data
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

    // Scroll Events

    window.sr = ScrollReveal();
    sr.reveal('.top-nav', {
        duration: 2500,
        origin: 'bottom',
        reset: true
    });
    sr.reveal('.left-scroll', {
        duration: 1500,
        origin: 'left',
        reset: true
    });
    sr.reveal('.right-scroll', {
        duration: 1500,
        origin: 'right',
        reset: true
    });
    sr.reveal('.work-nav', {
        duration: 1500,
        origin: 'right',
        reset: true
    });

    // jQuery Events

    $('.slide').click(function(e){
        e.preventDefault();
        var linkedHref = $(this).attr('href');
        $('html,body').animate({scrollTop: $(linkedHref).offset().top}, 1000);
    });
    $('.rubber').hover(function(){
        $(this).toggleClass('animated rubberBand');
    });
    $('.entries').click(function(e){
        e.preventDefault();
        var linked = $(this).attr('href');
        console.log(linked);
    });
    $('#hangry').click(function(){
        $('.proj-display').css({
            'background': 'url("/images/hangry-display.png")',
            'background-position': '50% 20%'
        });
        $('#proj-sub-image-1').attr({
            'src': '/images/hangry-sub-2.png'
        });
        $('#proj-sub-image-2').attr({
            'src': '/images/hangry-sub-1.png'
        });
        $('#github').attr({
            'href': 'https://github.com/AskForTheWolf/Project3'
        });
        $('#website').attr({
            'href': 'https://baopham92.github.io/hangry/#/'
        });
    });
    $('#simon').click(function(){
        $('.proj-display').css({
            'background': 'url("/images/simon-display.png")',
            'background-position': '50% 20%'
        });
        $('#proj-sub-image-1').attr({
            'src': '/images/simon-code.png'
        });
        $('#proj-sub-image-2').attr({
            'src': '/images/simon-github.png'
        });
        $('#github').attr({
            'href': 'https://github.com/RobLowe1992/simon/tree/gh-pages'
        });
        $('#website').attr({
            'href': 'https://roblowe1992.github.io/simon/'
        });

    });
    $('#tcmock').click(function(){
        $('.proj-display').css({
            'background': 'url("/images/tcmock-display.png")',
            'background-position': '50% 20%'
        });
        $('#proj-sub-image-1').attr({
            'src': '/images/tcmock-sub-1.png'
        });
        $('#proj-sub-image-2').attr({
            'src': '/images/tcmock-sub-2.png'
        });
        $('#github').attr({
            'href': 'https://github.com/RobLowe1992/techcrunch_full_stack/tree/new_master'
        });
        $('#website').attr({
            'href': 'https://tech-crunch-mock.herokuapp.com/'
        });


    });
});

