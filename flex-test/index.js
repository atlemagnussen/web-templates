class Resizer {
    constructor() {
        this.toggled = false;
    }
    resize(id, size) {
        var el = document.getElementById(id);
        var styleWidth = `${size}px`;
        el.style.width = styleWidth;
        console.log(`set style.width=${styleWidth} on element with id '${id}'`);
    }
    toggle(id) {
        if (this.toggled) {
            this.resize(id, 500);
        } else {
            this.resize(id, 1000);
        }
        this.toggled = !this.toggled;
    }
}

document.addEventListener('DOMContentLoaded', (e) => {
    var resizer = new Resizer();
    var btn = document.getElementById("btnResize");
    btn.addEventListener('click', (e) => {
        resizer.toggle("outer");
    })
}, false);
