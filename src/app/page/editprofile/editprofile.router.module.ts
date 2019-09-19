import {RouterModule, Routes} from '@angular/router';
import {NgModule, Component} from '@angular/core';
import {EditprofilePage} from './editprofile.page';
 
const routes: Routes = [
    {
        path:'',
    component: EditprofilePage,
    children:[
        // {path: 'feed', loadChildren: '..feed/feed.module#FeedPageModule'},
        // {path: 'uploader', loadChildren: '..uploader/uploader.module#UploaderPageModule'},
        // {path: 'profile', loadChildren: '..profile/profile.module#FeedPageModule'}
             ]
             
    }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class EditprofileRoutingModule {}