import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';


const route: Routes = [
    { path : 'Inicio', component: InicioComponent}
];

@NgModule(
    {
        declarations: [],
        imports: [
            RouterModule.forRoot(route)
        ],
        exports: [RouterModule]
    }
)

export class AppRoutingModule{}