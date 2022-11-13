import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { MovieDetailComponent } from './user/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './user/movies/movies-now/movies.component'; 
import { CreateComponent } from './admin/film/create/create.component';
import { EditComponent } from './admin/film/edit/edit.component';
import { FilmComponent } from './admin/film/movies/film.component';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { LayoutComponent } from './user/layout/layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { ForgotPasswordComponent } from './shared/forgot-password/forgot-password.component';

import { CatmovielistComponent } from './admin/categorymovie/catmovielist/catmovielist.component';


import { CreateCsComponent } from './admin/categoryseat/create-cs/create-cs.component';
import { EditCsComponent } from './admin/categoryseat/edit-cs/edit-cs.component';
import { ListCsComponent } from './admin/categoryseat/list-cs/list-cs.component';

import { ListCinemaComponent } from './admin/cinema/list-cinema/list-cinema.component';
import { CreateCinemaComponent } from './admin/cinema/create-cinema/create-cinema.component';
import { EditCinemaComponent } from './admin/cinema/edit-cinema/edit-cinema.component';

import { ListNewComponent } from './admin/new/list-new/list-new.component';
import { CreateNewComponent } from './admin/new/create-new/create-new.component';
import { EditNewComponent } from './admin/new/edit-new/edit-new.component';

import { ListShiftComponent } from './admin/shift/list-shift/list-shift.component';
import { CreateShiftComponent } from './admin/shift/create-shift/create-shift.component';
import { EditShiftComponent } from './admin/shift/edit-shift/edit-shift.component';

import { ListRoomComponent } from './admin/room/list-room/list-room.component';
import { CreateRoomComponent } from './admin/room/create-room/create-room.component';
import { EditRoomComponent } from './admin/room/edit-room/edit-room.component';

import { MoviesComingComponent } from './user/movies/movies-coming/movies-coming.component';
import { PaymentComponent } from './user/payment/payment.component';
import { MyProfileComponent } from './user/my-profile/my-profile.component';
import { MyTicketComponent } from './user/my-ticket/my-ticket.component';


const routes: Routes = [
    {
        path: 'admin',
        component: LayoutAdminComponent,
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'create-cs', component: CreateCsComponent },
            { path: 'edit', component: EditComponent },
            { path: 'edit-cs', component: EditCsComponent },
            { path: 'list-cs', component: ListCsComponent },

            { path: 'list-cinema', component: ListCinemaComponent },
            { path: 'edit-cinema', component: EditCinemaComponent },
            { path: 'create-cinema', component: CreateCinemaComponent },

            { path: 'list-new', component: ListNewComponent },
            { path: 'edit-new', component: EditNewComponent },
            { path: 'create-new', component: CreateNewComponent },

            { path: 'list-shift', component: ListShiftComponent },
            { path: 'edit-shift', component: EditShiftComponent },
            { path: 'create-shift', component: CreateShiftComponent },

            { path: 'list-room', component: ListRoomComponent },
            { path: 'edit-room', component: EditRoomComponent },
            { path: 'create-room', component: CreateRoomComponent },

            { path: 'film', component: FilmComponent },
            { path: 'profile', component: ProfileComponent },
            { path: 'catmovielist', component:CatmovielistComponent },
            { path: '', component: FilmComponent },
        ],
    },

    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: 'signUp', component: RegistrationFormComponent },
            { path: 'signIn', component: SignInComponent },
            { path: 'aboutUs', component: AboutUsComponent },
            { path: 'detailFilm/:id', component: MovieDetailComponent },
            { path: 'moviesNow', component: MoviesComponent },
            { path: 'moviesComing', component: MoviesComingComponent },
            { path: 'forgot', component: ForgotPasswordComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'myTicket', component:MyTicketComponent },
            { path: 'myProfile', component:MyProfileComponent },
            { path: '', component: HomeComponent },

        ],
    },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
