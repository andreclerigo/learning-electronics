import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedService } from './shared.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import { LogedinComponent } from './home/logedin/logedin.component';
import { LogedoutComponent } from './home/logedout/logedout.component';
import { LibraryComponent } from './library/library.component';
import { ProfileComponent } from './profile/profile.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ClassesComponent } from './classes/classes.component';
import { ChangePasswordComponent } from './profile/change-password/change-password.component';
import { DeleteAccountComponent } from './profile/delete-account/delete-account.component';
import { ShowInfoComponent } from './profile/show-info/show-info.component';
import { ShowPhotoComponent } from './profile/show-photo/show-photo.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FaqComponent } from './faq/faq.component';
import { StatisticsComponent } from './profile/statistics/statistics.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatTableModule } from '@angular/material/table';
import { ShowClassComponent } from './classes/show-class/show-class.component';
import { EditPhotoComponent } from './profile/show-photo/edit-photo/edit-photo.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LogedinComponent,
    LogedoutComponent,
    LibraryComponent,
    ProfileComponent,
    QuizzComponent,
    ClassesComponent,
    ChangePasswordComponent,
    DeleteAccountComponent,
    ShowInfoComponent,
    ShowPhotoComponent,
    FaqComponent,
    StatisticsComponent,
    ShowClassComponent,
    EditPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    HttpClientModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ImageCropperModule,
    MaterialFileInputModule,
    MatSlideToggleModule,
    NgCircleProgressModule.forRoot({
      radius: 90,
      outerStrokeWidth: 12,
      innerStrokeWidth: 5,
      titleFontSize: '25',
      subtitleFontSize: '15',
      outerStrokeColor: "#536DFE",
      innerStrokeColor: "#673AB7",
      animationDuration: 300,
      subtitle: "progresso"
    })
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
