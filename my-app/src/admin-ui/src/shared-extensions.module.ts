import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/e8a510266a10f3671bdcd55d01049b443c8dc67dd95c33e87d98da0ebbb8bf18/greeter-shared.module';
import { SharedExtensionModule } from './extensions/e8a510266a10f3671bdcd55d01049b443c8dc67dd95c33e87d98da0ebbb8bf18/actionbar-btn';


@NgModule({
    imports: [CommonModule, GreeterSharedModule, SharedExtensionModule],
})
export class SharedExtensionsModule {}
