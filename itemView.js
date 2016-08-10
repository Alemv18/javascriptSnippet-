$(document.body).click(function() {

    var itemInformation = function() {
        var infoItem = [];
        $('ul.ui-carousel__container > li.ui-carousel__slide ').each(function() {
            var title = $('.product-tile__name').text();
            var description = $('.product-tile__description').attr("content");
            infoItem.push($(this).data('h1.product-title__name'));
        });

    }


});


//.map to return an array
//Store first in an array and then transform to json format



$(document.body).click(function() {

    var itemInformation = function() {
        var infoItem = [];
        $('.ui-carousel__container li').each(function() {
            infoItem.push($(this).data('h1.product-title__name'));
        });

    }


});
