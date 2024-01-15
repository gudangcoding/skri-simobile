import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RestApi } from 'src/provider/RestApi';
import { Helper } from 'src/provider/Helper';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  name:string;
  email:string;
  password:string;
  c_password:string;

  constructor(
    private router: Router,
    private api : RestApi,
    private util : Helper
    ) { }

  ngOnInit() {
  }

  daftar(){
    let body = {
      name:this.name,
      email : this.email,
      password:this.password,
      c_password:this.c_password,
    }
    this.api.post(body,'member/register').subscribe((res:any)=>{
      console.log(res);
      
        if(res.success==true){
          this.router.navigate(['/login']);
        }else{
          this.util.alertNotif('Register Gagal, Server Error');
        }
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToTabs() {
    this.router.navigate(['/tabs']);
  }

}
