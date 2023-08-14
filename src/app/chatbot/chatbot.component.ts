import { Component, ElementRef, OnInit, ViewChild , Input, Renderer2} from '@angular/core';
import { NgForm } from '@angular/forms';
import { textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
         circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4 } from "../animation.module"; 
import { Color } from "../category";
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  animations : [textFadeInAnimation1, textFadeInAnimation2, textFadeInAnimation3, textFadeInAnimation4,
    circleFadeInAnimation1, circleFadeInAnimation2, circleFadeInAnimation3, circleFadeInAnimation4]
})

export class ChatbotComponent{

  renderer!: Renderer2;
  increase : boolean = false;
  count : number = 0;
  canvasHeight : number = 0;
  @ViewChild('canvas', {static : true}) myCanvas !: ElementRef;
  @ViewChild('select') select !: ElementRef;
  @ViewChild('text1') input1 !: ElementRef;
  @ViewChild('text2') input2 !: ElementRef;
  context !: CanvasRenderingContext2D | null;
  canvas !: HTMLCanvasElement;

  // Prop reçu du composant parent App indiquant l'amorcage de la conversation
  @Input() start!: boolean;
  // Prop reçu du composant parent App indiquant le changement de mode
  @Input() displayMode!: boolean;

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
  selectAnimation:boolean = true;
  input1Animation:boolean = true;
  input2Animation:boolean = true;
  invalidThemeInput: boolean = false;
  invalidSiteNameInput: boolean = false;

  ready: boolean = false;

  categoryStep: boolean = false;
  showCategory: boolean = false;

  themeStep: boolean = false;
  showTheme: boolean = false;

  siteNameStep: boolean = false;
  showSiteName: boolean = false;

  templateStep: boolean = false;
  
  colorStep: boolean = false;
  displayForm: boolean = false;

  /** Variables de récupération des couleurs */
  primaryColorId !: string;
  primaryColors !: Color[] ;
  secondaryColors !: Color[] | undefined;
  tertiaryColors !: Color[] | undefined;

  // Récupération des éléments du DOM correspondant aux derniers cercles de chaque réponse du bot
  @ViewChild('botFirstAnswerLimit') botFirstAnswerLimit!: ElementRef;
  @ViewChild('botSecondAnswerLimit') botSecondAnswerLimit!: ElementRef;
  @ViewChild('botThirdAnswerLimit') botThirdAnswerLimit!: ElementRef;
  @ViewChild('botFourthAnswerLimit') botFourthAnswerLimit!: ElementRef;
  @ViewChild('botFifthAnswerLimit') botFifthAnswerLimit!: ElementRef;
  @ViewChild('botSixthAnswerLimit') botSixthAnswerLimit!: ElementRef;
  @ViewChild('botSeventhAnswerLimit') botSeventhAnswerLimit!: ElementRef;
  @ViewChild('botEigththAnswerLimit') botEigththAnswerLimit!: ElementRef;

  @ViewChild('wrapper') chatWrapper !: ElementRef;
  @ViewChild('messageContainer') messageWrapper !: ElementRef;

  @ViewChild('html') rootElement !: ElementRef;
  
  stylePrimaryColor!: string; 
  styleSecondaryColor!: string; 
  styleHeaderColor!: string;
  styleHeaderParagraphColor!: string;


  constructor(
    private chatService : ChatService
  ) {}

  ngOnInit(): void {
      this.canvas = this.myCanvas.nativeElement;
      this.context = this.canvas.getContext('2d');

  }


  /**
   * Fonction d'agrandissement de la hauteur du canvas
   */

  increaseCanvasHeight(a: HTMLElement): void{

    this.onAnime();
  
        let interval = setInterval(() => {
          if (this.canvasHeight <= ((a.offsetTop - 15 * 16 )+ 12)) {
            this.canvasHeight++; 
          }
        })

      this.scrollToBottom()
  }


  /**
   * Fonction d'ajustement de la fenêtre en fonction de la hauteur du conteneur principal wrapper
   * @param 
   * @return 
   */
  scrollToBottom(){
    let chatWrapper = this.messageWrapper.nativeElement;
    let wrapper = this.chatWrapper.nativeElement;
    wrapper.style.width='100%';
    wrapper.style.backgroundColor = "rgb(58, 58, 58)";
    window.scroll(0, chatWrapper.scrollHeight)

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

  // Fonction de dessin continuel de la ligne en tiret
  #drawRectangle(context : CanvasRenderingContext2D) {
    if (this.count < this.canvasHeight) {
      this.count+= 1.5;
      context.beginPath();
      context.setLineDash([10, 10]);
      context.clearRect(0, 0, 20, this.canvasHeight);
      
      context.strokeStyle = "#f6ca0c";
      context.lineWidth = 2;
      context.moveTo(10, this.count);
      context.lineTo(10, 0);
      context.stroke();
      
    } else {
       this.count = this.count;
    }

    requestAnimationFrame(() => this.#drawRectangle(context!));
  }

  /**
   * Fonction appliquant le style d'affichage des éléments en fonction du mode
   */

  changeDisplayMode(){

    let rootElement = this.rootElement.nativeElement;

    if(this.displayMode) {
      rootElement.style.setProperty("--color-primary", "#f6ca0c");
      rootElement.style.setProperty("--color-secondary", "#e59802");
      rootElement.style.setProperty("--header-color", "#ffffff");
      rootElement.style.setProperty("--header-p-color", "rgba(255, 255, 255, 0.634)");

      // --color-primary: #f6ca0c; 
      // --color-secondary: #e59802;
      // --header-color: white;
      // --header-p-color: rgba(255, 255, 255, 0.634);
    } else {
      rootElement.style.setProperty("--header-color", "#0000009f");
      rootElement.style.setProperty("--header-p-color", "rgba(0, 0, 0, 0.634)");

    }
  }

  ngOnChanges(){

    // this.changeDisplayMode();

    // Augmentation de la hauteur du chatbot jusqu'au dernier message de la première réponse
    setTimeout(()=>{ 
      let a = this.botFirstAnswerLimit.nativeElement;
      console.log(a);
      
      let chatWrapper = this.chatWrapper.nativeElement;
      let messageWrapper = this.messageWrapper.nativeElement;
      messageWrapper.style.paddingBottom = "5rem";

      this.increaseCanvasHeight(a);
    
    }, 10)
   
  }


  isReady(){
    this.ready = true;
    this.categoryStep = true;
    let selectInput: any;
   
    // Augmentation de la hauteur du chatbot jusqu'au dernier message de la deuxième réponse

    setTimeout(()=>{ 
      let a = this.botSecondAnswerLimit.nativeElement;
      console.log(a);
   
      this.increaseCanvasHeight(a);
    }, 10)



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

      // Augmentation de la hauteur du chatbot jusqu'au dernier message de la troisième réponse

      setTimeout(()=>{ 
        let a = this.botThirdAnswerLimit.nativeElement;
        console.log(a);
     
        this.increaseCanvasHeight(a);

      }, 10)

      
    // Focus de l'input après un délai
    setTimeout(()=>{ 
      input = this.input1.nativeElement; 
      input.focus()}, 1000)
    
  }

  modifyCategory(){
    this.showCategory = false; 
    this.hasSelectCategory = false;
    this.selectAnimation = false;
  }

  getTheme(event: any){

    // Vérification de l'entrée de l'utilisateur
    if(!(isNaN(Number(event.target.value))) || event.target.value === ''){
      this.invalidThemeInput = true;
    
    } else {
      this.theme = event.target.value;
      this.invalidThemeInput = false;
      this.hasEnteredTheme = true;
      this.showTheme = true;
      this.siteNameStep = true;
      let input: any;


      // Augmentation de la hauteur du chatbot jusqu'au dernier message de la quatrième réponse

      setTimeout(()=>{ 
        let a = this.botFourthAnswerLimit.nativeElement;
        console.log(a);
        this.increaseCanvasHeight(a);

      }, 10)



      // Focus de l'input après un délai
      setTimeout(()=>{ 
        input = this.input2.nativeElement; 
        input.focus()}, 2000)
      }

  }

   modifyTheme(){
    this.showTheme = false; 
    this.hasEnteredTheme = false;
    this.input1Animation = false;
    console.log(this.input1Animation)
  }

  getSiteName(event: any){

    // Vérification de l'entrée de l'utilisateur
    if(!(isNaN(Number(event.target.value))) || event.target.value === ''){
      this.invalidSiteNameInput = true;
    
    } else {
      this.siteName = event.target.value;
      this.invalidSiteNameInput = false;
      this.hasEnteredSiteName= true;
      this.showSiteName = true;
      this.templateStep = true;
      let input: any;

      let messageWrapper = this.messageWrapper.nativeElement;
      messageWrapper.style.paddingBottom = "15rem";

       // Augmentation de la hauteur du chatbot jusqu'au dernier message de la cinquième réponse

       setTimeout(()=>{ 
        let a = this.botFifthAnswerLimit.nativeElement;
        console.log(a);
        this.increaseCanvasHeight(a);
      }, 10)

      // Focus de l'input après un délai
      setTimeout(()=>{ 
        input = this.input2.nativeElement; 
        input.focus()}, 2000)
      }

  }

  modifySiteName(){
    this.showSiteName = false; 
    this.hasEnteredSiteName = false;
    this.input2Animation = false;
  }

  // Selection du template
  onSelectTemplate(event: any){
    
    this.template = event.target.value;
    this.isReadyForColorStep = true;

     // Augmentation de la hauteur du chatbot jusqu'au dernier message de la sixième réponse

     setTimeout(()=>{ 
      let a = this.botSixthAnswerLimit.nativeElement;
      console.log(a);
      this.increaseCanvasHeight(a);
    }, 10)

  }

  startColorStep(state: boolean){

    if(state) {
      this.colorStep = true;
      this.chooseOwnColors = 'Oui';
      // this.colorStep = true;

    // Augmentation de la hauteur du chatbot jusqu'au dernier message de la septième réponse

     setTimeout(()=>{ 
      let a = this.botSeventhAnswerLimit.nativeElement;
      console.log(a);
      this.increaseCanvasHeight(a);
    }, 10)

    } else {
      this.colorStep = false;
      this.chooseOwnColors = 'Non';
      this.primaryColor = 'defaultColor';
      this.secondaryColor = 'defaultColor';
      this.tertiaryColor = 'defaultColor';

      setTimeout(()=>{ 
        let a = this.botEigththAnswerLimit.nativeElement;
        console.log('last', a);
        this.onAnime();
        let messageWrapper = this.messageWrapper.nativeElement;
        messageWrapper.style.paddingBottom = "0rem";
  
        if(this.start){
          let interval = setInterval(() => {
            if (this.canvasHeight <= ((a.offsetTop - 15 * 16 )+ 12)) {
              this.canvasHeight++;
              console.log('marche')
              setTimeout(()=>{
                this.displayForm = true;
                this.scrollToBottom()
              }, 1000)
            } else {
  
              clearInterval(interval);
            }
          }, 50/6)
        }
  
        this.scrollToBottom()
      }, 10)
    }

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

    // Augmentation de la hauteur du chatbot jusqu'au dernier message de la dernière réponse

    setTimeout(()=>{ 
      let a = this.botEigththAnswerLimit.nativeElement;
      console.log('last', a);
      this.onAnime();
      let messageWrapper = this.messageWrapper.nativeElement;
      messageWrapper.style.paddingBottom = "5rem";

      if(this.start){
        let interval = setInterval(() => {
          if (this.canvasHeight <= ((a.offsetTop - 15 * 16 )+ 12)) {
            this.canvasHeight++;
            console.log('marche')
            setTimeout(()=>{
              this.displayForm = true;
              this.scrollToBottom()
            }, 1000)
          } else {

            clearInterval(interval);
          }
        }, 50/6)
      }

      this.scrollToBottom()
    }, 10)
    
  }

  lastname : string = '';
  firstname : string = '';
  mail : string = '';

  onSubmit() {
    console.log(this.lastname);
    
  }

}


