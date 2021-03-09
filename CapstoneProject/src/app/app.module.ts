import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule ,HTTP_INTERCEPTORS}    from '@angular/common/http';
import { AppComponent } from './app.component';
import { MyRoutingModule,RoutingComponent} from './my-routing/my-routing.module';
import {AuthenticateService} from './authenticate.service';
import {MyUserService} from './my-user.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialUiModule} from './material-ui/material-ui.module';
import { RegistrationSuccessDialogComponent } from './registration-success-dialog/registration-success-dialog.component';
import {AdminActivatedGuardService} from './admin-activated-guard.service';
import {InterceptorService} from './interceptor.service';
import { AdminAcceptRequestDialogComponent } from './admin-accept-request-dialog/admin-accept-request-dialog.component';
import { AdminDeleteRequestDialogComponent } from './admin-delete-request-dialog/admin-delete-request-dialog.component';

import { AdminMessagePostDialogComponent } from './admin-message-post-dialog/admin-message-post-dialog.component';

import { PasswordIncorrectDialogComponent } from './password-incorrect-dialog/password-incorrect-dialog.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { AdminModifyMotivatorComponent } from './admin-modify-motivator/admin-modify-motivator.component';
import { AdminEditMotivatorComponent } from './admin-edit-motivator/admin-edit-motivator.component';
import { AdminDeleteMotivatorDialogComponent } from './admin-delete-motivator-dialog/admin-delete-motivator-dialog.component';
import { AdminAddMotivatorComponent } from './admin-add-motivator/admin-add-motivator.component';
import { AdminViewChallengerComponent } from './admin-view-challenger/admin-view-challenger.component';
import { AdminChallengerDailyLogsComponent } from './admin-challenger-daily-logs/admin-challenger-daily-logs.component';
import { AdminChallengerMonthlyLogsComponent } from './admin-challenger-monthly-logs/admin-challenger-monthly-logs.component';
import { MotivatorHomePageComponent } from './motivator-home-page/motivator-home-page.component';
import { MotivatorHomePageWelcomeComponent } from './motivator-home-page-welcome/motivator-home-page-welcome.component';
import { MotivatorProfileComponent } from './motivator-profile/motivator-profile.component';
import { ChallengerHomePageComponent } from './challenger-home-page/challenger-home-page.component';
import { ChallengerDailyLogsComponent } from './challenger-daily-logs/challenger-daily-logs.component';
import { ChallengerMonthlyLogsComponent } from './challenger-monthly-logs/challenger-monthly-logs.component';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
import { ChallengerPaymentComponent } from './challenger-payment/challenger-payment.component';
import { DonationSuccessDialogComponent } from './donation-success-dialog/donation-success-dialog.component';
import { LogoutDialogComponent } from './logout-dialog/logout-dialog.component';
import { PostWorkoutPlanComponent } from './post-workout-plan/post-workout-plan.component';
import { DownloadWorkoutPlanComponent } from './download-workout-plan/download-workout-plan.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { PosteduccessfllyComponent } from './posteduccessflly/posteduccessflly.component';
import { AddBatchComponent } from './add-batch/add-batch.component';













@NgModule({
  imports:      [ BrowserModule, FormsModule,MyRoutingModule,HttpClientModule, BrowserAnimationsModule ,MaterialUiModule],
  entryComponents:[ RegistrationSuccessDialogComponent,AdminAcceptRequestDialogComponent,AdminDeleteRequestDialogComponent ],
  declarations: [ AppComponent,RoutingComponent, RegistrationSuccessDialogComponent, AdminDeleteRequestDialogComponent, AdminMessagePostDialogComponent, PasswordIncorrectDialogComponent,
                    PasswordIncorrectDialogComponent,AdminMessageComponent, AdminModifyMotivatorComponent, AdminEditMotivatorComponent, AdminDeleteMotivatorDialogComponent, AdminAddMotivatorComponent, AdminViewChallengerComponent, AdminChallengerDailyLogsComponent, AdminChallengerMonthlyLogsComponent, MotivatorHomePageComponent, MotivatorHomePageWelcomeComponent, MotivatorProfileComponent, ChallengerHomePageComponent, ChallengerDailyLogsComponent, ChallengerMonthlyLogsComponent, UpdateDialogComponent, ForgotPasswordComponent, ForgotPasswordDialogComponent, ChallengerPaymentComponent, DonationSuccessDialogComponent, LogoutDialogComponent, PostWorkoutPlanComponent, DownloadWorkoutPlanComponent, FileNotFoundComponent, PosteduccessfllyComponent, AddBatchComponent],
  bootstrap:    [ AppComponent ],
  providers:[AuthenticateService,MyUserService,AdminActivatedGuardService,InterceptorService,
    {  
      provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}
  
  ]
})
export class AppModule { }
