import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { faUserFriends, faCode, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-consult-app',
  templateUrl: './consult-app.component.html',
  styleUrls: ['./consult-app.component.scss']
})
export class ConsultAppComponent implements OnInit {
  index: any;
  itemsD: Observable<any[]>;
  itemsI: Observable<any[]>;
  apps: any[];
  infra: any[];
  info: any[];
  faUserFriends = faUserFriends;
  faCode = faCode;
  faTimesCircle = faTimesCircle;

  constructor(db: AngularFireDatabase) {
    this.apps = new Array();
    this.infra = new Array();
    this.info = new Array();
    this.itemsD = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/data').valueChanges();
    this.itemsI = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/infra').valueChanges();
    this.itemsD.forEach(element => {
      this.apps = element;
    });
    this.itemsI.forEach(element => {
      this.infra = element;
    });
  }
  aver(){
    const str = this.infra[0].Servidor;
    const split = str.split(',');
    console.log(this.apps[0].Nombre + ' Tiene la infra ' + str);
  }
  ngOnInit() {}

}
