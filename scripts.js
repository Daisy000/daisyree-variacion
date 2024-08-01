// Get the button
let mybutton = document.getElementById("back_to_top_btn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 3000 ||
    document.documentElement.scrollTop > 3000
  ) {
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toWorkExperience() {
  document.getElementById("workd_experience").scrollIntoView();
}
