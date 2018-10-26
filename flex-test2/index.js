class Resizer {
    constructor() {
        this.toggledWidth = false;
        this.toggledHeight = true;
        this.validTypes = ["width", "height"];
    }
    resize(id, type, size) {
        if (!id) {
            throw new Error("missing id");
        }
        if (!type || !this.validTypes.includes(type)) {
            throw new Error("missing type or wrong type");
        }
        if(!size) {
            throw new Error("missing size");
        }
        var el = document.getElementById(id);
        var style = `${size}px`;
        el.style[type] = style;
        console.log(`set style.${type}=${style} on element with id '${id}'`);
    }
    toggleWidth(id) {
        if (this.toggledWidth) {
            this.resize(id, "width", 500);
        } else {
            this.resize(id, "width", 1000);
        }
        this.toggledWidth = !this.toggledWidth;
    }
    toggleHeight(id) {
        if (this.toggledHeight) {
            this.resize(id, "height", 100);
        } else {
            this.resize(id, "height", 500);
        }
        this.toggledHeight = !this.toggledHeight;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    var resizer = new Resizer();
    var btnW = document.getElementById("btnResizeWidth");
    var btnH = document.getElementById("btnResizeHeight");
    btnW.addEventListener('click', () => {
        resizer.toggleWidth("outer");
    });
    btnH.addEventListener('click', () => {
        resizer.toggleHeight("outer");
    });
}, false);
