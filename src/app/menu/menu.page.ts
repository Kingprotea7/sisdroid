import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search,qrCode, createOutline, calendarNumberOutline, peopleOutline, settingsOutline, eyeOutline} from 'ionicons/icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MenuPage implements OnInit {

  constructor() {
   addIcons({ library, playCircle, radio, search,qrCode,createOutline,calendarNumberOutline,peopleOutline,settingsOutline,eyeOutline});

  }

  ngOnInit() {

  }



}
