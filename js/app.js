jQuery(function($) {

	var $sortButtons = $('.tabs').find('a');
	var $sortItems = $('.order');

	$sortButtons.on('click', function(e){
		e.preventDefault();

		var $target = $(e.target);
		var sortValue = $target.attr('data-sort');

		$sortButtons.removeClass('active');
		$target.addClass('active');

		if (sortValue === 'all') {
			$sortItems.show();
		} else {
			$sortItems.hide(0).filter(function(index, item){
				return $(item).attr('data-status') === sortValue;
			}).show(200);
		}
	});

	$sortItems.on('click', function(e) {
		
		var target = e.target;
		var $parent;
		var $expand;

		if (target.className !== 'more-info') {
			return;
		}

		$parent = $(target).closest('.order');
		$expand = $parent.children('.additional');

		$expand.toggle('additional');
		$parent.toggleClass('order-active');

	});

});