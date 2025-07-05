import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private router: Router) {}

  onLogin() {
  if (!this.loginData.email || !this.loginData.password) {
    alert('Please fill in all required fields correctly.');
    return;
  }
  console.log('Login data:', this.loginData);
  alert('Logged in successfully!');
}


  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
}
