
$(document).ready(() => {

    $(".devourBurger").click(event => {
        const burgerId = event.target.value

        $.ajax({
            method: 'PUT',
            url: `/index/devour/${burgerId}`
        }).then(() => {
            location.reload()
        })
    })

});