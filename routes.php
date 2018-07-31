<?php

$router->get('', 'PagesController@home');
$router->get('contact', 'PagesController@contact');
$router->get('allQuizes', 'PagesController@allQuizes');
$router->get('categories', 'PagesController@categories');
$router->get('allQuizes/singleQuiz', 'PagesController@oneQuiz');

$router->get('admin/login', "Authenticate@login");
$router->get('admin/signup', "Authenticate@signup");
$router->post('admin/createuser', "Authenticate@createuser");
$router->post('admin/validate', "Authenticate@validate");
$router->get('admin/logout', "Authenticate@logout", true);


$router->get('admin', "QuizController@index", true);
$router->get('admin/create', "QuizController@create", true);
$router->post('admin/store', "QuizController@store", true);
$router->get('admin/allQuizes', "QuizController@allQuizes", true);
$router->get('admin/singleQuiz', "QuizController@singleQuiz", true);
$router->get('admin/edit', "QuizController@edit", true);
$router->post('admin/update', "QuizController@update", true);
$router->post('admin/destroy', "QuizController@destroy", true);



