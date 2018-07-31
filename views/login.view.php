<?php require "views/partials/header.view.php" ?>
<div class="login-form">
    <h1>You must login first!</h1>
    <form action="/admin/validate" method="POST" >
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" required name="email" id="email">
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" required name="password" id="Password">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Login
            </button>
        </p>
        </div>
    </form>

    <h2>Dont have account?</h2>
    <a href="/admin/signup">Register here for free</a>
</div>
<?php require "views/partials/footer.view.php" ?>
