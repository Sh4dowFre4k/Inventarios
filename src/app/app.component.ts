import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  index: any;
  items: Observable<any[]>;
  apps: any[];

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
}
