import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './students/student-details/student-details.component';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { CreateStudentComponent } from './students/create-student/create-student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    CreateStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
