var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BeanStub } from "../context/beanStub.mjs";
import { Autowired, PostConstruct } from "../context/context.mjs";
import { ManagedFocusFeature } from "./managedFocusFeature.mjs";
export var TabGuardClassNames;
(function (TabGuardClassNames) {
    TabGuardClassNames["TAB_GUARD"] = "ag-tab-guard";
    TabGuardClassNames["TAB_GUARD_TOP"] = "ag-tab-guard-top";
    TabGuardClassNames["TAB_GUARD_BOTTOM"] = "ag-tab-guard-bottom";
})(TabGuardClassNames || (TabGuardClassNames = {}));
;
export class TabGuardCtrl extends BeanStub {
    constructor(params) {
        super();
        this.skipTabGuardFocus = false;
        const { comp, eTopGuard, eBottomGuard, focusTrapActive, focusInnerElement, onFocusIn, onFocusOut, shouldStopEventPropagation, onTabKeyDown, handleKeyDown, eFocusableElement } = params;
        this.comp = comp;
        this.eTopGuard = eTopGuard;
        this.eBottomGuard = eBottomGuard;
        this.providedFocusInnerElement = focusInnerElement;
        this.eFocusableElement = eFocusableElement;
        this.focusTrapActive = !!focusTrapActive;
        this.providedFocusIn = onFocusIn;
        this.providedFocusOut = onFocusOut;
        this.providedShouldStopEventPropagation = shouldStopEventPropagation;
        this.providedOnTabKeyDown = onTabKeyDown;
        this.providedHandleKeyDown = handleKeyDown;
    }
    postConstruct() {
        this.createManagedBean(new ManagedFocusFeature(this.eFocusableElement, {
            shouldStopEventPropagation: () => this.shouldStopEventPropagation(),
            onTabKeyDown: e => this.onTabKeyDown(e),
            handleKeyDown: e => this.handleKeyDown(e),
            onFocusIn: e => this.onFocusIn(e),
            onFocusOut: e => this.onFocusOut(e)
        }));
        this.activateTabGuards();
        [this.eTopGuard, this.eBottomGuard].forEach(guard => this.addManagedListener(guard, 'focus', this.onFocus.bind(this)));
    }
    handleKeyDown(e) {
        if (this.providedHandleKeyDown) {
            this.providedHandleKeyDown(e);
        }
    }
    tabGuardsAreActive() {
        return !!this.eTopGuard && this.eTopGuard.hasAttribute('tabIndex');
    }
    shouldStopEventPropagation() {
        if (this.providedShouldStopEventPropagation) {
            return this.providedShouldStopEventPropagation();
        }
        return false;
    }
    activateTabGuards() {
        const tabIndex = this.gridOptionsService.get('tabIndex');
        this.comp.setTabIndex(tabIndex.toString());
    }
    deactivateTabGuards() {
        this.comp.setTabIndex();
    }
    onFocus(e) {
        if (this.skipTabGuardFocus) {
            this.skipTabGuardFocus = false;
            return;
        }
        const fromBottom = e.target === this.eBottomGuard;
        if (this.providedFocusInnerElement) {
            this.providedFocusInnerElement(fromBottom);
        }
        else {
            this.focusInnerElement(fromBottom);
        }
    }
    onFocusIn(e) {
        if (this.focusTrapActive) {
            return;
        }
        if (this.providedFocusIn) {
            this.providedFocusIn(e);
        }
        this.deactivateTabGuards();
    }
    onFocusOut(e) {
        if (this.focusTrapActive) {
            return;
        }
        if (this.providedFocusOut) {
            this.providedFocusOut(e);
        }
        if (!this.eFocusableElement.contains(e.relatedTarget)) {
            this.activateTabGuards();
        }
    }
    onTabKeyDown(e) {
        if (this.providedOnTabKeyDown) {
            this.providedOnTabKeyDown(e);
            return;
        }
        if (this.focusTrapActive) {
            return;
        }
        if (e.defaultPrevented) {
            return;
        }
        const tabGuardsAreActive = this.tabGuardsAreActive();
        if (tabGuardsAreActive) {
            this.deactivateTabGuards();
        }
        const nextRoot = this.getNextFocusableElement(e.shiftKey);
        if (tabGuardsAreActive) {
            // ensure the tab guards are only re-instated once the event has finished processing, to avoid the browser
            // tabbing to the tab guard from inside the component
            setTimeout(() => this.activateTabGuards(), 0);
        }
        if (!nextRoot) {
            return;
        }
        nextRoot.focus();
        e.preventDefault();
    }
    focusInnerElement(fromBottom = false) {
        const focusable = this.focusService.findFocusableElements(this.eFocusableElement);
        if (this.tabGuardsAreActive()) {
            // remove tab guards from this component from list of focusable elements
            focusable.splice(0, 1);
            focusable.splice(focusable.length - 1, 1);
        }
        if (!focusable.length) {
            return;
        }
        focusable[fromBottom ? focusable.length - 1 : 0].focus({ preventScroll: true });
    }
    getNextFocusableElement(backwards) {
        return this.focusService.findNextFocusableElement(this.eFocusableElement, false, backwards);
    }
    forceFocusOutOfContainer(up = false) {
        const tabGuardToFocus = up ? this.eTopGuard : this.eBottomGuard;
        this.activateTabGuards();
        this.skipTabGuardFocus = true;
        tabGuardToFocus.focus();
        window.setTimeout(() => {
            this.activateTabGuards();
        });
    }
}
__decorate([
    Autowired('focusService')
], TabGuardCtrl.prototype, "focusService", void 0);
__decorate([
    PostConstruct
], TabGuardCtrl.prototype, "postConstruct", null);
