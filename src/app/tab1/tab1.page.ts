import { Component } from '@angular/core';
import { ConfigService } from './../app.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Home} from './Home';
import { HTTP } from '@ionic-native/http/ngx';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  urlHome = this.config.app.urlBase.concat('/home');
  row : Home= null;
  classrooms: any;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private http: HttpClient,
    private config: ConfigService,
    private HTTP: HTTP
    //private fb: FormBuilder, 
  ){}
  
  ngOnInit() {
    this.getHome();
  }

  async getHome(){
    const loading = await this.loadingController.create({
      
    });
    await loading.present();

      this.http.get<Home>(this.urlHome, {
        observe: 'response' })
      .subscribe(resp => {
          this.row = resp.body['data'];
          console.log(this.row);
          loading.dismiss();

        },er => {
          console.log('erro');
          loading.dismiss();

      });
        
           
    }

    


}
