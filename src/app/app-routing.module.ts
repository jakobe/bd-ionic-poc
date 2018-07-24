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
  },
  { path: 'pools', 
    loadChildren: './pools/pools.module#PoolsPageModule' 
  },
  { path: 'pools2', 
    loadChildren: './pools2/pools2.module#Pools2PageModule' 
  },
  { path: 'pools3', 
    loadChildren: './pools3/pools3.module#Pools3PageModule' 
  },
  { path: 'pools4', 
    loadChildren: './pools4/pools4.module#Pools4PageModule' 
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
