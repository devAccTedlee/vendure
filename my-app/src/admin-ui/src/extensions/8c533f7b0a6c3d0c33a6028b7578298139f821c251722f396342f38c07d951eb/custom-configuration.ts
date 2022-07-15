import { NgModule, Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { CustomFieldConfig } from '@vendure/common/lib/generated-types';
import {
    DataService,
    SharedModule,
    CustomDetailComponent,
    registerCustomDetailComponent,
    GetProductWithVariants
} from '@vendure/admin-ui/core';

@Component({
  template: `
    {{ extraInfo$ | async | json }}
  `,
})

type CmsDataService = /*unresolved*/ any;

export class ProductInfoComponent implements CustomDetailComponent, OnInit {
  // These two properties are provided by Vendure and will vary
  // depending on the particular detail page you are embedding this
  // component into.
  entity$: Observable<GetProductWithVariants.Product>
  detailForm: FormGroup;
  
  extraInfo$: Observable<any>;
  
  constructor(private cmsDataService: CmsDataService) {}
  
  ngOnInit() {
    this.extraInfo$ = this.entity$.pipe(
      switchMap(entity => this.cmsDataService.getDataFor(entity.id))
    );
  }
}

@NgModule({
    imports: [SharedModule],
    declarations: [ProductInfoComponent],
    providers: [
        registerCustomDetailComponent('product-detail', ProductInfoComponent),
    ]
})
export class SharedExtensionModule {}