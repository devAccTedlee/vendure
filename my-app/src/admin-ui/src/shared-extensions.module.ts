import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/8c533f7b0a6c3d0c33a6028b7578298139f821c251722f396342f38c07d951eb/greeter-shared.module';
import { SharedExtensionModule } from './extensions/8c533f7b0a6c3d0c33a6028b7578298139f821c251722f396342f38c07d951eb/actionbar-btn';


@NgModule({
    imports: [CommonModule, GreeterSharedModule, SharedExtensionModule],
})
export class SharedExtensionsModule {}
