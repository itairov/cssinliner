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

    var myResultHtml = CodeMirror.fromTextArea(resultTextArea, {
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

    var btn = $('.js-convert').click(function(e) {
        var btnConvert = $(this).prop('disabled', true);
        $('.header__convert--emblem').addClass('loader');
        e.preventDefault();
        var html = myHtml.getValue();
        var css = myCss.getValue();
        var convertData = {'html': html, 'css': css};
        $.post('convert.php', {
            data: convertData,
            dataType: 'html'
        }).done(function(data) {
            btnConvert.prop('disabled', false);
            $('.header__convert--emblem').removeClass('loader');
            myResultHtml.setValue(data);
        }).error(function() {
            btnConvert.prop('disabled', false);
            $('.header__convert--emblem').removeClass('loader');
        });
    });
});