
var q = document.getElementById("Q");
q.addEventListener("click", function(butn){
  document.getElementById("soundQ").play();
})
var w = document.getElementById("W");
w.addEventListener("click", function(butn){
  document.getElementById("soundW").play();
})
var e = document.getElementById("E");
e.addEventListener("click", function(butn){
  document.getElementById("soundE").play();
})
var r = document.getElementById("R");
r.addEventListener("click", function(butn){
  document.getElementById("soundR").play();
})
var t = document.getElementById("T");
t.addEventListener("click", function(butn){
  document.getElementById("soundT").play();
})
var y = document.getElementById("Y");
y.addEventListener("click", function(butn){
  document.getElementById("soundY").play();
})
var u = document.getElementById("U");
u.addEventListener("click", function(butn){
  document.getElementById("soundU").play();
})
var i = document.getElementById("I");
i.addEventListener("click", function(butn){
  document.getElementById("soundI").play();
})
var o = document.getElementById("O");
o.addEventListener("click", function(butn){
  document.getElementById("soundO").play();
})
var p = document.getElementById("P");
p.addEventListener("click", function(butn){
  document.getElementById("soundP").play();
})


var a = document.getElementById("A");
a.addEventListener("click", function(butn){
  document.getElementById("soundA").play();
})
var s = document.getElementById("S");
s.addEventListener("click", function(butn){
  document.getElementById("soundS").play();
})
var d = document.getElementById("D");
d.addEventListener("click", function(butn){
  document.getElementById("soundD").play();
})
var f = document.getElementById("F");
f.addEventListener("click", function(butn){
  document.getElementById("soundF").play();
})
var g = document.getElementById("G");
g.addEventListener("click", function(butn){
  document.getElementById("soundG").play();
})
var h = document.getElementById("H");
h.addEventListener("click", function(butn){
  document.getElementById("soundH").play();
})
var j = document.getElementById("J");
j.addEventListener("click", function(butn){
  document.getElementById("soundJ").play();
})
var k = document.getElementById("K");
k.addEventListener("click", function(butn){
  document.getElementById("soundK").play();
})
var l = document.getElementById("L");
l.addEventListener("click", function(butn){
  document.getElementById("soundL").play();
})


var z = document.getElementById("Z");
z.addEventListener("click", function(butn){
  document.getElementById("soundZ").play();
})
var x = document.getElementById("X");
x.addEventListener("click", function(butn){
  document.getElementById("soundX").play();
})
var c = document.getElementById("C");
c.addEventListener("click", function(butn){
  document.getElementById("soundC").play();
})
var v = document.getElementById("V");
v.addEventListener("click", function(butn){
  document.getElementById("soundV").play();
})
var b = document.getElementById("B");
b.addEventListener("click", function(butn){
  document.getElementById("soundB").play();
})
var n = document.getElementById("N");
n.addEventListener("click", function(butn){
  document.getElementById("soundN").play();
})
var m = document.getElementById("M");
m.addEventListener("click", function(butn){
  document.getElementById("soundM").play();
})










//capture all the clicks in the document (window)
window.addEventListener("keydown", function(note){
  if(note.keyCode==65){
    console.log('Pressed A');
    document.getElementById("soundA").play();

  }
  if(note.keyCode==83){
    console.log('Pressed S');
    document.getElementById("soundS").play();
  }
  if(note.keyCode==68){
    console.log('Pressed D');
    document.getElementById("soundD").play();
  }
  if(note.keyCode==70){
    console.log('Pressed F');
    document.getElementById("soundF").play();
  }
  if(note.keyCode==71){
    console.log('Pressed G');
    document.getElementById("soundG").play();
  }
  if(note.keyCode==72){
    console.log('Pressed H');
    document.getElementById("soundH").play();
  }
  if(note.keyCode==74){
    console.log('Pressed J');
    document.getElementById("soundJ").play();
  }
  if(note.keyCode==75){
    console.log('Pressed K');
    document.getElementById("soundK").play();
  }
  if(note.keyCode==76){
    console.log('Pressed L');
    document.getElementById("soundL").play();
  }
  if(note.keyCode==81){
    console.log('Pressed Q');
    document.getElementById("soundQ").play();
  }
  if(note.keyCode==87){
    console.log('Pressed W');
    document.getElementById("soundW").play();
  }
  if(note.keyCode==69){
    console.log('Pressed E');
    document.getElementById("soundE").play();
  }
  if(note.keyCode==82){
    console.log('Pressed R');
    document.getElementById("soundR").play();
  }
  if(note.keyCode==84){
    console.log('Pressed T');
    document.getElementById("soundT").play();
  }
  if(note.keyCode==89){
    console.log('Pressed Y');
    document.getElementById("soundY").play();
  }
  if(note.keyCode==85){
    console.log('Pressed U');
    document.getElementById("soundU").play();
  }
  if(note.keyCode==73){
    console.log('Pressed I');
    document.getElementById("soundI").play();
  }
  if(note.keyCode==79){
    console.log('Pressed O');
    document.getElementById("soundO").play();
  }
  if(note.keyCode==80){
    console.log('Pressed P');
    document.getElementById("soundP").play();
  }
  if(note.keyCode==90){
    console.log('Pressed Z');
    document.getElementById("soundZ").play();
  }
  if(note.keyCode==88){
    console.log('Pressed X');
    document.getElementById("soundX").play();
  }
  if(note.keyCode==67){
    console.log('Pressed C');
    document.getElementById("soundC").play();
  }
  if(note.keyCode==86){
    console.log('Pressed V');
    document.getElementById("soundV").play();
  }
  if(note.keyCode==66){
    console.log('Pressed B');
    document.getElementById("soundB").play();
  }
  if(note.keyCode==78){
    console.log('Pressed N');
    document.getElementById("soundN").play();
  }
  if(note.keyCode==77){
    console.log('Pressed M');
    document.getElementById("soundM").play();
  }
});
