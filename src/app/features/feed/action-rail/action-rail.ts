import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Dish } from '../../../core/models/dish.model';

@Component({
  selector: 'app-action-rail',
  templateUrl: './action-rail.html',
  styleUrl: './action-rail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionRail {
  readonly dish = input.required<Dish>();
  readonly liked = input.required<boolean>();
  readonly commentCount = input.required<number>();
  readonly compact = input(false);
  readonly shareLabel = input('Compartir');

  readonly likeToggled = output<void>();
  readonly commentsToggled = output<void>();
  readonly orderRequested = output<void>();
  readonly shareRequested = output<void>();
}
