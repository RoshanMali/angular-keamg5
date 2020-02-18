import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import {  demoService } from "./demo.service";
import { HelloComponent } from "./hello.component";
import { AddComponent } from "./add/add.component";
import { EditComponent } from './edit/edit.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
  RouterModule.forRoot([
    {
      path:'add-employee',
      component: AddComponent
    }
  ])],
  declarations: [AppComponent, HelloComponent, AddComponent, EditComponent],
  bootstrap: [AppComponent],
  providers: [ demoService]
})
export class AppModule {}
