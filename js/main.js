// when mouse over on dropdown then show items
$(".menu-open").hover(function(){
	$(this).addClass("active");
	$(this).children().addClass("arrow-up");
	$(this).children().removeClass("arrow-down");
	$(".menu-items").slideDown('slow');
	
});

// when mouse leaves  dropdown then hide items
$(".menu-items").mouseleave(function() {
	$(".menu-open").removeClass("active");
	$(".menu-open").children().removeClass("arrow-up");
	$(".menu-open").children().addClass("arrow-down");
	$(".menu-items").slideUp('fast');
});

// when click on menu items then hide all items and display selected item on top
$(".menu-items li a").click(function() {
	$(".menu-open").removeClass("active");
	$(".menu-open").children().removeClass("arrow-up");
	$(".menu-open").children().addClass("arrow-down");
	$(".menu-items").slideUp('fast');
	$(".menu-open").html($(this).html()+'<span class="arrow-down"></span>');
	$('link').attr('href',"css/"+$(this).data('src'));
});