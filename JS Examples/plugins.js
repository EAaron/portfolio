// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


// Anon Jquery function

jQuery(function( $ ){ 

    // Window and Document
    var win =   $(window),
    doc     =   $(document);

    // Variables
    var flexSlider  =   $('.flexslider'),           // Flex Slider 
    navPrimary      =   $('.nav-primary'),          // Primary Nav
    body            =   $('body'),                  // Body
    sliderContent   =   $('.slider-content'),       // Slider Content
    siteHeader      =   $('.site-header'),          // Site Header
    searchForm      =   $('.search-form'),          // Search Form
    headerHeight    =   siteHeader.height(),        // Header Height
    searchBar       =   $('.search-form'),          // Search Form
    searchIcon      =   $('.mag-icon'),             // Mag Icon
    titleArea       =   $('.title-area'),           // Title Area
    precastBanner   =   $('#find-precast-mobile');  // Mobile Find Precast Button
    

    /* Document is Ready
    -------------------------------------*/
    doc.ready(function() {

        flexSlider.flexslider();

        /* Toggles search-show class on click
        -------------------------------------*/
        function showSearch(){
            searchIcon.click(function(){
                if (titleArea.css('display') == 'none') {
                    searchBar.toggleClass('search-show');
                }
            });
        }showSearch();

        /* Apply "stuck" when element 55px from top
        -------------------------------------*/
        precastBanner.waypoint('sticky', {
            offset: 55 
        });

    // TODO make this check the first instance of slider-image
    $("#flex-slide-0").load(function() {
        sliderHeight = Math.floor( $(this).height() );
           $('.flexslider .slides .slide').css('height', sliderHeight);
        });

            $('.flex-control-nav.flex-control-paging').detach().appendTo('.slider-content');
        flexArrows.css('top', headerHeight + sliderHeight/2 + 'px' );   
    });


        

        $('.meetings-section .section-content').flowtype({
            fontRatio : 15
        });

        flexArrows = $('.flex-direction-nav li a');
        if (navPrimary.css('display') == 'none') {
            $('.mobile-flexslider').flexslider();
        }
        



    $('.precast-products-section').waypoint(function(direction) {
        if (direction == 'down' ) {
            $('.certification-photo').css('marginTop', '-80px');
        } else {
            $('.certification-photo').css('marginTop', '0px');
        }
      
    });


    if ( body.hasClass( "single-precast-product" ) ) {

        // Enable parallax and fade effects on featured image sections
            win.scroll(function(){

            scrolltop = win.scrollTop();
            scrollwindow = scrolltop + win.height();

            $(".parallax-featured-image").css("backgroundPosition", "50% " + -(scrolltop/6) + "px");
        });
    };

    // Check if home page and don't run on mobile view
    if ( body.hasClass( "home" ) && navPrimary.css('display') != 'none') {

        edOffset = $('.education-section').offset();

        // Enable parallax and fade effects on featured image sections
        win.scroll(function(){

            offsetTop = edOffset.top / 2.1;
            scrolltop = win.scrollTop();
            scrolltop = scrolltop - offsetTop;
            scrollwindow = scrolltop + win.height();
            $(".education-section").css("backgroundPosition", "50% " + -(scrolltop/8) + "px");
        });
    };    

    // Set waypoint depending on what page you are on
    if ( flexSlider.length > 0 ) {
        flexSlider.waypoint(function() {
            siteHeader.toggleClass('sticky-header');
        });
    }
    else {
        $('.site-inner').waypoint(function() {
            siteHeader.toggleClass('sticky-header');
        });
    }

    $("#tertiary").mmenu();

    // Modernizr Rules
    if (!Modernizr.svg) {
        $('.title-area').addClass('no-svg');
    }



    // resize
    win.resize(function() {

        var sliderHeight2 = Math.floor( $("#flex-slide-0").height() );

        flexArrows.css('top', headerHeight + sliderHeight2/2 + 'px' );

        // Set Slider height after a resize
        if (flexSlider.length > 0) { 
            var homeSliderHeight = $('.flexslider ul li img').height();
            $('.flexslider, .flexslider slides slide').css('height', homeSliderHeight);
            sliderContent.css('height', homeSliderHeight);
        }   
    
    });
});



