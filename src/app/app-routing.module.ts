import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { EditprofilePage } from './page/editprofile/editprofile.page';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'main', loadChildren: './page/main/main.module#MainPageModule' },
  { path: 'signup', loadChildren: './page/signup/signup.module#SignupPageModule' },
//  { path: 'editprofile', loadChildren: './page/editprofile/editprofile.module#EditprofilePageModule' },

 { path: 'editprofile', component: EditprofilePage, children:[
                                                              { path: 'feed', loadChildren: './page/feed/feed.module#FeedPageModule' },
                                                              { path: 'main', loadChildren: './page/main/main.module#MainPageModule' },
                                                              { path: 'uploader', loadChildren: './page/uploader/uploader.module#UploaderPageModule' },
                                                              { path: 'profile', loadChildren: './page/profile/profile.module#ProfilePageModule' },
                                                              { path: 'buddychat', loadChildren: './buddychat/buddychat.module#BuddychatPageModule' },
    ]},


  { path: 'tabs', loadChildren: './page/tabs/tabs.module#TabsPageModule' },
  { path: 'buddychat', loadChildren: './buddychat/buddychat.module#BuddychatPageModule' },
  
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
