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
  items: Observable<any[]>;
  apps: any[];
  faUserFriends = faUserFriends;
  faCode = faCode;
  faTimesCircle = faTimesCircle;

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/data').valueChanges();
    this.apps = new Array();
    this.items.forEach(element => {
      this.apps = element;
    });
  }

  getInfoApp() {
    if (this.index == null) {
      console.log('Fallo');
    } else {
      console.log(this.apps[this.index].Empresa);
    }
  }
  ngOnInit() {}

}
