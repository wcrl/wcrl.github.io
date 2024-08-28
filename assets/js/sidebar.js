/*

TO DO:
- Fix issue where the navbar bugs (is cut off) at a certain width
- Make the sidebar close after clicking when the width is smaller than 678 
- Fix margin left of the body/main content being 0 when at a certain size
*/

// Run the following code after the website is done loading
document.addEventListener('DOMContentLoaded', ()=> {
  const sidebar = document.getElementById('sidebar');
  const sidebarToggle = document.getElementById('sidebarToggle');

  // Toggle sidebar on and off
  sidebarToggle.addEventListener('click', function () {
    sidebar.classList.toggle('active');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!sidebar.contains(event.target) && event.target !== sidebarToggle) {
      sidebar.classList.remove('active');
    }
  });

});