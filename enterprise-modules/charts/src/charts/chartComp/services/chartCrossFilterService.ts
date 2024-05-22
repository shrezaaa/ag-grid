import type {
    Column,
    ColumnModel,
    GridApi,
    RowNode,
    ValueService} from '@ag-grid-community/core';
import {
    Autowired,
    Bean,
    BeanStub,
    _includes,
} from '@ag-grid-community/core';

@Bean('chartCrossFilterService')
export class ChartCrossFilterService extends BeanStub {
    @Autowired('gridApi') private readonly gridApi: GridApi;
    @Autowired('columnModel') private readonly columnModel: ColumnModel;
    @Autowired('valueService') private readonly valueService: ValueService;

    public filter(event: any, reset: boolean = false): void {
        const filterModel = this.gridApi.getFilterModel();

        // filters should be reset when user clicks on canvas background
        if (reset) {
            this.resetFilters(filterModel);
            return;
        }

        const colId = ChartCrossFilterService.extractFilterColId(event);
        if (this.isValidColumnFilter(colId)) {
            // update filters based on current chart selections
            this.updateFilters(filterModel, event, colId);
        } else {
            console.warn(
                "AG Grid: cross filtering requires a 'agSetColumnFilter' or 'agMultiColumnFilter' " +
                    "to be defined on the column with id: '" +
                    colId +
                    "'"
            );
        }
    }

    private resetFilters(filterModel: any) {
        const filtersExist = Object.keys(filterModel).length > 0;
        if (filtersExist) {
            // only reset filters / charts when necessary to prevent undesirable flickering effect
            this.gridApi.setFilterModel(null);
            this.gridApi.onFilterChanged();
        }
    }

    private updateFilters(filterModel: any, event: any, colId: string) {
        const dataKey = ChartCrossFilterService.extractFilterColId(event);
        const rawValue = event.datum[dataKey];
        if (rawValue === undefined) {
            return;
        }

        const selectedValue = rawValue.toString();

        if (event.event.metaKey || event.event.ctrlKey) {
            const existingGridValues = this.getCurrentGridValuesForCategory(colId);
            const valueAlreadyExists = _includes(existingGridValues, selectedValue);

            let updatedValues;
            if (valueAlreadyExists) {
                updatedValues = existingGridValues.filter((v: any) => v !== selectedValue);
            } else {
                updatedValues = existingGridValues;
                updatedValues.push(selectedValue);
            }

            filterModel[colId] = this.getUpdatedFilterModel(colId, updatedValues);
        } else {
            const updatedValues = [selectedValue];
            filterModel = { [colId]: this.getUpdatedFilterModel(colId, updatedValues) };
        }

        this.gridApi.setFilterModel(filterModel);
    }

    private getUpdatedFilterModel(colId: any, updatedValues: any[]) {
        const columnFilterType = this.getColumnFilterType(colId);
        if (columnFilterType === 'agMultiColumnFilter') {
            return { filterType: 'multi', filterModels: [null, { filterType: 'set', values: updatedValues }] };
        }
        return { filterType: 'set', values: updatedValues };
    }

    private getCurrentGridValuesForCategory(colId: string) {
        const filteredValues: any[] = [];
        const column = this.getColumnById(colId);
        this.gridApi.forEachNodeAfterFilter((rowNode: RowNode) => {
            if (column && !rowNode.group) {
                const value = this.valueService.getValue(column, rowNode) + '';
                if (!filteredValues.includes(value)) {
                    filteredValues.push(value);
                }
            }
        });
        return filteredValues;
    }

    private static extractFilterColId(event: any): string {
        return event.xKey || event.calloutLabelKey;
    }

    private isValidColumnFilter(colId: any) {
        if (colId.indexOf('-filtered-out')) {
            colId = colId.replace('-filtered-out', '');
        }

        const filterType = this.getColumnFilterType(colId);
        if (typeof filterType === 'boolean') {
            return filterType;
        }

        return _includes(['agSetColumnFilter', 'agMultiColumnFilter'], filterType);
    }

    private getColumnFilterType(colId: any) {
        const gridColumn = this.getColumnById(colId);
        if (gridColumn) {
            const colDef = gridColumn.getColDef();
            return colDef.filter;
        }
    }

    private getColumnById(colId: string) {
        return this.columnModel.getCol(colId) as Column;
    }
}
