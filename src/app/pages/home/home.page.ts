import { NavigationExtras, Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { RestApi } from 'src/provider/RestApi';
import { Sesi } from 'src/provider/Sesi';
import { Helper } from 'src/provider/Helper';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: any = [];
  products: any = [];
  gambar: any;

  constructor(
    private dummy: DummyService,
    private router: Router,
    private api: RestApi,
    private sesi: Sesi,
    private helper:Helper,
    // private storage: Storage
  ) {
    this.gambar = api.gambar+"images/produk/";
    // this.categories = this.dummy.categories;
    // this.products = this.dummy.products;
  }

  ngOnInit() {
    this.tampilProduk();
    this.tampilKategori();
    console.log(this.sesi.get('member'));
    // console.log(this.gambar);
    

    // console.log(this.storage.get('member'));
  }

  tampilProduk() {
    this.api.get('produk').subscribe((res: any) => {
      this.products = res.data;
      // console.log(res.data);
      
    });
  }

  tampilKategori() {
    this.api.get('kategori').subscribe((res: any) => {
      // console.log(res);
      
      this.categories = res.data;
    });
  }

  goToProductList() {
    this.router.navigate(['/product-list']);
  }

  goToDetail(id:any) {
    // this.helper.NavigasiParameter('DetailPage',id);
    // // this.router.navigate(['/detail']);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id: id,
      },
    };
    this.router.navigate(['/detail'], navigationExtras);

  }
}
