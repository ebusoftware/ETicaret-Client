import { Injectable } from '@angular/core';
declare var alertify:any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }
  // message(message:string,messageType: MessageType, position : Position,delay:Number=3,dissmisOthers:Boolean= false)
  message(message:string,options:Partial<AlertifyOptions>){
  alertify.set('notifier','delay', options.delay);
  alertify.set('notifier','position', options.position);
  const msj = alertify[message](message);
  if(options.dissmisOthers)
  msj.dissmisOthers();

  
  }
  Dismiss(){
    alertify.dismiss();
  }
}

export class AlertifyOptions{

  messageType: MessageType=MessageType.Message;
  position : Position=Position.BottomRight;
  delay:Number=3;
  dissmisOthers:Boolean= false;

}

export enum MessageType{
  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
  
}
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomRight="bottom-right",
  BottomLeft="bottom-left",
  BottomCenter="bottom-center"
}