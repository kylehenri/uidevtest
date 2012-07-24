$(document).ready(function(){
    
    // handler for text change
    $(".utility-bar a.type").click(function(){
        if($(".article-body").hasClass('largetype')) {
            $(".article-body").removeClass('largetype');
            $(this).html('Larger type');
            $(this).removeClass('minus');
            $(this).addClass('plus');
        }
        else {
            $(".article-body").addClass('largetype');
            $(this).html('Smaller type');
            $(this).addClass('minus');
            $(this).removeClass('plus');
        }
    });
    
});