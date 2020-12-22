import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

export interface PeriodicElement {
 
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
  
  { Sno: '1', Name: 'Santhosh',DOB: '20-03-1996', Gender:'M', Address:'Hyd,', Address1:'Hyderabd',Address2:'Kukatpally',
    
    State: 'Telangana', City:'Hyderabad',Pincode:'500072'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  displayedColumns: string[] = ['Sno', 'Name', 'DOB', 'Gender','Address','Address1','Address2','State','City','Pincode',];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog){ }
    openDialog() {
    let dialogRef =this.dialog.open(DialogExampleComponent);
      dialogRef.afterClosed().subscribe( result => {
        console.log(`Dialog result: ${result}`);
      }

      )
  }
  
}

