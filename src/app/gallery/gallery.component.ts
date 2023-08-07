import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

}

// import { Component, ElementRef } from '@angular/core';
// import { Fancybox } from '@fancyapps/ui';

// @Component({
//   selector: 'app-gallery',
//   templateUrl: './gallery.component.html',
//   styleUrls: ['./gallery.component.css'],
// })
// export class GalleryComponent {
//   constructor(private elRef: ElementRef) {}

//   ngOnInit() {
//     Fancybox.bind(this.elRef.nativeElement, '[data-fancybox]', {
//       // Custom options
//     });
//   }

//   ngOnDestroy() {
//     Fancybox.unbind(this.elRef.nativeElement);
//     Fancybox.close();
//   }
// }





// <Fancybox
//   options={{
//     Carousel: {
//       infinite: false,
//     },
//   }}
// >
//   <a data-fancybox="gallery" href="https://lipsum.app/id/60/1600x1200">
//     <img src="https://lipsum.app/id/60/200x150" width="200" height="150" />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
//     <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
//     <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
//     <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
//   </a>
//   <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
//     <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
//   </a>
// </Fancybox>




// import { Fancybox } from '@fancyapps/ui/dist/fancybox/fancybox.esm.js';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// import './style.css';

// Fancybox.bind('[data-fancybox="gallery"]', {
//   dragToClose: false,

//   Toolbar: {
//     display: {
//       left: ['close'],
//       middle: [],
//       right: [],
//     },
//   },

//   Images: {
//     zoom: false,
//   },

//   Thumbs: {
//     type: 'classic',
//   },

//   Carousel: {
//     transition: false,
//     friction: 0,
//   },

//   on: {
//     'Carousel.ready Carousel.change': (fancybox) => {
//       fancybox.container.style.setProperty(
//         '--bg-image',
//         `url("${fancybox.getSlide().thumbSrc}")`
//       );
//     },
//   },
// });
