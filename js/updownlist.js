$(function () {
    $('.liEllipsis').on('click', function () {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    });

    $('.upbutton').on('click', function () {
        var $currentElement = $('#ul_li_SubCategories .selected');
        moveUp($currentElement);
    });
        
    $('.downbutton').on('click', function () {
        var $currentElement = $('#ul_li_SubCategories .selected');
        moveDown($currentElement);
    });

    var moveUp = function ($currentElement) {
        var hook = $currentElement.prev('.liEllipsis');
        if (hook.length) {
            var elementToMove = $currentElement.detach();
            hook.before(elementToMove);
        }
    };

    var moveDown = function ($currentElement) {
        var hook = $currentElement.next('.liEllipsis');
        if (hook.length) {
            var elementToMove = $currentElement.detach();
            hook.after(elementToMove);
        }
    }
});