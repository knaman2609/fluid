var fluid,
	$item,
	items = $('.container_inner .item');

items.css('display', 'none');
imagesLoaded($('.container_inner'), function() {

	items.css('display', 'block');
	$('.load').css('display', 'none');

	fluid = new $('.container_inner').fluid({col: 3, spacingX: 20, spacingY: 20	});

});

$(document).click(function() {
	$items = [$('<div class="item"> <img src="images/'+ Math.floor(gRA(1,6)) +'.jpg" alt=""> </div>'), $('<div class="item"> <img src="images/'+ Math.floor(gRA(1,6)) +'.jpg" alt=""> </div>')];
	imagesLoaded( $items, function() {
		fluid.add($items);
	});
});

function gRA(min, max) {
    return Math.random() * (max - min) + min;
}
