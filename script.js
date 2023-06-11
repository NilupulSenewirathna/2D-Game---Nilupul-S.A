
function key(event) {
    if(event.which == 13) {
       if (rw == 0) {
        fid = f();
        rw = setInterval(run, 100);
        rs.play();
        bw = setInterval(b, 100);
        sw = setInterval(updateScore, 100);
        fw = setInterval(move, 100);
       }
       
    }

    if (event.which == 32) {
        if (jw == 0) {
            clearInterval(rw);
            rs.pause();
            rw = -1;

            jw = setInterval(jump, 100);
            js.play();
        }
    }
}

var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");




var fid = 0;
var m = 800;

function f() {

    for (var y = 0; y < 10; y++) {

        var i = document.createElement("img");
        i.src = "flame.gif";
        i.className = "f";
        i.style.marginLeft = m + "px";
        i.id = "a" + y;

        if (y <=4) {
            m = m + 500;
        }

        if (y >=5) {
            m = m + 400;
        }
        
    
        document.getElementById("b").appendChild(i);
        

    }
   
}

function run() {
    var ring = document.getElementById("boy");
    ring.src = "run "
}

var rw = 0;
var r = 1;

function run() {
    var rimg = document.getElementById("boy");
   

    r = r + 1;

    if (r == 9) {
        r = 1;
    }

    rimg.src = "Run ("+r+").png";

}

var bw = 0;
var x = 0;

function b() {
    x = x - 20;
    document.getElementById("b").style.backgroundPositionX = x + "px";
}

var sw = 0;
var u = 0;

function updateScore() {

    u = u + 5;

    document.getElementById("score").innerHTML = u;
}


var fw = 0;
function move() {

    for (var y = 0; y < 10; y++) {
        var d = document.getElementById("a" + y);
        var z = getComputedStyle(d);
        var p = parseInt(z.marginLeft);
        
        p = p - 20;
        d.style.marginLeft = p + "px";

        // alert(p);
        // 60    160
        // 280

        if (p > 60 & p < 160) {

            if (mt > 350) {

            clearInterval(rw);
            rs.pause();

            clearInterval(jw);
            jw = -1;

            clearInterval(fw);

            clearInterval(bw);

            clearInterval(sw);

            dw = setInterval(dead, 100);
            ds.play();
            }
        }
    }
}

var jw = 0;
var j = 0;
var mt = 450;
function jump() {

    var jimg = document.getElementById("boy");

    if (j <= 6) { // 1 - 6 image
        mt = mt - 30;
    }

    if (j >= 7) { // 7 - 12 image
        mt = mt + 30;
    }

    jimg.style.marginTop = mt + "px";
    j = j + 1;

    if(j == 13) {
        j = 1;

        clearInterval(jw);
        jw = 0;

        rw = setInterval(run, 100);
        rs.play();

        if (fid == 0) {
            fid = f();
        }

        if (fw == 0) {
            fw = setInterval(move,100);
        }

        if (bw == 0) {
            be = setInterval(b, 100);
        }

        if (sw == 0) {
            sw = setInterval(updateScore, 100);
        }
    }

    jimg.src = "jump ("+ j +").png";
}

var dw = 0;
var d = 0;


function dead() {

    var dimg = document.getElementById("boy");
    d = d + 1;

    if (d == 11) {
        d = 10;

        dimg.style.marginTop = "425px";

        document.getElementById("end").style.visibility = "visible";

        document.getElementById("endscore").innerHTML = u;
    }

    dimg.src = "Dead ("+ d +").png";
}

function reload() {
    location.reload();
}
