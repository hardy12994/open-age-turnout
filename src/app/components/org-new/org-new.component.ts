import { Component, OnInit } from '@angular/core';
import { Employee } from "app/models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Organization } from "app/models/organization.model";
import * as indiaPlaces from "../../mock-data/india.places";
// import { $ } from "protractor/built";
import * as _ from "lodash";
import { PinService } from 'app/services/pin.service';
import { pinExistValidator } from "../../validators/pin.validator";
@Component({
  selector: 'app-org-new',
  templateUrl: './org-new.component.html',
  styleUrls: ['./org-new.component.css'],
  providers: [PinService]
})

export class OrgNewComponent implements OnInit {

  employee: Employee = new Employee();
  organization: Organization = new Organization();
  orgnizationForm: FormGroup;
  indiaPlaces: any;
  cities: any = [];
  organizationFormControls: any;
  pinServiceResponse: any;
  // name = new FormControl();

  get name() { return this.orgnizationForm.get('name') }
  get phone() { return this.orgnizationForm.get('phone') }
  get pincode() { return this.orgnizationForm.get('pincode') }
  get address_1() { return this.orgnizationForm.get('address_1') }
  get address_2() { return this.orgnizationForm.get('address_2') }
  get state() { return this.orgnizationForm.get('state') }
  get city() { return this.orgnizationForm.get('city') }


  constructor(private pinService: PinService) {
    this.indiaPlaces = indiaPlaces;
  }

  ngOnInit() {
    let orgRawControls = this.orgControlsFactory();
    this.orgnizationForm = new FormGroup(orgRawControls);
    this.organizationFormControls = this.orgnizationForm.controls;
    this.setWatchers();
  }

  orgControlsFactory() {
    return {
      'name': new FormControl(this.organization.name || '',
        Validators.compose([Validators.required, Validators.minLength(3)])),

      'phone': new FormControl(this.organization.phone || '', [
        Validators.required,
        Validators.pattern('[7-9]{1}[0-9]{9}')
      ]),
      'pincode': new FormControl(this.organization.pincode || '', [
        Validators.required,
        Validators.minLength(6),
        // pinExistValidator
      ]),
      'address_1': new FormControl(this.organization.address_1 || '', [
        Validators.required
      ]),
      'address_2': new FormControl(this.organization.address_2 || '', []),
      'state': new FormControl(this.organization.state || '', [
        Validators.required
      ]),
      'city': new FormControl(this.organization.city || '', [
        Validators.required
      ])
    };
  }

  setWatchers() {
    var that = this;
    this.organizationFormControls.state.valueChanges
      .subscribe(state => {
        if (!state)
          return;
        this.organizationFormControls.city.setValue("");
        this.organizationFormControls.city.setErrors({ required: true });
                
        this.cities = _.filter(indiaPlaces.places, item => item.state.toLowerCase() === state.toLowerCase());

        if (that.organizationFormControls.pincode.valid) {

          let pinState = this.pinServiceResponse.find(item => {
            if (item.regionname.toLowerCase() === state.toLowerCase()) {
              return item;
            }
          });

          if (!pinState) {
            this.organizationFormControls.pincode.setValue("");
            this.organizationFormControls.city.setErrors({ required: true });

          }
          return;
        }

      })

    this.organizationFormControls.pincode.valueChanges
      .subscribe(pincode => {

        if (!this.organizationFormControls.pincode.valid) {
          return;
        }

        this.pinService.isPinExist(pincode)
          .then(function (response) {

            that.pinServiceResponse = response.items;

            if (!response.isSuccess) {
              return that.orgnizationForm.controls['pincode'].setErrors({ pinExist: false });
            }

            if (that.organizationFormControls.state.value || that.organizationFormControls.city.value) {

              let matchedState = that.pinServiceResponse.find(item => {
                if (item.statename.toLowerCase() === that.organizationFormControls.state.value.toLowerCase()) {
                  return item;
                }
              });

              let matchedCity = that.pinServiceResponse.find(item => {
                if (item.regionname.toLowerCase() === that.organizationFormControls.city.value.toLowerCase()) {
                  return item;
                }
              });

              if (!matchedState) {
                that.organizationFormControls.state.setValue("");
              }

              if (!matchedCity) {
                that.organizationFormControls.city.setValue("");
              }
              return;
            }
          })
      });

    this.organizationFormControls.city.valueChanges
      .subscribe(city => {
        if (!city)
          return;
        // return 
        if (that.organizationFormControls.pincode.valid) {

          let pinCity = this.pinServiceResponse.find(item => {
            if (item.regionname.toLowerCase() === city.toLowerCase()) {
              return item;
            }
          });

          if (!pinCity) {
            this.organizationFormControls.pincode.setValue("");
          }
          return;
        }

      });



  }
















  // private ngOnChanges(event: any) {

  //   // if (1) {
  //   //   console.log(this.orgnizationForm);
  //   //   return;
  //   // }

  //   let element = event.target || event.srcElement || event.currentTarget;
  //   let elementId = element.id;
  //   let elementValue = element.value;

  //   if (elementId === "state") {
  //     this.organization.city = "";
  //     this.cities = _.filter(indiaPlaces.places, item => item.state.toLowerCase() === elementValue.toLowerCase());

  //     if (!this.cities) {
  //       this.cities = [{
  //         name: elementValue
  //       }];
  //     }
  //     return;
  //   }
  // }

  // save() {
  //   console.log(this.orgnizationForm);
  //   console.log(this.organization);
  // }

}
