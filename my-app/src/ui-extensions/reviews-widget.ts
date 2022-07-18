import { Component, NgModule, OnInit } from '@angular/core';
import { DataService, SharedModule } from '@vendure/admin-ui/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'reviews-widget',
  template: `
    <ul>
      <li *ngFor="let review of pendingReviews$ | async">
        <a [routerLink]="['/extensions', 'product-reviews', review.id]">{{ review.summary }}</a>
        <span class="rating">{{ review.rating }} / 5</span>
      </li>
    </ul>
  `,
})
export class ReviewsWidgetComponent implements OnInit {
  pendingReviews$: Observable<GetAllReviews.Items[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.pendingReviews$ = this.dataService.query(gql`
      query GetAllReviews($options: ProductReviewListOptions) {
        productReviews(options: $options) {
          items {
            id
            createdAt
            authorName
            summary
            rating
          }
        }
      }`, {
        options: {
          filter: {
              state: { eq: 'new' },
          },
          take: 10,
        },
      })
      .mapStream(data => data.productReviews.items);
  }
}

@NgModule({
    imports: [SharedModule],
    declarations: [ReviewsWidgetComponent],
})
export class ReviewsWidgetModule {}