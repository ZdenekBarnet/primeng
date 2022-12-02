import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewCustomerComponent } from './new-customer.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NewCustomerComponent }
	])],
	exports: [RouterModule]
})
export class NewCustomerDemoRoutingModule { }
