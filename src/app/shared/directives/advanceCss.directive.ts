import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector : '[advanceCss]'
})


export class AdvanceCssDirective implements OnInit {

 constructor(private eleRef : ElementRef,
    private renderer : Renderer2)
    {

    }
    ngOnInit(): void {
        this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','gray');
        this.renderer.setStyle (this.eleRef.nativeElement, 'padding' , '10px');
        this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
    }

    @HostListener('mouseover')
    onMouseHover(){
        this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','green');
    }
    @HostListener('mouseout')
    onMouseOut(){
        this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','gray');

    }
}