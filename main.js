var fluid,
	$item;

imagesLoaded( $('.container'), function( instance ) {
	fluid = new $('.container').fluid({col: 3});
	console.log(fluid);
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
