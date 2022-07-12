import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterSharedModule } from './extensions/27fe569634f0daa3262bbdd522c8167ca79f20f07a1d440f66387bec1d46702d/greeter-shared.module';
import { SharedExtensionModule } from './extensions/27fe569634f0daa3262bbdd522c8167ca79f20f07a1d440f66387bec1d46702d/actionbar-btn';
import { TSharedExtensionModule } from './extensions/27fe569634f0daa3262bbdd522c8167ca79f20f07a1d440f66387bec1d46702d/shared.module';


@NgModule({
    imports: [CommonModule, GreeterSharedModule, SharedExtensionModule, TSharedExtensionModule],
})
export class SharedExtensionsModule {}
