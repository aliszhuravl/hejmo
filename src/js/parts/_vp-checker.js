$(document).ready(function(){
    $('.uv_animate').viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 200
    });
    $('.cr_animate').viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 300
    });
});