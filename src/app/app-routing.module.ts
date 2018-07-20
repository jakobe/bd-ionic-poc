import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'accounts',
    loadChildren: './pages/accounts/accounts.module#AccountsPageModule'
  },
  { 
    path: 'transactions',
    loadChildren: './pages/transactions/transactions.module#TransactionsPageModule'
  },
  { 
    path: 'transfer',
    loadChildren: './pages/transfer/transfer.module#TransferPageModule'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
