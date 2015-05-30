##Usage

```
var fluid;
imagesLoaded( $('.container'), function() {
	fluid = new $('.container').fluid({col: 3, spacingX: 20, spacingY: 20});
});
```

col = number of coloumns [required]

spacingX = horizontal width between two items [default = 10]

spacingY = vertical width between two items [default = 10]


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
	position: relative;
}

.item {
	position: absolute;
}

.item img {
	display: block;
	width: 100%;
}
```