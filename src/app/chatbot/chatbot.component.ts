import { Component, ElementRef, OnInit, ViewChild , Input} from '@angular/core';
import { textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
         circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4 } from "../animation.module"; 

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
  theme!: string;
  siteName!: string;
  template!: string;

  // Valeurs d'états des réponses de l'utilisateur
  hasSelectCategory!: boolean;
  hasEnteredTheme!: boolean;
  hasEnteredSiteName!: boolean;
  hasSelectTemplate!: boolean;
  animation:boolean = true;
  invalidThemeInput!: boolean;
  invalidSiteNameInput!: boolean;

  ready!: boolean;

  categoryStep!: boolean;
  showCategory!: boolean;

  themeStep!: boolean;
  showTheme!: boolean;

  siteNameStep!: boolean;
  showSiteName!: boolean;

  templateStep!: boolean;

  ngOnInit(): void {
      this.canvas = this.myCanvas.nativeElement;
      this.context = this.canvas.getContext('2d');

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
    this.increaseHeight(2000);
    // if(this.start){
    //   setInterval(() => {
    //     this.onHeight()
    //   }, 1000/60)
    // }
  }


  isReady(){
    this.ready = true;
    this.categoryStep = true;
    this.animation = true;
  }

  getOption(event: any){

    // Récupération de la catégorie sélectionnée
    this.category = event.target.value;
    this.showCategory = true;
    this.hasSelectCategory = true;
    this.themeStep = true;
    
  }

  modifyCategory(){
    this.showCategory = false; 
    this.hasSelectCategory = false;
    this.animation = false;
  }

  getTheme(event: any = null){

    if(event && typeof event.target.value !== 'string'){
      this.invalidThemeInput = true;
    } else {
      this.theme = event.target.value;
      this.invalidThemeInput = false;
      this.hasEnteredTheme = true;
      this.showTheme = true;
      this.siteNameStep = true;
    }

  }

   modifyTheme(){
    this.showTheme = false; 
    this.hasEnteredTheme = false;
    this.animation = false;
  }

  getSiteName(event: any = null){

    if(event && typeof event.target.value !== 'string'){
      this.invalidSiteNameInput = true;
    } else {
      this.siteName = event.target.value;
      this.invalidSiteNameInput = false;
      this.hasEnteredSiteName = true;
      this.showSiteName = true;
      this.templateStep = true;
    }
  }

  modifySiteName(){
    this.showSiteName = false; 
    this.hasEnteredSiteName = false;
    this.animation = false;
  }

}
