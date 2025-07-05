import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: { name: string; email: string } | null = {
    name: 'Snehal',
    email: 'snehal@example.com'
  };

  team = [
    { name: 'SNEHA SOLANKI', role: 'Hair dresser', img: 'assets/team/sneha.png' },
    { name: 'SHITAL SOLANKI', role: 'SR. BEAUTY THERAPIST', img: 'assets/team/shital.png' },
    { name: 'JUHI PATEL', role: 'NAIL ARTIST', img: 'assets/team/juhi.png' },
    { name: 'PREETI MAURYA', role: 'JR. BEAUTICIAN', img: 'assets/team/preeti.png' },
    { name: 'SNEHAL PATEL', role: 'OWNER', img: 'assets/team/snehal-patel.png' }
  ];

  galleryImages = [
    'assets/images/salon.jpg',
    'assets/images/bridal.jpg',
    'assets/images/hair-style.jpg',
    'assets/images/nails.jpg',
    'assets/images/highlight.jpg',
    'assets/images/salon(5).jpg',
    'assets/images/eye-makeup.jpg'    
  ];

  scrollGallery(direction: 'left' | 'right') {
    const container = document.querySelector('.gallery-scroll') as HTMLElement;
    const scrollAmount = 400;
    container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  }
}
