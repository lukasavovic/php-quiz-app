<?php

$vendorDir = dirname(__DIR__);

return array (
  'chasegiunta/scss' => 
  array (
    'class' => 'chasegiunta\\scss\\Scss',
    'basePath' => $vendorDir . '/chasegiunta/scss/src',
    'handle' => 'scss',
    'aliases' => 
    array (
      '@chasegiunta/scss' => $vendorDir . '/chasegiunta/scss/src',
    ),
    'name' => 'SCSS',
    'version' => '1.0.0',
    'description' => 'Compiler for SCSS',
    'developer' => 'Chase Giunta',
    'developerUrl' => 'https://chasegiunta.com',
    'changelogUrl' => 'https://raw.githubusercontent.com/chasegiunta/scss/master/CHANGELOG.md',
    'hasCpSettings' => false,
    'hasCpSection' => false,
    'components' => 
    array (
      'scssService' => 'chasegiunta\\scss\\services\\ScssService',
    ),
  ),
);
