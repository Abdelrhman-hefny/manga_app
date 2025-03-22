import { Component } from '@angular/core';
import { Istrore } from '../../models/istrore';
import { CompanyType } from '../../models/enum';
import { Product } from '../../models/product';
import { LastUpdateComponent } from "../last-update/last-update.component";
import { SliderComponent } from "../slider/slider.component";

@Component({
  selector: 'app-home',
  standalone: true,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [LastUpdateComponent, SliderComponent], // ✅ تعديل styleUrl إلى styleUrls
})
export class HomeComponent {
  mystore: Istrore;
  product: Product;
  companyType = CompanyType; // ✅ استخدم enum مباشرةً بدون تهيئة

  constructor() {
    this.mystore = {
      name: 'H&M',
      imgUrl: 'https://picsum.photos/200/300',
      branches: ['asyut', 'minya', 'alx'],
    };
    this.product = new Product('laptop', 4000, 'elctornec');
  }
  getDiscountPrice(): number {
    return this.product.getDiscountedPrice(10);
  }
}
