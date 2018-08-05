var cookie = $('.cookie')


var removeCookie = function () {
    $(this).remove()
}

const randomPosition = function() {
    var bodyWidth = document.body.clientWidth
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor((Math.random()*bodyWidth));
    var randPosY = Math.floor((Math.random()*bodyHeight));    
    $(this).css('left', randPosX);
    $(this).css('top', randPosY);
  };


var clicked = function() {
    var newDiv = $('<div>')
    newDiv.addClass("cookie fas fa-cookie")
    let randomColor = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
    newDiv.css("color", randomColor)
    newDiv.click(randomPosition)
    newDiv.click(removeCookie)
    var newCookie = $('.container').append(newDiv)
}