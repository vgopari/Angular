import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

@Directive({
    selector: '[appDropdown]' 
})
export class DropdownDirective {

    constructor(public elm: ElementRef, private doms: DomSanitizer, private renderer: Renderer2) {}

    @HostBinding('class.open') isOpen = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elm.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    @HostBinding('style') get myStyle(): SafeStyle {
        const style: string = this.isOpen ? `background: white; color: mediumslateblue` : 'background: mediumslateblue; color: white; borderRadius: 4px';
        return this.doms.bypassSecurityTrustStyle(style);
    }
}
