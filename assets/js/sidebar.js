/*

TO DO:
- Fix issue where the navbar bugs (is cut off) at a certain width
- Fix margin left of the body/main content being 0 when at a certain size
*/

// Run the following code after the website is done loading
document.addEventListener('DOMContentLoaded', () => {
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


  /// DROPDOWN
  // Dropdown functionality
  const dropdownToggles = document.querySelectorAll('.sidebar-dropdown-toggle');
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;
      const arrow = this.querySelector('.arrow');

      submenu.classList.toggle('active');
      arrow.classList.toggle('down');

      // Close other open submenus
      dropdownToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherSubmenu = otherToggle.nextElementSibling;
          const otherArrow = otherToggle.querySelector('.arrow');
          otherSubmenu.classList.remove('active');
          otherArrow.classList.remove('down');
        }
      });
    });
  });


  });