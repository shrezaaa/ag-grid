import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ColGroupDef, GridApi, GridOptions, createGrid } from '@ag-grid-community/core';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';

ModuleRegistry.registerModules([ClientSideRowModelModule, ColumnsToolPanelModule, FiltersToolPanelModule]);

const columnDefs: ColGroupDef[] = [
    {
        headerName: 'Athlete',
        children: [
            { field: 'athlete', width: 150 },
            { field: 'age', lockVisible: true, cellClass: 'locked-visible' },
            { field: 'country', width: 150 },
            { field: 'year' },
            { field: 'date' },
            { field: 'sport' },
        ],
    },
    {
        headerName: 'Medals',
        children: [
            { field: 'gold', lockVisible: true, cellClass: 'locked-visible' },
            { field: 'silver', lockVisible: true, cellClass: 'locked-visible' },
            { field: 'bronze', lockVisible: true, cellClass: 'locked-visible' },
            {
                field: 'total',
                lockVisible: true,
                cellClass: 'locked-visible',
                hide: true,
            },
        ],
    },
];

let gridApi: GridApi<IOlympicData>;

const gridOptions: GridOptions<IOlympicData> = {
    columnDefs: columnDefs,
    sideBar: {
        toolPanels: [
            {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                    suppressRowGroups: true,
                    suppressValues: true,
                    suppressPivots: true,
                    suppressPivotMode: true,
                },
            },
        ],
    },
    defaultColDef: {
        width: 100,
    },
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector<HTMLElement>('#myGrid')!;
    gridApi = createGrid(gridDiv, gridOptions);

    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
        .then((response) => response.json())
        .then((data: IOlympicData[]) => gridApi!.setGridOption('rowData', data));
});
