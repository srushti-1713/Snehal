import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.submitted = true;
      console.log('Form Submitted:', this.contact);
      this.contact = { name: '', email: '', message: '' };
    }
  }
}
