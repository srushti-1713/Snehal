import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'; // Adjust path if needed

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent {
  constructor(private cartService: CartService) {}

  packages = [  
    {
      name: 'GOLD BEAUTY',
      price: 1500,
      features: [
        'FRUIT FACIAL ALL SKIN TYPE',
        'FULL HAND HONEY WAX',
        'HALF LEGS HONEY WAX',
        'UNDER ARMS HONEY WAX',
        'LOREAL BASIC SPA MID LENGTH',
        'EYEBROW THREADING'
      ]
    },
    {
      name: 'PLATINUM BEAUTY',
      price: 2500,
      features: [
        'DIAMOND FACIAL',
        'TREATMENT SPA RECONSTRUCTION TREAT MID LENGTH',
        'EYEBROW THREADING',
        'FULL HAND LIPO RICA WAX',
        'HALF LEGS LIPO RICA WAX',
        'UNDER ARMS STRIPLESS WAX'
      ]
    },
    {
      name: 'PREMIUM BEAUTY',
      price: 4000,
      features: [
        'GLOW & SHINE TAN REMOVAL FACIAL',
        'TREATMENT SPA RECONSTRUCTION TREAT MID LENGTH',
        'FULL HAND CARTRIDGE WAX',
        'HALF LEGS CARTRIDGE WAX',
        'UNDER ARMS STRIPLESS WAX',
        'ADVANCE PEDICURE',
        'EYEBROW THREADING'
      ]
    },
    {
      name: 'BRIDAL MAKEUP GOLD',
      price: 21000,
      features: [
        'BRIDAL MAKEUP HD WITH BUN HAIRSTYLE AND DRAPPING ( LENS &amp; LASHES FREE)',
        'SANGEET MAKEUP FOR BRIDE',
        'HALDI MAKEUP FOR BRIDE',
        'SIDER MAKEUP HD WITH CURLS HAIRSTYLE AND DRAPING'
      ]
    },
    {
      name: 'BRIDAL MAKEUP DIAMOND',
      price: 35000,
      features: [
        'BRIDAL MAKEUP ADVANCE HD WITH ADVANCE HAIRSTYLE AND DRAPPING (LENS, LASHES, JWELLARY FREE)',
        'SANGEET MAKEUP FOR BRIDE',
        'HALDI MAKEUP FOR BRIDE',
        'SIDER MAKEUP HD WITH ADVANCE HAIRSTYLE AND DRAPPING (FRESH FLOWER BROACH, LENS AND LASHES FREE)'
      ]
    }
  ];

  memberships = [
    {
      name: 'COMPLEMENTRY GOLD MEMBERSHIP',
      price: 1100,
      minSpend: 1000,
      serviceDiscount: 10,
      productDiscount: 5,
      packageDiscount: 0
    },
    {
      name: 'BEYOUTIE SPECIAL 40%',
      price: 4500,
      minSpend: 2200,
      serviceDiscount: 40,
      productDiscount: 10,
      packageDiscount: 0
    },
    {
      name: 'GOLD MEMBERSHIP',
      price: 1100,
      minSpend: 1000,
      serviceDiscount: 10,
      productDiscount: 5,
      packageDiscount: 0
    },
    {
      name: 'PLATINUM MEMBERSHIP',
      price: 2200,
      minSpend: 1500,
      serviceDiscount: 20,
      productDiscount: 7,
      packageDiscount: 0
    }
  ];
  addedToCart = new Set<string>();
  addToCart(item: any, type: 'package' | 'membership') {
    if (this.addedToCart.has(item.name)) return; // prevent duplicate

    const cartItem = {
      name: item.name,
      price: item.price
    };

    this.cartService.addToCart(cartItem); // use your actual service
    this.addedToCart.add(item.name); // mark as added
  }

}
