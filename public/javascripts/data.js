var projects = [{
    "img":"/images/simon.png",
    "url":"https://roblowe1992.github.io/simon/",
    "title":"Simon",
    "github": "https://github.com/RobLowe1992/simon"
},{
    "img":"/images/techCrunch_mock.png",
    "url":"https://roblowe1992.github.io/techCrunch/",
    "title":"TechCrunch Mock Site",
    "github": "https://github.com/RobLowe1992/techCrunch"
},{
    "img":"/images/rqg.png",
    "url":"https://roblowe1992.github.io/Random-Quote-Generator/",
    "title":"Random Quote Generator",
    "github": "https://github.com/RobLowe1992/Random-Quote-Generator"
}];

var $projects = $('#projects');


for (var i = 0; i < projects.length; i++) {
    $projects.append(`<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4"><a target="_blank" href="${projects[i].url}"><img src="${projects[i].img}" id="project-${[i+1]}" style="width: 350px; height: 300px" alt="Featured Image 1" class="img-rounded"></a><h2 class="proj-title">${projects[i].title}</h2><a class="orange" target="_blank" href="${projects[i].github}">${projects[i].github}</a></div>`);
}

var $thumbnailImage = $('header section:nth-of-type(2) img');
$(function() {
    setTimeout(function() {
        $('.fly-in-text').removeClass('temp-hide');
    }, 500);

    $thumbnailImage.fadeIn(500);
});


