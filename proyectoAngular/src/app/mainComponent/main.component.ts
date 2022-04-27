import { OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { EntidadesService } from "../services/entidades.service";

@Component({

  selector: 'main-comp',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  providers: [EntidadesService],
})



export class mainComponent implements OnInit {
  constructor(private _entidadesService: EntidadesService) {

  }

  mybutton: any;
  token = false;
  ngOnInit(): void {

    this._entidadesService.getToken().subscribe(
      (resul) => {
        console.log(resul);
        if (resul["correcte"] == true) {
          this.token = true;
        }
      },
      (error) => {
        console.log(error);
      }
    )

    this.mybutton = document.getElementById("btn-back-to-top");
    this.mybutton.addEventListener("click", backToTop);
    window.onscroll = function () {
      scrollFunction();
    };
    function scrollFunction(this: any) {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.mybutton.style.display = "block";
      } else {
        this.mybutton.style.display = "none";
      }
    }
    function backToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

}
