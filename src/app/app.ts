/* import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zodiaco } from './Formularios/zodiaco/zodiaco';


@Component({
  imports: [RouterOutlet, Zodiaco],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('segundoparcialAngular');
}
 */

import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';/* 
 import { Zodiaco } from './Formularios/zodiaco/zodiaco';
import { Usuario } from './Formularios/usuario/usuario'; */ 
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar  /* Zodiaco , Usuario */],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('segundoparcialAngular');

  ngOnInit(): void {
    initFlowbite();
  }
}