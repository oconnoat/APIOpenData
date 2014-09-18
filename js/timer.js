/* a Very simple javascript function to add a timer that counts down */

var time = 1000 * 60 * 45 //change the last number for the number of minutes (to msec)

//http://stackoverflow.com/questions/1191865/code-for-a-simple-javascript-countdown-timer
function timer(time,update) {
    var start = new Date().getTime();
    var interval = setInterval(function() {
        var now = time-(new Date().getTime()-start);
        if( now <= 0) {
            clearInterval(interval);
        }
        else update(Math.floor(now/1000));
    },500); // the smaller this number, the more accurate the timer will be
    return interval;
}

function padfloor(value){
    //http://dev.enekoalonso.com/2010/07/20/little-tricks-string-padding-in-javascript/
    return ("00" + Math.floor(value)).slice(-2);
}

function update(timeleft) { // called every step to update the visible countdown
        hours = timeleft / 3600;
        mins = (timeleft  / 60) % 60;
        sec = timeleft  % 60;
        // span#timer --> node
        document.getElementById('timer').firstChild.nodeValue = padfloor(hours) + ":" + padfloor(mins) + ":" + padfloor(sec);
        //document.getElementById('timebar').style.backgroundColor = "black";
        var percent = (timeleft/time) * 100 * 1000;
        document.getElementById('timebar').style.backgroundImage =   "linear-gradient(90deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) "+(percent)+"%, rgba(255, 0, 0, 0) "+percent+"%)";
}

var clock = timer(time, update);

document.getElementById('timer').addEventListener('click', function(){
    clearInterval(clock);
    clock = timer(time, update);

});
