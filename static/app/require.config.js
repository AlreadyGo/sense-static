!function () {
    require.config({
        baseUrl: "static/app/",
        paths: {
            ace: "../vendor/ace/ace",
            ace_mode_json: "static/vendor/ace/mode-json",
            ace_ext_language_tools: "static/vendor/ace/ext-language_tools",
            ace_ext_searchbox: "static/vendor/ace/ext-searchbox",
        },
        map: {"*": {css: "../vendor/require/css/css.min"}},
        shim: {
            ace: {exports: "ace"},
            ace_mode_json: {deps: ["ace"]},
            ace_ext_language_tools: {deps: ["ace"]},
            jquery: {exports: "jQuery"},
            bootstrap: {deps: ["jquery"]},
            "jquery-ui": {deps: ["jquery", "css!../vendor/jquery/jquery-ui-1.9.2.custom.min.css"]}
        },
        waitSeconds: 60
    })
}();