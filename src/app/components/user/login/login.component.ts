import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/model/User';
import { AuthService } from '../../../core/services/auth.service';

import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
    this.buildForm();
  }

  ngOnInit() {

  }

  onLogin(form: User) {
    event.preventDefault();
    if (this.form.valid) {
      this.authService.login(form)
      .then(res => {
          debugger;
          swal.fire('Enhorabuena', 'Ahora puedes ver los spoilers de la serie!', 'success');
          this.router.navigate(['/deaths']);
      })
      .catch(error => {
          debugger;
          if (error.code === 'auth/wrong-password') {
            swal.fire('Ha Ocurrido un error', 'La contraseña ingresada no es válida', 'error');
          } else {
            swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
          }
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email])
      ],
      password: ['', [Validators.required]],
    });
  }

}
