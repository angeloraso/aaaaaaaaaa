import { Component, inject } from '@angular/core';
import { CardComponent } from "./card/card.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgePipe } from './age.pipe';
import { UsersService } from './users.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { initializeApp } from "firebase/app";
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
    imports: [CardComponent, CommonModule, FormsModule, MatProgressSpinnerModule, ScrollingModule, AgePipe, RouterOutlet],
    providers: [AgePipe, UsersService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app-full';
  userService = inject(UsersService);
  ageFiler: number | null = 0;
  date = Date.now();
  users: Array<any> = [];

  loading: boolean = false;
  
  firebaseConfig = {
    apiKey: "AIzaSyDYx-1C_jl83vCCGBIA9n8yPISHMWvQnf4",
    authDomain: "angular-utn-frlp.firebaseapp.com",
    projectId: "angular-utn-frlp",
    storageBucket: "angular-utn-frlp.firebasestorage.app",
    messagingSenderId: "295111462330",
    appId: "1:295111462330:web:108892c7896f0ded4fa183",
    measurementId: "G-JSHQDBSKDE"
  };

  async ngOnInit() {
    this.loading = true;
    const app = initializeApp(this.firebaseConfig);
    setTimeout(async () => {
      const users = await this.userService.getUsers(20);
      this.users = users;
      this.loading = false;
    }, 1000);
  }

  async removeUser(user: any) {
    const id = user.id.value;
    await this.userService.deleteUser(id);
    const index = this.users.findIndex((_user: any) => _user.id.value === id);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.users = [...this.users];
    }
  }
}
