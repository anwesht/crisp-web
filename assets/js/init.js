(function($){
    $(function(){

        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        // Activate the dropdown menu
        $(".dropdown-button").dropdown();

        // at: Initialize scrollspy
        $('.scrollspy').scrollSpy();

        // at: Initialize pushpin
        var footerOffset = $('body > footer').first().length
            ? $('body > footer')
                .first()
                .offset().top
            : 0;
        $('.toc-wrapper-pushpin').pushpin({
            top: 430,
            bottom: footerOffset,
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space