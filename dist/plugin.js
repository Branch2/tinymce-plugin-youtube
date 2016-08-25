tinymce.PluginManager.add('youtube', function (editor) {
    var YT_BUTTON = "\n    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWH\n    RTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAA\n    AAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+ID\n    x4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3\n    JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZj\n    pSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbn\n    MjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy\n    5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3\n    hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb2\n    0veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMDI3QzRENzE5Mj\n    A2ODExODIyQUI5Q0YwOTk5NDQ5MiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Qjk4Q0YyOD\n    QwRjgxMUUzOTZBN0UxODhCM0FERDUzOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Qjk4Q0\n    YyNzQwRjgxMUUzOTZBN0UxODhCM0FERDUzOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3\n    Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSU\n    Q9InhtcC5paWQ6RUEwQTUyNUY0RDIwNjgxMTgyMkE4REZCQzhDQTNGNDQiIHN0UmVmOmRvY3VtZW\n    50SUQ9InhtcC5kaWQ6MjAyN0M0RDcxOTIwNjgxMTgyMkFCOUNGMDk5OTQ0OTIiLz4gPC9yZGY6RG\n    VzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7LKH\n    vnAAADQ0lEQVR42qRWvU9UQRD/7eMdnCBCYgAjQQ1EMQET7IwFhWj8LJREYmKjpTU5SfxbpJBgrQ\n    WJlJZKgxECiCAqfsXDAjQcHPd2nP18e8epUfcy7O682dnffOwM4uOJbgSjj6kZ/zc2mKYPvlwgtR\n    Grvd0QwAAJui9IHAEI6ovgn1nxmgVAwp43X9NVutcTkZo/MPtO+8yrCfG+99hRVrboxVnA6LNXkD\n    0pmK8voRSrcDuRssjCMqzemCRyUhilShs5FGRl9F5arGQRWoWaTd4w0npEaijRvVgSHbe6jTLpoV\n    j0XjhwQ+Aqv7aXAKGVnbFU8Mj6mCxs62/jrgq3ODeRNcFZ486mt6ipGEtJUmPRiIX2PV0bRLbvJE\n    Q2i5qGvRB1dYiYwiGL25BbW5Cbm5CFAoovphE9fsQ6EgPKuFLGiXWjtKbSjZvoGM79fXJevoJVBi\n    Qejms9wnogUvgTMv5WjMYzZ//5AewbOMdASVNi5yiRjiGRsEtr21r1RZW0vjAPWSpV/eYo09oCyT\n    qUHuURNUf6JstM2DTl82qHv42OYm7wKj5NTnJayKoy6mzCgVc/BzxSN5WkYSSSfml+ial2ZQUbuW\n    FMDV3HxtLrqnIKrCbrlVgrDdLLoakcKlY6MToOoePWbTR2du2SU3uvzz4T9dDC1PV+3jWam1GXu4\n    v2oSFEmYx9X+Vy6mwSVAG1jJMyIYHt9XVkmpp26e8cGfGPqioAHkU+K135sBZEiQuwjoHEj6Wl6l\n    kC/DaDFH1fXoZPGqhZBznMW2BtbBwlfqF/UlZJ6szagzGvS4Eu8axjkBrMq+dTmD9/EaKnB1FDA2\n    rqs4j21LMz41AKtLMDbBWQbBa4VHDJmJ0F5fPeNcIFmW+L0uJuilvpKwvmn5q2Y8uwKnK+DlLaBc\n    pahFUcFN4aVexEWTcKu1YYTL2moLOFfKc5PKMVRlyuMcPn+iuKf1mFTte/eIhCpn0kBEuYE09aDh\n    zmm98aS103Lm8cwbtBGT7he1NwdWANqIurKd5xFpzmWCy4iirD1IQpXI7IVl5pfS1tYSMPmlQLW2\n    S5/gv5z2/ExP62AJ44xX9agn8lgpD4JhKEK/S/XXJ6XFr78szZ81OAAQDzir8hWAa52wAAAABJRU\n    5ErkJggg==\n  ".replace(/\s/g, '');
    var YT_IMAGE = "\n    data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwUAAAHhCAYAAAA/LxLEAAAAGXRFWH\n    RTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAIg9JREFUeNrs3UuUXPWdH/C/LMYQsJrGY4\n    8dC6MSJKiFzSAyQU4ynlFhaT1IM8sMeiwz2EGsxjALzDkxTFZgI6/Vwtnaam1jZEqLnBM0k7gxr5\n    YsUBFQPMeemJY04gCG6dx/dbXdaqu76/G/r6rP55w6rUf3rXt/dbvq/73/x90YAACAsbZRCQAAQC\n    gAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAA\n    CEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAg\n    AAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQC\n    gAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAA\n    CEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAg\n    AAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQC\n    gAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAACEAgAAQCgAAAChQAkAAEAoAAAAhAIAAEAoAA\n    AAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhA\n    IAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAE\n    AoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAA\n    AAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAEAoAAAAhAIAAKBY1ykBAPTn7T+camRfGqNwLF/86VzLKw\n    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\n    8hBXMKAAq2EMIz2ZcD2aOhGsCQDu1604pDDE9PAUDBuh/gh1QCGNJM9n5inhJCAUCNg0ErmF8ADG\n    42uLiAUAAwEsEgDiOaVgmgT53eRsOGEAoARicYHBIMgD4Dwf3Ze8esUiAUAAgGgEAAyWxQAoBqaN\n    1+59HgjsfAtbWzx76mQEBO9BQAVERzscfAxEFgpRgE7hUIyJOeAoCKad1+547sy/HgPgZACNPdCw\n    aQKz0FABXTvRp4b1i8yRkwnuL8gX0CAUXRUwBQYd1eg6djVlANGBvxhmSHmpYcRSgAYEU4iKHgce\n    EARlrsJXykuXhzQxAKALi2F2I4WAgPZ3/cqxowMtpZi+yJ+988O60UCAUA9B4Ott7Z6AaDA9ljh4\n    pALcVhQt+5/7yeAYQCANIEhGb2eKD7dVJVoNJB4ET8moUBcwYQCgDINSTs6D52hcWlTRsqA4WLjf\n    44T+BU9mjpEUAoAKAKYSGGhMluWIhft3TDwtLfgcEa/aH79WJYvPNwfMzqCUAoAKDOoSGEFb0LCy\n    HcsyI4LIULqLOlBvzyhtGpFd8z2238/+bvGvsIBQCwhh9v7Sydei3NNX5sZeBYSU/G+FrZIF/5fx\n    ev8e/Lr95f9f1f05gHoQCAsQ0kqYLG0nCrYZQRcNZqWPezjYupn/NrxtgDAABANWxUAgAAEAoAAA\n    ChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAA\n    AAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEA\n    oAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAA\n    ChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAA\n    AAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEA\n    oAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAA\n    ChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAAChAAAAEAoAAEAoUAIAABAKAAAAoQAAABAKAAAAoQ\n    AAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAAB\n    AKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAA\n    AAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQAAABAKAAAAoQ\n    AAABAKAAAAoQAAABAKAAAAoQAAABAKAACAwv1/AQYAVHe8zmCdvFAAAAAASUVORK5CYII=\n  ".replace(/\s/g, '');
    var placeholder_style = "\n    background: url('" + YT_IMAGE + "');\n    height: 100%;\n    width: 100%;\n    background-size: contain;\n    background-position: center;\n  ";
    var placeholder = "<div style=\"" + placeholder_style + "\"></div>";
    function youtubeId(url) {
        var match = url.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
        if (match && match[2] && match[2].length === 11)
            return match[2];
        else
            throw new Error('Provided url not a youtube video');
    }
    function createEmbedElement(id) {
        var url = "https://www.youtube.com/embed/" + id + "?rel=0&hd=1&showinfo=0";
        var el = document.createElement('iframe');
        el.setAttribute('class', 'embed-responsive-item');
        el.setAttribute('src', url);
        el.setAttribute('frameborder', '0');
        el.setAttribute('allowfullscreen', '');
        return el;
    }
    editor.addButton('youtube', {
        icon: true,
        image: YT_BUTTON,
        tooltip: 'YouTube',
        onclick: function () {
            var _a = tinymce.ui, TextBox = _a.TextBox, Container = _a.Container;
            var link_input = new TextBox({
                label: 'YouTube Link:',
                tooltip: 'YouTube Video URL',
                name: 'yt_url',
                placeholder: 'http://www.youtube.com/watch?v=XXXXXXXXXXX'
            });
            var preview = new Container({
                layout: 'fit',
                minHeight: 240,
                minWidth: 320,
                html: placeholder
            });
            var popup = editor.windowManager.open({
                width: 480,
                height: 320,
                title: 'Insert a YouTube Video',
                body: [link_input, preview]
            });
            link_input.on('input', function (event) {
                var value = event.target.value;
                try {
                    var id = youtubeId(value);
                    var el = createEmbedElement(id);
                    preview.innerHtml(el.outerHTML);
                }
                catch (error) {
                    preview.innerHtml(placeholder);
                }
            });
            popup.on('submit', function (event) {
                try {
                    var yt_url = event.data.yt_url;
                    var id = youtubeId(yt_url);
                    var el = createEmbedElement(id);
                    tinymce.activeEditor.insertContent(el.outerHTML);
                    tinymce.activeEditor.windowManager.close();
                }
                catch (error) {
                    console.log('Video not added');
                }
            });
        },
        onPostRender: function () {
            var _this = this;
            editor.on('NodeChange', function (event) {
                return _this.active(event.element.nodeName === 'IMG');
            });
        }
    });
});
