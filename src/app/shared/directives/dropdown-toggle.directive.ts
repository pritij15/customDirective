import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective {

  constructor(private eleRef : ElementRef) { }

  @HostListener("click", ['$event'])
  onClick(eve : Event){
    console.log(eve.target);

    let btn = eve.target as HTMLButtonElement;
    btn.nextElementSibling?.classList.toggle('show');

  }

}
