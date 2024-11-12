import { Routes } from '@angular/router';
import { AddCourseComponent } from './Pages/admin/add-course/add-course.component';
import { GetCourseComponent } from './Pages/admin/get-course/get-course.component';
import { GetCourseByIdComponent } from './Pages/admin/get-course-by-id/get-course-by-id.component';
import { PutCourseComponent } from './Pages/admin/put-course/put-course.component';
import { DeletecourseComponent } from './Pages/admin/deletecourse/deletecourse.component';
import { AssignCourseComponent } from './Pages/admin/assign-course/assign-course.component';

export const routes: Routes = [{path:"add-course", component:AddCourseComponent},
{path:'',redirectTo:"get-course",pathMatch:"full"},
{path:"get-course", component:GetCourseComponent},
{path:"get-course-by-id", component:GetCourseByIdComponent},
{path:"put-course", component:PutCourseComponent},
{path:"delete-course", component:DeletecourseComponent},
{path:"assign-course", component:AssignCourseComponent}
];
