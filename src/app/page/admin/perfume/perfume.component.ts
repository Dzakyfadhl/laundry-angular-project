import { Component, OnInit } from '@angular/core';

interface Perfumes {
  code?:string;
  name?:string;
}

@Component({
  selector: 'app-perfume',
  templateUrl: './perfume.component.html',
  styleUrls: ['./perfume.component.css']
})
export class PerfumeComponent implements OnInit {
  
  listPerfumes:Perfumes[];

  constructor() { }

  ngOnInit(): void {
    this.definePerfumes();
  }

  definePerfumes() {
    this.listPerfumes = [
      {
        code : "PRFM001",
        name : "Rinso"
      },
      {
        code : "PRFM002",
        name : "Attack"
      },
      {
        code : "PRFM003",
        name : "Daya"
      }
    ]
  }

}
