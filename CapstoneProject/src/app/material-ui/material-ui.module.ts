import { NgModule } from '@angular/core';
import {MatDialogModule, MatDialog} from '@angular/material/dialog';
import {MatCardModule,MatCard} from '@angular/material/card';

const materialComponents=[

  MatDialogModule,
  MatCardModule

]

@NgModule({
  exports:[
    materialComponents

  ]
  ,
  imports: [
    
    materialComponents
  ]
})
export class MaterialUiModule { }
