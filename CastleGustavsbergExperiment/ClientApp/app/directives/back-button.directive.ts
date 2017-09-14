import { Directive, HostListener, ElementRef } from '@angular/core';

// Directive is a helper for global elements that need the information. 
// Will need to determine a clear distinction between directives and helper components like Table
@Directive({ selector: '[back-button]' })
export class BackButtonDirective {
    constructor() { }

    @HostListener('click') goBack() {
        history.back();
    }
}