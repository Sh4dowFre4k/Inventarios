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
  // item: Observable<any>;
  constructor(db: AngularFireDatabase) {
    this.items = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/data').valueChanges();
    console.log(this.items);
  }
  onClick() {
    console.log(this.index);
  }
}
