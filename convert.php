<?php
require __DIR__ . '/vendor/autoload.php';

use TijsVerkoyen\CssToInlineStyles\CssToInlineStyles;
$data = array();
if (!empty($_POST['data'])) {
    $data = $_POST['data'];
}
$html = !empty($data['html']) ? $data['html'] : '';
$css  = !empty($data['css'])  ? $data['css']  : '';

if (empty($html)) {
    echo '<!-- Nothing to convert -->';
    exit();
}
// create instance
$cssToInlineStyles = new CssToInlineStyles($html, $css);
$cssToInlineStyles->setEncoding('utf-8');
$cssToInlineStyles->setUseInlineStylesBlock();
$cssToInlineStyles->setCleanup();
$cssToInlineStyles->setStripOriginalStyleTags();

// output
$html = $cssToInlineStyles->convert(true);
echo $html;