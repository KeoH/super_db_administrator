import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.sass']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {

  slug;
  subscription;

  constructor(private _route: ActivatedRoute) {

  }

  ngOnInit(){
    this.subscription = this._route.params.subscribe(params => {
      this.slug = params["slug"];
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
