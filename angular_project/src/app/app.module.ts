import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { TodoComponent } from './todo/todo.component';
// toolbar material ui
import {MatToolbarModule} from '@angular/material/toolbar';
// material ui card
import {MatCardModule} from '@angular/material/card';
// material from input field
import {MatFormFieldModule} from '@angular/material/form-field';
//material input
import {MatInputModule} from '@angular/material/input';
//material icon
import {MatIconModule} from '@angular/material/icon';
//material button
import {MatButtonModule} from '@angular/material/button';
//reative form
import {ReactiveFormsModule}from '@angular/forms'
//drag and drop
import {DragDropModule} from '@angular/cdk/drag-drop';
//form module
import { FormsModule } from '@angular/forms';
// mat dialog module
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
