import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthGuard } from './auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ResolveService } from './resolver';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducer/demo.reducer';
import {ReadComponent } from './read/read.component';
import {CreateComponent } from './create/create.component';


const appRoutes : Routes = [
  {
    path: 'dashboard', component:DashboardComponent, canActivate:[AuthGuard],resolve:{news:ResolveService}
  },
  {
    path: 'login',component:AppComponent
  },
  {
    path: '404',component: NotfoundComponent
  }
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    ReadComponent,
    CreateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    ReactiveFormsModule
    
  ],
  providers: [ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }