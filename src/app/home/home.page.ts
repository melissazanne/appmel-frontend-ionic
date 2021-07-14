import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private http: HttpClient,
    public navCtrl: NavController) {
    this.runHttp();
  }
  classes: any = [];
  
  runHttp() {
    this.http.get('http://127.0.0.1:5000/api/classes').subscribe(data =>{
      console.log(data);
      this.classes = data;
    });
  }

  goToSessionsPage(classeID:string, classeName:string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          id: classeID,
          name: classeName
      }
  };
    this.navCtrl.navigateForward('liste-sessions',navigationExtras);
  }
}
