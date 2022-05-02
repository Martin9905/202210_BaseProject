import {Component, OnInit} from "@angular/core";
import {Cafe} from "./cafe";
import {dataCafe} from "./dataCafes";
import {CafeService} from "./cafe.service";

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafeList: Array<Cafe> = []
  cafeTypes: Array<[string, number]> = []
  constructor(private courseService: CafeService) { }

  getCafeList() {
    this.courseService.getCafeList().subscribe(cafes => {
      this.cafeList = cafes;
      this.getCafeType();
    });
  }

  getCafeType() {
    this.courseService.getCafeList().subscribe(cafes => {
      this.cafeList = cafes;
    });
    var tipos = new Set<string>();
    this.cafeList.forEach( x => {
      tipos.add(x.tipo)
    });
    console.log(tipos)

    for(var tipo of tipos){
      this.cafeTypes.push([ tipo ,this.cafeList.filter( x => x.tipo == tipo).length]);
    }

  }

  ngOnInit() {
    this.getCafeType();
    this.getCafeList();
  }
}
