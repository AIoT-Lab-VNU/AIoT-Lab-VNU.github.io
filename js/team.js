$(document).ready(function(){
    $('.container_people').hide()
    $('.container_people[data-id=director]').show()
    $('#consultant, #director, #member, #collaborator').on('click', function(){
        $(this).parent().children().removeClass('btn-primary')
        $(this).parent().children().addClass('btn-outline-primary')
        $(this).removeClass('btn-outline-primary')
        $(this).addClass('btn-primary')
        id = $(this).attr('id')
        $('.container_people').hide()
        $('.container_people[data-id=' + id + ']').show()
        new WOW().init();
    })

    
})