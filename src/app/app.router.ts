import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// view components
import { ListLibraryComponent } from './view/list-library/list-library.component';
import { AddEditBookComponent } from './view/books/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './view/author/add-edit-author/add-edit-author.component';
import { ListAuthorComponent } from './view/author/list-author/list-author.component';
import { ListBookComponent } from './view/books/list-book/list-book.component';

const App_Router: Routes = [
    { path: '', component: ListAuthorComponent },

    { path: 'listLibrary', component: ListLibraryComponent },

    { path: 'listAuthor', component: ListAuthorComponent },
    { path: 'listAuthor/author', component: AddEditAuthorComponent },

    { path: 'listBook', component: ListBookComponent },
    { path: 'listBook/book', component: AddEditBookComponent },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Router);
