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
  // Indice del Selector
  index: any;
  // Arreglo de informacion de Firebase
  itemsD: Observable<any[]>;
  itemsInfr: Observable<any[]>;
  itemsInfo: Observable<any[]>;
  // Arreglos Manipulables
  apps: any[];
  infra: any[];
  info: any[];
  // Iconos - Quitar?
  faUserFriends = faUserFriends;
  faCode = faCode;
  faTimesCircle = faTimesCircle;
  // Arreglos de relacion para Infraestructura
  servidores: any;
  ambientes: any;
  so: any;
  criticidad: any;
  // Arreglos de relacion para Informacion
  categoria: any;
  tipoBD: any;
  familia: any;
  servInfra: any;


  constructor(db: AngularFireDatabase) {
    this.apps = new Array();
    this.infra = new Array();
    this.info = new Array();
    this.itemsD = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/data').valueChanges();
    this.itemsInfr = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/infra').valueChanges();
    this.itemsInfo = db.list('/12bqK7Fk1EOZks6X56Xlh8pqPtpRwI84nDiM6Ye6kG5E/info').valueChanges();

    this.itemsD.forEach(element => {
      this.apps = element;
    });
    this.itemsInfr.forEach(element => {
      this.infra = element;
    });
    this.itemsInfo.forEach(element => {
      this.info = element;
    });
  }

  getII() {
    if (this.index == null) {}
    this.servidores = this.infra[this.index].Servidor.split(',');
    this.ambientes = this.infra[this.index].Ambiente.split(',');
    this.so = this.infra[this.index].FamiliaSO.split(',');
    this.criticidad = this.infra[this.index].Criticidad.split(',');

    this.categoria = this.info[this.index].Categoria.split(',');
    this.tipoBD = this.info[this.index].TipoBD.split(',');
    this.familia = this.info[this.index].Familia.split(',');
    this.servInfra = this.info[this.index].ServInfra.split(',');

  }

  ngOnInit() {}
}
