import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isHomePage = false;
  isNavbarVisible = true;
  private lastScrollTop = 0;

  cartCount = 0;

  constructor(private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.checkCurrentRoute();

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkCurrentRoute();
      }
    });

    this.cartService.cartItems$.subscribe(items => {
      this.cartCount = items.length;
    });
  
  }

  checkCurrentRoute(): void {
    this.isHomePage = this.router.url === '/';
    // Directly run scroll logic after route check
    this.handleScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.handleScroll();
  }

  handleScroll(): void {
    const currentScroll = window.scrollY;

    // Background change logic
    this.isScrolled = !this.isHomePage || currentScroll > 50;

    // Visibility on scroll direction
    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      // scrolling down
      this.isNavbarVisible = false;
    } else {
      // scrolling up
      this.isNavbarVisible = true;
    }

    this.lastScrollTop = Math.max(0, currentScroll);
  }
}
