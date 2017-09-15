import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

constructor(private router: Router, activatedRoute: ActivatedRoute) {
  let id = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
