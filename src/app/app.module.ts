import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddbookComponent } from './components/addbook/addbook.component';
import { ViewbookComponent } from './components/viewbook/viewbook.component';
import { IssuebookComponent } from './components/issuebook/issuebook.component';
import { ViewissuedbooksComponent } from './components/viewissuedbooks/viewissuedbooks.component';
import { ReturnbookComponent } from './components/returnbook/returnbook.component';
import { LogoutComponent } from './components/logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

 

const appRoutes:Routes=[
  {path:'', component:HomeComponent},
  {path:'addbook', component:AddbookComponent},
  {path:'viewbook', component:ViewbookComponent},
  {path:'issuebook', component:IssuebookComponent},
  {path:'viewissuedbooks', component:ViewissuedbooksComponent},
  {path:'returnbook', component:ReturnbookComponent},
  {path:'logout', component:LogoutComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddbookComponent,
    ViewbookComponent,
    IssuebookComponent,
    ViewissuedbooksComponent,
    ReturnbookComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
