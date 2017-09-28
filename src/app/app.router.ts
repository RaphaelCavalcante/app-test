import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// view components
import { ListLibraryComponent } from './view/list-library/list-library.component';
import { AddEditBookComponent } from './view/add-edit-book/add-edit-book.component';
import { AddEditAuthorComponent } from './view/add-edit-author/add-edit-author.component';

const App_Router: Routes = [
    {path: '', component: ListLibraryComponent },
    {path: 'listLibrary', component: ListLibraryComponent },
    {path: 'listLibrary/book', component: AddEditBookComponent },
    {path: 'listLibrary/author', component: AddEditAuthorComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(App_Router);
