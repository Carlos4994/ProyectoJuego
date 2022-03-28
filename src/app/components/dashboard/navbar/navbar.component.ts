import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  dato= localStorage.getItem('nombre');
  
  constructor(private afAuth: AngularFireAuth,
              private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut();
    localStorage.removeItem('nombre');
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
