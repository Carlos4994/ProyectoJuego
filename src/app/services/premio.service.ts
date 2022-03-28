import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PremioService {

  constructor(private firestore: AngularFirestore) { }

  agregarPremio(premio: any): Promise<any> {
    return this.firestore.collection('premios').add(premio);
  }

  agregarReclamarPrmeio(reclamarPremio: any): Promise<any> {
    return this.firestore.collection('reclamarPremios').add(reclamarPremio);
  }

  getPremios(): Observable<any> {
    return this.firestore.collection('premios', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();
  }

  eliminarpremio(id: string): Promise<any> {
    return this.firestore.collection('premios').doc(id).delete();
  }

  getpremio(id: string): Observable<any> {
    return this.firestore.collection('premios').doc(id).snapshotChanges();
  }

  actualizarpremio(id: string, data:any): Promise<any> {
    return this.firestore.collection('premios').doc(id).update(data);
  }

}
