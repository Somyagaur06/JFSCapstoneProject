import { Component, OnInit } from '@angular/core';
import {Batch} from '../batch';
import { MyUserService } from '../my-user.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../update-dialog/update-dialog.component';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {



  public batch:Batch=new Batch('','','','');

  public batches=[
    'January-March','April-June','July-September','October-December'
  ]

  constructor(

    private service:MyUserService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }


  addBatch(){

    this.batch.batchStatus='Ongoing';
    console.log(this.batch);
    this.service.addBatch(this.batch).subscribe(
      data=>{
        this.dialog.open(UpdateDialogComponent);

      }
    );

  }


  clear(){
    location.reload();
  }

}
