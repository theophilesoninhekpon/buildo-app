import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TxtFadeInAnimation1, circleFadeInAnimation1, circleFadeInAnimation2} from "../animation.module";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations : [TxtFadeInAnimation1, circleFadeInAnimation1, circleFadeInAnimation2]
})
export class ChatbotComponent {
  start : boolean = false;
  increase : boolean = false;
  count : number = 0;
  canvasHeight : number = 500;
  @ViewChild('canvas', {static : true}) myCanvas !: ElementRef;
  context !: CanvasRenderingContext2D | null;
  canvas !: HTMLCanvasElement;

  ngOnInit(): void {
      this.canvas = this.myCanvas.nativeElement;
      this.context = this.canvas.getContext('2d');

  }

  onAnime() {
    if (this.context) {
      this.#drawRectangle(this.context);
    }
    this.start = true;  
  }

  /**
   * Méthode qui sera appelée au clique sur commencer
   */
  onHeight() {
    while (this.canvasHeight <= 800) {
      this.canvasHeight+=1;
    }
    console.log('icimaintenant');
  }

  #drawRectangle(context : CanvasRenderingContext2D) {
    if (this.count < this.canvasHeight) {
      this.count++;
      context.beginPath();
      context.setLineDash([10, 10]);
      context.clearRect(0, 0, 20, this.canvasHeight);
      console.log('valeur : ', this.canvasHeight);
      
      context.strokeStyle = "blue";
      context.moveTo(10, this.count);
      context.lineTo(10, 0);
      context.stroke();
      
    } else {
      this.count = this.count;
    }
    requestAnimationFrame(() => this.#drawRectangle(context!));
  }

}
