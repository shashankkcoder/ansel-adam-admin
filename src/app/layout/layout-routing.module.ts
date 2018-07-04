import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'dashboard' },
            { path: '', redirectTo: 'map-regions' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            // { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            // { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            // { path: 'forms', loadChildren: './form/form.module#FormModule' },
            // { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            // { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            // { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'albums', loadChildren: './albums/albums.module#AlbumsModule' },
            { path: 'map-regions', loadChildren: './map-regions/map-regions.module#MapRegionsModule' },
            { path: 'all-photos', loadChildren: './all-photos/all-photos.module#AllPhotosModule' },
            { path: 'blank2', loadChildren: './blank2/blank2.module#Blank2Module' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' },
            { path: 'user-data', loadChildren: './user-data/user-data.module#UserDataModule' },
            { path: 'userconsent', loadChildren: './userconsent/userconsent.module#UserConsentModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
