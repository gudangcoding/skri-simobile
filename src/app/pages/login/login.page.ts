import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestApi } from 'src/provider/RestApi';
import { Helper } from 'src/provider/Helper';
import { Sesi } from 'src/provider/Sesi';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  constructor(
    private router: Router,
    private api: RestApi,
    private util: Helper,
    private sesi:Sesi
  ) {}

  ngOnInit() {}

  cekLogin() {
    let body = {
      email: this.email,
      password: this.password,
    };
    this.api.post(body, 'member/login').subscribe((res: any) => {
      console.log('Hasil ', res);
      this.sesi.set('member',res.data);
    
      if (res.success == true) {
        // this.sesi.get('member').then((res:any)=>{
        //   console.log(res);
         
        // });
        this.router.navigate(['/tabs/home'],{replaceUrl:true});
      } else {
        this.util.alertNotif('Login Gagal, Cek Email dan Password');
      }

    });
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }
}
