import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PushConfig } from 'src/app/services/pubsub.service';

@Component({
  selector: 'app-new-subscription-dialog',
  templateUrl: './new-subscription-dialog.component.html',
  styleUrls: ['./new-subscription-dialog.component.scss']
})
export class NewSubscriptionDialogComponent implements OnInit {

  constructor(private ref: MatDialogRef<NewSubscriptionDialogComponent, NewSubscriptionRequest>) { }

  ngOnInit(): void {
  }

  submit(): void {
    this.ref.close({
      topic: '',
      pushConfig: undefined
    })
  }

}

export interface NewSubscriptionRequest {
  topic: string
  pushConfig?: PushConfig
}
