// Select the day button and stylesheet
const btn_day = document.getElementById("day-btn");
const theme = document.getElementById("theme-link");

function clickDay () {
  theme.href = "./styles/day.css"
}

// Select the button
const btn_night = document.getElementById("night-btn");

function clickNight () {
    theme.href = "./styles/night.css"
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function dropShowHide() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.unhide')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
