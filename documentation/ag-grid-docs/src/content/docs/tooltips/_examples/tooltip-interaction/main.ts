import { GridApi, createGrid, ITooltipParams, ColDef, GridOptions } from '@ag-grid-community/core';

const columnDefs: ColDef[] = [
  {
    headerName: 'Athlete',
    field: 'athlete',
    tooltipComponentParams: { color: '#55AA77' },
    tooltipField: 'country',
    headerTooltip: 'Tooltip for Athlete Column Header',
  },
  {
    field: 'age',
    tooltipValueGetter: (p: ITooltipParams) => 'Create any fixed message, eg This is the Athelets Age',
    headerTooltip: 'Tooltip for Age Column Header',
  },
  {
    field: 'year',
    tooltipValueGetter: (p: ITooltipParams) => 'This is a dynamic tooltip using the value of ' + p.value,
    headerTooltip: 'Tooltip for Year Column Header',
  },
  {
    field: 'sport',
    tooltipValueGetter: () => 'Tooltip text about Sport should go here',
    headerTooltip: 'Tooltip for Sport Column Header',
  }    
]

let gridApi: GridApi<IOlympicData>;

const gridOptions: GridOptions<IOlympicData> = {
  defaultColDef: {
    flex: 1,
    minWidth: 100
  },
  tooltipInteraction: true,
  rowData: null,
  columnDefs: columnDefs,
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', () => {
  const gridDiv = document.querySelector<HTMLElement>('#myGrid')!
  gridApi = createGrid(gridDiv, gridOptions);

  fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(response => response.json())
    .then(data => {
      gridApi!.setGridOption('rowData', data)
    })
})
