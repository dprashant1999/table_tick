

function toggleActive(Id, db) {
var element = document.querySelector(Id);
element.classList.toggle(db);
}



<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    $(function() {
        $('.inner_content').slideUp();
        $('.title_tab.active').next().slideDown();
        $('.title_tab').click(function() {   
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.title_tab').removeClass('active');
        $(this).next().slideUp();
    }
    else {
        $('.title_tab').removeClass('active');
        $('.inner_content').slideUp();
        $(this).addClass('active');
        $(this).next().slideDown();
    }     
    });
    });

