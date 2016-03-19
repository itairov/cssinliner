$(document).ready(function() {
    var htmlTextArea = $('.container__textarea--html').get(0);
    var cssTextArea = $('.container__textarea--css').get(0);
    var resultTextArea = $('.container__textarea--result').get(0);

    var myHtml = CodeMirror.fromTextArea(htmlTextArea, {
        lineNumbers: true,              // показывать номера строк
        matchBrackets: true,            // подсвечивать парные скобки
        indentUnit: 4,                  // размер табуляции
        theme: 'ambiance',
        styleActiveLine: true
    });

    var resultHtml = CodeMirror.fromTextArea(resultTextArea, {
        lineNumbers: true,              // показывать номера строк
        matchBrackets: true,            // подсвечивать парные скобки
        indentUnit: 4,                  // размер табуляции
        theme: 'ambiance',
        styleActiveLine: true
    });

    var myCss = CodeMirror.fromTextArea(cssTextArea, {
        mode: 'css',                    // стиль подсветки
        lineNumbers: true,              // показывать номера строк
        matchBrackets: true,            // подсвечивать парные скобки
        indentUnit: 4,                   // размер табуляции
        theme: 'ambiance',
        styleActiveLine: true
    });
});