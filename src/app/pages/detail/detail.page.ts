
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { RestApi } from 'src/provider/RestApi';
import { Keranjang } from 'src/provider/keranjang';
import { Helper } from 'src/provider/Helper';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  products = [];
  id_produk: any;
  detail:any="";
  itemsInCart: string[] = [];
  constructor(
    private dummy: DummyService,
    private navCtrl: NavController,
    private router: Router,
    private cart:Keranjang,
    private route: ActivatedRoute,
    private util:Helper,
    private api: RestApi,) {
    this.products = this.dummy.products;

    this.route.queryParams.subscribe((params: any) => {
      this.id_produk = params.id
    })

  }

  ngOnInit() {
    this.getdataproduk();
  }

  getdataproduk() {
    this.api.get('produk/' + this.id_produk).subscribe((res: any) => {
      console.log(res);
      this.detail=res;
    })
  }
  goBack() {
    this.navCtrl.back();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
  addToCart(item: string) {
    // this.itemsInCart.push(item);
// let isikeranjang=
this.cart.addToCart(item);
// console.log(isikeranjang);
this.util.toastNotif('Produk Berhasil Ditambahkan');

  }

}
