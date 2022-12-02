import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCustomerDemoRoutingModule } from './newcustomerdemo-routing.module';
// import { AppCodeModule } from '../code/code.component';
// import { NewCustomerComponent } from './new-customer.component';

@NgModule({
    imports: [
        CommonModule,
        NewCustomerDemoRoutingModule
    ],
    declarations: []
    // declarations: [NewCustomerComponent]
})
export class NewCustomerModule { }
