"use strict";
(function($){
	$.fn.fluid = function(options) {
		if (typeof options == 'undefined') {
			alert('Please specify the number of coloumns.');
			return;
		}

		if (typeof options.col == 'undefined' ) {
			alert('Please specify the number of coloumns.');
			return;
		}

		var add = function ($items) {
			if (typeof $items == 'undefined') return;

			var container = this.container,
				len = this.len,
				_getXY = getXY.bind(this);

			for (var i=0 ;i< $items.length; i++) {
				container.append($items[i]);
				_getXY($items[i], len, function(left, top) {	
					$items[i].css({'left': left, 'top': top});
				});
			}	
		}

		var getX = function(pos) {
			var l,
				colW = ((this.contWidth/this.col).toFixed(2))*1;

			
			if (!(pos%this.col)) {
				return 0;
			}

			for (var i = 1; i< this.col; i++) {
				if (i == pos) {
					return i*colW;
				}
			}
		}	
			
		var getXY = function ($item, i, cb) {
			var t,
				l,
				pos,
				_getX = getX.bind(this);

			if (i < this.col)	{
				this.top[i] = $item.height();
				t = 0;
				l = _getX(i);
			}
			else {
				pos = this.top.indexOf(Array.min(this.top));
				t = this.top[pos];
				l = _getX(pos);
				this.top[pos] += $item.height();
			}

			this.len ++;
			cb(l, t);
		}	


		function positonEls() {
			var _getXY = getXY.bind(obj);

			obj.container.find('.item').each(function(i) {
				var $item = $(this);

				_getXY($item, i, function(left, top) {

					$item.css({'left': left, 'top': top});
					
				});
			});
		}


		var obj = {}; // obj to be returned 

		obj.col = options.col,
		obj.container = this,
		obj.contWidth = this.width(),
		obj.top = [],
		obj.len = 0,
		obj.add = add;

		positonEls(); // start

		return obj;
	}

	Array.min = function( array ){
		return Math.min.apply( Math, array );
	};
})(jQuery)