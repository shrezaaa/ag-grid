// Type definitions for @ag-grid-community/core v31.0.0
// Project: https://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import * as AriaUtils from './aria';
export declare const _: {
    utf8_encode(s: string | null): string;
    capitalise(str: string): string;
    escapeString(toEscape?: string | null | undefined, skipEscapingHtmlChars?: boolean | undefined): string | null;
    camelCaseToHumanText(camelCase: string | undefined): string | null;
    camelCaseToHyphenated(camelCase: string): string;
    convertToSet<T>(list: T[]): Set<T>;
    sortRowNodesByOrder(rowNodes: import("../main").RowNode<any>[], rowNodeOrder: {
        [id: string]: number;
    }): boolean;
    iterateObject<T_1>(object: {
        [p: string]: T_1;
    } | T_1[] | null | undefined, callback: (key: string, value: T_1) => void): void;
    cloneObject<T_2 extends {}>(object: T_2): T_2;
    deepCloneObject<T_3>(object: T_3): T_3;
    deepCloneDefinition<T_4>(object: T_4, keysToSkip?: string[] | undefined): T_4 | undefined;
    getProperty<T_5, K extends keyof T_5>(object: T_5, key: K): any;
    setProperty<T_6, K_1 extends keyof T_6>(object: T_6, key: K_1, value: any): void;
    copyPropertiesIfPresent<S, T_7 extends S, K_2 extends keyof S>(source: S, target: T_7, ...properties: K_2[]): void;
    copyPropertyIfPresent<S_1, T_8 extends S_1, K_3 extends keyof S_1>(source: S_1, target: T_8, property: K_3, transform?: ((value: S_1[K_3]) => any) | undefined): void;
    getAllKeysInObjects(objects: any[]): string[];
    getAllValuesInObject<T_9 extends Object>(obj: T_9): any[];
    mergeDeep(dest: any, source: any, copyUndefined?: boolean, makeCopyOfSimpleObjects?: boolean): void;
    missingOrEmptyObject(value: any): boolean;
    get(source: any, expression: string, defaultValue: any): any;
    set(target: any, expression: string, value: any): void;
    getValueUsingField(data: any, field: string, fieldContainsDots: boolean): any;
    removeAllReferences<T_10>(obj: any, preserveKeys: (keyof T_10)[] | undefined, preDestroyLink: string): void;
    isNonNullObject(value: any): boolean;
    padStartWidthZeros(value: number, totalStringSize: number): string;
    createArrayOfNumbers(first: number, last: number): number[];
    cleanNumber(value: any): number | null;
    decToHex(number: number, bytes: number): string;
    formatNumberTwoDecimalPlacesAndCommas(value: number, thousandSeparator: string, decimalSeparator: string): string;
    formatNumberCommas(value: number, thousandSeparator: string, decimalSeparator: string): string;
    sum(values: number[] | null): number | null;
    areEventsNear(e1: MouseEvent | Touch, e2: MouseEvent | Touch, pixelCount: number): boolean;
    convertToMap<K_4, V>(arr: [K_4, V][]): Map<K_4, V>;
    mapById<V_1>(arr: V_1[], callback: (obj: V_1) => string): Map<string, V_1>;
    keys<T_11>(map: Map<T_11, any>): T_11[];
    isEventFromPrintableCharacter(event: KeyboardEvent): boolean;
    isUserSuppressingKeyboardEvent(gridOptionsService: import("../gridOptionsService").GridOptionsService, keyboardEvent: KeyboardEvent, rowNode: import("../main").IRowNode<any>, column: import("../main").Column<any>, editing: boolean): boolean;
    isUserSuppressingHeaderKeyboardEvent(gridOptionsService: import("../gridOptionsService").GridOptionsService, keyboardEvent: KeyboardEvent, headerRowIndex: number, column: import("../main").ColumnGroup | import("../main").Column<any>): boolean;
    normaliseQwertyAzerty(keyboardEvent: KeyboardEvent): string;
    isDeleteKey(key: string, alwaysReturnFalseOnBackspace?: boolean): boolean;
    createIcon(iconName: string, gridOptionsService: import("../gridOptionsService").GridOptionsService, column: import("../main").Column<any> | null): Element;
    createIconNoSpan(iconName: string, gridOptionsService: import("../gridOptionsService").GridOptionsService, column?: import("../main").Column<any> | null | undefined, forceCreate?: boolean | undefined): Element | undefined;
    iconNameClassMap: {
        [key: string]: string;
    };
    makeNull<T_12 extends unknown>(value?: T_12 | undefined): T_12 | null;
    exists(value: string | null | undefined, allowEmptyString?: boolean | undefined): value is string;
    exists<T_13>(value: T_13): value is NonNullable<T_13>;
    missing<T_14>(value: T_14 | null | undefined): value is Exclude<undefined, T_14> | Exclude<null, T_14>;
    missingOrEmpty<T_15>(value?: string | T_15[] | null | undefined): boolean;
    toStringOrNull(value: any): string | null;
    attrToNumber(value?: string | number | null | undefined): number | null | undefined;
    attrToBoolean(value?: string | boolean | null | undefined): boolean | undefined;
    attrToString(value?: string | undefined): string | undefined;
    jsonEquals<T1, T2>(val1: T1, val2: T2): boolean;
    defaultComparator(valueA: any, valueB: any, accentedCompare?: boolean): number;
    values<T_16>(object: {
        [key: string]: T_16;
    } | Set<T_16> | Map<any, T_16>): T_16[];
    fuzzyCheckStrings(inputValues: string[], validValues: string[], allSuggestions: string[]): {
        [p: string]: string[];
    };
    fuzzySuggestions(inputValue: string, allSuggestions: string[], hideIrrelevant?: boolean | undefined, filterByPercentageOfBestMatch?: number | undefined): {
        values: string[];
        indices: number[];
    };
    doOnce(func: () => void, key: string): void;
    warnOnce(msg: string): void;
    errorOnce(msg: string): void;
    getFunctionName(funcConstructor: any): any;
    isFunction(val: any): boolean;
    executeInAWhile(funcs: Function[]): void;
    executeNextVMTurn(func: () => void): void;
    executeAfter(funcs: Function[], milliseconds?: number): void;
    debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void;
    throttle(func: (...args: any[]) => void, wait: number): (...args: any[]) => void;
    waitUntil(condition: () => boolean, callback: () => void, timeout?: number, timeoutMessage?: string | undefined): void;
    compose(...fns: Function[]): (arg: any) => any;
    callIfPresent(func: Function): void;
    noop: () => void;
    stopPropagationForAgGrid(event: Event): void;
    isStopPropagationForAgGrid(event: Event): boolean;
    getCtrlForEventTarget<T_17>(gridOptionsService: import("../gridOptionsService").GridOptionsService, eventTarget: EventTarget | null, type: string): T_17 | null;
    isElementInEventPath(element: HTMLElement, event: Event): boolean;
    createEventPath(event: {
        target: EventTarget;
    }): EventTarget[];
    getEventPath(event: Event | {
        target: EventTarget;
    }): EventTarget[];
    addSafePassiveEventListener(frameworkOverrides: import("../main").IFrameworkOverrides, eElement: HTMLElement, event: string, listener: (event?: any) => void): void;
    isEventSupported: (eventName: any) => boolean;
    radioCssClass(element: HTMLElement, elementClass: string | null, otherElementClass?: string | null | undefined): void;
    isFocusableFormField(element: HTMLElement): boolean;
    setDisplayed(element: Element, displayed: boolean, options?: {
        skipAriaHidden?: boolean | undefined;
    }): void;
    setVisible(element: HTMLElement, visible: boolean, options?: {
        skipAriaHidden?: boolean | undefined;
    }): void;
    setDisabled(element: HTMLElement, disabled: boolean): void;
    isElementChildOfClass(element: HTMLElement | null, cls: string, maxNest?: number | HTMLElement | undefined): boolean;
    getElementSize(el: HTMLElement): {
        height: number;
        width: number;
        borderTopWidth: number;
        borderRightWidth: number;
        borderBottomWidth: number;
        borderLeftWidth: number;
        paddingTop: number;
        paddingRight: number;
        paddingBottom: number;
        paddingLeft: number;
        marginTop: number;
        marginRight: number;
        marginBottom: number;
        marginLeft: number;
        boxSizing: string;
    };
    getInnerHeight(el: HTMLElement): number;
    getInnerWidth(el: HTMLElement): number;
    getAbsoluteHeight(el: HTMLElement): number;
    getAbsoluteWidth(el: HTMLElement): number;
    getElementRectWithOffset(el: HTMLElement): {
        top: number;
        left: number;
        right: number;
        bottom: number;
    };
    isRtlNegativeScroll(): boolean;
    getScrollLeft(element: HTMLElement, rtl: boolean): number;
    setScrollLeft(element: HTMLElement, value: number, rtl: boolean): void;
    clearElement(el: HTMLElement): void;
    removeFromParent(node: Element | null): void;
    isInDOM(element: HTMLElement): boolean;
    isVisible(element: HTMLElement): any;
    loadTemplate(template: string): HTMLElement;
    ensureDomOrder(eContainer: HTMLElement, eChild: HTMLElement, eChildBefore?: HTMLElement | null | undefined): void;
    setDomChildOrder(eContainer: HTMLElement, orderedChildren: (HTMLElement | null)[]): void;
    insertWithDomOrder(eContainer: HTMLElement, eToInsert: HTMLElement, eChildBefore: HTMLElement | null): void;
    addStylesToElement(eElement: any, styles: import("../main").RowStyle | import("../main").CellStyle | null | undefined): void;
    isHorizontalScrollShowing(element: HTMLElement): boolean;
    isVerticalScrollShowing(element: HTMLElement): boolean;
    setElementWidth(element: HTMLElement, width: string | number): void;
    setFixedWidth(element: HTMLElement, width: string | number): void;
    setElementHeight(element: HTMLElement, height: string | number): void;
    setFixedHeight(element: HTMLElement, height: string | number): void;
    formatSize(size: string | number): string;
    isNodeOrElement(o: any): boolean;
    copyNodeList(nodeList: NodeListOf<Node> | null): Node[];
    iterateNamedNodeMap(map: NamedNodeMap, callback: (key: string, value: string) => void): void;
    addOrRemoveAttribute(element: HTMLElement, name: string, value: any): void;
    nodeListForEach<T_18 extends Node>(nodeList: NodeListOf<T_18> | null, action: (value: T_18) => void): void;
    bindCellRendererToHtmlElement(cellRendererPromise: import("./promise").AgPromise<import("../main").ICellRendererComp<any>>, eTarget: HTMLElement): void;
    FOCUSABLE_SELECTOR: "[tabindex], input, select, button, textarea, [href]";
    FOCUSABLE_EXCLUDE: "[disabled], .ag-disabled:not(.ag-button), .ag-disabled *";
    serialiseDate(date: Date | null, includeTime?: boolean, separator?: string): string | null;
    dateToFormattedString(date: Date, format?: string): string;
    parseDateTimeFromString(value?: string | null | undefined): Date | null;
    isBrowserSafari(): boolean;
    getSafariVersion(): number;
    isBrowserChrome(): boolean;
    isBrowserFirefox(): boolean;
    isMacOsUserAgent(): boolean;
    isIOSUserAgent(): boolean;
    browserSupportsPreventScroll(): boolean;
    getTabIndex(el: HTMLElement | null): string | null;
    getMaxDivHeight(): number;
    getBodyWidth(): number;
    getBodyHeight(): number;
    getScrollbarWidth(): number | null;
    isInvisibleScrollbar(): boolean;
    firstExistingValue<A>(...values: A[]): A | null;
    existsAndNotEmpty<T_19>(value?: T_19[] | undefined): boolean;
    last<T_20>(arr: T_20[]): T_20;
    last<T_21 extends Node>(arr: NodeListOf<T_21>): T_21;
    areEqual<T_22>(a?: T_22[] | null | undefined, b?: T_22[] | null | undefined, comparator?: ((a: T_22, b: T_22) => boolean) | undefined): boolean;
    shallowCompare(arr1: any[], arr2: any[]): boolean;
    sortNumerically(array: number[]): number[];
    removeRepeatsFromArray<T_23>(array: T_23[], object: T_23): void;
    removeFromUnorderedArray<T_24>(array: T_24[], object: T_24): void;
    removeFromArray<T_25>(array: T_25[], object: T_25): void;
    removeAllFromUnorderedArray<T_26>(array: T_26[], toRemove: T_26[]): void;
    removeAllFromArray<T_27>(array: T_27[], toRemove: T_27[]): void;
    insertIntoArray<T_28>(array: T_28[], object: T_28, toIndex: number): void;
    insertArrayIntoArray<T_29>(dest: T_29[], src: T_29[], toIndex: number): void;
    moveInArray<T_30>(array: T_30[], objectsToMove: T_30[], toIndex: number): void;
    includes<T_31>(array: T_31[], value: T_31): boolean;
    flatten<T_32>(arrayOfArrays: (T_32 | T_32[])[]): T_32[];
    pushAll<T_33>(target: T_33[], source: T_33[]): void;
    toStrings<T_34>(array: T_34[]): (string | null)[] | null;
    forEachReverse<T_35>(list: T_35[], action: (value: T_35, index: number) => void): void;
    setAriaRole(element: Element, role?: string | null | undefined): void;
    getAriaSortState(sortDirection: "mixed" | import("../main").SortDirection): AriaUtils.ColumnSortState;
    getAriaLevel(element: Element): number;
    getAriaPosInSet(element: Element): number;
    getAriaLabel(element: Element): string | null;
    setAriaLabel(element: Element, label?: string | null | undefined): void;
    setAriaLabelledBy(element: Element, labelledBy: string): void;
    setAriaDescription(element: Element, description?: string | undefined): void;
    setAriaDescribedBy(element: Element, describedby?: string | undefined): void;
    setAriaLive(element: Element, live?: "polite" | "assertive" | "off" | null | undefined): void;
    setAriaAtomic(element: Element, atomic: boolean | null): void;
    setAriaRelevant(element: Element, relevant: "all" | "text" | "additions" | "additions text" | "removals" | null): void;
    setAriaLevel(element: Element, level: number): void;
    setAriaDisabled(element: Element, disabled: boolean): void;
    setAriaHidden(element: Element, hidden: boolean): void;
    setAriaActiveDescendant(element: Element, descendantId: string | null): void;
    setAriaExpanded(element: Element, expanded: boolean): void;
    removeAriaExpanded(element: Element): void;
    setAriaSetSize(element: Element, setsize: number): void;
    setAriaPosInSet(element: Element, position: number): void;
    setAriaMultiSelectable(element: Element, multiSelectable: boolean): void;
    setAriaRowCount(element: Element, rowCount: number): void;
    setAriaRowIndex(element: Element, rowIndex: number): void;
    setAriaColCount(element: Element, colCount: number): void;
    setAriaColIndex(element: Element, colIndex: number): void;
    setAriaColSpan(element: Element, colSpan: number): void;
    setAriaSort(element: Element, sort: AriaUtils.ColumnSortState): void;
    removeAriaSort(element: Element): void;
    setAriaSelected(element: Element, selected?: boolean | undefined): void;
    setAriaChecked(element: Element, checked?: boolean | undefined): void;
    setAriaControls(controllerElement: Element, controlledElement: Element): void;
    getAriaCheckboxStateName(translate: (key: string, defaultValue: string, variableValues?: string[] | undefined) => string, state?: boolean | undefined): string;
};
