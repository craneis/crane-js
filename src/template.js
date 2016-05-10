/**
 * Template HTML
 * 
 * Base on Tony Lampada (https://github.com/krasimir/absurd/blob/master/lib/processors/html/helpers/TemplateEngine.js)
 *
 * @param {string} id - id do template
 * @param {Object} options - dados para substituir no template
 * @use Crane.tmpl('id-element', { name: 'Crane' })
 *
 * @return {HTMLElement|string} 
 */
Crane.tmpl = function(id, options) {
    var re = /<%(.+?)%>/g;
    var reExp = /(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g;
    var code = 'with(obj) { var r=[];\n';
    var cursor = 0;
    var result;
    var html = document.getElementById(id).innerHTML;

    var add = function(line, js) {
        js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
            (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
        return add;
    }

    while (match = re.exec(html)) {
        add(html.slice(cursor, match.index))(match[1], true);
        cursor = match.index + match[0].length;
    }

    add(html.substr(cursor, html.length - cursor));
    code = (code + 'return r.join(""); }').replace(/[\r\t\n]/g, ' ');

    try {
        result = new Function('obj', code).apply(options, [options]);
    } catch(err) {
        //console.error('%c ' + err.message + ' ', 'background: #f00; color: #fff');
        console.error("'" + err.message + "'", " in \n\nCode:\n", code, "\n");
    }

    return result;
};