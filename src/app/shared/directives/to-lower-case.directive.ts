import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appToLowerCase]'
})
export class ToLowerCaseDirective implements OnInit {

  constructor(private eleRef : ElementRef,
    private renderer : Renderer2) { }


ngOnInit():void{

}

// @HostListener('keyup')
//   onKeyUp(){
//     console.log(this.eleRef.nativeElement.value);
//     this.eleRef.nativeElement.value = this.eleRef.nativeElement.value.toLowerCase();

//   }

@HostListener("input", ['$event'])
onInput(eve : Event){
  let inputControl = eve.target as HTMLInputElement;
  console.log(inputControl.value);
  let val = inputControl.value.toLowerCase();
  inputControl.value = val;
  console.log(val);
}
}

