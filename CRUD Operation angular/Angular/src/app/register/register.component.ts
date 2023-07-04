import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { from } from 'rxjs';
import { Partner } from '../partner';
import { PartnerService } from '../partner.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private partnerService:PartnerService) { }

  ngOnInit() {
  }

  partner : Partner=new Partner();
  submitted = false;

  form=new FormGroup({
    partnerName:new FormControl(),
    partnerEmail:new FormControl()
  });

  register(registerform){
    // console.log(this.partnerName.value);
    // console.log(this.partnerEmail.value);

    this.partner=new Partner();
    this.partner.partnerName=this.partnerName.value;
    this.partner.partnerEmail=this.partnerEmail.value;
    this.submitted=true;
    this.save();
  }

  save() {
    this.partnerService.createPartner(this.partner)
      .subscribe(data => console.log(data), error => console.log(error));
    this.partner = new Partner();
  }

  get partnerName(){
    return this.form.get('partnerName');
  }

  get partnerEmail(){
    return this.form.get('partnerEmail');
  }
}
