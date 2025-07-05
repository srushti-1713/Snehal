import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerData = { name: '', email: '', password: '' };

  constructor(private router: Router) {}

 onRegister() {
  if (!this.registerData.name || !this.registerData.email || !this.registerData.password) {
    alert('Please fill in all required fields correctly.');
    return;
  }
  console.log('Register data:', this.registerData);
  alert('Registered successfully!');
}


  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
