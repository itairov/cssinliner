<?php
require __DIR__ . '/vendor/autoload.php';

use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;

$html = <<<HTML
<!doctype html>
<html lang="en">
<style>
    p.red {
        color: red;
    }
</style>
<body>
<p class="red">
    Red paragraph
</p>
</body>
</html>
HTML;

$css = <<<CSS

CSS;

// create instance
$cssToInlineStyles = new CssToInlineStyles($html, $css);
$cssToInlineStyles->setUseInlineStylesBlock();
$cssToInlineStyles->setCleanup();
$cssToInlineStyles->setStripOriginalStyleTags();

// output
$html = $cssToInlineStyles->convert();