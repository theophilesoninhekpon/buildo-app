import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet_wakanda';
  isLaunched!: boolean;
  isDisabled: boolean = false;
  applyDarkMode: boolean = false;

  startChat(){
    this.isLaunched = true;
    this.isDisabled = true;
  }

  changeMode() {
    this.applyDarkMode = !this.applyDarkMode;
  }
}
