import { Directive, ElementRef, HostListener, Input} from '@angular/core';

 @Directive ({
     selector: '[appMouseHover]'   /*Selective name will used as directives*/
 })

 export class appMouseHoverDirective {
     /* To get input data from app.component.html the reminder of index/2 
     checking index is even or not */
     @Input() appMouseHover: number;

    /*angular provides ElementRef class that can directly access DOM*/
    constructor(private elRef: ElementRef) {
    }
    /*Use @HostListener() decorator to listen events in custom attribute directive.  */
    @HostListener('mouseover') onMouseOver() {
        /* Checking if Index is even or Odd */
        if (this.appMouseHover === 0) {
        this.changecolor('green');
        }else {
            this.changecolor('red');
        }
    }
    /* On Mouseleave event making rtext color defaultblack */
    @HostListener('mouseleave') onMouseLeave() {
        this.changecolor('black');
    }
    /* Part of logic where actual changing of colors happen due to presence of ElementRef */
    private changecolor(color: string) {
       this.elRef.nativeElement.style.color = color;
    }
 }
