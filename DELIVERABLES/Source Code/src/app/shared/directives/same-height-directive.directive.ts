import { Directive, Input, ElementRef, HostListener, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[appSameHeight]'
})
export class SameHeightDirective implements AfterViewChecked {
    @Input()
    appSameHeight: any;

    constructor(private el: ElementRef) {}

    ngAfterViewChecked() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.appSameHeight);
    }

    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.appSameHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        // match width logic here
        if (!parent) {
            return;
        }
        const children = document.getElementsByClassName(className);
        // find max width
        const maxHeight = parent.offsetHeight;

        if (!children) {
            return;
        }
        // reset all children width
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });
        // gather all width
        const itemwidths = Array.from(children).map(
            x => x.getBoundingClientRect().height
        );
        // apply max width
        Array.from(children).forEach(
            (x: HTMLElement) => (x.style.height = `${maxHeight}px`)
        );
    }
}
