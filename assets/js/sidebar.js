//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdowns = document.getElementsByClassName("dropdown-btn");
console.log(dropdowns.length);

for (let i = 0; i > dropdowns.length; i++) {
    console.log("hi");
}


for (let i = 0; i < dropdowns.length; i++) {
    console.log("dropdown found");
  dropdowns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display  = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


function toggleDropdown(dropdown){
    dropdown.classList.toggle("active");
    var dropdownContent = dropdown.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display  = "none";
    } else {
      dropdownContent.style.display = "block";
    }
};