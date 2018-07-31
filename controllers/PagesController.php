<?php

namespace App\Controllers;

use App\Core\App;

class PagesController
{
    public function home()
    {
        return view('index');
    }

    public function categories()
    {
        return view('categories');
    }

    public function oneQuiz()
    {
        return view('singleQuiz');
    }
    public function aboutUs()
    {
        return view('about');
    }

    public function storeTask()
    {
        App::get('database')->addNew("tasks", $_POST);
        return redirect('/');
    }

    public function allQuizes()
    {
        // App::get('database')->addNew("tasks", $_POST);
        return view('allQuizes');
    }

    public function products()
    {
        $products = App::get('database')->getAll("products");

        return view('products', compact('products'));
    }
}