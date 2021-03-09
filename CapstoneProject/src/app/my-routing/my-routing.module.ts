import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { RegistrationPageComponent } from '../registration-page/registration-page.component';
import { AdminHomePageComponent } from '../admin-home-page/admin-home-page.component';
import { AdminActivatedGuardService } from '../admin-activated-guard.service';
import { AdminHomePageWelcomePageComponent } from '../admin-home-page-welcome-page/admin-home-page-welcome-page.component';
import { AdminRequestComponent } from '../admin-request/admin-request.component';
import { AdminMessageComponent } from '../admin-message/admin-message.component';
import { AdminPostMessageComponent } from '../admin-post-message/admin-post-message.component';
import { AdminSearchComponent } from '../admin-search/admin-search.component';
import { UserChangePasswordComponent } from '../user-change-password/user-change-password.component';
import { AdminModifyMotivatorComponent } from '../admin-modify-motivator/admin-modify-motivator.component';
import { AdminViewChallengerComponent } from '../admin-view-challenger/admin-view-challenger.component';
import { AdminChallengerDailyLogsComponent } from '../admin-challenger-daily-logs/admin-challenger-daily-logs.component';
import { AdminChallengerMonthlyLogsComponent } from '../admin-challenger-monthly-logs/admin-challenger-monthly-logs.component';
import { MotivatorHomePageComponent } from '../motivator-home-page/motivator-home-page.component';
import { MotivatorActivatedGuardService } from '../motivator-activated-guard.service';
import { MotivatorHomePageWelcomeComponent } from '../motivator-home-page-welcome/motivator-home-page-welcome.component';
import { MotivatorProfileComponent } from '../motivator-profile/motivator-profile.component';
import { ChallengerHomePageComponent } from '../challenger-home-page/challenger-home-page.component';
import { ChallengerActivatedGuardService } from '../challenger-activated-guard.service';
import { ChallengerDailyLogsComponent } from '../challenger-daily-logs/challenger-daily-logs.component';
import { ChallengerMonthlyLogsComponent } from '../challenger-monthly-logs/challenger-monthly-logs.component';
import { ChallengerPaymentComponent } from '../challenger-payment/challenger-payment.component';
import { DownloadWorkoutPlanComponent } from '../download-workout-plan/download-workout-plan.component';
import { PostWorkoutPlanComponent } from '../post-workout-plan/post-workout-plan.component';
import { AddBatchComponent } from '../add-batch/add-batch.component';





const routes:Routes=[


  

  {path:'',redirectTo:'/LandingPage',pathMatch:'full'
  }
  ,
  {
 path:'LandingPage',component:LandingPageComponent
  }
,
{
  path:'login',component:LoginPageComponent
},

{
  path:'register',component:RegistrationPageComponent
},



//Routes for Admin Start
{
  path:'adminHomePage', component:AdminHomePageComponent,canActivate:[AdminActivatedGuardService],


children:[

  {
    path:'',redirectTo:'adminHomePageWelcomePage',pathMatch:'full'
  },
{
path:'addBatch',component:AddBatchComponent,canActivate:[AdminActivatedGuardService]
},
  {
    path:'adminHomePageWelcomePage',component:AdminHomePageWelcomePageComponent,canActivate:[AdminActivatedGuardService]
  }
,
{

  path:'adminRequest',component:AdminRequestComponent,canActivate:[AdminActivatedGuardService]
},

{

  path:'adminMessage',component:AdminMessageComponent,canActivate:[AdminActivatedGuardService]
}
,
{
  path:'adminPostMessage',component:AdminPostMessageComponent,canActivate:[AdminActivatedGuardService]
},
{
  path:'search',component:AdminSearchComponent,canActivate:[AdminActivatedGuardService]
}
,

{
  path:'changePassword',component:UserChangePasswordComponent,canActivate:[AdminActivatedGuardService]
},
{
  path:'motivatorDetails',component:AdminModifyMotivatorComponent,canActivate:[AdminActivatedGuardService]
},
{

  path:'challengerDetails',component:AdminViewChallengerComponent,canActivate:[AdminActivatedGuardService]
},

{
  path:'challengerDailyLogs',component:AdminChallengerDailyLogsComponent,canActivate:[AdminActivatedGuardService]
},

{
  path:'challengerMonthlyLogs',component:AdminChallengerMonthlyLogsComponent,canActivate:[AdminActivatedGuardService]
}
,

{
  
    path:'motivatorProfile',component:MotivatorProfileComponent,canActivate:[AdminActivatedGuardService]
  },

  {
    path:'postWorkoutPlan',component:PostWorkoutPlanComponent,canActivate:[AdminActivatedGuardService]
  }

]
},
//Routes for admin end here


//Routes for motivator starts here


{

  path:'motivatorHomePage',component:MotivatorHomePageComponent,canActivate:[MotivatorActivatedGuardService],

  children:[

    {
      path:'',redirectTo:'motivatorHomePageWelcomePage',pathMatch:'full'
    },

    {
      path:'motivatorHomePageWelcomePage',component:MotivatorHomePageWelcomeComponent,canActivate:[MotivatorActivatedGuardService]
    }
,
{

  path:'adminMessage',component:AdminMessageComponent,canActivate:[MotivatorActivatedGuardService]

}
,
  {
    path:'motivatorPostMessage',component:AdminPostMessageComponent,canActivate:[MotivatorActivatedGuardService]
  }
,

{
  path:'search',component:AdminSearchComponent,canActivate:[MotivatorActivatedGuardService]
}
,

{
  path:'changePassword',component:UserChangePasswordComponent,canActivate:[MotivatorActivatedGuardService]
},


{
  path:'challengerDailyLogs',component:AdminChallengerDailyLogsComponent,canActivate:[MotivatorActivatedGuardService]
},

{
  path:'challengerMonthlyLogs',component:AdminChallengerMonthlyLogsComponent,canActivate:[MotivatorActivatedGuardService]
}
  ,

  {
    path:'motivatorProfile',component:MotivatorProfileComponent,canActivate:[MotivatorActivatedGuardService]
  },

  {
    path:'postWorkoutPlan',component:PostWorkoutPlanComponent,canActivate:[MotivatorActivatedGuardService]
  }


  ]},

  //Routes for motivator ends here



//Routes for challenger starts

{



  path:'challengerHomePage',component:ChallengerHomePageComponent,canActivate:[ChallengerActivatedGuardService],


  children:[



  {
    path:'',redirectTo:'motivatorHomePageWelcomePage',pathMatch:'full'
  },

  {
    path:'motivatorHomePageWelcomePage',component:MotivatorHomePageWelcomeComponent,canActivate:[ChallengerActivatedGuardService]
  }
,
  {

    path:'adminMessage',component:AdminMessageComponent,canActivate:[ChallengerActivatedGuardService]
  
  }
  ,
    {
      path:'motivatorPostMessage',component:AdminPostMessageComponent,canActivate:[ChallengerActivatedGuardService]
    }
  ,
  
  {
    path:'search',component:AdminSearchComponent,canActivate:[ChallengerActivatedGuardService]
  }
  ,
  
  {
    path:'changePassword',component:UserChangePasswordComponent,canActivate:[ChallengerActivatedGuardService]
  },
  
  
  {
    path:'challengerDailyLogs',component:ChallengerDailyLogsComponent,canActivate:[ChallengerActivatedGuardService]
  },
  
  {
    path:'challengerMonthlyLogs',component:ChallengerMonthlyLogsComponent,canActivate:[ChallengerActivatedGuardService]
  }
    ,
  
    {
      path:'motivatorProfile',component:MotivatorProfileComponent,canActivate:[ChallengerActivatedGuardService]
    },
  {
    path:'donate',component:ChallengerPaymentComponent,canActivate:[ChallengerActivatedGuardService]
  }
  ,

  {
    path:'downloadWorkoutPlan',component:DownloadWorkoutPlanComponent,canActivate:[ChallengerActivatedGuardService]
  }

]













}























]






@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class MyRoutingModule { }
export const RoutingComponent=[

  LandingPageComponent,
  LoginPageComponent,
  RegistrationPageComponent,
  AdminHomePageComponent,
  AdminHomePageWelcomePageComponent,
  AdminRequestComponent,
  AdminPostMessageComponent,
  AdminSearchComponent,
  UserChangePasswordComponent,
  AdminModifyMotivatorComponent,
  AdminViewChallengerComponent,
  AdminChallengerDailyLogsComponent,
  AdminChallengerDailyLogsComponent,
  AdminChallengerMonthlyLogsComponent

]