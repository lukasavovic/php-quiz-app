<?php require "views/partials/header.view.php" ?>
<h1>Here we will create a new quiz</h1>
<form action="/admin/store" class="control" method="POST" >
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <label for="name" class="label">Enter Quiz Name</label>
            <input class="input" type="text" required name="name" id="name">
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <label for="name" class="label">Enter Category</label>
            <input class="input" type="text" required name="category" id="category">
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success">
            Create
            </button>
        </p>
        </div>
    </form>
<?php require "views/partials/footer.view.php" ?>
