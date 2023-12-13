

export class HTMLImageWithPreviewElement extends HTMLImageElement {
    constructor() {
        super();

        this._orignalSrc = this.getAttribute("src");

        if (this.srcPreview) {
            this.src = ""; // Interupt current image loading
            this.src = this.srcPreview;
        }

        if (this.complete) {
            // Loading has completed before load listener is registered
            // That can happen with cache.
            this.onLoad();
        }

        this.addEventListener("load", this.onLoad);
    }

    get srcPreview() {
        return this.getAttribute("src-preview");
    }

    set srcPreview(src) {
        this.setAttribute("src-preview", src);
    }

    onLoad() {
        if (this.getAttribute("src") != this._orignalSrc) {
            this.src = this._orignalSrc;
        }
    }

}



customElements.define("with-preview", HTMLImageWithPreviewElement, { extends: 'img' });
