/*jslint browser: true*/
/*global $, jQuery, alert*/

function isElementInViewport(elem) {
    'use strict';
    
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

$(document).ready(function() {
    'use strict';
    
    var showed = {};
    $('#about').css('overflow', 'hidden');
    $('#section1').css('overflow', 'hidden');
    $('.gray-section').css('overflow', 'hidden');
    
    if (isElementInViewport($('#section1 h1')) && !('#section1 h1' in showed)) {
        showed['#section1 h1'] = true;
        $('#section1 h1').css('marginLeft', '-40em');
        $('#section1 h1').animate({ marginLeft: '0em' }, 1000);
    }

    if (isElementInViewport($('#firstAbout')) && !('#firstAbout' in showed)) {
        showed['#firstAbout'] = true;
        $('#firstAbout').css('marginTop', '3em');
        $('#firstAbout').animate({ marginTop: '0em' }, 1000);
    }

    if (isElementInViewport($('#secondAbout')) && !('#secondAbout' in showed)) {
        showed['#secondAbout'] = true;
        $('#secondAbout').css('padding', '5% 8% 5% 8%');
        $('#secondAbout').css('marginLeft', '-30em');
        $('#secondAbout').css('paddingRight', '30em');
        $('#secondAbout').animate({ marginLeft: '0em', paddingRight: '8%' }, 1000);
    }
    
    $(window).scroll(function(){
        if (isElementInViewport($('#section1 h1')) && !('#section1 h1' in showed)) {
            showed['#section1 h1'] = true;
            $('#section1 h1').css('marginLeft', '-40em');
            $('#section1 h1').animate({ marginLeft: '0em' }, 1000);
        }

        if (isElementInViewport($('#firstAbout')) && !('#firstAbout' in showed)) {
            showed['#firstAbout'] = true;
            $('#firstAbout').css('marginTop', '3em');
            $('#firstAbout').animate({ marginTop: '0em' }, 1000);
        }

        if (isElementInViewport($('#secondAbout')) && !('#secondAbout' in showed)) {
            showed['#secondAbout'] = true;
            $('#secondAbout').css('padding', '5% 8% 5% 8%');
            $('#secondAbout').css('marginLeft', '-30em');
            $('#secondAbout').css('paddingRight', '30em');
            $('#secondAbout').animate({ marginLeft: '0em', paddingRight: '8%' }, 1000);
        }

        if (isElementInViewport($('#thirdAbout')) && !('#thirdAbout' in showed)) {
            showed['#thirdAbout'] = true;
            $('#thirdAbout').css('padding', '5% 8% 5% 8%');
            $('#thirdAbout').css('marginLeft', '-30em');
            $('#thirdAbout').css('paddingRight', '30em');
            $('#thirdAbout').animate({ marginLeft: '0em', paddingRight: '8%' }, 1000);
        }

        if (isElementInViewport($('#eventsUpper')) && !('#eventsUpper' in showed)) {
            showed['#eventsUpper'] = true;
            $('#eventsUpper').css('marginTop', '3em');
            $('#eventsUpper').animate({ marginTop: '0em' }, 1000);
        }

        if (isElementInViewport($('#eventsLower')) && !('#eventsLower' in showed)) {
            showed['#eventsLower'] = true;
            $('#eventsLower').css('marginLeft', '-30em');
            $('#eventsLower').css('marginRight', '30em');
            $('#eventsLower').animate({ marginLeft: '0em', marginRight: '0em' }, 1000);
        }

        if (isElementInViewport($('#contact')) && !('#contact' in showed)) {
            showed['#contact'] = true;
            $('#contact').css('marginLeft', '-5em');
            $('#contact').css('marginRight', '5em');
            $('#contact').animate({ marginLeft: '0em', marginRight: '0em' }, 1000);
        }

        if (isElementInViewport($('#booking')) && !('#booking' in showed)) {
            showed['#booking'] = true;
            $('#booking').css('paddingTop', '3em');
            $('#booking').animate({ paddingTop: '0em' }, 1000);
        }

        if (isElementInViewport($('#footer')) && !('#footer' in showed)) {
            showed['#footer'] = true;
            $('#footer').css('marginLeft', '-30em');
            $('#footer').css('marginRight', '30em');
            $('#footer').animate({ marginLeft: '0em', marginRight: '0em' }, 1000);
        }
    });
});
