var axiom = "F"
var sentence = axiom
var len = 100
var rules = [];
var angle;
rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
  var nextSentence = "";
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);
    var found = false;
    for (var j = 0; j < rules.length; j++){
      if (current == rules[j].a){
        found = true;
        nextSentence += rules[j].b;
        break;
      }
      if (!found) {
        nextSentence += current;
      }
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  len *=0.56;
  resetMatrix();
  translate(width/2,height);
  stroke(255, 100);
  for (var i = 0; i < sentence.length; i++) {
      var current = sentence.charAt(i);
      if (current == "F"){
        line(0,0,0,-len);
        translate(0,-len)
      }else if (current == "+"){
        rotate(angle);
      }else if (current == "-"){
        rotate(-angle);
      }else if (current == "["){
        push();
      }else if (current == "]"){
        pop();
      }
  }
}

function setup(){
  createCanvas(400,400);
  angle=radians(25);
  background(51)
  createP(axiom);
  turtle();
  var button = createButton("Generate");
  button.mousePressed(generate);
}
