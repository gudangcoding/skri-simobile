
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sesi } from 'src/provider/Sesi';
import { RestApi } from 'src/provider/RestApi';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
user:any;
value:any;
nama:any;
email:any;
alamat:any;
telepon:any;
password_lama:any;
password_baru:any;
id_member:any;
  constructor(private router: Router, private sesi:Sesi, private api:RestApi) {
    this.value=localStorage.getItem('member');
    this.user=JSON.parse(this.value);
    console.log(this.user.nama);
    
   }

  ngOnInit() {
    console.log(this.user);
    
  }

  editprofil () {
    if (this.password_baru) {
      let body={
        nama:this.user.nama,
        email:this.email,
        alamat:this.alamat,
        telepon:this.telepon,
        password:this.password_baru,
        id_member:this.user.id_member,
      }
      // this.api.post(body,'member/update').subscribe((res:any)=>{
      //   console.log('success');})
      
      this.api.post(this.user, 'member/update').subscribe((res: any) => {
        console.log('Perubahan tersimpan!');
        // Tambahkan logika atau tindakan setelah perubahan disimpan
      }, (error) => {
        console.error('Gagal menyimpan perubahan:', error);
        // Tindakan jika penyimpanan gagal
      });
    }
  }

  logout(){
    this.sesi.remove('member');
    this.router.navigate(['/login'],{replaceUrl:true});
  }
  goToOrders() {
    this.router.navigate(['/my-orders']);
  }

  goToFavourite() {
    this.router.navigate(['/my-favourite']);
  }

}
