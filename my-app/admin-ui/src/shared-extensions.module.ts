import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/6bbe0c03040e6193dde0f90c6b68dcb752a897abfb2255809e0985fa74d945eb/greeter-shared.module';
import { SharedExtensionModule } from './extensions/6bbe0c03040e6193dde0f90c6b68dcb752a897abfb2255809e0985fa74d945eb/actionbar-btn';


@NgModule({
    imports: [CommonModule, GreeterSharedModule, SharedExtensionModule],
})
export class SharedExtensionsModule {}
