document.addEventListener('DOMContentLoaded', function() {
    var inputTest = document.getElementById("inputTest");
    var taOutput = document.getElementById("taOutput");
    inputTest.addEventListener('keypress', onKeyPress, false);
    inputTest.addEventListener('keydown', onKeyDown, false);

    function onKeyPress(e) {
        var log = "onKeyPress:e.charCode=" + e.charCode;
        appendLog(log);
    }
    function onKeyDown(e) {
        var log = "onKeyDown:e.keyCode=" + e.keyCode;
        appendLog(log);
    }

    function appendLog(log) {
        var currentVal = taOutput.value;
        taOutput.value = currentVal ? currentVal + "\n" + log : log;
    }
}, false);
