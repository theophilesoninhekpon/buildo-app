import { trigger, state, transition, animate, style } from "@angular/animations";



/** **********************************************************************
TEXTE ANIMATION
*********************************************************************** */

export const textFadeInAnimation1 = trigger ('textFadeInAnimation1', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 2.5s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation2 = trigger ('textFadeInAnimation2', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 4.5s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation3 = trigger ('textFadeInAnimation3', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 6.5s', style({opacity : 1})),
    ])
]);
export const textFadeInAnimation4 = trigger ('textFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 8.5s', style({opacity : 1})),
    ])
]);


/** **********************************************************************
CIRCULE ANIMATION
*********************************************************************** */

export const circleFadeInAnimation1 = trigger ('circleFadeInAnimation1', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 1900ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation2 = trigger ('circleFadeInAnimation2', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 3900ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation3 = trigger ('circleFadeInAnimation3', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 5900ms', style({opacity : 1})),
    ])
]); 
export const circleFadeInAnimation4 = trigger ('circleFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('500ms 7900ms', style({opacity : 1})),
    ])
]); 
