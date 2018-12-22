import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { HomePage } from '../home/home';
import { TeamPage } from '../team/team';
import { ApiService, Player } from '../../services/api.service';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// ------------------------------------ login/register -----------------------------
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage{
 

  PlayerInfo: Player[] = [];

  // user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, private service: ApiService) {
  }

 

  ionViewDidLoad() {
    //console.log('ionViewDidLoad RegisterPage');
   // this.service.GetPlayer(this.service.GetYourId()).subscribe(data => this.PlayerInfo = data);
   
   
   
  }


  

  Go2App() {
    this.service.GetYourAuthId(this.auth.user.sub)
    .subscribe(data => {
      this.PlayerInfo = data;
      this.service.ChangeId(this.PlayerInfo[0].playerId)
    });

   
      this.navCtrl.setRoot(HomePage);
    
    
    
    //this.navCtrl.setRoot(TeamPage);
    /*
    if (this.PlayerInfo.teamId == null) {
      this.navCtrl.setRoot(TeamPage);
    }

    if (this.PlayerInfo.teamId != null) {
      this.navCtrl.setRoot(TeamPage)
    }
    */
   
  }

  
  
Test(){
  //this.service.GetYourAuthId(this.auth.user.sub).subscribe(data => this.PlayerInfo = data);
  //console.log(this.PlayerInfo[0].playerId)
  //console.log(this.auth.user);
  //console.log(Number(this.auth.user.sub));
  this.navCtrl.setRoot(TeamPage);
}


}
