setInterval(function(){hidden()}, 13);

function error()
{
    document.getElementById('errorSpan').style.opacity = 1;
}

function hidden()
{
    var op = document.getElementById('errorSpan').style.opacity;
    if(op >= 0)
        document.getElementById('errorSpan').style.opacity = op - 0.0025;
}