import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector : '[basicCss]'
})
export class BasicCssDirective implements OnInit{

    constructor(private eleRef : ElementRef){

    }

    ngOnInit(): void {
        console.log(typeof this.eleRef.nativeElement);
        this.eleRef.nativeElement.style.backgroundColor = 'blueviolet';
        this.eleRef.nativeElement.style.padding = '10px';
        this.eleRef.nativeElement.style.color = 'white';
    }
}