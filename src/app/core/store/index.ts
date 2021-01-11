import { NgModule } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        StoreModule.forRoot({ count: counterReducer }),
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [ ...actions ]
    })
    export class CoreStoreModule {};