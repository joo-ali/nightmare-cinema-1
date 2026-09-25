function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}

function money(value) {
  return "EGP " + value;
}

function updateNavbarAuth() {

  const user = JSON.parse(
    localStorage.getItem("nightmareUser") || "null"
  );

  const token = localStorage.getItem("nightmareToken");

  const signInButton = document.querySelector(
    'a[href="auth.html"].btn'
  );

  if (!signInButton) return;

  if (user && token) {

    signInButton.outerHTML = `
      <div class="dropdown">

        <button
          class="btn btn-gold btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          ${user.name}
        </button>

        <ul class="dropdown-menu dropdown-menu-end">

          <li>
            <a
              class="dropdown-item"
              href="my-bookings.html"
            >
              My Bookings
            </a>
          </li>

          ${
            user.role === "admin"
              ? `
                <li>
                  <a
                    class="dropdown-item"
                    href="admin.html"
                  >
                    Admin Dashboard
                  </a>
                </li>
              `
              : ""
          }

          <li>
            <a
              class="dropdown-item"
              href="#"
              id="logoutButton"
            >
              Logout
            </a>
          </li>

        </ul>

      </div>
    `;

    const logoutButton =
      document.getElementById("logoutButton");

    logoutButton.addEventListener("click", function (event) {

      event.preventDefault();

      localStorage.removeItem("nightmareToken");
      localStorage.removeItem("nightmareUser");

      window.location.href = "index.html";

    });

  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateNavbarAuth();
});
