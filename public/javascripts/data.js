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
        $('#entry-list').html('<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">AngularJS</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">HTML5</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">CSS3</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Javascript</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">jQuery</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Bootstrap</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Ruby</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Ruby on Rails</li>');
        $('#caption').text('Hangry was made in a collaborative effort with Bao Pham and Curry Lee. This project features an AngularJS front-end and Ruby on Rails back-end. It also utilizes an external API(Zomato) as well an API using HTTParty to connect the back-end to the front-end. This application is a single page application which takes advantage state functionality provided through AngularJS.');
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
        $('#entry-list').html('<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">HTML5</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">CSS3</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Javascript</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">jQuery</li>');
        $('#caption').text('This is a clone of the game Simon. The objective of the game is to watch a sequence of lights flash and then attempt to match them. Passing the level will cause the number of flashes to increment by one. Failing to pass the level will reset the game at level 1.');
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
        $('#entry-list').html('<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">HTML5</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">CSS3</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Ajax</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Javascript</li>\n'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">jQuery</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Bootstrap</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Ruby</li>'+
            '<li class="entry-technolgies col-xs-12 col-sm-12 col-md-12 col-lg-12">Ruby on Rails</li>');
        $('#caption').text('This site was made to test my design skills and ability to implement CRUD functionality. This full-stack application was made using Ruby on Rails. It is a mock up of the site TechCrunch. It features articles pulled in from an external API(provided from TechCrunch), CRUD functionality, User Authentication and multiple models.');
    });
});

