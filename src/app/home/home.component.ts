import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;

  submitForm() {
    if (this.contact.name && this.contact.email && this.contact.message) {
      this.submitted = true;
      console.log('Submitted:', this.contact);
      this.contact = { name: '', email: '', message: '' };
    }
  }
  hairOffers = [
  {
    title: 'hairOffers',
    items: [
      { name: 'Global Hair Color', price: 2000 },
      { name: 'Global Hair Highlights', price: 2000 },
      { name: 'Balayage', price: 4000 },
      { name: 'Smoothening', price: 2200 },
      { name: 'Keratin', price: 2200 },
      { name: 'Bluetox / Botox', price: 4000 },
      { name: 'Nanoplastia', price: 6000 },
      { name: 'Filler Treatment', price: 2500 }
    ]
  },
  {
    title: 'Nail Art Offers',
    items: [
      { name: 'Gel Paint', price: 300 },
      { name: 'Semi Extensions', price: 500 },
      { name: 'Acrylic Nails', price: 1000 },
      { name: 'Gelex Nails', price: 900 },
      { name: 'Manicure', price: 300 },
      { name: 'Pedicure', price: 400 }
    ]
  },
  {
    title: 'Advance Beauty Offers',
    items: [
      { name: 'Hydra Machine Facial', price: 1500 },
      { name: 'Anti Acne Treatment', price: 1000 },
      { name: 'Pigmentation Treatment', price: 1000 },
      { name: 'Underarms Lightening', price: 800 },
      { name: 'Knee/Elbow Lightening', price: 1000 },
      { name: 'Dark circle Removal', price: 1000 },
      { name: 'Anti Aging Treatment', price: 1500 }
    ]
  }
];

  getImageName(index: number): string {
    const imageNames = ['hair-offer-card.png', 'nail-offer-card.png', 'beauty-offer-card.png'];
    return imageNames[index] || 'placeholder.png';
  }
}

