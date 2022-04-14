/*global $, alert, jQuery, confirm, console, prompt*/

$(document).ready(function () {
    'use strict';

    $('.section_tab label').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');

        $('.content_tab > div').hide();
        $('#' + $(this).data('content')).fadeIn();
    });

});