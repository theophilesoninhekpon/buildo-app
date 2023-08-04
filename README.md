# ProjetWakanda

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Chatbot

Composant principal implémentant le chatbot

## User-Notice

Composant de collecte de l'avis utilisateur

## Fichier App-Routing

Routes(Url) de l'application

## Fichier Animation.module

Ficher définissant les animations de l'application

## Animations

Animations
création d'un module animation
création des triggers équivalent à chaque animation

# 1- Animation du timeline
    Passage infini (translate Y, augmentation du height) dans une div caché
    Augmentation de taille à la réponse du chatbot

# 2- rotation de l'icône du chatbot
     rotate

# 3- fadeIn des messages (entrée douce)
     opacity 0->1

# 4- animation autour des input
    quand une option est choisie, ou un input soumis, ou une radio sélectionnée,
    faire disparaître le champ et afficher la sélection ou le message de l'utilisateur
    ensuite afficher une animation de typing

# 5- Animation du typing (réponse en cours du chatbot)
    trois div dans une div translateY avec délai entre les div: durée 1 à 1.5s
    faire disparaître les div et ensuite afficher le message suivant du chatbot

# 6- Loader à la génération du template : au centre sablier

# 7- Hover, active sur les liens et les boutons

# 8-  Animation de fadeIn et fadeOut des composants 
