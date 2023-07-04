import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-student', pathMatch: 'full' },
  { path: 'view-student', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
