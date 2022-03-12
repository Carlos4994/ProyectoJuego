import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private _firestore: AngularFirestore) { }

getRol(): Observable<any>{
  return this._firestore.collection('rol').snapshotChanges();
}
}
