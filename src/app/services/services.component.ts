import { Component } from '@angular/core';
import { CartItem, CartService } from './cart.service';

interface ServiceItem {
  name: string;
  price: number;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

    addToCart(item: CartItem): void {
      this.cartService.addToCart(item);
    }

    isInCart(item: CartItem): boolean {
      return this.cartItems.some(ci => ci.name === item.name);
    }

  services: ServiceCategory[] = [
    {
      title: 'VALUE FOR MONEY COMBO',
      items: [
        { name: 'BASIC HAIR SPA MID LENGTH + BLOW DRY', price: 600 },
        { name: 'FACIAL + BLEACH', price: 550 },
        { name: 'FACIAL + D-TAN', price: 650 },
        { name: 'FACIAL + HONEY WAXING(FH HL UA) + HAIR SPA', price: 1450 },
        { name: 'HAIR SPA + PEDICURE + FACIAL', price: 1550 },
        { name: 'HONEY WAX (FH FL UA)', price: 450 },
        { name: 'HONEY WAX (FH HL UA)', price: 280 },
        { name: 'MANICURE + PEDICURE', price: 700 },
        { name: 'RICA WAX (FH FL UA)', price: 750 },
        { name: 'RICA WAX (FH HL UA)', price: 500 }
      ]
    },
    {
      title: 'ADD ON',
      items: [
        { name: 'HYDRA TREATMENT WITH ANY FACIALS', price: 2500 },
        { name: 'KOREAN GLASS SKIN ADD ON MASK', price: 1200 },
        { name: 'LED MASK', price: 1000 },
        { name: 'RUBBER MASK CASMARA', price: 1500 },
        { name: 'RUBBER MASK CV', price: 1000 },
        { name: 'RUBBER MASK RAAGA', price: 1100 },
        { name: 'SHEET MASK', price: 800 }
      ]
    },
    {
      title: 'BLEACH',
      items: [
        { name: 'BACK NECK BLEACH', price: 100 },
        { name: 'FACE & NECK BLEACH', price: 200 },
        { name: 'FACE BLEACH', price: 150 },
        { name: 'FRONT BLEACH', price: 400 },
        { name: 'FULL BACK BLEACH', price: 550 },
        { name: 'HALF BACK BLEACH', price: 400 },
      ]
    },
    {
      title: 'BODY POLISHING',
      items: [
        { name: 'BUTTOCKS POLISHING', price: 400 },
        { name: 'FULL BACK POLISHING', price: 700 },
        { name: 'FULL BODY POLISHING', price: 2000 },
        { name: 'FULL FRONT POLISHING', price: 700 },
        { name: 'FULL HAND POLISHING', price: 400 },
        { name: 'FULL LEG POLISHING', price: 650 },
        { name: 'HALF BACK POLISHING', price: 500 },
        { name: 'HALF FRONT POLISHING', price: 500 },
        { name: 'HALF HAND POLISHING', price: 200 },
        { name: 'HALF LEG POLISHING', price: 400 },
      ]
    },
    {
      title: 'BRIDAL PACKAGE',
      items: [
        { name: 'BRIDAL AIR BRUSH MAKEUP', price: 31000 },
        { name: 'BRIDAL BEAUTY PACKAGE (1 TIME)', price: 11000 },
        { name: 'BRIDAL MAKEUP ADVANCE HD WITH ADVANCE HAIRSTYLE AND DRAPPING (LENS, LASHES, JWELLARY FREE)', price: 21000 },
        { name: 'BRIDAL MAKEUP HD WITH BUN HAIRSTYLE AND DRAPPING ( LENS & LASHES FREE)', price: 15000 },
        { name: 'BRIDAL PREMIUM BEAUTY PACKAGE (2 TIMES)', price: 21000 },
        { name: 'BRIDAL WAXING AND; MANI PEDI PACKAGE', price: 5000 },
      ]
    },
    {
      title: 'CLEAN UP',
      items: [
        { name: 'CASMARA CLEANUP', price: 1500 },
        { name: 'CHERYLES CLEANUP', price: 550 },
        { name: 'CV PRO CLEANUP', price: 750 },
        { name: 'HYDRA CLEANUP', price: 1000 },
        { name: 'MINI HYDRA FACIAL CLEANUP', price: 1500 },
        { name: 'RICH FEEL CLEANUP', price: 450 },
        { name: 'VIT-C CLEANUP', price: 350 }
      ]
    },
    {
      title: 'DE-TAN',
      items: [
        { name: 'BACK NECK CHARCOAL DTAN', price: 200 },
        { name: 'BACK NECK DTAN RAAGA', price: 100 },
        { name: 'BIKINI CHARCOAL DTAN', price: 750 },
        { name: 'BIKINI DTAN RAAGA', price: 600 },
        { name: 'BIKINI LINE CHARCOAL DTAN', price: 350 },
        { name: 'BIKINI LINE DTAN RAAGA', price: 250 },
        { name: 'BUTTOCKS CHARCOAL DTAN', price: 900 },
        { name: 'BUTTOCKS DTAN RAAGA', price: 700 },
        { name: 'FACE & NECK CHARCOL DTAN', price: 500 },
        { name: 'FACE & NECK DTAN RAAGA', price: 350 },
        { name: 'FACE & NECK D TAN RAAGA', price: 350 },
        { name: 'FACE CHARCOL DTAN', price: 400 },
        { name: 'FACE DTAN RAAGA', price: 250 },
        { name: 'FRONT CHARCOAL DTAN', price: 650 },
        { name: 'FRONT DTAN RAAGA', price: 450 },
        { name: 'FULL BACK CHARCOAL DTAN', price: 650 },
        { name: 'FULL BACK DTAN RAAGA', price: 450 },
        { name: 'FULL HAND CHARCOAL DTAN', price: 600 },
        { name: 'FULL HAND DTAN RAAGA', price: 450 },
        { name: 'FULL LEG CHARCOAL DTAN', price: 900 },
        { name: 'FULL LEG DTAN RAAGA', price: 650 },
        { name: 'HALF BACK CHARCOAL DTAN', price: 400 },
        { name: 'HALF BACK DTAN RAAGA', price: 270 },
        { name: 'HALF HAND CHARCOAL DTAN', price: 400 },
        { name: 'HALF HAND DTAN RAAGA20', price: 300 },
        { name: 'HALF LEG CHARCOAL DTAN', price: 650 },
        { name: 'HALF LEG DTAN RAAGA', price: 350 },
        { name: 'TUMMY CHARCOAL DTAN', price: 400 },
        { name: 'TUMMY DTAN RAAGA', price: 270 },
        { name: 'UNDER ARMS CHARCOAL DTAN', price: 350 },
        { name: 'UNDER ARMS DTAN RAAGA', price: 250 },
      ]
    },
    {
      title: 'DRAPPING',
      items: [
        { name: 'ADVANCE DRAPPING', price: 950 },
        { name: 'REGULAR DRAPPING', price: 450 }
      ]
    },
    {
      title: 'EYELASH',
      items: [
        { name: 'EYELASH EXTENTION 3D Volume', price: 4500 },
        { name: 'EYELASH EXTENTION 5D Volume', price: 5500 },
        { name: 'EYELASH EXTENTION Classic Mega', price: 4000 },
        { name: 'EYELASH EXTENTION Classic Natural', price: 3500 },
        { name: 'EYELASH EXTENTION Doll Volume', price: 3000 },
        { name: 'EYELASH EXTENTION REMOVAL', price: 1200 },
        { name: 'EYELASH REFILLING 3D Volume', price: 3001 },
        { name: 'EYELASH REFILLING 5D Volume', price: 4001 },
        { name: 'EYELASH REFILLING Classic Mega', price: 1701 },
        { name: 'EYELASH REFILLING Classic Natural', price: 1001 },
        { name: 'EYELASH REFILLING Doll Volume', price: 1501 },
      ]
    },
    {
      title: 'FACIAL',
      items: [
        { name: 'ANTI ACNE TREATMENT FACIAL', price: 2200 },
        { name: 'BE YOU BRIDAL SPECIAL TREAT FACIAL', price: 5500 },
        { name: 'BE YOU SIGNATURE TREAT FACIAL', price: 4000 },
        { name: 'CASMARA ADVANCE TREAT FACIAL', price: 5500 },
        { name: 'CASMARA REGULAR FACIAL', price: 4000 },
        { name: 'CHERYLES ACTIBLEND ADVANCE FACIAL', price: 1700 },
        { name: 'CHERYLES ACTIBLEND REGULAR FACIAL', price: 1000 },
        { name: 'CHERYLES GLASS SKIN FACIAL', price: 3500 },
        { name: 'CV PRO REGUALR FACIAL', price: 1500 },
        { name: 'DIAMOND FACIAL', price: 1200 },
        { name: 'FRUIT FACIAL ALL SKIN TYPE', price: 550 },
        { name: 'GLOW & SHINE TAN REMOVAL FACIAL', price: 2750 },
        { name: 'GLOW & SHINE VIT C FACIAL', price: 2750 },
        { name: 'GLOW & SHINE YOUNG FOREVER ANTI AGING FACIAL', price: 2750 },
        { name: 'GLUTATHIONE ADVANCE SKIN WHITENING FACIAL', price: 1850 },
        { name: 'HYDRA TREAT DR. FACIAL WITHOUT MACHINERY', price: 850 },
        { name: 'ICE CREAM FACIAL ACORDING TO SKIN', price: 2500 },
        { name: 'KOREAN GLASS SKIN FACIAL', price: 5500 },
        { name: 'PAPAYA / BERRIES FACIAL', price: 1100 },
        { name: 'RICHFEEL REGULAR FACIAL', price: 1000 },
        { name: 'VIT C MINI FACIAL ALL SKIN TYPE', price: 650 }
      ]
    },
    {
      title: 'HAIR CHEMICAL SERVICE',
      items: [
        { name: 'Perming long hair', price: 12000 },
        { name: 'Perming normal length', price: 7000 }
      ]
    },
    {
      title: 'HAIR CHEMICAL TREATMENT',
      items: [
        { name: 'SMOOTHNING LOREAL / WELLA ANKLE LENGTH', price: 15000 },
        { name: 'SMOOTHNING LOREAL / WELLA KNEE LENGTH', price: 11000 },
        { name: 'SMOOTHNING LOREAL / WELLA SHOULDER LENGTH', price: 4500 },
        { name: 'SMOOTHNING LOREAL / WELLA WAIST LENGTH', price: 7500 },
        { name: 'SMOOTHNING LOREAL/ WELLA HIP LENGTH', price: 9000 },
        { name: 'SMOOTHNING LOREAL/ WELLA MID LENGTH', price: 6000 }
      ]
    },
    {
      title: 'HAIR COLOR',
      items: [
        { name: 'BALAYAGE ANKLE LENGTH', price: 13500 },
        { name: 'BALAYAGE KNEE LENGTH', price: 11000 },
        { name: 'BALAYAGE MID LENGTH', price: 7000 },
        { name: 'BALAYAGE SHOULDER LENGTH', price: 5000 },
        { name: 'BALAYGE WAIST LENGTH', price: 9000 },
        { name: 'GLOBAL COLOR ANKEL LENGTH STREAX ENHANCE', price: 9500 },
        { name: 'GLOBAL COLOR ANKLE LENGTH GK / KUNE', price: 11500 },
        { name: 'GLOBAL COLOR ANKLE LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 10500 },
        { name: 'GLOBAL COLOR ANKLE LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 9500 },
        { name: 'GLOBAL COLOR ANKLE LENGTH STREAX ARGAN SECRETS / MATRIX', price: 8500 },
        { name: 'GLOBAL COLOR KNEE LENGTH GK / KUNE', price: 10000 },
        { name: 'GLOBAL COLOR KNEE LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 9000 },
        { name: 'GLOBAL COLOR KNEE LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 8000 },
        { name: 'GLOBAL COLOR KNEE LENGTH STREAX ARGAN SECRETS / MATRIX', price: 7000 },
        { name: 'GLOBAL COLOR KNEE LENGTH STREAX ENHANCE', price: 8000 },
        { name: 'GLOBAL COLOR MID LENGTH GK / KUNE', price: 7000 },
        { name: 'GLOBAL COLOR MID LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 6500 },
        { name: 'GLOBAL COLOR MID LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 5500 },
        { name: 'GLOBAL COLOR MID LENGTH STREAX ARGAN SECRETS / MATRIX', price: 4500 },
        { name: 'GLOBAL COLOR MID LENGTH STREAX ENHANCE', price: 5500 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH GK / KUNE', price: 6000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 5000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 4000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 3000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 4000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH STREAX ARGAN SECRETS / MATRIX', price: 2000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH STREAX ARGAN SERCRETS / MATRIX', price: 3000 },
        { name: 'GLOBAL COLOR SHOULDER LENGTH STREAX ENHANCE', price: 2500 },
        { name: 'GLOBAL COLOR WAIST LENGTH GK / KUNE', price: 9000 },
        { name: 'GLOBAL COLOR WAIST LENGTH LOREAL INOA / WELLA COLOR TOUCH', price: 7500 },
        { name: 'GLOBAL COLOR WAIST LENGTH LOREAL MAJREL / WELLA KOLESTON', price: 6500 },
        { name: 'GLOBAL COLOR WAIST LENGTH STREAX ARGAN SECRETS / MATRIX', price: 5500 },
        { name: 'GLOBAL COLOR WAIST LENGTH STREAX ENHANCE', price: 6500 },
        { name: 'HIGHLIGHTS PER FOIL ANKLE LENGTH', price: 700 },
        { name: 'HIGHLIGHTS PER FOIL KNEE LENGTH', price: 600 },
        { name: 'HIGHLIGHTS PER FOIL MID LENGTH', price: 400 },
        { name: 'HIGHLIGHTS PER FOIL SHOULDER LENGTH', price: 300 },
        { name: 'HIGHLIGHTS PER FOIL SHOULDER LENGTH', price: 200 },
        { name: 'HIGHLIGHTS PER FOIL WAIST LENGTH', price: 500 },
        { name: 'OMBRE ANKLE LENGTH', price: 13500 },
        { name: 'OMBRE KNEE LENGTH', price: 11000 },
        { name: 'OMBRE MID LENGTH', price: 7000 },
        { name: 'OMBRE SHOULDER LENGTH', price: 5000 },
        { name: 'OMBRE WAIST LENGTH', price: 9000 },
        { name: 'ROOT TOUCH UP (1 INCH) GK / KUNE', price: 1050 },
        { name: 'ROOT TOUCH UP (1 INCH) LOREAL INOA', price: 950 },
        { name: 'ROOT TOUCH UP (1 INCH) LOREAL MAJREL / WELLA KOLESTON', price: 850 },
        { name: 'ROOT TOUCH UP (1 INCH) STREAX ARGAN SECRETS / MATRIX', price: 650 },
        { name: 'ROOT TOUCH UP (1 INCH) STREAX ENHANCE', price: 750 },
        { name: 'ROOT TOUCH UP (2 INCH) GK / KUNE', price: 2000 },
        { name: 'ROOT TOUCH UP (2 INCH) LOREAL INOA', price: 1700 },
        { name: 'ROOT TOUCH UP (2 INCH) LOREAL MAJREL / WELLA KOLESTON', price: 1500 },
        { name: 'ROOT TOUCH UP (2 INCH) STREAX ARGON SECRETS / MATRIX', price: 1100 },
        { name: 'ROOT TOUCH UP (2 INCH) STREAX ENHANCE', price: 1250 }
      ]
    },
    {
      title: 'HAIR CUT',
      items: [
        { name: 'BLOW DRY (ACORDING TO CUT)', price: 430 },
        { name: 'BOB CUT', price: 650 },
        { name: 'BUTTERFLY CUT', price: 1100 },
        { name: 'DEEP U CUT', price: 450 },
        { name: 'GRADUATED BOB CUT', price: 970 },
        { name: 'LAYERS CUT', price: 650 },
        { name: 'SPLIT ENDS REMOVAL LONG HAIR', price: 3000 },
        { name: 'Split ends removal NORMAL LENGTH', price: 1900 },
        { name: 'STRAIGHT CUT', price: 450 },
        { name: 'U CUT', price: 450 },
        { name: 'V CUT', price: 520 },
        { name: 'WOLF CUT', price: 1100 }
      ]
    },
    {
      title: 'HAIR DO',
      items: [
        { name: 'ADVANCE INTERNATIONAL HAIRSTYLE', price: 4000 },
        { name: 'BASIC HAIRSTYLE', price: 1500 },
        { name: 'OPEN HAIR HAIRSTYLE', price: 2500 }
      ]
    },
    {
      title: 'HAIR EXTENSIONS',
      items: [
        { name: 'HAIR EXTENTION REMOVAL', price: 5000 },
        { name: 'HAIR EXTENTIONS 14 INCH 100 STRANDS', price: 15000 },
        { name: 'HAIR EXTENTIONS 16 INCH 100 STRANDS', price: 17000 },
        { name: 'HAIR EXTENTIONS 18 INCH 100 STRANDS', price: 20000 },
        { name: 'HAIR EXTENTIONS 20 INCH 100 STRANDS', price: 22000 },
        { name: 'HAIR EXTENTIONS 22 INCH 100 STRANDS', price: 24000 },
        { name: 'HAIR EXTENTIONS 24 INCH 100 STRANDS', price: 26000 },
        { name: 'HAIR EXTENTIONS 26 INCH 100 STRANDS', price: 28000 },
        { name: 'HAIR EXTENTIONS 28 INCH 100 STRANDS', price: 30000 },
        { name: 'HAIR EXTENTIONS 30 INCH 100 STRANDS', price: 32000 },
        { name: 'HAIR EXTENTIONS REFILLING', price: 8000 },
        { name: 'HAIR TINSEL 12 STRANDS', price: 1000 },
        { name: 'HAIR TOPPER', price: 25000 }
      ]
    },
    {
      title: 'HAIR SCALP TREATMENT',
      items: [
        { name: 'ANTI DANDRUFF ADVANCE', price: 1000 },
        { name: 'ANTI DANDRUFF REGULAR', price: 700 },
        { name: 'ANTI HAIR FALL ADVANCE', price: 1200 },
        { name: 'ANTI HAIR FALL REGULAR', price: 800 },
        { name: 'HAIR REGROWTH ADVANCE', price: 1500 },
        { name: 'HAIR REGROWTH REGULAR', price: 1100 },
        { name: 'HIGH FREQUANCY', price: 500 },
        { name: 'MESOTHERAPY REGROWTH TREATMENT', price: 3000 },
      ]
    },
    {
      title: 'HAIR SPA',
      items: [
        { name: 'FILLER TREATMENT ANKLE LENGTH', price: 5000 },
        { name: 'FILLER TREATMENT HIP LENGTH', price: 3600 },
        { name: 'FILLER TREATMENT KNEE LENGTH', price: 4200 },
        { name: 'FILLER TREATMENT MID LENGTH', price: 2200 },
        { name: 'FILLER TREATMENT SHOULDER LENGTH', price: 1500 },
        { name: 'FILLER TREATMENT WAIST LENGTH', price: 3000 },
        { name: 'GK KERATIN DEEP CONDITIONER SPA', price: 3000 },
        { name: 'KERATIN HAIR SPA', price: 2500 },
        { name: 'LOREAL BASIC SPA ANKEL LENGTH', price: 1700 },
        { name: 'LOREAL BASIC SPA HIP LENGTH', price: 1150 },
        { name: 'LOREAL BASIC SPA MID LENGTH', price: 750 },
        { name: 'LOREAL BASIC SPA SHOULDER LENGTH', price: 550 },
        { name: 'LOREAL BASIC SPA WAIST LENGTH', price: 950 },
        { name: 'LOREAL SPA KNEE LENGTH', price: 1400 },
        { name: 'SHEA TREATMENT ANKLE LENGTH', price: 4000 },
        { name: 'SHEA TREATMENT HIP LENGTH', price: 3000 },
        { name: 'SHEA TREATMENT KNEE LENGTH', price: 3500 },
        { name: 'SHEA TREATMENT MID LENGTH', price: 1700 },
        { name: 'SHEA TREATMENT SHOULDER LENGTH', price: 1100 },
        { name: 'SHEA TREATMENT WAIST LENGTH', price: 2500 },
        { name: 'SOS BOTOX ANKLE LENGTH', price: 4500 },
        { name: 'SOS BOTOX HIP LENGTH', price: 3500 },
        { name: 'SOS BOTOX KNEE LENGTH', price: 4000 },
        { name: 'SOS BOTOX SPA MID LENGTH', price: 2200 },
        { name: 'SOS BOTOX SPA SHOULDER LENGTH', price: 1500 },
        { name: 'SOS BOTOX WAIST LENGTH', price: 3000 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT ANKLE LENGTH', price: 3500 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT HIP LENGTH', price: 2400 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT KNEE LENGTH', price: 2900 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT MID LENGTH', price: 1600 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT SHOULDER LENGTH', price: 1000 },
        { name: 'TREATMENT SPA RECONSTRUCTION TREAT WAIST LENGTH', price: 2000 },
      ]
    },
    {
      title: 'HAIR TREATMENT',
      items: [
        { name: 'BLUETOX ANKLE LENGH', price: 13000 },
        { name: 'BLUETOX HIP LENGTH', price: 10000 },
        { name: 'BLUETOX KNEE LENGTH', price: 10000 },
        { name: 'BLUETOX MID LENGTH', price: 6500 },
        { name: 'BLUETOX SHOULDER LENGTH', price: 5500 },
        { name: 'BLUETOX WAIST LENGTH', price: 8000 },
        { name: 'HAIR BOTOX TREATMENT KNEE LENGTH', price: 11000 },
        { name: 'HAIR BOTOX TREATMENT MID LENGTH', price: 6500 },
        { name: 'HAIR BOTOX TREATMENT SHOULDER LENGTH', price: 4000 },
        { name: 'HAIR BOTOX TREATMENT WAIST LENGTH', price: 8500 },
        { name: 'KERATIN ANKLE LENGTH GK', price: 13200 },
        { name: 'KERATIN ANKLE LENGTH LUXLISS', price: 9000 },
        { name: 'KERATIN ANKLE LENGTH TIBOLI', price: 10500 },
        { name: 'KERATIN KNEE LENGTH GK', price: 11500 },
        { name: 'KERATIN KNEE LENGTH LUXLISS', price: 8000 },
        { name: 'KERATIN KNEE LENGTH TIBOLI', price: 9700 },
        { name: 'KERATIN MID LENGTH GK', price: 8000 },
        { name: 'KERATIN MID LENGTH LUXLISS', price: 5500 },
        { name: 'KERATIN MID LENGTH TIBOLI', price: 6500 },
        { name: 'KERATIN SHOULDER LENGTH GK', price: 7000 },
        { name: 'KERATIN SHOULDER LENGTH LUXLISS', price: 4500 },
        { name: 'KERATIN SHOULDER LENGTH TIBOLI', price: 5500 },
        { name: 'KERATIN WAIST LENGTH GK', price: 10000 },
        { name: 'KERATIN WAIST LENGTH LUXLISS', price: 7000 },
        { name: 'KERATIN WAIST LENGTH TIBOLI', price: 8500 },
        { name: 'NANO PLASTIA ANKLE LENGTH', price: 19000 },
        { name: 'NANO PLASTIA HIP LENGTH', price: 15500 },
        { name: 'NANO PLASTIA KNEE LENGTH', price: 16500 },
        { name: 'NANO PLASTIA MID LENGTH', price: 9000 },
        { name: 'NANO PLASTIA SHOULDER LENGTH', price: 7500 },
        { name: 'NANO PLASTIA WAIST LENGTH', price: 11000 },
        { name: 'SOS BOTOX FOR 30 ML PRODUCT', price: 2500 },
        { name: 'SOS BOTOX PER ML ADD ON', price: 80 },
      ]
    },
    {
      title: 'HAIR WASH',
      items: [
        { name: 'BLOW DRY (STRAIGHT)', price: 250 },
        { name: 'HAIR WASH (REGULAR)', price: 250 },
        { name: 'HAIR WASH (TREATMENT BASED)', price: 350 },
      ]
    },
    {
      title: 'INTERNATIONAL WAX',
      items: [
        { name: 'BUTTOCKS CARTRIDGE WAX', price: 300 },
        { name: 'FULL BACK CARTRIDGE WAX', price: 600 },
        { name: 'FULL BODY CARTRIDGE WAX', price: 2500 },
        { name: 'FULL FRONT CARTRIDGE WAX', price: 600 },
        { name: 'FULL HAND CARTRIDGE WAX', price: 350 },
        { name: 'FULL LEGS CARTRIDGE WAX', price: 700 },
        { name: 'HALF BACK CARTRIDGE WAX', price: 400 },
        { name: 'HALF HAND CARTRIDGE WAX', price: 200 },
        { name: 'HALF LEGS CARTRIDGE WAX', price: 350 },
        { name: 'TUMMY CARTRIDGE WAX', price: 400 },
      ]
    },
    {
      title: 'LASH & BROW ENHANCE',
      items: [
        { name: 'Eyebrow Lamination', price: 2501 },
        { name: 'Eyebrow Tinting', price: 2501 },
        { name: 'Eyelash Tinting', price: 1501 },
        { name: 'Eyelash Lifting', price: 2500 },
      ]
    },
    {
      title: 'MAKEUP',
      items: [
        { name: 'BABY SHOWER AIRBRUSH MAKEUP WITH ADVANCE HAIRSTYLE AND DRAPPING (FRESH FLOWER JWELLARY, LENS AND LASHES FREE)', price: 8500 },
        { name: 'BABY SHOWER ADVANCE HD MAKEUP WITH ADVANCE HAIRSTYLE AND DRAPPING (LASHES AND FRESH FLOWER BROACH FREE)', price: 7000 },
        { name: 'BABY SHOWER BASIC MAKEUP WITH NORMAL BUN HAIRSTYLE AND DRAPPING', price: 4500 },
        { name: 'BABY SHOWER HD MAKEUP WITH CURLS HAIRSTYLE AND DRAPPING', price: 5500 },
        { name: 'ENGAGEMENT MAKEUP AIRBRUSH WITH ADVANCE HAIRSTYLE AND DRAPPING (LENS, LASHES AND FRESH FLORAL BROACH FREE)', price: 11000 },
        { name: 'ENGAGEMENT MAKEUP BASIC WITH NORMAL CURLS HAIRSTYLE AND DRAPPING', price: 7500 },
        { name: 'ENGAGEMENT MAKEUP HD WITH ADVANCE HAIRSTYLE AND DRAPPING (LENS AND LASHES FREE)', price: 9500 },
        { name: 'HALDI MAKEUP FOR BRIDE', price: 6500 },
        { name: 'PRE BRIDAL SHOOT ADVANCE HD MAKEUP WITH ADVANCE HAIRSTYLE AND DRAPPING', price: 8500 },
        { name: 'PRE BRIDAL SHOOT AIRBRUSH MAKEUP, HAIRSTYLE AND DRAPPING', price: 11000 },
        { name: 'PRE BRIDAL SHOOT HD MAKEUP AND HAIRSTYLE, DRAPPING', price: 7000 },
        { name: 'PRE BRIDAL SHOOT BASIC MAKEUP AND HAIRSTYLE, DRAPPING', price: 5500 },
        { name: 'RECEPTION ADVANCE HD MAKEUP WITH ADVANCE HAIRSTYLE AND DRAPPING', price: 21000 },
        { name: 'RECEPTION AIRBRUSH MAKEUP WITH ADVANCE HAIRSTYLE', price: 33000 },
        { name: 'RECEPTION HD MAKEUP WITH BASIC HAIRSTYLE AND DRAPPING', price: 15000 },
        { name: 'SANGEET MAKEUP FOR BRIDE', price: 6500 },
        { name: 'SIDER AIR BRUSH (NORMAL MAKEUP & HAIR)', price: 6000 },
        { name: 'SIDER AIR BRUSH MAKEUP & ADVANCE OR OPEN HAIR', price: 7000 },
        { name: 'SIDER MAKEUP ADVANCE HD (LENS, LASHES, HAIRSTYLE, FRESH FLOWER HAIR BROACH and DRAPPING FREE)', price: 5500 },
        { name: 'SIDER MAKEUP BASIC WITH REGULAR BUN HAIRSTYLE AND DRAPPING', price: 2500 },
        { name: 'SIDER MAKEUP HD WITH ADVANCE HAIRSTYLE AND DRAPPING (FRESH FLOWER BROACH, LENS AND LASHES FREE)', price: 4500 },
        { name: 'SIDER MAKEUP HD WITH CURLS HAIRSTYLE AND DRAPING', price: 3500 },
      ]
    },
    {
      title: 'MANICURE',
      items: [
        { name: 'ADVANCE MANICURE', price: 900 },
        { name: 'CLASSIC MANICURE', price: 400 },
        { name: 'CRYSTAL MANICURE', price: 2200 },
        { name: 'DRY MANICURE', price: 700 },
        { name: 'PREMIUM MANICURE', price: 1200 },
        { name: 'REGULAR MANICURE', price: 550 },
      ]
    },
    {
      title: 'PEDICURE',
      items: [
        { name: 'ADVANCE PEDICURE', price: 1100 },
        { name: 'CLASSIC PEDICURE', price: 500 },
        { name: 'CRYSTAL PEDICURE', price: 2500 },
        { name: 'DRY PEDICURE', price: 850 },
        { name: 'HEEL PEEL PEDICURE', price: 2500 },
        { name: 'PREMIUM PEDICURE', price: 1500 },
        { name: 'REGULAR PEDICURE', price: 650 },
      ]
    },
    {
      title: 'MASSAGE',
      items: [
        { name: 'AROMA BACK MASSAGE', price: 700 },
        { name: 'AROMA OIL BODY MASSAGE', price: 1500 },
        { name: 'AROMA OIL BODY MASSAGE WITH BODY SCRUB', price: 2500 },
        { name: 'BACK MASSAGE', price: 400 },
        { name: 'FACE MASSAGE', price: 550 },
        { name: 'FOOT MASSAGE', price: 500 },
        { name: 'HAND MASSAGE', price: 400 },
        { name: 'HEAD MASSAGE', price: 400 },
        { name: 'POTLI BODY MASSAGE', price: 4000 },
      ]
    },
    {
      title: 'NAILART',
      items: [
        { name: '3D Nail Art Single Finger', price: 200 },
        { name: '5D Nail Art Single Finger', price: 250 },
        { name: 'Cat Eye Nail Art Single Finger', price: 120 },
        { name: 'Crome, Mirror Nail Art Single Finger', price: 150 },
        { name: 'Foil Nail Art Single Finger', price: 150 },
        { name: 'Freehand Nail Art Single Finger', price: 150 },
        { name: 'French Nail Art (10 Nails)', price: 900 },
        { name: 'Glitter Nail Art Single Finger', price: 150 },
        { name: 'Marble Nail Art Single Finger', price: 100 },
        { name: 'Stone, Diamond, Pearl, Milor Single Finger', price: 150 },
        { name: 'Velvet Nail Art Single Finger', price: 120 },
      ]
    },
    {
      title: 'NAIL EXTENSIONS',
      items: [
        { name: 'ACRYLIC EXTENTIONS PER NAIL', price: 350 },
        { name: 'Acrylic Extentions Removal (10 Nails)', price: 550 },
        { name: 'Gel Extentions Removal (10 Nails)', price: 550 },
        { name: 'Gel Nail Paint Removal (10 Nails)', price: 400 },
        { name: 'Gel Polish (Real Nail) (10 Nails)', price: 750 },
        { name: 'GELEX EXTENTIONS', price: 1500 },
        { name: 'Permanent Acrylic Extentions (10 Nails)', price: 2500 },
        { name: 'Permanent Gel Extentions (10 Nails)', price: 2500 },
        { name: 'Semi Permanent Extention Removal (10 Nails)', price: 450 },
        { name: 'Semi Permanent Extentions (10 Nails)', price: 1100 },
        { name: 'SEMI PERMENENT EXTENTION PER FINGER', price: 150 },
      ]
    },
    {
      title: 'SHINER',
      items: [
        { name: 'FACE AND NECK SHINER', price: 360 },
        { name: 'FACE SHINER', price: 300 }
      ]
    },
    {
      title: 'SKIN TREATMENT',
      items: [
        { name: 'ANTI ACNE PEEL', price: 2200 },
        { name: 'DARK CIRCLE PEEL', price: 1500 },
        { name: 'PARTY PEEL', price: 1500 },
        { name: 'PIGMENT REMOVAL PEEL', price: 2500 },
        { name: 'UNDERARMS LIGHTENING', price: 1500 }
      ]
    },
    {
      title: 'SKIN TREATMENT FACIAL',
      items: [
        { name: 'BB GLOW FACIAL', price: 3500 },
        { name: 'HYDRA FACIAL', price: 4000 },
        { name: 'MESOTHERAPY FOR PIGMENTATION & SKIN TIGHTENIG', price: 5000 },
        { name: 'MICRO NEEDLING FOR PIGMENTATION', price: 5000 },
        { name: 'MICRO NEEDLING FOR SKIN TIGHTENING', price: 5000 }
      ]
    },
    {
      title: 'TEMPORARY STYLING',
      items: [
        { name: 'CURLING MID LENGTH', price: 1500 },
        { name: 'CURLING SHOULDER LENGTH', price: 1000 },
        { name: 'CURLING WAIST LENGTH', price: 2100 },
        { name: 'MAGI CURLS NORMAL LENGTH', price: 1000 },
        { name: 'MAGI CURLS WAIST/LONG LENGTH', price: 2300 },
        { name: 'STRAIGHTENING MID LENGTH', price: 1700 },
        { name: 'STRAIGHTENING SHOULDER LENGTH', price: 1300 },
        { name: 'STRAIGHTNING WAIST LENGTH', price: 2000 }
      ]
    },
    {
      title: 'THREADING',
      items: [
        { name: 'CHIN THREADING', price: 25 },
        { name: 'EYEBROW THREADING', price: 80 },
        { name: 'FOREHEAD THREADING', price: 25 },
        { name: 'FULL FACE THREADING', price: 250 },
        { name: 'LOWER CHIN THREADING', price: 25 },
        { name: 'LOWER LIPS THREADING', price: 25 },
        { name: 'SIDE LOCKS THREADING', price: 120 },
        { name: 'UPPER LIPS THREADING', price: 25 }
      ]
    },
    {
      title: 'WAXING',
      items: [
        { name: 'BIKINI HONEY WAX', price: 750 },
        { name: 'BIKINI LINE HONEY WAX', price: 300 },
        { name: 'BIKINI LINE LIPO RICA WAX', price: 500 },
        { name: 'BIKINI LINE STRIPLESS WAX', price: 650 },
        { name: 'BIKINI LIPO RICA WAX', price: 1000 },
        { name: 'BIKINI STRIPLESS WAX', price: 1350 },
        { name: 'BUTTOCKS HONEY WAX', price: 180 },
        { name: 'BUTTOCKS LIPO RICA WAX', price: 300 },
        { name: 'CHIN HONEY WAX', price: 50 },
        { name: 'CHIN STRIPLESS WAX', price: 80 },
        { name: 'EYEBROW HONEY WAX', price: 120 },
        { name: 'EYEBROW STRIPLESS WAX', price: 150 },
        { name: 'FOREHEAD HONEY WAX', price: 60 },
        { name: 'FOREHEAD STRIPLESS WAX', price: 90 },
        { name: 'FULL BACK HONEY WAX', price: 350 },
        { name: 'FULL BACK LIPO RICA WAX', price: 480 },
        { name: 'FULL BODY HONEY WAX', price: 1300 },
        { name: 'FULL BODY LIPO RICA WAX', price: 1850 },
        { name: 'FULL FACE HONEY WAX', price: 300 },
        { name: 'FULL FACE STRIPLESS WAX', price: 300 },
        { name: 'FULL FRONT HONEY WAX', price: 350 },
        { name: 'FULL FRONT RICA LIPO WAX', price: 480 },
        { name: 'FULL HAND HONEY WAX', price: 180 },
        { name: 'FULL HAND LIPO RICA WAX', price: 260 },
        { name: 'FULL LEGS HONEY WAX', price: 480 },
        { name: 'FULL LEGS LIPO RICA WAX', price: 600 },
        { name: 'HALF BACK HONEY WAX', price: 200 },
        { name: 'HALF BACK LIPO RICA WAX', price: 300 },
        { name: 'HALF HAND HONEY WAX', price: 100 },
        { name: 'HALF HAND LIPO RICA WAX', price: 150 },
        { name: 'HALF LEGS HONEY WAX', price: 200 },
        { name: 'HALF LEGS LIPO RICA WAX', price: 300 },
        { name: 'JAW LINE & LOWER CHIN STRIPLESS WAX', price: 150 },
        { name: 'JAW LINE & LOWER CHIN HONEY WAX', price: 100 },
        { name: 'LOWER LIPS HONEY WAX', price: 50 },
        { name: 'LOWER LIPS STRIPLESS WAX', price: 80 },
        { name: 'NOSE STRIPLESS WAX', price: 100 },
        { name: 'SIDE LOCKS HONEY WAX', price: 130 },
        { name: 'SIDE LOCKS STRIPLESS WAX', price: 200 },
        { name: 'TUMMY HONEY WAX', price: 200 },
        { name: 'TUMMY LIPO RICA WAX', price: 300 },
        { name: 'TUMMY STRIPLESS WAX', price: 500 },
        { name: 'UNDER ARMS HONEY WAX', price: 80 },
        { name: 'UNDER ARMS STRIPLESS WAX', price: 180 },
        { name: 'UNDERARMS LIPO RICA WAX', price: 150 },
        { name: 'UPPERLIPS HONEY WAX', price: 50 },
        { name: 'UPPERLIPS STRIPLESS WAX', price: 80 }
      ]
    }
  ];
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


  toggleDropdownIndex: number | null = null;
  activeCategory: ServiceCategory | null = null;

  toggleDropdown(index: number, category: ServiceCategory): void {
    this.toggleDropdownIndex = this.toggleDropdownIndex === index ? null : index;
    this.activeCategory = category;
  }

  getImageName(index: number): string {
    const imageNames = ['hair-offer-card.png', 'nail-offer-card.png', 'beauty-offer-card.png'];
    return imageNames[index] || 'placeholder.png';
  }
}
