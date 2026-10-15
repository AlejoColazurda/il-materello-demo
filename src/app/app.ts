import { Component } from '@angular/core';
import { Feed } from './features/feed/feed';

@Component({
  selector: 'app-root',
  imports: [Feed],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
