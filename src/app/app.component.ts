
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Helper } from 'src/provider/Helper';
import { Sesi } from 'src/provider/Sesi';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    {
      title: 'Profile',
      url: '/contacts',
      icon: 'people'
    },
    {
      title: 'Settings',
      url: '/contacts',
      icon: 'person'
    },
    {
      title: 'Orders',
      url: '/calls',
      icon: 'call'
    },
    {
      title: 'Payments',
      url: '/nearby',
      icon: 'bookmark'
    },
    {
      title: 'Offers',
      url: '/saved-messages',
      icon: 'bookmark'
    },
    {
      title: 'Contact Us',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'Sign Out',
      url: '/settings',
      icon: 'settings'
    },
  ];

  constructor(
    private router: Router,
    private sesi:Sesi,
    private util:Helper,
    ) {
    //panggil cek login disini
    this.cekLogin();
   }

  cekLogin(){
    // this.sesi.get('member').then((res:any)=>{
    //   console.log(res);
    let session=localStorage.getItem('member');
      if(session == null){
        this.util.Navigasi('login');
      }else{
        this.util.NavigasiUrl('/tabs');
      }
    // });
  }

  openPages(page) {
    console.log(page);
    this.router.navigate([page.url]);
  }

  openOtherPage(url) {
    this.router.navigate([url]);
  }
}
