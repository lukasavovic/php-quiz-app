<?php

namespace App\Controllers;

use App\Core\App;

class QuizController
{
    public function index()
    {
        return view('admin.index', compact('products'));
    }

    public function create()
    {
        $categories = App::get('database')->getAll("categories");
        return view('admin.create', compact('categories'));
    }

    public function store()
    {   

        App::get('database')->addNew('quizes', $_POST);
        return redirect('/admin');
    }

    public function allQuizes()
    {
        $quizes = App::get("database")->getAll("quizes");
        return view('admin.allQuizes', compact('quizes'));
    }
    
    public function singleQuiz()
    {
        $quiz = App::get("database")->getOne("quizes", $_GET['id']);
        return view('admin.singleQuiz', compact('quiz'));
    }

    public function edit()
    {
        $categories = App::get('database')->getAll("categories");
        $product = App::get('database')->getOne('products', $_GET['id']);
        return view('admin.create', compact('product', 'categories'));
    }

    public function update()
    {
        $this->handleUpload();
        App::get('database')->update('products', $_POST);
        return redirect('/admin');
    }

    public function destroy()
    {
        App::get('database')->destroy('products', $_POST['id']);
        return redirect('/admin');
    }

    private function handleUpload()
    {
        if($_FILES['image']['error'] != 4) {
            $newName = "images/".time()."_".$_FILES['image']['name'];
            $_POST['image'] = $newName;
            move_uploaded_file($_FILES['image']['tmp_name'], getcwd()."/storage/".$newName);
        }
    }
}