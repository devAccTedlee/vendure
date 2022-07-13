// project/ui-extensions/greeter-shared.module.ts
import { NgModule, Component } from '@angular/core';
import { SharedModule, addNavMenuSection, FormInputComponent, registerFormInputComponent } from '@vendure/admin-ui/core';
import { FormControl } from '@angular/forms';
import { CustomFieldConfig } from '@vendure/common/lib/generated-types'

@Component({
  template: `
    <input
        type="range"
        min="config.min || 0"
        max="config.max || 100"
        [formControl]="formControl" />
    {{ formControl.value }}
  `,
})
export class SliderControl implements FormInputComponent<CustomFieldConfig> {
  readonly: boolean;
  config: CustomFieldConfig;
  formControl: FormControl;
}

@NgModule({
  imports: [SharedModule],
  declarations: [SliderControl],
  providers: [
    addNavMenuSection({
      id: 'greeter',
      label: 'My Extensions',
      items: [{
        id: 'greeter',
        label: 'Greeter',
        routerLink: ['/extensions/greet'],
        // Icon can be any of https://clarity.design/icons
        icon: 'cursor-hand-open',
      }],
    },
    // Add this section before the "settings" section
    'settings'),
    registerFormInputComponent('slider-form-input', SliderControl),
  ]
})
export class GreeterSharedModule {}