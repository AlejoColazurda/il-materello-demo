import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-chip-bar',
  templateUrl: './category-chip-bar.html',
  styleUrl: './category-chip-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryChipBar {
  readonly categories = input.required<Category[]>();
  readonly activeCategoryId = input.required<string>();
  readonly categorySelected = output<string>();

  selectCategory(categoryId: string): void {
    this.categorySelected.emit(categoryId);
  }
}
