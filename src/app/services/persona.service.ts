import { Injectable } from '@angular/core';
import { Persona } from '../models/Persona';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private _firestore: AngularFirestore) { }


  crearPersona(persona: Persona): Promise<any> {
    return this._firestore.collection('personas').add(persona);
  }

  getPersona(id: string): Observable<any> {
    return this._firestore.collection('personas').doc(id).snapshotChanges();
  }

  getPersonas(): Observable<any> {
    return this._firestore.collection('personas', ref => ref.orderBy('nombre', 'asc')).snapshotChanges();
  }
  actualizarPersona(id: string, data:any): Promise<any> {
    return this._firestore.collection('personas').doc(id).update(data);
  }

  eliminarPersona(id: string): Promise<any> {
    return this._firestore.collection('personas').doc(id).delete();
  }

}
