import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'Formularios',
        children:[
            {
                path:'usuario',
                loadComponent:()=>
                    import('./Formularios/usuario/usuario').then(
                        (c)=>c.Usuario
                    )
            },
            {
                path:'zodiaco',
                loadComponent:()=>
                    import('./Formularios/zodiaco/zodiaco').then(
                        (c)=>c.Zodiaco
                    )
            }
        ]
    },
    {
        path:'escuela',
        children:[
            {
                path:'lista-alumnos',
                loadComponent:()=>
                    import('./escuela/lista-alumnos/lista-alumnos').then(
                        (c)=>c.ListaAlumno
                    )
            },
        ]
    },
    {
        path:'', redirectTo: 'admin', pathMatch:'full'
    },
    {
        path:'**', redirectTo:'admin'
    }

];
