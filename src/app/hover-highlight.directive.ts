import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective implements OnInit {

  // @HostBinding('style.color') textColor: String;
  // @Input('appHoverHighlight') highLightColor: (Background: string, text: string);
  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

}
