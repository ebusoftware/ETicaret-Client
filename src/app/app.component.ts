import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Position } from './services/admin/alertify.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Merhaba","Ebubekir",{
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.BottomRight
    });
    
  }
}

