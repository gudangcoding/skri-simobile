
import { Router } from '@angular/router';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  currentfilter = 'Best Seller'
  products = [];

  constructor(private dummy: DummyService, private router: Router) {
    this.products = this.dummy.products;
  }

  ngOnInit() {
  }

  goToDetail() {
    this.router.navigate(['/detail']);
  }

}
