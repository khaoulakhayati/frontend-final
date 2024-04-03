import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
@Component({
  selector: 'app-search-incident',
  templateUrl: './search-incident.component.html',
  styleUrl: './search-incident.component.scss'
})
export class SearchIncidentComponent implements OnInit{
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  iscustomerIDSelected: boolean = false;
  iscustomerEmailSelected: boolean = false;
  iscontractNumberSelected: boolean = false;
  iszipCodeSelected: boolean = false;
  isphoneNumberSelected: boolean = false;
  incidents: any[] = [
    { typeIncident: 'Incident informatique logiciel ou matériel', refProduit: 'Produit A', numSerie: '123456', remarque: 'Remarque A', typeProbleme: 'Problème 1', problemeConcret: 'Concret 1', transporteur: 'Transporteur A' },
    { typeIncident: 'Panne informatique', refProduit: 'Produit B', numSerie: '789012', remarque: 'Remarque B', typeProbleme: 'Problème 2', problemeConcret: 'Concret 2', transporteur: 'Transporteur B' },
    { typeIncident: 'Panne matérielle autre', refProduit: 'Produit C', numSerie: '345678', remarque: 'Remarque C', typeProbleme: 'Problème 3', problemeConcret: 'Concret 3', transporteur: 'Transporteur C' },
    { typeIncident: 'Panne matérielle autre', refProduit: 'Produit C', numSerie: '345678', remarque: 'Remarque C', typeProbleme: 'Problème 3', problemeConcret: 'Concret 3', transporteur: 'Transporteur C' },
    { typeIncident: 'Panne matérielle autre', refProduit: 'Produit C', numSerie: '345678', remarque: 'Remarque C', typeProbleme: 'Problème 3', problemeConcret: 'Concret 3', transporteur: 'Transporteur C' },
    { typeIncident: 'Panne matérielle autre', refProduit: 'Produit C', numSerie: '345678', remarque: 'Remarque C', typeProbleme: 'Problème 3', problemeConcret: 'Concret 3', transporteur: 'Transporteur C' },
    { typeIncident: 'Panne matérielle autre', refProduit: 'Produit C', numSerie: '345678', remarque: 'Remarque C', typeProbleme: 'Problème 3', problemeConcret: 'Concret 3', transporteur: 'Transporteur C' }
  ];
  selectedIncident: any;
  customerID: any ;
  iscustomerE: any;
  contractNumber: any;
  zipCode: any;
  phoneNumber: any;
  companyName: any;
iscompanyNameSelected: any;
AgentCustomerId: any;
isAgentCustomerIdSelected: any;
  constructor(private _formBuilder: FormBuilder) { }
  ngOnInit() {
  }
  first: number = 0;
  rows: number = 10;
  onPageChange(event: PageEvent) {
      this.first = event.first;
      this.rows = event.rows;
  }
  cancelSearch() {
    this.iscustomerIDSelected = false;
    this.iscustomerEmailSelected = false;
    this.iscontractNumberSelected = false;
    this.iszipCodeSelected = false;
    this.isphoneNumberSelected = false;
    this.iscompanyNameSelected = false;
    this.isAgentCustomerIdSelected = false;
    this.options.reset();
    this.selectedRowIndex = -1;
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  @Output() incidentSelected: EventEmitter<any> = new EventEmitter<any>();
  selectedRowIndex: number = -1;
  selectIncident(incident: any, index: number) {
    console.log("Incident sélectionné :", incident);
    this.selectedRowIndex = index;
    this.incidentSelected.emit(incident);
  }
  toggleField(option: string) {
    if (option === 'customerID') {
      this.iscustomerIDSelected = true;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = false;
      this.isAgentCustomerIdSelected = false;
    } else if (option === 'customerE-mail') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = true;
      this.iscontractNumberSelected = false;
    } else if (option === 'contractNumber') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = true;
      this.iszipCodeSelected = false;
    }
    else if (option === 'zipCode') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = false;
      this.iszipCodeSelected = true;
      this.isphoneNumberSelected = false;
    }
    else if (option === 'phoneNumber') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = false;
      this.iszipCodeSelected = false;
      this.isphoneNumberSelected = true;
      this.iscompanyNameSelected = false;
    }
    else if (option === 'companyName') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = false;
      this.iszipCodeSelected = false;
      this.iscompanyNameSelected = true;
      this.isAgentCustomerIdSelected = false;
      this.isphoneNumberSelected = false;
    }
    else if (option === 'AgentCustomerId') {
      this.iscustomerIDSelected = false;
      this.iscustomerEmailSelected = false;
      this.iscontractNumberSelected = false;
      this.iszipCodeSelected = false;
      this.isAgentCustomerIdSelected = true;
      this.iscompanyNameSelected = false;
      this.isphoneNumberSelected = false;
    }
  }
  hasData(fieldModel: any): boolean {
    return fieldModel && fieldModel !== '';
  }
}