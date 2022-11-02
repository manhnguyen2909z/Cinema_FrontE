import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { MovieDetailComponent } from './user/movies/movie-detail/movie-detail.component';
import { MoviesComponent } from './user/movies/movies.component'; 
import { CreateComponent } from './admin/film/create/create.component';
import { EditComponent } from './admin/film/edit/edit.component';
import { FilmComponent } from './admin/film/list-film/film.component';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';
import { SignInComponent } from './shared/sign-in/sign-in.component';
import { LayoutComponent } from './user/layout/layout.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { ProfileComponent } from './admin/profile/profile.component';
const routes: Routes = [
    {
        path: 'admin',
        component: LayoutAdminComponent,
        children: [
            { path: 'create', component: CreateComponent },
            { path: 'edit', component: EditComponent },
            { path: 'film', component: FilmComponent },
            { path: 'profile', component: ProfileComponent },
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
            { path: 'listFilm', component: MoviesComponent },
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
