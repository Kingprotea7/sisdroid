import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, FormsModule]
})
export class UsuariosPage implements OnInit {
segmento: any;
showPassword: boolean = false;
 currentTab: string = 'crear';

  constructor() { }

  ngOnInit() {
  }

}
