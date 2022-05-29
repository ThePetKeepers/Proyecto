import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subscriptions-component',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponentComponent implements OnInit {

  constructor(private _activRoute:ActivatedRoute) {

  }
  urlVal="";
  id = 0;
    ngOnInit(): void {
      this._activRoute.paramMap.subscribe(
        (params) => {
        this.urlVal = params.get("id")+"";    
        this.id = Number(this.urlVal);
    }
    );
    console.log(this.id);
    }
}
