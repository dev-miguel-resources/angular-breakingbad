import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userData$: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth, private router: Router) { 
    this.userData$ = afAuth.authState;
  }

  // Servicio N°12
  login(user: User) {
    const { email, password } = user;
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // Servicio N°13
  logout() {
    this.afAuth.auth.signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch(() => {
        this.router.navigate(['/login']);
      });
  }

}
