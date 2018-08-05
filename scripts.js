var cookie = $('.cookie')


var removeCookie = function () {
    $(this).remove()

var clicked = function() {
    var newDiv = $('<div>')
    newDiv.addClass("cookie fas fa-cookie-bite")
    newDiv.click(removeCookie)
    var newCookie = $('.container').append(newDiv)
    newCookie
}
}