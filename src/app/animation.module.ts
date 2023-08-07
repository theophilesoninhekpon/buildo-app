import { trigger, state, transition, animate, style } from "@angular/animations";



/** **********************************************************************
TEXTE ANIMATION
*********************************************************************** */

export const textFadeInAnimation1 = trigger ('textFadeInAnimation1', [  //(+2.5s)
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms .5s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation2 = trigger ('textFadeInAnimation2', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms .10s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation3 = trigger ('textFadeInAnimation3', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms .15s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation4 = trigger ('textFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms .20s', style({opacity : 1})),
    ])
]);


/** **********************************************************************
CIRCULE ANIMATION
*********************************************************************** */

export const circleFadeInAnimation1 = trigger ('circleFadeInAnimation1', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 900ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation2 = trigger ('circleFadeInAnimation2', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 1800ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation3 = trigger ('circleFadeInAnimation3', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 2700ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation4 = trigger ('circleFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 3600ms', style({opacity : 1})),
    ])
]); 
