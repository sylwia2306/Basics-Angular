import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'basics-angular';
  name: string = 'Karolek';
  age: number = 2;
  isAdult: boolean = false;

  constructor() {
    console.log("KONSTRUKTOR");
    this.checkAdult();
  }

  checkAdult() {
    console.log("metoda");
    this.isAdult = this.age > 18;
  }

  // standardowa funkcja
  xxx(): boolean {
    return true;
  }
}
