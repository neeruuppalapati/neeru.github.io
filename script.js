var name = "Neeru Uppalapati";
var i = 0;
var speed = 50; // typing speed in milliseconds

function typeWriter() {
  if (i < name.length) {
    document.getElementById("name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function typeWriter2() {
  var text = "Engineering @ IMC Trading";
  var j = 0;
  var speed2 = 35; // typing speed in milliseconds for the second animation

  function typeWriterHelper() {
    if (j < text.length) {
      document.getElementById("study").innerHTML += text.charAt(j);
      j++;
      setTimeout(typeWriterHelper, speed2);
    }
  }

  typeWriterHelper();
}

// Check if the animation has already played
window.onload = function () {
  if (!localStorage.getItem("animationPlayed")) {
    // Run the animations
    typeWriter();
    setTimeout(typeWriter2, 1000); // Start the second animation after 1 second

    // Set a flag in localStorage to indicate the animation has been played
    localStorage.setItem("animationPlayed", "true");
  } else {
    // Optionally, set static text if animations shouldn't replay
    document.getElementById("name").innerHTML = name;
    document.getElementById("study").innerHTML = "Engineering @ IMC Trading";
  }
};
