let config = {
    mode: "pac_script",
    pacScript: {
        url: "http://127.0.0.1:8000/proxy.pac"
    }
};

chrome.proxy.settings.set(
    {value: config, scope: 'regular'},
    function () {
    }
);
