##Usage

```
var fluid;
imagesLoaded( $('.container'), function( instance ) { 
	fluid = new $('.container').fluid({col: 3}); // no of coloumns
});
```

###Add 

####fluid.add(items)

```
var $items = [$('<div class="item"> <img src="images/1.jpg" alt=""> </div>')];
imagesLoaded( $items, function() {
	fluid.add($items);
});
```


###Css

```
.container {
	width: 600px;
}

.item {
	width: 33.33%; // for three coloumns
	position: absolute;
}

.item img {
	display: block;
	width: 100%;
}
```