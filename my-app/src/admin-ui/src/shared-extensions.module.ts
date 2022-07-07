import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/08dc7c3732f71806e357151f3ad32e891a50bafaa08589b13ccf12cc32538148/greeter-shared.module';


@NgModule({
    imports: [CommonModule, GreeterSharedModule],
})
export class SharedExtensionsModule {}
