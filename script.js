var name = "Neeru Uppalapati";
var i = 0;
var speed = 50; //typing speed in milliseconds

function typeWriter() {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(typeWriter2, 1000); //wait for 1 second before starting second typing animation
  }
}

function typeWriter2() {
  var text = "Math/Naval Architecture/Computer Science at the University of Michigan〽️";
  var j = 0;
  var speed2 = 30; //typing speed in milliseconds for second animation

  function typeWriterHelper() {
    if (j < text.length) {
      document.getElementById("study").innerHTML += text.charAt(j);
      j++;
      setTimeout(typeWriterHelper, speed2);
    }
  }

  typeWriterHelper();
}


window.onload = typeWriter;


