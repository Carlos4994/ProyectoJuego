import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviciaService {


  constructor(private _firestore: AngularFirestore) { }

getProvincias(): Observable<any>{
  return this._firestore.collection('provincia').snapshotChanges();
}
  getProvinciaByIdUser(): Observable<any> {
    return this._firestore.collection('provincia').snapshotChanges()
  }
}
