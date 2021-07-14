import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-liste-sessions',
  templateUrl: './liste-sessions.page.html',
  styleUrls: ['./liste-sessions.page.scss'],
})
export class ListeSessionsPage implements OnInit {

  constructor(
    private http: HttpClient,
    public navCtrl: NavController,
    private route: ActivatedRoute) { 
      
    }
    sessions: any = [];
    id: any;
    name: any;
    
  ngOnInit() {
    this.runHttpForSessions();
  }

  runHttpForSessions() {
    this.route.queryParams.subscribe(params => {
      this.id = params["id"];
      this.name = params["name"];
    });

    this.http.get('http://127.0.0.1:5000/api/sessions/'+this.id).subscribe(data =>{
      console.log(data);
      this.sessions = data;
    });
  }

  goToHomePage(){
    this.navCtrl.navigateForward('home');
  }

}
