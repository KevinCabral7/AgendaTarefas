$(document).ready(function(){
    $('form').on('submit', function(e){
        
        const itemLista = $('#item-lista').val()
        if (itemLista ===''){
            e.preventDefault()
            alert('A tarefa não foi escrita')
            return false
        }
        e.preventDefault()
        const novoItem = $('<li></li>')
        $(`<label>${itemLista}</label>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')

        $('#item-lista').val('')
    })


    $('ul').on('click', 'label',function(){
        $(this).attr('class', 'feito')
    })
})