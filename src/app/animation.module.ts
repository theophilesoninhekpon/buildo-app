import { trigger, state, transition, animate, style } from "@angular/animations";



/** **********************************************************************
TEXTE ANIMATION
*********************************************************************** */

export const TxtFadeInAnimation1 = trigger ('TxtFadeInAnimation1', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 2.5s', style({opacity : 1})),
    ]),
]);

export const TxtFadeInAnimation2 = trigger ('TxtFadeInAnimation2', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 2.5s', style({opacity : 1})),
    ]),
]);

export const TxtFadeInAnimation3 = trigger ('TxtFadeInAnimation3', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 2.5s', style({opacity : 1})),
    ]),
]);

export const TxtFadeInAnimation4 = trigger ('TxtFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('1000ms 2.5s', style({opacity : 1})),
    ]),
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
        animate('3400ms', style({opacity : 1})),
    ])
]);
export const circleFadeInAnimation4 = trigger ('circleFadeInAnimation4', [
    transition(':enter', [
        style({ opacity : 0}),
        animate('3400ms', style({opacity : 1})),
    ])
]);
