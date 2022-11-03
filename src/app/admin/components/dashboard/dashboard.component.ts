import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';


import { HubUrls } from '../../../constants/hub-urls';
import { ReceiveFunctions } from '../../../constants/receive-functions';
import { AlertifyService, MessageType, Position } from '../../../services/admin/alertify.service';
import { SignalRService } from '../../../services/common/signalr.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  alertify: any;

  constructor(spinner: NgxSpinnerService, private signalRService: SignalRService,alertify:AlertifyService) {
    super(spinner);
    signalRService.start(HubUrls.ProductHub)
  }

  ngOnInit(): void 
  {
    this.signalRService.on(ReceiveFunctions.ProductAddedMessageReceiveFunction, message => {
      this.alertify.message(message, {
        messageType: MessageType.Notify,
        position: Position.TopRight
      })
    });
  }

}
