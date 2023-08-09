import { Component, ElementRef, OnInit, ViewChild , Input} from '@angular/core';
import { NgForm } from '@angular/forms';
import { textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
         circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4 } from "../animation.module"; 
import { Color, SecondaryColorList, TertiaryColorList } from "../category";
import { primaryColors, secondaryColors, tertiaryColors } from "../chat-data";
import { ChatService } from '../chat.service';

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
  @ViewChild('select') select !: ElementRef;
  @ViewChild('text1') input1 !: ElementRef;
  @ViewChild('text2') input2 !: ElementRef;
  context !: CanvasRenderingContext2D | null;
  canvas !: HTMLCanvasElement;

  @Input() start!: boolean;

  // Variables des entrées de l'utilisateur
  category!: string;
  theme!: string;
  siteName!: string;
  template!: string;
  primaryColor!: string | undefined;
  secondaryColor!: string | undefined;
  tertiaryColor!: string;
  // ownPrimaryColor !: string;
  // ownSecondaryColor !: string;
  // ownTertiaryColor !: string;

  // Valeurs d'états des réponses de l'utilisateur
  hasSelectCategory: boolean = false;
  hasEnteredTheme: boolean = false;
  hasEnteredSiteName: boolean = false;
  hasSelectTemplate: boolean = false;
  isReadyForColorStep: boolean = false;
  chooseOwnColors: string = '';
  animation:boolean = true;
  invalidThemeInput: boolean = false;
  invalidSiteNameInput: boolean = false;

  ready!: boolean;

  categoryStep!: boolean;
  showCategory!: boolean;

  themeStep!: boolean;
  showTheme!: boolean;

  siteNameStep!: boolean;
  showSiteName!: boolean;

  templateStep!: boolean;
  
  colorStep!: boolean;

  /** Variables de récupération des couleurs */
  primaryColorId !: string;
  primaryColors !: Color[] ;
  secondaryColors !: Color[] | undefined;
  tertiaryColors !: Color[] | undefined;
  

  constructor(
    private chatService : ChatService
  ) {}

  ngOnInit(): void {
      this.canvas = this.myCanvas.nativeElement;
      this.context = this.canvas.getContext('2d');

      this.primaryColors = this.chatService.getPrimaryColors();
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
    let selectInput: any;

    // Focus de l'input après un délai
    setTimeout(()=>{ 
      selectInput = this.select.nativeElement; 
      selectInput.focus()}, 2500)
  }

  getOption(event: any){

    // Récupération de la catégorie sélectionnée
    this.category = event.target.value;
    this.showCategory = true;
    this.hasSelectCategory = true;
    this.themeStep = true;
    let input: any;

    // Focus de l'input après un délai
    setTimeout(()=>{ 
      input = this.input1.nativeElement; 
      input.focus()}, 1000)
    
    
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
      let input: any;

      // Focus de l'input après un délai
      setTimeout(()=>{ 
        input = this.input2.nativeElement; 
        input.focus()}, 2000)
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

  // Selection du template
  onSelectTemplate(event: any){
    
    this.template = event.target.value;
    this.isReadyForColorStep = true;

  }

  startColorStep(state: boolean){

    if(state) {
      this.colorStep = true;
      this.chooseOwnColors = 'Oui';
      // this.colorStep = true;
    } else {
      this.colorStep = false;
      this.chooseOwnColors = 'Non';
      this.primaryColor = 'defaultColor';
      this.secondaryColor = 'defaultColor';
      this.tertiaryColor = 'defaultColor';
    }

  }

  // A la modification du choix
  modifyOwnColorsChoice(){

  }
  /**
   * Méthode de récupération de la couleur primaire
   * @param event identifiant de la couleur primaire
   */
  getPrimaryColor(event : any) {
    this.primaryColorId = event.target.value;
    this.primaryColor = this.primaryColors.find((element) => this.primaryColorId === element.id)?.hexCode;

    this.secondaryColors = this.chatService.getSecondaryColors(this.primaryColorId);
  }

  /**
   * Méthode de récupération de la couleur secondaire
   * @param event identifiant de la couleur secondaire
   */
  getSecondaryColor(event : any) {
    let secondaryId = event.target.value;
   
    secondaryColors.forEach(element => {
      if (element.primaryId === this.primaryColorId) {
        this.secondaryColor = element.list.find( color => color.id == secondaryId)?.hexCode
      }
    })

    this.tertiaryColors = this.chatService.getTertiaryColors(this.primaryColorId, secondaryId);
  }

  /**
   * Méthode de récupération de la couleur tertiarire
   * @param event Code couleur de la couleur tertiare
   */
  getTertiaryColor(event : any) {
    this.tertiaryColor = event.target.value;
    console.log(this.tertiaryColor);
    
  }


  /**
   * Méthode de récupération de la couleur Primaire personnalisée
   * @param event Code couleur de la couleur Primaire
   */
  getOwnPrimaryColor(event : any) {
    this.primaryColor = event.target.value;
  }

  /**
   * Méthode de récupération de la couleur Secondaire personnalisée
   * @param event Code couleur de la couleur Secondaire
   */
  getOwnSecondaryColor(event : any) {
    this.secondaryColor = event.target.value;
  }

  /**
   * Méthode de récupération de la couleur Tertiaire personnalisée
   * @param event Code couleur de la couleur Tertiaire
   */
  getOwnTertiaryColor(event : any) {
    this.tertiaryColor = event.target.value;
  }

  lastname : string = '';
  firstname : string = '';
  mail : string = '';

  onSubmit() {
    console.log(this.lastname);
    
  }

}



// import { ElementRef, Renderer, ViewChild,AfterViewInit}

// implements AfterViewInit

// @ViewChild('chatContainer') chatContainer :  ElementRef

