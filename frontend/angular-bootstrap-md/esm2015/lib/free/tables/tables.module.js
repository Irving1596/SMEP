/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdbTableDirective } from './directives/mdb-table.directive';
import { MdbTableSortDirective } from './directives/mdb-table-sort.directive';
import { MdbTableScrollDirective } from './directives/mdb-table-scroll.directive';
import { MdbTableRowDirective } from './directives/mdb-table-row.directive';
import { MdbTableService } from './services/mdb-table.service';
import { MdbTablePaginationComponent } from './components/mdb-table-pagination.component';
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective,
                ],
                exports: [
                    MdbTablePaginationComponent,
                    MdbTableRowDirective,
                    MdbTableScrollDirective,
                    MdbTableSortDirective,
                    MdbTableDirective,
                ],
                entryComponents: [MdbTablePaginationComponent],
                providers: [MdbTableService],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItYm9vdHN0cmFwLW1kLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvdGFibGVzL3RhYmxlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQXFCMUYsTUFBTSxPQUFPLFdBQVc7OztZQW5CdkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFO29CQUNaLDJCQUEyQjtvQkFDM0Isb0JBQW9CO29CQUNwQix1QkFBdUI7b0JBQ3ZCLHFCQUFxQjtvQkFDckIsaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsMkJBQTJCO29CQUMzQixvQkFBb0I7b0JBQ3BCLHVCQUF1QjtvQkFDdkIscUJBQXFCO29CQUNyQixpQkFBaUI7aUJBQ2xCO2dCQUNELGVBQWUsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7YUFDN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1kYlRhYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWRiVGFibGVTb3J0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21kYi10YWJsZS1zb3J0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUtc2Nyb2xsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVJvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tZGItdGFibGUtcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZGJUYWJsZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21kYi10YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZGItdGFibGUtcGFnaW5hdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTWRiVGFibGVQYWdpbmF0aW9uQ29tcG9uZW50LFxuICAgIE1kYlRhYmxlUm93RGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlU2Nyb2xsRGlyZWN0aXZlLFxuICAgIE1kYlRhYmxlU29ydERpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZURpcmVjdGl2ZSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE1kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudCxcbiAgICBNZGJUYWJsZVJvd0RpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgICBNZGJUYWJsZVNvcnREaXJlY3RpdmUsXG4gICAgTWRiVGFibGVEaXJlY3RpdmUsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW01kYlRhYmxlUGFnaW5hdGlvbkNvbXBvbmVudF0sXG4gIHByb3ZpZGVyczogW01kYlRhYmxlU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHt9XG4iXX0=