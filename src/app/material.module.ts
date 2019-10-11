import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormField, MatFormFieldModule } from '@angular/material';
@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule],
})

export class MaterialModule {

}