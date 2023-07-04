import { Component, OnInit } from '@angular/core';
import { Partner } from '../partner';
import {  Subject } from "rxjs";
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-partnerlist',
  templateUrl: './partnerlist.component.html',
  styleUrls: ['./partnerlist.component.css']
})
export class PartnerlistComponent implements OnInit {
  partners: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();

  constructor(private partnerservice:PartnerService) { }

  ngOnInit() {  
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    this.partnerservice.getPartnerList().subscribe(data => {
      this.partners = data;
      this.dtTrigger.next();
    });
  }

  // reloadData() {
  //   this.partners=this.partnerservice.getPartnerList();
  // }

  

}
