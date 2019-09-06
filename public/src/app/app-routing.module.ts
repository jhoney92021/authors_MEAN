import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ModifyComponent } from './modify/modify.component';

const routes: Routes = 
[  
// {path: "", component: ReadComponent},
// {path: "create", component: CreateComponent},
// {path: "modify/:_id", component: ModifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
