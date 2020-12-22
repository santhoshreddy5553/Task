import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
  Sno: string;
  Name: string;
  DOB: String;
  Gender: String;
  Address: String;
  Address1: String;
  Address2: String;
  State: String;
  City:String;
  Pincode:String;

}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  { Sno: '1', Name: 'Santhosh',DOB: '20-03-1996', Gender:'M', Address:'Hyd,', Address1:'Hyderabd',Address2:'Kukatpally',
    
    State: 'Telangana', City:'Hyderabad',Pincode:'500072'}
];
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.css']
})
export class DialogExampleComponent implements OnInit {
  displayedColumns: string[] = ['Sno', 'Name', 'DOB', 'Gender','Address','Address1','Address2','State','City','Pincode',];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
