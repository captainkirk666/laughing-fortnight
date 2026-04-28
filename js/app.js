document.addEventListener("DOMContentLoaded", () => {

  fetch("components/navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // ALL clickable tab buttons (including dropdown)
      document.querySelectorAll("[data-tab]").forEach(button => {
        button.addEventListener("click", () => {

          // remove active state from top tabs only
          document.querySelectorAll(".nav-tab").forEach(btn => btn.classList.remove("active"));

          // if it's a top-level tab, activate it
          if (button.classList.contains("nav-tab")) {
            button.classList.add("active");
          }

          // hide all content
          document.querySelectorAll(".tab-content").forEach(content => {
            content.classList.remove("active");
          });

          // show selected content
          const tabName = button.getAttribute("data-tab");
          document.getElementById(tabName)?.classList.add("active");

        });
      });

    });

});
