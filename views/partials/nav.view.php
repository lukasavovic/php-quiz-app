<nav class="navbar has-background-warning">
      <div class="container">
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navMenu" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/">Home</a>
                <a class="navbar-item" href="/allQuizes">Play Quizes!</a>
                <a class="navbar-item" href="/categories">Quiz Categorie</a>
            </div>
            <div class="navbar-end">
                <?php if(isset($_SESSION['auth'])): ?>
                    <a class="navbar-item" href="/admin">Admin</a>
                    <a class="navbar-item" href="/admin/logout">Log out</a>
                <?php else: ?>
                    <a class="navbar-item" href="/admin/login">Log in</a>
                <?php endif;?>
            </div>
        </div>
      </div>
    </nav>

<script>
document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}

});
</script>