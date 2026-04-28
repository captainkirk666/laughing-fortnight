
document.addEventListener("DOMContentLoaded", () => {

  // TAB SWITCHING
  document.querySelectorAll(".tab").forEach(button => {
    button.addEventListener("click", () => {
      
      document.querySelectorAll(".tab").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

      button.classList.add("active");

      const tabName = button.getAttribute("data-tab");
      document.getElementById(tabName).classList.add("active");
    });
  });

});
