/**
 * @author wwwsevolod [www@sevolod]
 * @version 0.1.0
 * @license MIT
 * jQuery event plugin, that provides easy way
 * to when scroll position reaches needed position in %.
 *
 * Like $.scroll, scrollizzle event applies to window objects,
 * but also to scrollable frames
 * and elements with the overflow CSS property set to scroll (or
 * auto when the element's explicit height or width is less than
 * the height or width of its contents).
 */

(function (factory) {
    if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(jQuery);
    }
}(function (jQuery) {
    var $ = jQuery && jQuery.fn ? jQuery : window.jQuery;
    /**
     * Takes current element and neede position and checks it out;
     * @param  {jQuery} $element
     * @param  {Number} neededPosition  position in %
     * @return {Boolean}
     */
    var checkScroll = function($element, neededPosition) {
        var currentScroll = $element.scrollTop(),
            heightOfElement = $element.height();

        var neededPositionInPixels = heightOfElement / 100 * neededPosition;
        return currentScroll >= neededPositionInPixels;
    };

    $.event.special.scrollizzle = {
        delegateType: 'scroll',
        bindType: 'scroll',
        /**
         * @param  {jQuery.event} event
         * @return {mixed}
         */
        handle: function( event ) {
            var handleObj = event.handleObj;
            var neededPosition = handleObj.data.position;

            if (checkScroll($(event.target), neededPosition)) {
                event.type = handleObj.origType;
                var ret = handleObj.handler.apply(this, arguments);
                event.type = handleObj.type;
                return ret;
            }
        }
    };

    return $.event.special.scrollizzle;
}));
