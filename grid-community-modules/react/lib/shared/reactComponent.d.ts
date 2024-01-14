// @ag-grid-community/react v31.0.0
import { ReactPortal } from 'react';
import { AgPromise, ComponentType, IComponent, WrappableInterface } from '@ag-grid-community/core';
import { PortalManager } from './portalManager';
export declare class ReactComponent implements IComponent<any>, WrappableInterface {
    protected eParentElement: HTMLElement;
    protected componentInstance: any;
    protected reactComponent: any;
    protected portalManager: PortalManager;
    protected portal: ReactPortal | null;
    protected statelessComponent: boolean;
    protected componentType: ComponentType;
    protected key: string;
    private portalKey;
    private oldPortal;
    private reactElement;
    private params;
    protected instanceCreated: AgPromise<boolean>;
    private resolveInstanceCreated?;
    constructor(reactComponent: any, portalManager: PortalManager, componentType: ComponentType);
    getGui(): HTMLElement;
    destroy(): void;
    protected createParentElement(params: any): HTMLElement;
    protected addParentContainerStyleAndClasses(): void;
    statelessComponentRendered(): boolean;
    getFrameworkComponentInstance(): any;
    isStatelessComponent(): boolean;
    getReactComponentName(): string;
    getMemoType(): symbol | 60115;
    private hasSymbol;
    protected isStateless(Component: any): boolean;
    hasMethod(name: string): boolean;
    callMethod(name: string, args: IArguments): void;
    addMethod(name: string, callback: Function): void;
    init(params: any): AgPromise<void>;
    private createOrUpdatePortal;
    protected createElement(reactComponent: any, props: any): any;
    private createReactComponent;
    isNullValue(): boolean;
    rendered(): boolean;
    private valueRenderedIsNull;
    protected refreshComponent(args: any): void;
    protected fallbackMethod(name: string, params: any): any;
    protected fallbackMethodAvailable(name: string): boolean;
}
