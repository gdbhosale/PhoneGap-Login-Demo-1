$(document).on('pagebeforeshow', '[data-role="page"]', function(){       
    $.mobile.activePage.find('[data-role="panel"]').load("panel.html", function(){ 
        $(this).parent().trigger('pagecreate');
    });
});
$(document).on("pageinit", function() {
    $(".nav-menu li a").on("click", function(e) {
        $("#mypanel").panel("close");
    });
});