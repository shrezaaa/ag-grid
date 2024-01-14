// Type definitions for @ag-grid-community/core v31.0.0
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { UserCompDetails } from "../../components/framework/userComponentFactory";
import { BeanStub } from "../../context/beanStub";
import { Column, ColumnPinnedType } from "../../entities/column";
import { RowStyle } from "../../entities/gridOptions";
import { RowNode } from "../../entities/rowNode";
import { RowPosition } from "../../entities/rowPositionUtils";
import { AgEventListener, CellFocusedEvent, RowEvent } from "../../events";
import { RowContainerType } from "../../gridBodyComp/rowContainer/rowContainerCtrl";
import { IFrameworkOverrides } from "../../interfaces/iFrameworkOverrides";
import { Beans } from "../beans";
import { CellCtrl } from "../cell/cellCtrl";
import { ICellRenderer, ICellRendererParams } from "../cellRenderers/iCellRenderer";
import { GridOptionsService } from "../../gridOptionsService";
declare enum RowType {
    Normal = "Normal",
    FullWidth = "FullWidth",
    FullWidthLoading = "FullWidthLoading",
    FullWidthGroup = "FullWidthGroup",
    FullWidthDetail = "FullWidthDetail"
}
export interface IRowComp {
    setDomOrder(domOrder: boolean): void;
    addOrRemoveCssClass(cssClassName: string, on: boolean): void;
    setCellCtrls(cellCtrls: CellCtrl[], useFlushSync: boolean): void;
    showFullWidth(compDetails: UserCompDetails): void;
    getFullWidthCellRenderer(): ICellRenderer | null | undefined;
    setTop(top: string): void;
    setTransform(transform: string): void;
    setRowIndex(rowIndex: string): void;
    setRowId(rowId: string): void;
    setRowBusinessKey(businessKey: string): void;
    setUserStyles(styles: RowStyle | undefined): void;
    refreshFullWidth(getUpdatedParams: () => ICellRendererParams): boolean;
}
export declare class RowCtrl extends BeanStub {
    static DOM_DATA_KEY_ROW_CTRL: string;
    private instanceId;
    private readonly rowNode;
    private readonly beans;
    protected readonly gridOptionsService: GridOptionsService;
    private rowType;
    private leftGui;
    private centerGui;
    private rightGui;
    private fullWidthGui;
    private allRowGuis;
    private firstRowOnPage;
    private lastRowOnPage;
    private active;
    private stoppingRowEdit;
    private editingRow;
    private rowFocused;
    private centerCellCtrls;
    private leftCellCtrls;
    private rightCellCtrls;
    private slideInAnimation;
    private fadeInAnimation;
    private rowDragComps;
    private readonly useAnimationFrameForCreate;
    private paginationPage;
    private lastMouseDownOnDragger;
    private rowLevel;
    private rowStyles;
    private readonly emptyStyle;
    private readonly printLayout;
    private readonly suppressRowTransform;
    private updateColumnListsPending;
    private rowId;
    private tabIndex;
    private businessKeySanitised;
    private businessKeyForNodeFunc;
    constructor(rowNode: RowNode, beans: Beans, animateIn: boolean, useAnimationFrameForCreate: boolean, printLayout: boolean);
    private initRowBusinessKey;
    private updateRowBusinessKey;
    getRowId(): string | null;
    getRowStyles(): RowStyle | undefined;
    getTabIndex(): number | undefined;
    isSticky(): boolean;
    getBeans(): Beans;
    getInstanceId(): string;
    setComp(rowComp: IRowComp, element: HTMLElement, containerType: RowContainerType): void;
    unsetComp(containerType: RowContainerType): void;
    isCacheable(): boolean;
    setCached(cached: boolean): void;
    private initialiseRowComp;
    private setRowCompRowBusinessKey;
    getBusinessKey(): string | null;
    private setRowCompRowId;
    private executeSlideAndFadeAnimations;
    private addRowDraggerToRow;
    private setupFullWidth;
    isPrintLayout(): boolean;
    getFullWidthCellRenderers(): (ICellRenderer<any> | null | undefined)[];
    getCellElement(column: Column): HTMLElement | null;
    executeProcessRowPostCreateFunc(): void;
    private areAllContainersReady;
    private setRowType;
    private updateColumnLists;
    private createCellCtrls;
    private updateColumnListsImpl;
    private setCellCtrls;
    private getCellCtrlsForContainer;
    private createAllCellCtrls;
    private isCellEligibleToBeRemoved;
    getDomOrder(): boolean;
    private listenOnDomOrder;
    private setAnimateFlags;
    isEditing(): boolean;
    isFullWidth(): boolean;
    getRowType(): RowType;
    refreshFullWidth(): boolean;
    private addListeners;
    private addListenersForCellComps;
    private onRowNodeDataChanged;
    private postProcessCss;
    private onRowNodeHighlightChanged;
    private postProcessRowDragging;
    private updateExpandedCss;
    private onDisplayedColumnsChanged;
    private onVirtualColumnsChanged;
    getRowPosition(): RowPosition;
    onKeyboardNavigate(keyboardEvent: KeyboardEvent): void;
    onTabKeyDown(keyboardEvent: KeyboardEvent): void;
    onFullWidthRowFocused(event?: CellFocusedEvent): void;
    refreshCell(cellCtrl: CellCtrl): void;
    private removeCellCtrl;
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    createRowEvent(type: string, domEvent?: Event): RowEvent;
    private createRowEventWithSource;
    private onRowDblClick;
    private onRowMouseDown;
    onRowClick(mouseEvent: MouseEvent): void;
    setupDetailRowAutoHeight(eDetailGui: HTMLElement): void;
    createFullWidthParams(eRow: HTMLElement, pinned: ColumnPinnedType): ICellRendererParams;
    private addFullWidthRowDragging;
    private onUiLevelChanged;
    private isFirstRowOnPage;
    private isLastRowOnPage;
    private refreshFirstAndLastRowStyles;
    stopEditing(cancel?: boolean): void;
    setInlineEditingCss(editing: boolean): void;
    private setEditingRow;
    startRowEditing(key?: string | null, sourceRenderedCell?: CellCtrl | null, event?: KeyboardEvent | null): void;
    getAllCellCtrls(): CellCtrl[];
    private postProcessClassesFromGridOptions;
    private postProcessRowClassRules;
    private setStylesFromGridOptions;
    private getPinnedForContainer;
    private getInitialRowClasses;
    processStylesFromGridOptions(): RowStyle | undefined;
    private onRowSelected;
    private createAriaLabel;
    isUseAnimationFrameForCreate(): boolean;
    addHoverFunctionality(eRow: HTMLElement): void;
    private roundRowTopToBounds;
    protected getFrameworkOverrides(): IFrameworkOverrides;
    private forEachGui;
    private onRowHeightChanged;
    addEventListener(eventType: string, listener: AgEventListener): void;
    removeEventListener(eventType: string, listener: AgEventListener): void;
    destroyFirstPass(suppressAnimation?: boolean): void;
    destroySecondPass(): void;
    private setFocusedClasses;
    private onCellFocusChanged;
    private onPaginationChanged;
    private onTopChanged;
    private onPaginationPixelOffsetChanged;
    private applyPaginationOffset;
    setRowTop(pixels: number): void;
    getInitialRowTop(rowContainerType: RowContainerType): string | undefined;
    getInitialTransform(rowContainerType: RowContainerType): string | undefined;
    private getInitialRowTopShared;
    private setRowTopStyle;
    getRowNode(): RowNode;
    getCellCtrl(column: Column): CellCtrl | null;
    private onRowIndexChanged;
    getRowIndex(): string;
    private updateRowIndexes;
}
export {};
