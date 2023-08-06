import { Component, ElementRef, OnInit, ViewChild , Input} from '@angular/core';
import { textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
         circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4 } from "../animation.module";
import { of } from 'rxjs';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations : [textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
    circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4]
})

export class ChatbotComponent {

  increase : boolean = false;
  count : number = 0;
  canvasHeight : number = 0;
  @ViewChild('canvas', {static : true}) myCanvas !: ElementRef;
  context !: CanvasRenderingContext2D | null;
  canvas !: HTMLCanvasElement;
  @Input() start!: boolean;
  category!: string;

  // Valeurs d'états des réponses de l'utilisateur
  hasAnswered!: boolean;
  ready!: boolean;
  categoryState!: boolean;
  categoryShow!: boolean;
  themeState!: boolean;
  animation:boolean = true;

  ngOnInit(): void {
      this.canvas = this.myCanvas.nativeElement;
      this.context = this.canvas.getContext('2d');
      console.log("marche")

  }


  onAnime() {
    if (this.context) {
      this.#drawRectangle(this.context);
    }
  }

  /**
   * Méthode qui sera appelée au clique sur commencer
   */
  increaseHeight(height: number) {
    if (this.canvasHeight <= height) {
      this.canvasHeight = height;
    }
    console.log('icimaintenant');
  }

  #drawRectangle(context : CanvasRenderingContext2D) {
    // if (this.count < this.canvasHeight) {
      this.count++;
      context.beginPath();
      context.setLineDash([10, 10]);
      context.clearRect(0, 0, 20, this.canvasHeight);
      console.log('valeur : ', this.canvasHeight);
      
      context.strokeStyle = "blue";
      context.moveTo(10, this.count);
      context.lineTo(10, 0);
      context.stroke();
      
    // } else {
    //   this.count = this.count;
    // }
    requestAnimationFrame(() => this.#drawRectangle(context!));
  }

  ngOnChanges(){

    this.onAnime();
    this.increaseHeight(800);
    // if(this.start){
    //   setInterval(() => {
    //     this.onHeight()
    //   }, 1000/60)
    // }
  }


  isReady(){
    this.ready = true;

    let timeOut = setTimeout(() => {
      this.categoryState = true;
      this.animation = true;
      clearTimeout(timeOut);
    }, 1000)
  }

  getOption(event: any){

    // Récupération de la catégorie sélectionnée
    this.category = event.target.value;
    this.categoryShow = true;
    this.hasAnswered = true;

    let timeOut = setTimeout(() => {
      this.themeState = true;
      clearTimeout(timeOut);
    }, 1000)
  }

  modifyCategory(){
    this.categoryShow = false; 
    this.hasAnswered = false;
    this.animation = false;
  }

}
