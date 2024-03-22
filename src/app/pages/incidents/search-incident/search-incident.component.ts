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

  isSerialNumberSelected: boolean = false;
  isCodeSelected: boolean = false;
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
    this.isSerialNumberSelected = false;
    this.isCodeSelected = false;
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
    if (option === 'serialNumber') {
      this.isSerialNumberSelected = true;
      this.isCodeSelected = false;
    } else if (option === 'code') {
      this.isSerialNumberSelected = false;
      this.isCodeSelected = true;
    }
  }

  hasData(fieldModel: any): boolean {
    return fieldModel && fieldModel !== '';
  }


}
