<?php require "views/partials/header.view.php" ?>
    <h1>This will be single quiz</h1>
    <?php foreach($quizes as $quiz): ?>
        <a href="/admin/singleQuiz/?id=<?= $quiz->id ?>"><?= $quiz->name ?></a>
    <?php endforeach; ?>
<?php require "views/partials/footer.view.php" ?>
