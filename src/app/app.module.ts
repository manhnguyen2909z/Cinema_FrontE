import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './user/home/home.component';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { MovieDetailComponent } from './user/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './user/movies/movies-now/movies.component';
import { SliderComponent } from './user/slider/slider.component';
import { DiscountComponent } from './user/discount/discount.component';
import { ModalOrderComponent } from './user/modal-order/modal-order.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';
import { HttpClientModule } from '@angular/common/http';
import { LayoutComponent } from './user/layout/layout.component';
import { FilmComponent } from './admin/film/movies/film.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MoviesComingComponent } from './user/movies/movies-coming/movies-coming.component';
import { PaymentComponent } from './user/payment/payment.component';
import { MyTicketComponent } from './user/my-ticket/my-ticket.component';







@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegistrationFormComponent,
        SignInComponent,
        AboutUsComponent,
        MovieDetailComponent,
        MoviesComponent,
        SliderComponent,
        DiscountComponent,
        ModalOrderComponent,
        NotFoundComponent,
        ForgotPasswordComponent,
        LayoutComponent,
        FilmComponent,
        LayoutAdminComponent,
        ProfileComponent,
        MoviesComingComponent,
        PaymentComponent,
        MyTicketComponent,
     
 
    ],
    imports: [BrowserModule, AppRoutingModule,NgxPaginationModule,HttpClientModule,FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
