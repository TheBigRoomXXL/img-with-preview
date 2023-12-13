

export class HTMLImageWithPreviewElement extends HTMLImageElement {
    constructor() {
        super();

        this._orignalSrc = this.getAttribute("src");

        if (this.srcFast) {

            this.src = ""; // Interupt current image loading
            this.src = this.srcFast;
        }

        if (this.complete) { //  Loading has completed instantly, can happen with cache
            this.onLoad();
        }

        this.addEventListener("load", this.onLoad);
    }

    get srcFast() {
        return this.getAttribute("src-fast");
    }

    set srcFast(src) {
        this.setAttribute("src-fast", src);
    }

    onLoad() {
        if (this.getAttribute("src") != this._orignalSrc) {
            this.src = this._orignalSrc;
        }
    }

}



customElements.define("with-preview", HTMLImageWithPreviewElement, { extends: 'img' });
