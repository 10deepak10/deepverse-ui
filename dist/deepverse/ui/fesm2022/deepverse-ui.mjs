import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, HostListener, Output, ContentChildren, HostBinding, PLATFORM_ID, Inject, Directive, ContentChild, signal, ViewChildren, NgModule, ViewEncapsulation, forwardRef, ViewChild, computed } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import * as i1$1 from '@angular/router';
import { RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import * as i1$2 from '@angular/forms';
import { FormsModule, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

class UiService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UiService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UiService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UiService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class UiComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UiComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: UiComponent, isStandalone: true, selector: "lib-ui", ngImport: i0, template: `
    <p>
      ui works!
    </p>
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UiComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ui', standalone: true, imports: [CommonModule], template: `
    <p>
      ui works!
    </p>
  ` }]
        }] });

class IconComponent {
    constructor() {
        this.iconPrefix = '';
        this.size = '24px';
        this.bg = ['transparent', 'transparent', 'transparent'];
        this.borderColor = 'transparent';
        this.rounded = 'none';
        this.padding = [NaN];
        this.alt = '';
        this._asBtn = false;
        this._defaultColor = true;
        this._disabled = false;
        this.classString = { filter: '', hover: '' };
    }
    get asBtn() {
        return this._asBtn;
    }
    set asBtn(value) {
        this._asBtn = coerceBooleanProperty(value);
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    ngOnChanges(changes) {
        if (changes['color']) {
            this._defaultColor = false;
        }
    }
    getIconStyles() {
        return {
            '-webkit-mask-image': 'url(' + this.iconPrefix + this.icon + ')',
            'mask-image': 'url(' + this.iconPrefix + this.icon + ')',
            '--size': typeof this.size == 'number' ? this.size + 'px' : this.size,
            '--color': this.getColorValue(this.color?.[0] || 'grey-1100'),
            '--hover': this.getColorValue(this.color?.[1] || this.color?.[0] || 'grey-1100'),
            '--active': this.getColorValue(this.color?.[2] || this.color?.[1] || this.color?.[0] || 'grey-1100'),
        };
    }
    getIconBgStyles() {
        return {
            '--bgSize': typeof this.bgSize == 'number' ? this.bgSize + 'px' : this.bgSize,
            '--bg': this.getColorValue(this.bg[0] || 'transparent'),
            '--bgHover': this.getColorValue(this.bg[1] || this.bg[0] || 'transparent'),
            '--bgActive': this.getColorValue(this.bg[2] || this.bg[1] || this.bg[0] || 'transparent'),
            '--rounded': this.rounded == 'sm'
                ? '8px'
                : this.rounded == 'full'
                    ? '99999px'
                    : this.rounded == 'md'
                        ? '12px'
                        : '0px',
            '--borderColor': this.getColorValue(this.borderColor),
            '--size': typeof this.size == 'number' ? this.size + 'px' : this.size,
            '--color': this.getColorValue(this.color?.[0] || 'grey-1100'),
            '--hover': this.getColorValue(this.color?.[1] || this.color?.[0] || 'grey-1100'),
            '--active': this.getColorValue(this.color?.[2] || this.color?.[1] || this.color?.[0] || 'grey-1100'),
        };
    }
    ngOnInit() {
        if (!this.bgSize) {
            this.bgSize = this.size;
        }
        this._padding = `${this.padding[0] != undefined ? this.padding[0] + 'px' : ''} ${this.padding[1] != undefined ? this.padding[1] + 'px' : ''} ${this.padding[2] != undefined ? this.padding[2] + 'px' : ''} ${this.padding[3] != undefined ? this.padding[3] + 'px' : ''} `;
        if (!this.icon) {
            console.error(`[IconComponent]: Missing 'icon' input. Please provide a valid icon name.`);
            return;
        }
        if (!this.icon.endsWith('.svg')) {
            console.warn(`[IconComponent]: The provided icon ('${this.icon}') is not an SVG. Please use an SVG file for optimal display.`);
        }
        if (!this.alt && this.icon) {
            this.alt = this.icon.split('.')[0];
        }
    }
    getColorValue(color) {
        return color.startsWith('#') ? color : 'var(--' + color + ')';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: IconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: IconComponent, isStandalone: true, selector: "dv-icon", inputs: { icon: "icon", iconPrefix: "iconPrefix", size: "size", bgSize: "bgSize", color: "color", bg: "bg", borderColor: "borderColor", rounded: "rounded", padding: "padding", alt: "alt", asBtn: "asBtn", disabled: "disabled" }, host: { properties: { "class.disabled": "_disabled", "class.cursor": "_asBtn" } }, usesOnChanges: true, ngImport: i0, template: "<ng-container *ngTemplateOutlet=\" _asBtn ? iconBackground : mainIcon \"></ng-container>\n<ng-template #iconBackground>\n  <div\n    class=\"icon-container\"\n    [class.disabled]=\"_disabled\"\n    [style]=\"getIconBgStyles()\"\n    [style.border]=\"borderColor !=='transparent'\"\n    [style.padding]=\"_padding\">\n    <ng-container *ngTemplateOutlet=\"mainIcon\"></ng-container>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-template #mainIcon>\n  <span *ngIf=\"!_defaultColor\" class=\"icon\" [style]=\"getIconStyles()\"></span>\n  <img *ngIf=\"icon && _defaultColor\"  class=\"{{classString.filter}} {{classString.hover}}\" [src]=\"iconPrefix+icon\" [style.--size]=\"size+'px'\" [height]=\"size\" [width]=\"size\" [alt]=\"alt\" />\n</ng-template>\n", styles: ["img{transition:.4s;display:block;width:var(--size);height:var(--size)}.hover_black:hover,.filter_black{filter:brightness(0) invert(28%)}.hover_gray:hover,.filter_gray{filter:brightness(0) invert(62%)}.hover_white:hover,.filter_white{filter:brightness(0) invert(1)}.hover_default:hover{filter:none}:host{width:fit-content;height:fit-content;display:inline-flex;justify-content:center;align-items:center}:host .icon{position:relative;flex-shrink:0;width:var(--size);height:var(--size);text-align:center;background:var(--color);background-position:center;transition:.2s;mask-size:var(--size) var(--size);mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:var(--size) var(--size);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat}:host .icon:hover{background:var(--hover)}:host .icon:active{background:var(--active)}.icon-container{position:relative;display:inline-flex;justify-content:center;align-items:center;min-width:var(--bgSize);height:var(--bgSize);background:var(--bg);border-radius:var(--rounded);flex-shrink:0;box-sizing:border-box;border:1px solid var(--borderColor);transition:.2s;color:var(--color);font-size:var(--size)}.icon-container:hover:not(.disabled){background:var(--bgHover);color:var(--hover)}.icon-container:hover:not(.disabled) .icon{background:var(--hover)}.icon-container:active{background:var(--bgActive);color:var(--active)}.icon-container:active .icon{background:var(--active)}.icon-container.disabled{cursor:not-allowed;background:var(--grey-300);color:var(--grey-700);border-color:var(--grey-300)}.icon-container.disabled .icon{background:var(--grey-700)}.icon-container.disabled:active{pointer-events:none}:host(.disabled){cursor:not-allowed}:host(.disabled):active{pointer-events:none}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: IconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-icon', standalone: true, imports: [CommonModule], host: {
                        '[class.disabled]': '_disabled',
                        '[class.cursor]': '_asBtn',
                    }, template: "<ng-container *ngTemplateOutlet=\" _asBtn ? iconBackground : mainIcon \"></ng-container>\n<ng-template #iconBackground>\n  <div\n    class=\"icon-container\"\n    [class.disabled]=\"_disabled\"\n    [style]=\"getIconBgStyles()\"\n    [style.border]=\"borderColor !=='transparent'\"\n    [style.padding]=\"_padding\">\n    <ng-container *ngTemplateOutlet=\"mainIcon\"></ng-container>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n<ng-template #mainIcon>\n  <span *ngIf=\"!_defaultColor\" class=\"icon\" [style]=\"getIconStyles()\"></span>\n  <img *ngIf=\"icon && _defaultColor\"  class=\"{{classString.filter}} {{classString.hover}}\" [src]=\"iconPrefix+icon\" [style.--size]=\"size+'px'\" [height]=\"size\" [width]=\"size\" [alt]=\"alt\" />\n</ng-template>\n", styles: ["img{transition:.4s;display:block;width:var(--size);height:var(--size)}.hover_black:hover,.filter_black{filter:brightness(0) invert(28%)}.hover_gray:hover,.filter_gray{filter:brightness(0) invert(62%)}.hover_white:hover,.filter_white{filter:brightness(0) invert(1)}.hover_default:hover{filter:none}:host{width:fit-content;height:fit-content;display:inline-flex;justify-content:center;align-items:center}:host .icon{position:relative;flex-shrink:0;width:var(--size);height:var(--size);text-align:center;background:var(--color);background-position:center;transition:.2s;mask-size:var(--size) var(--size);mask-repeat:no-repeat;mask-position:center;-webkit-mask-size:var(--size) var(--size);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat}:host .icon:hover{background:var(--hover)}:host .icon:active{background:var(--active)}.icon-container{position:relative;display:inline-flex;justify-content:center;align-items:center;min-width:var(--bgSize);height:var(--bgSize);background:var(--bg);border-radius:var(--rounded);flex-shrink:0;box-sizing:border-box;border:1px solid var(--borderColor);transition:.2s;color:var(--color);font-size:var(--size)}.icon-container:hover:not(.disabled){background:var(--bgHover);color:var(--hover)}.icon-container:hover:not(.disabled) .icon{background:var(--hover)}.icon-container:active{background:var(--bgActive);color:var(--active)}.icon-container:active .icon{background:var(--active)}.icon-container.disabled{cursor:not-allowed;background:var(--grey-300);color:var(--grey-700);border-color:var(--grey-300)}.icon-container.disabled .icon{background:var(--grey-700)}.icon-container.disabled:active{pointer-events:none}:host(.disabled){cursor:not-allowed}:host(.disabled):active{pointer-events:none}\n"] }]
        }], ctorParameters: () => [], propDecorators: { icon: [{
                type: Input,
                args: ['icon']
            }], iconPrefix: [{
                type: Input,
                args: ['iconPrefix']
            }], size: [{
                type: Input
            }], bgSize: [{
                type: Input
            }], color: [{
                type: Input
            }], bg: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], rounded: [{
                type: Input
            }], padding: [{
                type: Input
            }], alt: [{
                type: Input
            }], asBtn: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class LayoutComponent {
    constructor() {
        this.layoutType = 'full-header';
        this.footerFixed = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: LayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: LayoutComponent, isStandalone: true, selector: "dv-layout", inputs: { layoutType: "layoutType", footerFixed: "footerFixed" }, ngImport: i0, template: "<main class=\"main-container\">\n  <ng-container  *ngIf=\"layoutType == 'full-header'\">\n    <ng-container *ngTemplateOutlet=\"headerTemplate\" ></ng-container>\n </ng-container>\n  <div class=\"content-container\">\n    <div class=\"sidebar-container\">\n      <ng-content select=\"dv-sidebar\"></ng-content>\n    </div>\n    <div class=\"layout-content\" [ngClass]=\"footerFixed ? 'footer-fixed' :'footer-with-content'\">\n      <ng-container *ngIf=\"layoutType == 'full-sidebar'\">\n        <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n     </ng-container>\n      <div class=\"content\"><ng-content></ng-content></div>\n      <ng-content select=\"dv-footer\"></ng-content>\n    </div>\n  </div>\n</main>\n\n<ng-template #headerTemplate>\n  <ng-content select=\"dv-header\"></ng-content>\n</ng-template>", styles: [".main-container{width:100%;height:100dvh;display:flex;flex-direction:column;overflow-y:hidden}.content-container{display:flex;position:relative;flex:1 0 1px;overflow:hidden}.content{height:auto;flex-grow:1;overflow:auto}.layout-content{position:relative;display:flex;flex-direction:column;height:100%;flex:1}.layout-content.footer-fixed{overflow-y:auto}.layout-content.footer-fixed div{overflow-y:auto;flex-grow:1}.layout-content.footer-with-content{overflow-y:auto}.layout-content.footer-with-content div{flex:1}.layout-content .layout-footer{width:100%}.sidebar-container{min-width:84px;transition:all .3s ease}.sidebar-container:has(>.expanded){min-width:300px}@media screen and (max-width: 767px){.sidebar-container{min-width:auto!important}.content-container{gap:0px!important}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: LayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-layout', standalone: true, imports: [CommonModule], template: "<main class=\"main-container\">\n  <ng-container  *ngIf=\"layoutType == 'full-header'\">\n    <ng-container *ngTemplateOutlet=\"headerTemplate\" ></ng-container>\n </ng-container>\n  <div class=\"content-container\">\n    <div class=\"sidebar-container\">\n      <ng-content select=\"dv-sidebar\"></ng-content>\n    </div>\n    <div class=\"layout-content\" [ngClass]=\"footerFixed ? 'footer-fixed' :'footer-with-content'\">\n      <ng-container *ngIf=\"layoutType == 'full-sidebar'\">\n        <ng-container *ngTemplateOutlet=\"headerTemplate\"></ng-container>\n     </ng-container>\n      <div class=\"content\"><ng-content></ng-content></div>\n      <ng-content select=\"dv-footer\"></ng-content>\n    </div>\n  </div>\n</main>\n\n<ng-template #headerTemplate>\n  <ng-content select=\"dv-header\"></ng-content>\n</ng-template>", styles: [".main-container{width:100%;height:100dvh;display:flex;flex-direction:column;overflow-y:hidden}.content-container{display:flex;position:relative;flex:1 0 1px;overflow:hidden}.content{height:auto;flex-grow:1;overflow:auto}.layout-content{position:relative;display:flex;flex-direction:column;height:100%;flex:1}.layout-content.footer-fixed{overflow-y:auto}.layout-content.footer-fixed div{overflow-y:auto;flex-grow:1}.layout-content.footer-with-content{overflow-y:auto}.layout-content.footer-with-content div{flex:1}.layout-content .layout-footer{width:100%}.sidebar-container{min-width:84px;transition:all .3s ease}.sidebar-container:has(>.expanded){min-width:300px}@media screen and (max-width: 767px){.sidebar-container{min-width:auto!important}.content-container{gap:0px!important}}\n"] }]
        }], propDecorators: { layoutType: [{
                type: Input
            }], footerFixed: [{
                type: Input
            }] } });

class HeaderComponent {
    constructor() {
        this.bgColor = '#012345';
        this.textColor = '#ffffff';
    }
    ngOnInit() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: HeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: HeaderComponent, isStandalone: true, selector: "dv-header", inputs: { bgColor: "bgColor", textColor: "textColor" }, host: { properties: { "style.--bg-color": "bgColor", "style.--color": "textColor" } }, ngImport: i0, template: "<header\n  class=\"header-container\"\n>\n  <div class=\"header\">\n    <div class=\"logo flex\">\n      <ng-content select=\"[left]\"></ng-content>\n    </div>\n  </div>\n  <ng-content select=\"[center]\"></ng-content>\n  <div class=\"right\">\n    <ng-content select=\"[right]\"></ng-content>\n  </div>\n</header>\n", styles: [":host(dv-header){display:block;background-color:var(--bg-color);color:var(--color)}.header-container{box-sizing:border-box;min-height:3rem;display:flex;align-items:center;padding:0px .5rem;justify-content:space-between}.flex{display:flex}.logo{align-items:center}.margin{margin-right:1rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: HeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-header', standalone: true, imports: [CommonModule], host: {
                        '[style.--bg-color]': 'bgColor',
                        '[style.--color]': 'textColor',
                    }, template: "<header\n  class=\"header-container\"\n>\n  <div class=\"header\">\n    <div class=\"logo flex\">\n      <ng-content select=\"[left]\"></ng-content>\n    </div>\n  </div>\n  <ng-content select=\"[center]\"></ng-content>\n  <div class=\"right\">\n    <ng-content select=\"[right]\"></ng-content>\n  </div>\n</header>\n", styles: [":host(dv-header){display:block;background-color:var(--bg-color);color:var(--color)}.header-container{box-sizing:border-box;min-height:3rem;display:flex;align-items:center;padding:0px .5rem;justify-content:space-between}.flex{display:flex}.logo{align-items:center}.margin{margin-right:1rem}\n"] }]
        }], ctorParameters: () => [], propDecorators: { bgColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }] } });

class SidebarComponent {
    get showSidebar() {
        return this._showSidebar;
    }
    set showSidebar(value) {
        this._showSidebar = value;
        this.updateBodyClass();
    }
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.enableExpand = true;
        this.expandState = 'default';
        this.sidebarExpand = false;
        this.externalLinks = new EventEmitter();
        this.expandEvent = new EventEmitter();
        this.logoEvent = new EventEmitter();
        // === Two-way binding for showSidebar ===
        this._showSidebar = false;
        this.showSidebarChange = new EventEmitter();
        this.viewport = 'desktop';
        this.isHovered = false;
        this.renderer.listen('window', 'click', (e) => {
            if (e.target === this.el.nativeElement) {
                this.sidebarExpand = false;
                this._showSidebar = false;
                this.showSidebarChange.emit(false);
                this.expandEvent.emit(this.sidebarExpand);
            }
        });
    }
    ngOnInit() {
        this.onWindowResize();
    }
    ngAfterViewInit() {
        if (this.config && !this.config.iconPrefix) {
            this.config.iconPrefix = '';
        }
    }
    toggleSidebar() {
        this.sidebarExpand = !this.sidebarExpand;
        this.expandEvent.emit(this.sidebarExpand);
        if (!this.sidebarExpand) {
            this.closeAllChildren();
        }
    }
    closeAllChildren() {
        this.config.menuItems.forEach((item) => {
            if (item?.isExpand)
                item.isExpand = false;
            if (item?.children)
                this.recursivelyClose(item.children);
        });
    }
    recursivelyClose(items) {
        items.forEach((child) => {
            child.isExpand = false;
            if (child.children)
                this.recursivelyClose(child.children);
        });
    }
    closeSidebar() {
        if (this.viewport !== 'desktop') {
            this._showSidebar = false;
            this.sidebarExpand = false;
            this.showSidebarChange.emit(false);
            this.expandEvent.emit(this.sidebarExpand);
            this.renderer.removeClass(document.body, 'hide-scroll');
        }
        else {
            if (!this.sidebarExpand) {
                this.sidebarExpand = true;
                this.expandEvent.emit(this.sidebarExpand);
            }
        }
    }
    handleCloseSidebar() {
        this._showSidebar = false;
        this.sidebarExpand = false;
        this.showSidebarChange.emit(false);
        this.renderer.removeClass(document.body, 'hide-scroll');
    }
    customLinks(type) {
        if (type) {
            this.externalLinks.emit(type);
            this.isActive = type;
        }
        this.closeSidebar();
    }
    onWindowResize() {
        if (window.innerWidth <= 767) {
            this.viewport = "mobile";
        }
        else if (window.innerWidth > 767 && window.innerWidth <= 992) {
            this.viewport = "tablet";
        }
        else {
            this.viewport = "desktop";
        }
        this.updateBodyClass();
    }
    updateBodyClass() {
        if (this._showSidebar && this.viewport !== 'desktop') {
            this.renderer.addClass(document.body, 'hide-scroll');
        }
        else {
            this.renderer.removeClass(document.body, 'hide-scroll');
        }
    }
    // External API for parent to manually close the sidebar
    close() {
        this._showSidebar = false;
        this.sidebarExpand = false;
        this.showSidebarChange.emit(false);
        this.renderer.removeClass(document.body, 'hide-scroll');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: SidebarComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: SidebarComponent, isStandalone: true, selector: "dv-sidebar", inputs: { config: "config", size: "size", enableExpand: "enableExpand", expandState: "expandState", sidebarExpand: "sidebarExpand", showSidebar: "showSidebar" }, outputs: { externalLinks: "externalLinks", expandEvent: "expandEvent", logoEvent: "logoEvent", showSidebarChange: "showSidebarChange" }, host: { listeners: { "window:resize": "onWindowResize($event)" }, properties: { "class": "size == \"sm\" ? \"sm\" : \"\"", "class.expanded": "expandState !== \"noExpand\" && (sidebarExpand || expandState === \"noCollapse\" || (_showSidebar && viewport !== \"desktop\"))", "class.fixCollapse": "expandState == \"noExpand\"" }, classAttribute: "sidebar-component" }, ngImport: i0, template: "<ng-template #recursiveMenu let-items>\n  <ul class=\"sidebar-menu\">\n    <ng-container *ngFor=\"let item of items\">\n      <li *ngIf=\"item?.name === 'separatorPipe'\" class=\"separator\"></li>\n      <ng-container *ngIf=\"item?.name !== 'separatorPipe'\">\n        <li>\n          <a\n            class=\"menu-item\"\n            [routerLink]=\"item?.link\"\n            [routerLinkActiveOptions]=\"{ exact: item?.exact }\"\n            routerLinkActive=\"active\"\n            (click)=\"item.isExpand = true; customLinks(item?.customLink)\"\n          >\n            <span\n              class=\"menu-icon\"\n              [style]=\"{\n                '-webkit-mask-image':\n                  'url(' + config?.iconPrefix + item.icon + ')',\n                'mask-image': 'url(' + config?.iconPrefix + item.icon + ')'\n              }\"\n            >\n            </span>\n            <span class=\"menu-item-text\">{{ item?.name }}</span>\n            <span class=\"tag {{item?.tag}}\" *ngIf=\"item?.tag\">{{ item?.tag }}</span>\n          </a>\n          <svg\n            *ngIf=\"\n              item?.children &&\n              (sidebarExpand || (isHovered && viewport == 'desktop'))\n            \"\n            width=\"1rem\"\n            height=\"1rem\"\n            viewBox=\"0 0 48 48\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"has-dropdown\"\n            [class.is_expanded]=\"item.isExpand\"\n            (click)=\"item.isExpand = !item.isExpand\"\n          >\n            <rect width=\"48\" height=\"48\" fill=\"none\" fill-opacity=\"0.01\" />\n            <path\n              d=\"M37 18L25 30L13 18\"\n              stroke=\"#fff\"\n              stroke-width=\"4\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            />\n          </svg>\n        </li>\n        <!-- Parent Item -->\n        <div\n          class=\"has-children\"\n          *ngIf=\"item?.children\"\n          [class.expanded]=\"item?.isExpand\"\n        >\n          <!-- Recursive call -->\n          <ng-container\n            *ngTemplateOutlet=\"\n              recursiveMenu;\n              context: { $implicit: item.children }\n            \"\n          ></ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ul>\n</ng-template>\n\n<div\n  class=\"sidebar-container\"\n  #sidebarContainer\n  (mouseover)=\"isHovered = true\"\n  (mouseleave)=\"isHovered = false\"\n>\n  <div class=\"sidebar\">\n    <ng-content select=\".header\"></ng-content>\n    <ng-container *ngIf=\"config\">\n      <ng-container\n        *ngTemplateOutlet=\"\n          recursiveMenu;\n          context: { $implicit: config.menuItems }\n        \"\n      ></ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"!config\">\n      <ng-content></ng-content>\n    </ng-container>\n  </div>\n  <div *ngIf=\"config?.footerLinks?.length > 0 && config\" class=\"footer_links\">\n    <ul class=\"footer-menu\">\n      <ng-container *ngFor=\"let item of config.footerLinks\">\n        <li>\n          <a\n            class=\"footer-menu-item\"\n            *ngIf=\"item.name != 'separatorPipe'\"\n            [routerLink]=\"item?.link\"\n            [routerLinkActiveOptions]=\"{ exact: item?.exact }\"\n            routerLinkActive=\"active\"\n            (click)=\"customLinks(item.customLink)\"\n          >\n            <img\n              *ngIf=\"item?.icon\"\n              src=\"{{ config?.iconPrefix + item.icon }}\"\n              class=\"footer-menu-icon\"\n            />\n            <span class=\"footer-menu-item-text\">{{ item.name }}</span>\n          </a>\n        </li>\n\n        <li *ngIf=\"item.name == 'separatorPipe'\" class=\"separator\"></li>\n      </ng-container>\n    </ul>\n  </div>\n</div>\n<span\n  (click)=\"toggleSidebar()\"\n  *ngIf=\"expandState == 'default'\"\n  class=\"collapsed-btn\"\n>\n  <svg\n    [class.rotate]=\"!sidebarExpand\"\n    width=\"800px\"\n    height=\"800px\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path\n      d=\"M15 6L9 12L15 18\"\n      stroke=\"#ffffff\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    />\n  </svg>\n</span>\n", styles: [":host(.sidebar-component){position:fixed;display:flex;flex-direction:column;top:0;left:0;height:100dvh;z-index:999;background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:0 8px 8px 0;box-sizing:border-box;min-width:84px;--text-color: #fff;--active-icon: #aaffff}:host(.sidebar-component) ::ng-deep{color:#f6f8fa}:host(.sidebar-component) ::ng-deep ul,:host(.sidebar-component) ::ng-deep li,:host(.sidebar-component) ::ng-deep a{all:unset;min-height:1px;flex-shrink:0}:host(.sidebar-component) ::ng-deep .sidebar-container{display:flex;flex-direction:column;height:100%;width:84px;transition:.2s}:host(.sidebar-component) ::ng-deep .sidebar{display:flex;flex-direction:column}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu{overflow:auto;flex:1 0 1px}:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{width:100%;min-height:64px;max-height:fit-content;flex:1 0 1px;overflow-y:auto;border-bottom-right-radius:8px}@media (max-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{border-bottom-right-radius:0}}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header{display:flex;justify-content:flex-end;align-items:center;min-height:64px;padding:10px 20px;box-sizing:border-box;border-bottom:1px solid #163964}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container{position:absolute;height:32px;left:0;display:flex;justify-content:flex-start;align-items:center;cursor:pointer}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container .sidebar-logo,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container .sidebar-logo{position:relative;display:inline-block;flex-shrink:0;text-align:center;z-index:99;position:absolute;left:26px;width:32px;height:32px}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container .sidebar-logo.expand,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container .sidebar-logo.expand{height:32px;opacity:0}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .mobile-close-btn,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .mobile-close-btn{display:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu{padding:20px;height:fit-content;flex:1;display:flex;flex-direction:column;gap:8px;-ms-overflow-style:none;scrollbar-width:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{padding:10px 20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu::-webkit-scrollbar{display:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li{position:relative}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .menu-item.active+.has-dropdown path{stroke:#000}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown{position:absolute;right:12px;top:50%;transform:translateY(-50%);border-radius:12px;overflow:hidden;padding:2px 2px 1px 1px;display:flex;justify-content:center;align-items:center;transition:transform .5s;cursor:pointer}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown.is_expanded{transform:translateY(-50%) rotate(180deg)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown:hover{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown:hover path{stroke:#fff!important}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s,opacity .5s;opacity:0;overflow:clip}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children.expanded{grid-template-rows:1fr;opacity:1}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children.expanded .sidebar-menu:before{visibility:visible}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu{padding:0 0 0 40px;overflow:visible;position:relative;height:100%}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu:before{position:absolute;content:\"\";width:6px;height:6px;border-radius:4px;background-color:#fff;left:21px;transform:translate(-50%);visibility:hidden;transition:all .3s}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li{position:relative}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:after{position:absolute;content:\"\";width:6px;height:6px;border-radius:4px;background-color:#fff;top:50%;transform:translate(-50%,-50%)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:before{position:absolute;content:\"\";width:20px;height:1000%;border-bottom-left-radius:12px;border:1px solid #fff;border-right:none;border-top:none;top:-42px;left:-20px;transform:translateY(calc(-86% + 1px))}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:first-of-type:before{height:20px;top:20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{border-top:1px solid #163964;border:none;background-color:var(--primary-1200)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:nowrap;padding:12px;gap:8px;flex-shrink:0;cursor:pointer;color:inherit;border-radius:8px;border:1px solid transparent;transition:color .3s ease}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.1);box-shadow:0 4px 20px #0000001a}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .footer-menu-icon{background-color:var(--active-icon)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .footer-menu-item-text{font-weight:500}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item:active:not(.active){background:#ffffff08;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);box-shadow:0 4px 20px #00000002}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .footer-menu-icon{position:relative;display:inline-block;flex-shrink:0;text-align:center;z-index:99;width:20px;height:20px;background-color:var(--text-color);-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .group_title,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .group_title,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .group_title,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .group_title{all:unset;font-size:12px;font-weight:400;min-height:17px;line-height:17px;max-width:calc(100% - 20px);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .separator{width:calc(100% - 20px);height:1px;background:#3e6493;margin-bottom:10px}@media (max-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .separator{width:100%}}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .footer-menu-item-text{width:0;opacity:0;overflow-x:hidden;font-size:14px;font-weight:400;line-height:20px;text-overflow:clip;text-wrap:nowrap;white-space:nowrap}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .tag,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .tag,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .tag,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .tag{opacity:0;width:0;background:var(--red-700);color:#fff;display:inline-block;width:auto;font-size:12px;text-transform:capitalize;padding:2.5px 5px;border-radius:5px;margin-left:auto;white-space:nowrap}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu{padding:25px 20px}:host(.sidebar-component) ::ng-deep .collapsed-btn{box-sizing:border-box;width:32px;height:32px;display:flex;justify-content:center;align-items:center;font-size:20px;position:absolute;border-radius:99px;top:32px;right:0;border:4px solid rgba(255,255,255,.1490196078);background-color:#ffffff26;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transform:translate(50%) translateY(50%);color:#fff;cursor:pointer;z-index:999;padding:3px}@media (min-width: 1200px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover{width:100%;flex-shrink:0}:host(.sidebar-component) ::ng-deep .sidebar-container:hover .sidebar-container{width:100%}}@media (min-width: 1200px) and (min-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover{width:300px}}@media (min-width: 1200px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover .sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar-container:hover .footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar-container:hover .tag{width:fit-content!important;opacity:1!important;color:inherit}:host(.sidebar-component) ::ng-deep .footer-menu{padding:10px 20px}}@media (max-width: 992px){:host(.sidebar-component) ::ng-deep .collapsed-btn{display:none}}@media (max-width: 992px){:host(.sidebar-component) ::ng-deep{border-radius:0;right:100%;left:unset}:host(.sidebar-component) ::ng-deep .sidebar-component{position:fixed!important}:host(.sidebar-component) ::ng-deep .expanded{left:0;right:unset;width:100%}:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{min-height:84px}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .mobile-close-btn,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .mobile-close-btn{display:inline-block}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu{padding:20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{padding:15px 20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item{border-radius:8px}}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:100%;flex-shrink:0}@media (min-width: 767px){:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:300px}}:host(.sidebar-component).expanded ::ng-deep .sidebar-container .sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component).expanded ::ng-deep .sidebar-container .footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component).expanded ::ng-deep .sidebar-container .tag{width:fit-content!important;opacity:1!important;color:inherit}@media (max-width: 992px){:host(.sidebar-component).expanded ::ng-deep{position:fixed;height:100%;top:0;left:0;width:100%;background:#00000080}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);width:300px;border-radius:0 8px 8px 0}}@media (max-width: 767px){:host(.sidebar-component).expanded ::ng-deep{left:0;right:unset;width:100%}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:100%;border-radius:0}}.rotate{transform:rotate(180deg)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: SidebarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-sidebar', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive], host: {
                        'class': 'sidebar-component',
                        '[class]': 'size == "sm" ? "sm" : ""',
                        '[class.expanded]': 'expandState !== "noExpand" && (sidebarExpand || expandState === "noCollapse" || (_showSidebar && viewport !== "desktop"))',
                        '[class.fixCollapse]': 'expandState == "noExpand"',
                    }, template: "<ng-template #recursiveMenu let-items>\n  <ul class=\"sidebar-menu\">\n    <ng-container *ngFor=\"let item of items\">\n      <li *ngIf=\"item?.name === 'separatorPipe'\" class=\"separator\"></li>\n      <ng-container *ngIf=\"item?.name !== 'separatorPipe'\">\n        <li>\n          <a\n            class=\"menu-item\"\n            [routerLink]=\"item?.link\"\n            [routerLinkActiveOptions]=\"{ exact: item?.exact }\"\n            routerLinkActive=\"active\"\n            (click)=\"item.isExpand = true; customLinks(item?.customLink)\"\n          >\n            <span\n              class=\"menu-icon\"\n              [style]=\"{\n                '-webkit-mask-image':\n                  'url(' + config?.iconPrefix + item.icon + ')',\n                'mask-image': 'url(' + config?.iconPrefix + item.icon + ')'\n              }\"\n            >\n            </span>\n            <span class=\"menu-item-text\">{{ item?.name }}</span>\n            <span class=\"tag {{item?.tag}}\" *ngIf=\"item?.tag\">{{ item?.tag }}</span>\n          </a>\n          <svg\n            *ngIf=\"\n              item?.children &&\n              (sidebarExpand || (isHovered && viewport == 'desktop'))\n            \"\n            width=\"1rem\"\n            height=\"1rem\"\n            viewBox=\"0 0 48 48\"\n            fill=\"none\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n            class=\"has-dropdown\"\n            [class.is_expanded]=\"item.isExpand\"\n            (click)=\"item.isExpand = !item.isExpand\"\n          >\n            <rect width=\"48\" height=\"48\" fill=\"none\" fill-opacity=\"0.01\" />\n            <path\n              d=\"M37 18L25 30L13 18\"\n              stroke=\"#fff\"\n              stroke-width=\"4\"\n              stroke-linecap=\"round\"\n              stroke-linejoin=\"round\"\n            />\n          </svg>\n        </li>\n        <!-- Parent Item -->\n        <div\n          class=\"has-children\"\n          *ngIf=\"item?.children\"\n          [class.expanded]=\"item?.isExpand\"\n        >\n          <!-- Recursive call -->\n          <ng-container\n            *ngTemplateOutlet=\"\n              recursiveMenu;\n              context: { $implicit: item.children }\n            \"\n          ></ng-container>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ul>\n</ng-template>\n\n<div\n  class=\"sidebar-container\"\n  #sidebarContainer\n  (mouseover)=\"isHovered = true\"\n  (mouseleave)=\"isHovered = false\"\n>\n  <div class=\"sidebar\">\n    <ng-content select=\".header\"></ng-content>\n    <ng-container *ngIf=\"config\">\n      <ng-container\n        *ngTemplateOutlet=\"\n          recursiveMenu;\n          context: { $implicit: config.menuItems }\n        \"\n      ></ng-container>\n    </ng-container>\n    <ng-container *ngIf=\"!config\">\n      <ng-content></ng-content>\n    </ng-container>\n  </div>\n  <div *ngIf=\"config?.footerLinks?.length > 0 && config\" class=\"footer_links\">\n    <ul class=\"footer-menu\">\n      <ng-container *ngFor=\"let item of config.footerLinks\">\n        <li>\n          <a\n            class=\"footer-menu-item\"\n            *ngIf=\"item.name != 'separatorPipe'\"\n            [routerLink]=\"item?.link\"\n            [routerLinkActiveOptions]=\"{ exact: item?.exact }\"\n            routerLinkActive=\"active\"\n            (click)=\"customLinks(item.customLink)\"\n          >\n            <img\n              *ngIf=\"item?.icon\"\n              src=\"{{ config?.iconPrefix + item.icon }}\"\n              class=\"footer-menu-icon\"\n            />\n            <span class=\"footer-menu-item-text\">{{ item.name }}</span>\n          </a>\n        </li>\n\n        <li *ngIf=\"item.name == 'separatorPipe'\" class=\"separator\"></li>\n      </ng-container>\n    </ul>\n  </div>\n</div>\n<span\n  (click)=\"toggleSidebar()\"\n  *ngIf=\"expandState == 'default'\"\n  class=\"collapsed-btn\"\n>\n  <svg\n    [class.rotate]=\"!sidebarExpand\"\n    width=\"800px\"\n    height=\"800px\"\n    viewBox=\"0 0 24 24\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <path\n      d=\"M15 6L9 12L15 18\"\n      stroke=\"#ffffff\"\n      stroke-width=\"2\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    />\n  </svg>\n</span>\n", styles: [":host(.sidebar-component){position:fixed;display:flex;flex-direction:column;top:0;left:0;height:100dvh;z-index:999;background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-radius:0 8px 8px 0;box-sizing:border-box;min-width:84px;--text-color: #fff;--active-icon: #aaffff}:host(.sidebar-component) ::ng-deep{color:#f6f8fa}:host(.sidebar-component) ::ng-deep ul,:host(.sidebar-component) ::ng-deep li,:host(.sidebar-component) ::ng-deep a{all:unset;min-height:1px;flex-shrink:0}:host(.sidebar-component) ::ng-deep .sidebar-container{display:flex;flex-direction:column;height:100%;width:84px;transition:.2s}:host(.sidebar-component) ::ng-deep .sidebar{display:flex;flex-direction:column}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu{overflow:auto;flex:1 0 1px}:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{width:100%;min-height:64px;max-height:fit-content;flex:1 0 1px;overflow-y:auto;border-bottom-right-radius:8px}@media (max-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{border-bottom-right-radius:0}}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header{display:flex;justify-content:flex-end;align-items:center;min-height:64px;padding:10px 20px;box-sizing:border-box;border-bottom:1px solid #163964}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container{position:absolute;height:32px;left:0;display:flex;justify-content:flex-start;align-items:center;cursor:pointer}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container .sidebar-logo,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container .sidebar-logo{position:relative;display:inline-block;flex-shrink:0;text-align:center;z-index:99;position:absolute;left:26px;width:32px;height:32px}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .logo-container .sidebar-logo.expand,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .logo-container .sidebar-logo.expand{height:32px;opacity:0}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .mobile-close-btn,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .mobile-close-btn{display:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu{padding:20px;height:fit-content;flex:1;display:flex;flex-direction:column;gap:8px;-ms-overflow-style:none;scrollbar-width:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{padding:10px 20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu::-webkit-scrollbar,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu::-webkit-scrollbar{display:none}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li{position:relative}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .menu-item.active+.has-dropdown path,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .menu-item.active+.has-dropdown path{stroke:#000}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown{position:absolute;right:12px;top:50%;transform:translateY(-50%);border-radius:12px;overflow:hidden;padding:2px 2px 1px 1px;display:flex;justify-content:center;align-items:center;transition:transform .5s;cursor:pointer}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown.is_expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown.is_expanded{transform:translateY(-50%) rotate(180deg)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown:hover,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown:hover{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu li .has-dropdown:hover path,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu li .has-dropdown:hover path{stroke:#fff!important}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s,opacity .5s;opacity:0;overflow:clip}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children.expanded,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children.expanded{grid-template-rows:1fr;opacity:1}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children.expanded .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children.expanded .sidebar-menu:before{visibility:visible}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu{padding:0 0 0 40px;overflow:visible;position:relative;height:100%}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu:before{position:absolute;content:\"\";width:6px;height:6px;border-radius:4px;background-color:#fff;left:21px;transform:translate(-50%);visibility:hidden;transition:all .3s}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li{position:relative}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:after,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:after{position:absolute;content:\"\";width:6px;height:6px;border-radius:4px;background-color:#fff;top:50%;transform:translate(-50%,-50%)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:before{position:absolute;content:\"\";width:20px;height:1000%;border-bottom-left-radius:12px;border:1px solid #fff;border-right:none;border-top:none;top:-42px;left:-20px;transform:translateY(calc(-86% + 1px))}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .has-children .sidebar-menu li:first-of-type:before,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .has-children .sidebar-menu li:first-of-type:before{height:20px;top:20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{border-top:1px solid #163964;border:none;background-color:var(--primary-1200)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item{position:relative;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;flex-wrap:nowrap;padding:12px;gap:8px;flex-shrink:0;cursor:pointer;color:inherit;border-radius:8px;border:1px solid transparent;transition:color .3s ease}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.1);box-shadow:0 4px 20px #0000001a}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .footer-menu-icon{background-color:var(--active-icon)}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item.active .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item.active .footer-menu-item-text{font-weight:500}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item:active:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item:hover:not(.active),:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item:active:not(.active){background:#ffffff08;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);box-shadow:0 4px 20px #00000002}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .footer-menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .menu-icon,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .footer-menu-icon{position:relative;display:inline-block;flex-shrink:0;text-align:center;z-index:99;width:20px;height:20px;background-color:var(--text-color);-webkit-mask-size:100%;mask-size:100%;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .group_title,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .group_title,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .group_title,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .group_title{all:unset;font-size:12px;font-weight:400;min-height:17px;line-height:17px;max-width:calc(100% - 20px);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .separator{width:calc(100% - 20px);height:1px;background:#3e6493;margin-bottom:10px}@media (max-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .separator,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .separator{width:100%}}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item .footer-menu-item-text{width:0;opacity:0;overflow-x:hidden;font-size:14px;font-weight:400;line-height:20px;text-overflow:clip;text-wrap:nowrap;white-space:nowrap}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .tag,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .tag,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .tag,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .tag{opacity:0;width:0;background:var(--red-700);color:#fff;display:inline-block;width:auto;font-size:12px;text-transform:capitalize;padding:2.5px 5px;border-radius:5px;margin-left:auto;white-space:nowrap}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu{padding:25px 20px}:host(.sidebar-component) ::ng-deep .collapsed-btn{box-sizing:border-box;width:32px;height:32px;display:flex;justify-content:center;align-items:center;font-size:20px;position:absolute;border-radius:99px;top:32px;right:0;border:4px solid rgba(255,255,255,.1490196078);background-color:#ffffff26;-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);transform:translate(50%) translateY(50%);color:#fff;cursor:pointer;z-index:999;padding:3px}@media (min-width: 1200px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover{width:100%;flex-shrink:0}:host(.sidebar-component) ::ng-deep .sidebar-container:hover .sidebar-container{width:100%}}@media (min-width: 1200px) and (min-width: 767px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover{width:300px}}@media (min-width: 1200px){:host(.sidebar-component) ::ng-deep .sidebar-container:hover .sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar-container:hover .footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component) ::ng-deep .sidebar-container:hover .tag{width:fit-content!important;opacity:1!important;color:inherit}:host(.sidebar-component) ::ng-deep .footer-menu{padding:10px 20px}}@media (max-width: 992px){:host(.sidebar-component) ::ng-deep .collapsed-btn{display:none}}@media (max-width: 992px){:host(.sidebar-component) ::ng-deep{border-radius:0;right:100%;left:unset}:host(.sidebar-component) ::ng-deep .sidebar-component{position:fixed!important}:host(.sidebar-component) ::ng-deep .expanded{left:0;right:unset;width:100%}:host(.sidebar-component) ::ng-deep .sidebar,:host(.sidebar-component) ::ng-deep .footer_links{min-height:84px}:host(.sidebar-component) ::ng-deep .sidebar .sidebar-menu-header .mobile-close-btn,:host(.sidebar-component) ::ng-deep .footer_links .sidebar-menu-header .mobile-close-btn{display:inline-block}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu{padding:20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu.footer-menu,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu.footer-menu{padding:15px 20px}:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .sidebar ul.footer-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.sidebar-menu .footer-menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .menu-item,:host(.sidebar-component) ::ng-deep .footer_links ul.footer-menu .footer-menu-item{border-radius:8px}}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:100%;flex-shrink:0}@media (min-width: 767px){:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:300px}}:host(.sidebar-component).expanded ::ng-deep .sidebar-container .sidebar-menu .menu-item .menu-item-text,:host(.sidebar-component).expanded ::ng-deep .sidebar-container .footer-menu .footer-menu-item .footer-menu-item-text,:host(.sidebar-component).expanded ::ng-deep .sidebar-container .tag{width:fit-content!important;opacity:1!important;color:inherit}@media (max-width: 992px){:host(.sidebar-component).expanded ::ng-deep{position:fixed;height:100%;top:0;left:0;width:100%;background:#00000080}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{background:linear-gradient(174.57deg,#ffffff26,#ffffff0d);width:300px;border-radius:0 8px 8px 0}}@media (max-width: 767px){:host(.sidebar-component).expanded ::ng-deep{left:0;right:unset;width:100%}:host(.sidebar-component).expanded ::ng-deep .sidebar-container{width:100%;border-radius:0}}.rotate{transform:rotate(180deg)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }], propDecorators: { config: [{
                type: Input
            }], size: [{
                type: Input
            }], enableExpand: [{
                type: Input
            }], expandState: [{
                type: Input
            }], sidebarExpand: [{
                type: Input
            }], externalLinks: [{
                type: Output
            }], expandEvent: [{
                type: Output
            }], logoEvent: [{
                type: Output
            }], showSidebar: [{
                type: Input
            }], showSidebarChange: [{
                type: Output
            }], onWindowResize: [{
                type: HostListener,
                args: ["window:resize", ["$event"]]
            }] } });

class FooterComponent {
    constructor() {
        this.bgColor = '#123456';
        this.textColor = '#ffffff';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: FooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: FooterComponent, isStandalone: true, selector: "dv-footer", inputs: { bgColor: "bgColor", textColor: "textColor" }, ngImport: i0, template: "<footer\n  class=\"footer-container\"\n  [style.backgroundColor]=\"bgColor\"\n  [style.color]=\"textColor\"\n>\n  <div class=\"header\">\n    <div class=\"flex\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ng-content select=\"[center]\"></ng-content>\n  <div class=\"right\">\n    <ng-content select=\"[right]\"></ng-content>\n  </div>\n</footer>\n", styles: [".footer-container{box-sizing:border-box;min-height:3rem;display:flex;align-items:center;padding:0px .5rem;justify-content:space-between}.flex{display:flex}.logo{align-items:center}.margin{margin-right:1rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-footer', standalone: true, imports: [CommonModule,], template: "<footer\n  class=\"footer-container\"\n  [style.backgroundColor]=\"bgColor\"\n  [style.color]=\"textColor\"\n>\n  <div class=\"header\">\n    <div class=\"flex\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ng-content select=\"[center]\"></ng-content>\n  <div class=\"right\">\n    <ng-content select=\"[right]\"></ng-content>\n  </div>\n</footer>\n", styles: [".footer-container{box-sizing:border-box;min-height:3rem;display:flex;align-items:center;padding:0px .5rem;justify-content:space-between}.flex{display:flex}.logo{align-items:center}.margin{margin-right:1rem}\n"] }]
        }], propDecorators: { bgColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }] } });

class AvatarComponent {
    constructor() {
        this.imageUrl = '';
        this.name = '';
        this.shape = 'circle';
        this.size = 'md';
        this.showBorder = false;
        this.bgColor = '#123456';
        this.textColor = '#ffffff';
        this.status = '';
        this.initials = '';
        this.cornerRadius = '';
        this.borderColor = '#000000';
        this.borderWidth = '1';
        this.borderStyle = 'solid';
        this.showName = false;
        this.avatarClick = new EventEmitter();
    }
    ngOnInit() { }
    onAvatarClick() {
        this.avatarClick.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: AvatarComponent, isStandalone: true, selector: "dv-avatar", inputs: { imageUrl: "imageUrl", name: "name", shape: "shape", size: "size", showBorder: "showBorder", bgColor: "bgColor", textColor: "textColor", status: "status", initials: "initials", cornerRadius: "cornerRadius", borderColor: "borderColor", borderWidth: "borderWidth", borderStyle: "borderStyle", showName: "showName" }, outputs: { avatarClick: "avatarClick" }, ngImport: i0, template: "<div class=\"avatar\">\n    <div\n      title=\"{{ name }}\"\n      (click)=\"onAvatarClick()\"\n      *ngIf=\"imageUrl || initials\"\n      class=\"avatar-wrapper\"\n      [ngClass]=\"{\n        'rounded-avatar': shape === 'circle' && !cornerRadius,\n        'rounded-square-avatar': shape === 'rounded' && !cornerRadius,\n        'avatar-xl': size === 'xl',\n        'avatar-lg': size === 'lg',\n        'avatar-md': size === 'md',\n        'avatar-sm': size === 'sm'\n      }\"\n      [ngStyle]=\"{\n        'background-color': bgColor,\n        'border-radius': cornerRadius + '%',\n        'border-color': showBorder ? borderColor : '',\n        'border-width': showBorder ? borderWidth + 'px' : '',\n        'border-style': showBorder ? borderStyle : ''\n      }\"\n    >\n      <img\n        *ngIf=\"imageUrl\"\n        src=\"{{ imageUrl }}\"\n        [ngStyle]=\"{ 'border-radius': cornerRadius + '%' }\"\n      />\n      <div *ngIf=\"!imageUrl\" class=\"initials\" [ngStyle]=\"{ color: textColor }\">\n        {{ initials }}\n      </div>\n      <span\n        *ngIf=\"status\"\n        class=\"avatar-status\"\n        [ngClass]=\"{\n          'bg-danger': status === 'danger',\n          'bg-success': status === 'success'\n        }\"\n      ></span>\n    </div>\n    <span\n      [style.font-size]=\"\n        size == 'xl'\n          ? '1.6rem'\n          : size == 'lg'\n          ? '1.2rem'\n          : size == 'md'\n          ? '1rem'\n          : '.6rem'\n      \"\n      *ngIf=\"showName\"\n      >{{ name }}</span\n    >\n  </div>\n  ", styles: [".avatar{width:max-content;display:inline-flex;flex-direction:column;justify-content:center;align-items:center}.avatar-wrapper{position:relative;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;transition:margin .15s;margin:.3rem;cursor:pointer}.avatar-wrapper img{width:100%;height:100%;background-position:center;background-size:cover}.avatar-wrapper .initials{line-height:19px;letter-spacing:.2625px;overflow:hidden}.rounded-avatar,.rounded-avatar img{border-radius:50%}.rounded-square-avatar,.rounded-square-avatar img{border-radius:25%}.avatar-xl{width:4rem;height:4rem;font-size:1.6rem}.avatar-xl .avatar-status{width:1rem;height:1rem}.avatar-lg{width:3rem;height:3rem;font-size:1.2rem}.avatar-lg .avatar-status{width:.8rem;height:.8rem}.avatar-md{width:2.5rem;height:2.5rem;font-size:1rem}.avatar-md .avatar-status{width:.6rem;height:.6rem}.avatar-sm{width:1.5rem;height:1.5rem;font-size:.6rem}.avatar-sm .avatar-status{width:.4rem;height:.4rem}.avatar-status{position:absolute;right:0;bottom:0;display:block;border:1px solid #ffffff;border-radius:50em}.bg-danger{background-color:red}.bg-success{background-color:#098765}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-avatar', standalone: true, imports: [CommonModule], template: "<div class=\"avatar\">\n    <div\n      title=\"{{ name }}\"\n      (click)=\"onAvatarClick()\"\n      *ngIf=\"imageUrl || initials\"\n      class=\"avatar-wrapper\"\n      [ngClass]=\"{\n        'rounded-avatar': shape === 'circle' && !cornerRadius,\n        'rounded-square-avatar': shape === 'rounded' && !cornerRadius,\n        'avatar-xl': size === 'xl',\n        'avatar-lg': size === 'lg',\n        'avatar-md': size === 'md',\n        'avatar-sm': size === 'sm'\n      }\"\n      [ngStyle]=\"{\n        'background-color': bgColor,\n        'border-radius': cornerRadius + '%',\n        'border-color': showBorder ? borderColor : '',\n        'border-width': showBorder ? borderWidth + 'px' : '',\n        'border-style': showBorder ? borderStyle : ''\n      }\"\n    >\n      <img\n        *ngIf=\"imageUrl\"\n        src=\"{{ imageUrl }}\"\n        [ngStyle]=\"{ 'border-radius': cornerRadius + '%' }\"\n      />\n      <div *ngIf=\"!imageUrl\" class=\"initials\" [ngStyle]=\"{ color: textColor }\">\n        {{ initials }}\n      </div>\n      <span\n        *ngIf=\"status\"\n        class=\"avatar-status\"\n        [ngClass]=\"{\n          'bg-danger': status === 'danger',\n          'bg-success': status === 'success'\n        }\"\n      ></span>\n    </div>\n    <span\n      [style.font-size]=\"\n        size == 'xl'\n          ? '1.6rem'\n          : size == 'lg'\n          ? '1.2rem'\n          : size == 'md'\n          ? '1rem'\n          : '.6rem'\n      \"\n      *ngIf=\"showName\"\n      >{{ name }}</span\n    >\n  </div>\n  ", styles: [".avatar{width:max-content;display:inline-flex;flex-direction:column;justify-content:center;align-items:center}.avatar-wrapper{position:relative;display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;transition:margin .15s;margin:.3rem;cursor:pointer}.avatar-wrapper img{width:100%;height:100%;background-position:center;background-size:cover}.avatar-wrapper .initials{line-height:19px;letter-spacing:.2625px;overflow:hidden}.rounded-avatar,.rounded-avatar img{border-radius:50%}.rounded-square-avatar,.rounded-square-avatar img{border-radius:25%}.avatar-xl{width:4rem;height:4rem;font-size:1.6rem}.avatar-xl .avatar-status{width:1rem;height:1rem}.avatar-lg{width:3rem;height:3rem;font-size:1.2rem}.avatar-lg .avatar-status{width:.8rem;height:.8rem}.avatar-md{width:2.5rem;height:2.5rem;font-size:1rem}.avatar-md .avatar-status{width:.6rem;height:.6rem}.avatar-sm{width:1.5rem;height:1.5rem;font-size:.6rem}.avatar-sm .avatar-status{width:.4rem;height:.4rem}.avatar-status{position:absolute;right:0;bottom:0;display:block;border:1px solid #ffffff;border-radius:50em}.bg-danger{background-color:red}.bg-success{background-color:#098765}\n"] }]
        }], ctorParameters: () => [], propDecorators: { imageUrl: [{
                type: Input
            }], name: [{
                type: Input
            }], shape: [{
                type: Input
            }], size: [{
                type: Input
            }], showBorder: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], textColor: [{
                type: Input
            }], status: [{
                type: Input
            }], initials: [{
                type: Input
            }], cornerRadius: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], borderStyle: [{
                type: Input
            }], showName: [{
                type: Input
            }], avatarClick: [{
                type: Output
            }] } });

class ButtonComponent {
    handleClick() {
        this.click.emit();
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.disabled = false;
        this.variant = 'primary';
        this.bg = '#123456';
        this.color = '#aaffff';
        this.size = 'md';
        this.click = new EventEmitter();
        this.disabled = this.elementRef.nativeElement.hasAttribute('disabled');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ButtonComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ButtonComponent, isStandalone: true, selector: "dv-button", inputs: { variant: "variant", bg: "bg", color: "color", size: "size" }, outputs: { click: "click" }, ngImport: i0, template: "<button\n  class=\"button\"\n  [ngClass]=\"{\n    'primary' : variant === 'primary',\n    'outline' : variant === 'outline',\n    'link' : variant === 'link',\n    'xs' : size === 'xs',\n    'sm' : size === 'sm',\n    'md' : size === 'md',\n    'lg' : size === 'lg',\n    'xl' : size === 'xl',\n  }\"\n  [style.--bg]=\"bg\"\n  [style.--color]=\"color\"\n  [disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [".button{background-color:unset;border:none;border-radius:4px;padding:10px 20px;cursor:pointer;transition:background-color .3s,color .3s}.button.primary{color:var(--color);background-color:var(--bg);border:2px solid var(--bg);box-shadow:0 2px 4px #0009}.button.primary:disabled{background-color:gray;border:2px solid gray;color:#d3d3d3;box-shadow:0 1px 4px #000}.button.primary:active:not(:disabled){box-shadow:0 1px 1px #000}.button.primary:focus:not(:disabled){outline:1px solid var(--bg);outline-offset:2px}.button.outline{background-color:transparent;border:1px solid var(--color);color:var(--color);transition:all;box-sizing:border-box}.button.outline:active:not(:disabled){filter:brightness(80%)}.button.outline:focus:not(:disabled){outline:1px solid var(--color);outline-offset:2px}.button.outline:disabled{border:1px solid gray;color:gray}.button.link{background-color:transparent;border:2px solid transparent;transition:all;color:var(--color)}.button.link:hover:not(:disabled){text-decoration:underline}.button.link:disabled{color:gray}.button.link:focus:not(:disabled){text-decoration:underline;outline:none}.button:disabled{cursor:not-allowed}.button.xs{font-size:12px;padding:5px 10px}.button.sm{font-size:14px;padding:8px 15px}.button.md{font-size:16px}.button.lg{font-size:18px;padding:12px 25px}.button.xl{font-size:24px;padding:15px 30px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-button', standalone: true, imports: [CommonModule], template: "<button\n  class=\"button\"\n  [ngClass]=\"{\n    'primary' : variant === 'primary',\n    'outline' : variant === 'outline',\n    'link' : variant === 'link',\n    'xs' : size === 'xs',\n    'sm' : size === 'sm',\n    'md' : size === 'md',\n    'lg' : size === 'lg',\n    'xl' : size === 'xl',\n  }\"\n  [style.--bg]=\"bg\"\n  [style.--color]=\"color\"\n  [disabled]=\"disabled\"\n>\n  <ng-content></ng-content>\n</button>\n", styles: [".button{background-color:unset;border:none;border-radius:4px;padding:10px 20px;cursor:pointer;transition:background-color .3s,color .3s}.button.primary{color:var(--color);background-color:var(--bg);border:2px solid var(--bg);box-shadow:0 2px 4px #0009}.button.primary:disabled{background-color:gray;border:2px solid gray;color:#d3d3d3;box-shadow:0 1px 4px #000}.button.primary:active:not(:disabled){box-shadow:0 1px 1px #000}.button.primary:focus:not(:disabled){outline:1px solid var(--bg);outline-offset:2px}.button.outline{background-color:transparent;border:1px solid var(--color);color:var(--color);transition:all;box-sizing:border-box}.button.outline:active:not(:disabled){filter:brightness(80%)}.button.outline:focus:not(:disabled){outline:1px solid var(--color);outline-offset:2px}.button.outline:disabled{border:1px solid gray;color:gray}.button.link{background-color:transparent;border:2px solid transparent;transition:all;color:var(--color)}.button.link:hover:not(:disabled){text-decoration:underline}.button.link:disabled{color:gray}.button.link:focus:not(:disabled){text-decoration:underline;outline:none}.button:disabled{cursor:not-allowed}.button.xs{font-size:12px;padding:5px 10px}.button.sm{font-size:14px;padding:8px 15px}.button.md{font-size:16px}.button.lg{font-size:18px;padding:12px 25px}.button.xl{font-size:24px;padding:15px 30px}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { variant: [{
                type: Input
            }], bg: [{
                type: Input
            }], color: [{
                type: Input
            }], size: [{
                type: Input
            }], click: [{
                type: Output
            }] } });

class AccordionItemComponent {
    static { this.id = 0; }
    constructor(accordion) {
        this.accordion = accordion;
        this.componentId = 0;
        this.selectState = false;
        this.title = 'accord';
        this.group = 'group';
        this.multipleOpen = false;
        this.defaultOpen = false;
        this.state = new EventEmitter();
        this.change = new EventEmitter();
    }
    ngOnInit() {
        this.componentId = ++AccordionItemComponent.id;
        this.multipleOpen = this.accordion.multipleOpen;
        this.group = this.accordion.group;
    }
    itemState() {
        const selectedItems = [];
        this.state.emit(this.selectState);
        if (!this.multipleOpen) {
            this.accordion.items.forEach((item) => {
                if (item !== this) {
                    item.selectState = false;
                    item.defaultOpen = false;
                }
            });
        }
        this.selectState = !this.selectState;
        this.accordion.items.forEach((item) => {
            if (item.selectState) {
                selectedItems.push(String(item.id ? item.id : item.group + '-' + item.componentId));
            }
        });
        // Emit the selected items
        this.accordion.getactiveAcordion(selectedItems);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AccordionItemComponent, deps: [{ token: AccordionComponent }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: AccordionItemComponent, isStandalone: true, selector: "dv-accordion-item", inputs: { id: "id", title: "title", defaultOpen: "defaultOpen" }, outputs: { state: "state", change: "change" }, ngImport: i0, template: "<label\n  ><input\n    #INPUT\n    [type]=\"'checkbox'\"\n    [checked]=\"selectState || defaultOpen\"\n    name=\"{{ group }}\"\n    type=\"radio\"\n    (change)=\"itemState()\"\n  />\n  {{ title }}\n  <svg\n    width=\"1rem\"\n    height=\"1rem\"\n    viewBox=\"0 0 48 48\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <rect width=\"48\" height=\"48\" fill=\"none\" fill-opacity=\"0.01\" />\n    <path\n      d=\"M37 18L25 30L13 18\"\n      stroke=\"black\"\n      stroke-width=\"4\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    />\n  </svg>\n</label>\n<div class=\"accordion-content\" [ngClass]=\"INPUT.checked ? 'item-expand' : ''\">\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: ["label,input{-webkit-user-select:none;user-select:none}label{box-sizing:border-box;position:relative;display:flex;justify-content:space-between;border-radius:.3rem;padding:1rem;text-transform:capitalize;font-weight:700;font-size:large;overflow:hidden}label input{display:none}label input:checked+svg{transform:rotate(180deg);transition-duration:.4s}label input:checked+svg path{stroke:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label svg{transition-duration:.4s}label svg path{stroke:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked){background-color:var(--theme-active-bg, var(--dv--active-bg, rgba(0, 117, 128, .308)));color:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked):after{content:\"\";position:absolute;margin:0;padding:0;bottom:0;left:0;width:100%;height:.2rem;background:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked)+.accordion-content{max-height:fit-content;text-align:justify;box-sizing:border-box;transition-duration:.4s}.accordion-content{display:grid;margin-top:.5rem;padding:0rem 1rem;grid-template-rows:0fr;transition:grid-template-rows .5s}.item-expand{grid-template-rows:1fr;padding-bottom:1rem}.accordion-content>div{overflow:hidden}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-accordion-item', standalone: true, imports: [CommonModule], template: "<label\n  ><input\n    #INPUT\n    [type]=\"'checkbox'\"\n    [checked]=\"selectState || defaultOpen\"\n    name=\"{{ group }}\"\n    type=\"radio\"\n    (change)=\"itemState()\"\n  />\n  {{ title }}\n  <svg\n    width=\"1rem\"\n    height=\"1rem\"\n    viewBox=\"0 0 48 48\"\n    fill=\"none\"\n    xmlns=\"http://www.w3.org/2000/svg\"\n  >\n    <rect width=\"48\" height=\"48\" fill=\"none\" fill-opacity=\"0.01\" />\n    <path\n      d=\"M37 18L25 30L13 18\"\n      stroke=\"black\"\n      stroke-width=\"4\"\n      stroke-linecap=\"round\"\n      stroke-linejoin=\"round\"\n    />\n  </svg>\n</label>\n<div class=\"accordion-content\" [ngClass]=\"INPUT.checked ? 'item-expand' : ''\">\n  <div>\n    <ng-content></ng-content>\n  </div>\n</div>\n", styles: ["label,input{-webkit-user-select:none;user-select:none}label{box-sizing:border-box;position:relative;display:flex;justify-content:space-between;border-radius:.3rem;padding:1rem;text-transform:capitalize;font-weight:700;font-size:large;overflow:hidden}label input{display:none}label input:checked+svg{transform:rotate(180deg);transition-duration:.4s}label input:checked+svg path{stroke:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label svg{transition-duration:.4s}label svg path{stroke:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked){background-color:var(--theme-active-bg, var(--dv--active-bg, rgba(0, 117, 128, .308)));color:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked):after{content:\"\";position:absolute;margin:0;padding:0;bottom:0;left:0;width:100%;height:.2rem;background:var(--theme-active-stroke, var(--dv-active-stroke, #aaffff))}label:has(input:checked)+.accordion-content{max-height:fit-content;text-align:justify;box-sizing:border-box;transition-duration:.4s}.accordion-content{display:grid;margin-top:.5rem;padding:0rem 1rem;grid-template-rows:0fr;transition:grid-template-rows .5s}.item-expand{grid-template-rows:1fr;padding-bottom:1rem}.accordion-content>div{overflow:hidden}\n"] }]
        }], ctorParameters: () => [{ type: AccordionComponent }], propDecorators: { id: [{
                type: Input
            }], title: [{
                type: Input
            }], defaultOpen: [{
                type: Input
            }], state: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class AccordionComponent {
    constructor() {
        this.group = 'group';
        this.multipleOpen = false;
        this.defaultOpen = false;
        this.flush = false;
        this.activeAccordion = new EventEmitter();
    }
    ngAfterContentInit() {
        this.items = this.accordionItems.toArray();
        let defaultOpenCount = 0;
        // Collect IDs of default open items
        const defaultOpenItems = [];
        this.items.forEach((item) => {
            if (item.defaultOpen) {
                defaultOpenCount++;
                if (!this.multipleOpen && defaultOpenCount > 1) {
                    console.warn(`Multiple defaultOpen items found in a single accordion with multipleOpen set to false. set <dv-accordion [multipleOpen]="true"> `);
                }
            }
            if (item.defaultOpen) {
                defaultOpenItems.push(String(item.id ? item.id : item.group + '-' + item.componentId));
            }
        });
        // Emit the default open items along with selected items
        this.getactiveAcordion(defaultOpenItems);
    }
    getactiveAcordion(item) {
        if (!this.multipleOpen && Array.isArray(item)) {
            this.activeAccordion.emit(item[0]);
        }
        else {
            this.activeAccordion.emit(item);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: AccordionComponent, isStandalone: true, selector: "dv-accordion", inputs: { group: "group", multipleOpen: "multipleOpen", defaultOpen: "defaultOpen", flush: "flush" }, outputs: { activeAccordion: "activeAccordion" }, host: { properties: { "style.--acordion-border": "'grey'" } }, queries: [{ propertyName: "accordionItems", predicate: AccordionItemComponent }], ngImport: i0, template: "<section\n  class=\"accordion-body\"\n  [style.border]=\"flush == true ? 'none' : '.1rem solid $gray'\"\n>\n  <div class=\"accordion\">\n    <ng-content></ng-content>\n  </div>\n</section>\n", styles: [".accordion-body{width:100%;height:fit-content;box-sizing:border-box;padding:.5rem 0rem;border:.1rem solid var(--theme-border, var(--dv-border, #808080));border-radius:.3rem;transition-duration:.4s}.accordion-body .accordion{box-sizing:border-box;list-style:none;margin-top:.2rem;padding:0rem .5rem}.flush{border:none}:host ::ng-deep dv-accordion-item:not(:first-child) label{margin-top:.5rem}:host ::ng-deep dv-accordion-item:not(:last-child) .accordion-content{border-bottom:.1rem solid var(--theme-border, var(--dv-border, #808080))}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-accordion', standalone: true, imports: [CommonModule], host: {
                        '[style.--acordion-border]': "'grey'",
                    }, template: "<section\n  class=\"accordion-body\"\n  [style.border]=\"flush == true ? 'none' : '.1rem solid $gray'\"\n>\n  <div class=\"accordion\">\n    <ng-content></ng-content>\n  </div>\n</section>\n", styles: [".accordion-body{width:100%;height:fit-content;box-sizing:border-box;padding:.5rem 0rem;border:.1rem solid var(--theme-border, var(--dv-border, #808080));border-radius:.3rem;transition-duration:.4s}.accordion-body .accordion{box-sizing:border-box;list-style:none;margin-top:.2rem;padding:0rem .5rem}.flush{border:none}:host ::ng-deep dv-accordion-item:not(:first-child) label{margin-top:.5rem}:host ::ng-deep dv-accordion-item:not(:last-child) .accordion-content{border-bottom:.1rem solid var(--theme-border, var(--dv-border, #808080))}\n"] }]
        }], ctorParameters: () => [], propDecorators: { group: [{
                type: Input
            }], multipleOpen: [{
                type: Input
            }], defaultOpen: [{
                type: Input
            }], flush: [{
                type: Input
            }], accordionItems: [{
                type: ContentChildren,
                args: [AccordionItemComponent]
            }], activeAccordion: [{
                type: Output
            }] } });

class AnchorMenu {
    constructor() {
        this.items = [];
        this.selectedChange = new EventEmitter();
        this.isProgrammaticScroll = false;
    }
    ngAfterViewInit() {
        queueMicrotask(() => this.observeSections());
    }
    ngOnChanges(changes) {
        if (changes['selected'] && this.selected) {
            this.scrollToSelected();
        }
    }
    ngOnDestroy() {
        this.observer?.disconnect();
    }
    anchor(id) {
        this.isProgrammaticScroll = true;
        this.selectedChange.emit(id);
        setTimeout(() => this.isProgrammaticScroll = false, 500);
    }
    observeSections() {
        if (!this.items?.length)
            return;
        this.observer = new IntersectionObserver(entries => {
            console.log(entries, 'deepak');
            const visible = entries.find(e => e.isIntersecting);
            if (visible && !this.isProgrammaticScroll) {
                this.selectedChange.emit(visible.target.id);
            }
        }, {
            root: this.scrollRoot ?? null, // ✅ critical for scroll containers
            threshold: 0.5,
            rootMargin: '0px 0px -60% 0px',
        });
        this.items.forEach(item => {
            const el = document.getElementById(item.id);
            if (el)
                this.observer.observe(el);
        });
    }
    scrollToSelected() {
        const el = document.getElementById(this.selected);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AnchorMenu, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: AnchorMenu, isStandalone: true, selector: "dv-anchor-menu", inputs: { items: "items", selected: "selected", scrollRoot: "scrollRoot" }, outputs: { selectedChange: "selectedChange" }, usesOnChanges: true, ngImport: i0, template: "@if(items.length){\n<ul class=\"list-container\">\n    @for (item of items; track item.id) {\n    <li class=\"list\" (click)=\"anchor(item.id)\" [class.active]=\"item.id == selected\">\n        {{item.label}}\n    </li>\n    }\n    <span id=\"indicator\"> </span>\n</ul>\n}", styles: [".list-container{position:relative;list-style:none;text-transform:uppercase;color:#b0b0b0;transition:all .3s}.list-container .list{width:100%;height:3rem;border-left:1px solid #b0b0b0;display:flex;justify-content:left;align-items:center;padding:0 1rem;box-sizing:border-box}.list-container .list:hover,.list-container .list.active{color:#0f2;border-left-color:#0f2}#indicator{transition:all .3s;position:absolute;width:3px;height:3rem;background-color:#0f2;transform:translate(-50%)}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AnchorMenu, decorators: [{
            type: Component,
            args: [{ selector: 'dv-anchor-menu', standalone: true, imports: [], template: "@if(items.length){\n<ul class=\"list-container\">\n    @for (item of items; track item.id) {\n    <li class=\"list\" (click)=\"anchor(item.id)\" [class.active]=\"item.id == selected\">\n        {{item.label}}\n    </li>\n    }\n    <span id=\"indicator\"> </span>\n</ul>\n}", styles: [".list-container{position:relative;list-style:none;text-transform:uppercase;color:#b0b0b0;transition:all .3s}.list-container .list{width:100%;height:3rem;border-left:1px solid #b0b0b0;display:flex;justify-content:left;align-items:center;padding:0 1rem;box-sizing:border-box}.list-container .list:hover,.list-container .list.active{color:#0f2;border-left-color:#0f2}#indicator{transition:all .3s;position:absolute;width:3px;height:3rem;background-color:#0f2;transform:translate(-50%)}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], selected: [{
                type: Input
            }], scrollRoot: [{
                type: Input
            }], selectedChange: [{
                type: Output
            }] } });

class ImageSliderComponent {
    constructor() {
        this.images = [];
        this.selectedIndex = 0;
    }
    ngOnInit() {
        this.slideURL = this.images[0];
    }
    setIndex(index, dots) {
        if (index > this.selectedIndex) {
            dots.scrollBy(25, 0);
            this.selectedIndex = index;
        }
        else {
            dots.scrollBy(-25, 0);
            this.selectedIndex = index;
        }
    }
    sliderNext(dots) {
        if (this.selectedIndex < this.images.length - 1) {
            this.selectedIndex = this.selectedIndex + 1;
            this.slideURL = this.images[this.selectedIndex];
            dots.scrollBy(25, 0);
        }
    }
    sliderprev(dots) {
        if (1 <= this.selectedIndex) {
            this.selectedIndex = this.selectedIndex - 1;
            this.slideURL = this.images[this.selectedIndex];
            dots.scrollBy(-25, 0);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ImageSliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ImageSliderComponent, isStandalone: true, selector: "dv-image-slider", inputs: { images: "images" }, ngImport: i0, template: "<div class=\"wrapper\">\n    <div class=\"images-area\">\n      <div\n        class=\"image\"\n        id=\"image\"\n        [style.background]=\"'url(' + slideURL + ')'\"\n      ></div>\n    </div>\n    <div class=\"buttons-area\">\n      <div\n        (click)=\"sliderprev(AutoScroll)\"\n        [style.visibility]=\"selectedIndex == 0 ? 'hidden' : 'visible'\"\n      >\n        \u00AB\n      </div>\n      <div\n        (click)=\"sliderNext(AutoScroll)\"\n        [style.visibility]=\"\n          selectedIndex == images.length - 1 ? 'hidden' : 'visible'\n        \"\n      >\n        \u00BB\n      </div>\n    </div>\n    <div class=\"pagination-area\" #AutoScroll>\n      <div\n        *ngFor=\"let dot of images; index as i\"\n        id=\"{{ i }}\"\n        [class.active]=\"selectedIndex === i\"\n        (click)=\"slideURL = dot; setIndex(i, AutoScroll)\"\n      ></div>\n    </div>\n  </div>\n  ", styles: [":host{display:flex;width:100%;height:100%;justify-content:center;align-items:center}.wrapper{width:600px;height:300px;position:relative;background-color:#d4f1f4;box-shadow:0 0 80px #00000038}.images-area{width:100%;height:100%;position:relative;display:flex;overflow:hidden}.images-area .image{width:100%;height:100%;background-size:cover!important;flex-shrink:0;background-repeat:no-repeat!important}.buttons-area{width:100%;position:absolute;top:50%;left:0;font-size:xx-large;transform:translateY(-50%);display:flex;justify-content:space-between;overflow:hidden}.buttons-area>div{color:#fff;background-color:#eafaf34e;padding:1rem;cursor:pointer;transition:.3s ease-in-out}.buttons-area>div:first-child{border-radius:0 5px 5px 0;margin-left:-100px}.buttons-area>div:last-child{border-radius:5px 0 0 5px;margin-right:-100px}.wrapper:hover .buttons-area>div:first-child{margin-left:0}.wrapper:hover .buttons-area>div:last-child{margin-right:0}.buttons-area div:hover:not(div.disabled){background-color:#87ebbb7e}.buttons-area div:not(div.disabled):active{opacity:.7}.buttons-area>div.disabled{cursor:no-drop;opacity:.3}.buttons-area div i{font-size:70px}.pagination-area{position:absolute;left:50%;display:inline-flex;align-items:center;bottom:0%;overflow-x:scroll;overflow-y:hidden;transform:translate(-50%);width:50%;height:2rem;scroll-behavior:smooth;scroll-snap-type:proximity;transition-duration:.5s;-ms-overflow-style:none;scrollbar-width:none}::-webkit-scrollbar{display:none}.pagination-area div{display:inline-block;flex-shrink:0;width:1rem;height:1rem;border-radius:50%;background-color:#fff;margin-right:9px;transform:scale(.5);transition:.3s ease-in-out;opacity:.4;cursor:pointer}.pagination-area div:hover,.pagination-area .active{width:1.5rem;height:1.5rem;opacity:.9}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ImageSliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-image-slider', standalone: true, imports: [CommonModule], template: "<div class=\"wrapper\">\n    <div class=\"images-area\">\n      <div\n        class=\"image\"\n        id=\"image\"\n        [style.background]=\"'url(' + slideURL + ')'\"\n      ></div>\n    </div>\n    <div class=\"buttons-area\">\n      <div\n        (click)=\"sliderprev(AutoScroll)\"\n        [style.visibility]=\"selectedIndex == 0 ? 'hidden' : 'visible'\"\n      >\n        \u00AB\n      </div>\n      <div\n        (click)=\"sliderNext(AutoScroll)\"\n        [style.visibility]=\"\n          selectedIndex == images.length - 1 ? 'hidden' : 'visible'\n        \"\n      >\n        \u00BB\n      </div>\n    </div>\n    <div class=\"pagination-area\" #AutoScroll>\n      <div\n        *ngFor=\"let dot of images; index as i\"\n        id=\"{{ i }}\"\n        [class.active]=\"selectedIndex === i\"\n        (click)=\"slideURL = dot; setIndex(i, AutoScroll)\"\n      ></div>\n    </div>\n  </div>\n  ", styles: [":host{display:flex;width:100%;height:100%;justify-content:center;align-items:center}.wrapper{width:600px;height:300px;position:relative;background-color:#d4f1f4;box-shadow:0 0 80px #00000038}.images-area{width:100%;height:100%;position:relative;display:flex;overflow:hidden}.images-area .image{width:100%;height:100%;background-size:cover!important;flex-shrink:0;background-repeat:no-repeat!important}.buttons-area{width:100%;position:absolute;top:50%;left:0;font-size:xx-large;transform:translateY(-50%);display:flex;justify-content:space-between;overflow:hidden}.buttons-area>div{color:#fff;background-color:#eafaf34e;padding:1rem;cursor:pointer;transition:.3s ease-in-out}.buttons-area>div:first-child{border-radius:0 5px 5px 0;margin-left:-100px}.buttons-area>div:last-child{border-radius:5px 0 0 5px;margin-right:-100px}.wrapper:hover .buttons-area>div:first-child{margin-left:0}.wrapper:hover .buttons-area>div:last-child{margin-right:0}.buttons-area div:hover:not(div.disabled){background-color:#87ebbb7e}.buttons-area div:not(div.disabled):active{opacity:.7}.buttons-area>div.disabled{cursor:no-drop;opacity:.3}.buttons-area div i{font-size:70px}.pagination-area{position:absolute;left:50%;display:inline-flex;align-items:center;bottom:0%;overflow-x:scroll;overflow-y:hidden;transform:translate(-50%);width:50%;height:2rem;scroll-behavior:smooth;scroll-snap-type:proximity;transition-duration:.5s;-ms-overflow-style:none;scrollbar-width:none}::-webkit-scrollbar{display:none}.pagination-area div{display:inline-block;flex-shrink:0;width:1rem;height:1rem;border-radius:50%;background-color:#fff;margin-right:9px;transform:scale(.5);transition:.3s ease-in-out;opacity:.4;cursor:pointer}.pagination-area div:hover,.pagination-area .active{width:1.5rem;height:1.5rem;opacity:.9}\n"] }]
        }], ctorParameters: () => [], propDecorators: { images: [{
                type: Input
            }] } });

class ProgressBarComponent {
    constructor() {
        this.rounded = false;
        this.border = false;
        this.showPercentage = false;
        this.barHeight = '2rem';
        this.color = '#123456';
        this.borderColor = '#000000';
        this.borderWidth = '.1rem';
        this.textColor = '#ffffff';
        this.bgColor = '#cccccc';
        this.progress = '60%';
        this.animate = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ProgressBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ProgressBarComponent, isStandalone: true, selector: "dv-progress-bar", inputs: { rounded: "rounded", border: "border", showPercentage: "showPercentage", barHeight: "barHeight", color: "color", borderColor: "borderColor", borderWidth: "borderWidth", textColor: "textColor", bgColor: "bgColor", progress: "progress", animate: "animate" }, ngImport: i0, template: "<div\n  class=\"progress-container border\"\n  [ngClass]=\"{ rounded: rounded == true, border: border == true }\"\n  [style.background-color]=\"bgColor\"\n  [style.border-width]=\"borderWidth\"\n  [style.border-color]=\"borderColor\"\n  [style.height]=\"barHeight\"\n  [style.--size]=\"barHeight\"\n>\n  <div\n    [ngClass]=\"{ rounded: rounded == true,  animate: animate == true}\"\n    class=\"progress\"\n    [style.background-color]=\"color\"\n    [style.width]=\"progress\"\n    [style.color]=\"textColor\"\n  >\n    <div class=\"text\">\n      <ng-content></ng-content>\n    </div>\n    <span *ngIf=\"showPercentage == true\" class=\"percentage\">\n      {{ progress }}\n    </span>\n  </div>\n</div>\n", styles: [".progress-container{width:100%;overflow:hidden;-webkit-box-shadow:inset -1px 4px 32px -8px rgba(0,0,0,.45);-moz-box-shadow:inset -1px 4px 32px -8px rgba(0,0,0,.45);box-shadow:inset -1px 4px 32px -8px #00000073;box-sizing:border-box}.progress-container .progress{height:100%;display:flex;justify-content:space-between;align-items:center}.progress-container .progress .percentage{padding-right:1rem}.progress-container .progress .text{padding-left:1rem}.rounded{border-radius:999px}.border{border:.1rem solid black}.animate{background:linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);background-size:3%;animation:move .5s linear infinite}@keyframes move{to{background-position:3rem 0}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ProgressBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-progress-bar', standalone: true, imports: [CommonModule], template: "<div\n  class=\"progress-container border\"\n  [ngClass]=\"{ rounded: rounded == true, border: border == true }\"\n  [style.background-color]=\"bgColor\"\n  [style.border-width]=\"borderWidth\"\n  [style.border-color]=\"borderColor\"\n  [style.height]=\"barHeight\"\n  [style.--size]=\"barHeight\"\n>\n  <div\n    [ngClass]=\"{ rounded: rounded == true,  animate: animate == true}\"\n    class=\"progress\"\n    [style.background-color]=\"color\"\n    [style.width]=\"progress\"\n    [style.color]=\"textColor\"\n  >\n    <div class=\"text\">\n      <ng-content></ng-content>\n    </div>\n    <span *ngIf=\"showPercentage == true\" class=\"percentage\">\n      {{ progress }}\n    </span>\n  </div>\n</div>\n", styles: [".progress-container{width:100%;overflow:hidden;-webkit-box-shadow:inset -1px 4px 32px -8px rgba(0,0,0,.45);-moz-box-shadow:inset -1px 4px 32px -8px rgba(0,0,0,.45);box-shadow:inset -1px 4px 32px -8px #00000073;box-sizing:border-box}.progress-container .progress{height:100%;display:flex;justify-content:space-between;align-items:center}.progress-container .progress .percentage{padding-right:1rem}.progress-container .progress .text{padding-left:1rem}.rounded{border-radius:999px}.border{border:.1rem solid black}.animate{background:linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent);background-size:3%;animation:move .5s linear infinite}@keyframes move{to{background-position:3rem 0}}\n"] }]
        }], ctorParameters: () => [], propDecorators: { rounded: [{
                type: Input
            }], border: [{
                type: Input
            }], showPercentage: [{
                type: Input
            }], barHeight: [{
                type: Input
            }], color: [{
                type: Input
            }], borderColor: [{
                type: Input
            }], borderWidth: [{
                type: Input
            }], textColor: [{
                type: Input
            }], bgColor: [{
                type: Input
            }], progress: [{
                type: Input
            }], animate: [{
                type: Input
            }] } });

class AlertComponent {
    constructor() {
        this.type = 'info';
        this.hideIcon = false;
        this.closeIcon = false;
        this.borderRadius = '8px';
        this.iconPrefix = '';
        this.iconMap = {
            info: 'info.svg',
            danger: 'danger.svg',
            success: 'success.svg',
            warning: 'warning.svg'
        };
    }
    ngOnInit() {
        this.setDefaultIcon();
        this.normalizeBorderRadius();
    }
    setDefaultIcon() {
        if (!this.icon) {
            this.icon = this.iconMap[this.type] || this.iconMap['info'];
        }
    }
    normalizeBorderRadius() {
        const unitPattern = /(px|%)$/;
        if (!unitPattern.test(this.borderRadius)) {
            this.borderRadius += 'px';
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: AlertComponent, isStandalone: true, selector: "dv-alert", inputs: { type: "type", icon: "icon", hideIcon: "hideIcon", closeIcon: "closeIcon", borderRadius: "borderRadius", iconPrefix: "iconPrefix" }, ngImport: i0, template: "<div class=\"alert_container\" [ngClass]=\"[type]\"\n  [style.--borderRadius]=\"borderRadius\">\n  <span *ngIf=\"!hideIcon\" class=\"alert-icon-left\" [ngStyle]=\"{\n      '-webkit-mask-image': 'url(' + iconPrefix + icon + ')',\n      'mask-image': 'url(' + iconPrefix + icon + ')',\n      'height': '20px',\n      'width': '20px'\n    }\"></span>\n\n  <div class=\"alert-content\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: [".alert_container{all:unset;position:relative;font-size:14px;padding:12px;text-align:left;font-weight:500;display:flex;gap:8px;border:1px var(--border-type, solid) var(--info-border, #0073e6);background:var(--info-bg, #e6f3ff);color:var(--info-text, #1c4980);border-radius:var(--borderRadius);line-height:130%}.alert_container.success{color:var(--success-text, #05603A);border-color:var(--success-border, #30A46C);background:var(--success-bg, #e5f9ed)}.alert_container.success .alert-icon-left{background:var(--success-text, #05603A)}.alert_container.danger{color:var(--danger-text, #B42318);border-color:var(--danger-border, #D92D20);background:var(--danger-bg, #fee4e2)}.alert_container.danger .alert-icon-left{background-color:var(--danger-text, #B42318)}.alert_container.warning{color:var(--warning-text, #6B4F00);border-color:var(--warning-border, #FFBA00);background:var(--warning-bg, #FFF7E0)}.alert_container.warning .alert-icon-left{background-color:var(--warning-text, #6B4F00)}.alert_container.no_bdr{border:0}.alert_container.no_icon{padding-left:16px}.alert_container.no_icon .alert-icon-left{display:none}.alert_container .alert-icon-left{all:unset;flex-shrink:0;width:20px;height:20px;background-color:var(--info-text, #1c4980);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;mask-size:100%;-webkit-mask-size:100%}.alert_container .alert-content{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-weight:400;font-size:12px;line-height:16px;gap:8px;width:100%}.alert_container .alert-content .alert-title{all:unset;font-size:14px;font-weight:500;line-height:19px}.alert_container .alert-content p{all:unset;font-weight:400}.alert_container .alert-content .btnRight{width:100%;display:flex;gap:8px;justify-content:flex-end}.alert_container .alert-content .alert-btn{margin-top:8px}.alert_container .alert-content .alert-btn button{all:unset;border:none;background:transparent;color:inherit}.alert_container ul,.alert_container ol{all:unset;padding-left:12px;margin:10px 0 0}.alert_container ul li,.alert_container ol li{margin-bottom:6px}.alert_container ul li:last-child,.alert_container ol li:last-child{margin-bottom:0}.alert_container ul li{list-style-type:disc}.alert_container.f-12{font-size:12px}@media (max-width: 767px){.alert_container{font-size:13px;line-height:19px;padding:12px}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-alert', standalone: true, imports: [CommonModule], template: "<div class=\"alert_container\" [ngClass]=\"[type]\"\n  [style.--borderRadius]=\"borderRadius\">\n  <span *ngIf=\"!hideIcon\" class=\"alert-icon-left\" [ngStyle]=\"{\n      '-webkit-mask-image': 'url(' + iconPrefix + icon + ')',\n      'mask-image': 'url(' + iconPrefix + icon + ')',\n      'height': '20px',\n      'width': '20px'\n    }\"></span>\n\n  <div class=\"alert-content\">\n    <ng-content></ng-content>\n  </div>\n</div>", styles: [".alert_container{all:unset;position:relative;font-size:14px;padding:12px;text-align:left;font-weight:500;display:flex;gap:8px;border:1px var(--border-type, solid) var(--info-border, #0073e6);background:var(--info-bg, #e6f3ff);color:var(--info-text, #1c4980);border-radius:var(--borderRadius);line-height:130%}.alert_container.success{color:var(--success-text, #05603A);border-color:var(--success-border, #30A46C);background:var(--success-bg, #e5f9ed)}.alert_container.success .alert-icon-left{background:var(--success-text, #05603A)}.alert_container.danger{color:var(--danger-text, #B42318);border-color:var(--danger-border, #D92D20);background:var(--danger-bg, #fee4e2)}.alert_container.danger .alert-icon-left{background-color:var(--danger-text, #B42318)}.alert_container.warning{color:var(--warning-text, #6B4F00);border-color:var(--warning-border, #FFBA00);background:var(--warning-bg, #FFF7E0)}.alert_container.warning .alert-icon-left{background-color:var(--warning-text, #6B4F00)}.alert_container.no_bdr{border:0}.alert_container.no_icon{padding-left:16px}.alert_container.no_icon .alert-icon-left{display:none}.alert_container .alert-icon-left{all:unset;flex-shrink:0;width:20px;height:20px;background-color:var(--info-text, #1c4980);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;mask-size:100%;-webkit-mask-size:100%}.alert_container .alert-content{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;font-weight:400;font-size:12px;line-height:16px;gap:8px;width:100%}.alert_container .alert-content .alert-title{all:unset;font-size:14px;font-weight:500;line-height:19px}.alert_container .alert-content p{all:unset;font-weight:400}.alert_container .alert-content .btnRight{width:100%;display:flex;gap:8px;justify-content:flex-end}.alert_container .alert-content .alert-btn{margin-top:8px}.alert_container .alert-content .alert-btn button{all:unset;border:none;background:transparent;color:inherit}.alert_container ul,.alert_container ol{all:unset;padding-left:12px;margin:10px 0 0}.alert_container ul li,.alert_container ol li{margin-bottom:6px}.alert_container ul li:last-child,.alert_container ol li:last-child{margin-bottom:0}.alert_container ul li{list-style-type:disc}.alert_container.f-12{font-size:12px}@media (max-width: 767px){.alert_container{font-size:13px;line-height:19px;padding:12px}}\n"] }]
        }], ctorParameters: () => [], propDecorators: { type: [{
                type: Input
            }], icon: [{
                type: Input
            }], hideIcon: [{
                type: Input
            }], closeIcon: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], iconPrefix: [{
                type: Input
            }] } });

class TooltipComponent {
    get isStringOrNumberTooltip() {
        return typeof this.tooltipContent === 'string' || typeof this.tooltipContent === 'number';
    }
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.tooltipPosition = 'bottom';
        this.noTip = false;
        this.tooltipBgColor = '#1c1c1c';
        this.tooltipTextColor = '#fffff';
        this.tipOffset = 0;
    }
    onClickOutside(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            // Clicked outside the tooltip, emit the outsideClick event
            this.outsideClick = true;
        }
        else {
            this.outsideClick = false;
        }
    }
    ngOnInit() {
        const verticalPositions = ['left-bottom', 'left-top', 'right-top', 'right-bottom'];
        const horizontalPositions = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        if (verticalPositions.includes(this.tooltipPosition)) {
            if (this.tipOffset > this.elementRef.nativeElement.offsetHeight - 10) {
                this.tipOffset = this.elementRef.nativeElement.offsetHeight - 10;
            }
        }
        else if (horizontalPositions.includes(this.tooltipPosition)) {
            this.tipOffset = this.elementRef.nativeElement.offsetWidth - 10;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: TooltipComponent, isStandalone: true, selector: "dv-tooltip", inputs: { tooltipContent: "tooltipContent", tooltipPosition: "tooltipPosition", noTip: "noTip", tooltipBgColor: "tooltipBgColor", tooltipTextColor: "tooltipTextColor", tooltipContext: "tooltipContext", tipOffset: "tipOffset" }, host: { listeners: { "document:click": "onClickOutside($event)" }, properties: { "class.no-tip": "noTip", "class.tooltip-from-top": "tooltipPosition == \"top\"", "class.tooltip-from-top-right": "tooltipPosition == \"top-right\"", "class.tooltip-from-top-left": "tooltipPosition == \"top-left\"", "class.tooltip-from-bottom": "tooltipPosition == \"bottom\"", "class.tooltip-from-bottom-right": "tooltipPosition == \"bottom-right\"", "class.tooltip-from-bottom-left": "tooltipPosition == \"bottom-left\"", "class.tooltip-from-left": "tooltipPosition == \"left\"", "class.tooltip-from-left-top": "tooltipPosition == \"left-top\"", "class.tooltip-from-left-bottom": "tooltipPosition == \"left-bottom\"", "class.tooltip-from-right": "tooltipPosition == \"right\"", "class.tooltip-from-right-top": "tooltipPosition == \"right-top\"", "class.tooltip-from-right-bottom": "tooltipPosition == \"right-bottom\"", "style.--tootipColor": "tooltipTextColor?.startsWith('#') ? tooltipTextColor : 'var(--' + tooltipTextColor + ')' ", "style.--tooltipBg": "tooltipBgColor?.startsWith('#') ? tooltipBgColor : 'var(--' + tooltipBgColor + ')' ", "style.--tipOffset": "tipOffset+'px'", "attr.tooltipId": "this.tooltipID" }, classAttribute: "un-tooltip" }, ngImport: i0, template: `
    <div  *ngIf="isStringOrNumberTooltip; else nonStringContent">
      {{ tooltipContent }}
    </div>
    <ng-template #nonStringContent>
      <ng-container *ngTemplateOutlet="tooltipContent ; context: tooltipContext"></ng-container>
    </ng-template>
  `, isInline: true, styles: [":host(.un-tooltip){display:flex;flex-direction:column;min-width:40px;max-width:240px;gap:4px;padding:8px;box-sizing:border-box;position:fixed;width:max-content;border-radius:5px;font-size:12px;font-weight:400;background:var(--tooltipBg);color:var(--tootipColor);box-shadow:0 4px 24px #0000001a;transition:opacity .3s ease,visibility .3s ease}:host(.un-tooltip):not(.no-tip):after{content:\"\";position:absolute;height:0px;width:0px;border-bottom-right-radius:2px;border:5px solid;border-color:transparent var(--tooltipBg) var(--tooltipBg) transparent;margin:auto;pointer-events:none}:host(.tooltip-from-top){transform:translate(-50%) translateY(-10px)}:host(.tooltip-from-top):after{left:calc(50% + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-top-right){transform:translate(10px) translateY(-10px)}:host(.tooltip-from-top-right):after{right:calc(10px + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-top-left){transform:translate(-10px) translateY(-10px)}:host(.tooltip-from-top-left):after{left:calc(20px + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-bottom){transform:translate(-50%) translateY(10px)}:host(.tooltip-from-bottom):after{left:calc(50% + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-bottom-right){transform:translate(10px) translateY(10px)}:host(.tooltip-from-bottom-right):after{right:calc(10px + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-bottom-left){transform:translate(-10px) translateY(10px)}:host(.tooltip-from-bottom-left):after{left:calc(20px + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-left){transform:translate(-10px) translateY(-50%)}:host(.tooltip-from-left):after{left:100%;bottom:calc(50% + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-left-top){transform:translate(-10px) translateY(-10px)}:host(.tooltip-from-left-top):after{left:100%;top:calc(10px + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-left-bottom){transform:translate(-10px) translateY(calc(-50% + 10px))}:host(.tooltip-from-left-bottom):after{left:100%;bottom:calc(20px + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-right){transform:translate(10px) translateY(-50%)}:host(.tooltip-from-right):after{right:100%;bottom:calc(50% + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}:host(.tooltip-from-right-top){transform:translate(10px) translateY(-10px)}:host(.tooltip-from-right-top):after{right:100%;top:calc(10px + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}:host(.tooltip-from-right-bottom){transform:translate(10px) translateY(calc(-50% + 10px))}:host(.tooltip-from-right-bottom):after{right:100%;bottom:calc(20px + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-tooltip', standalone: true, imports: [CommonModule], template: `
    <div  *ngIf="isStringOrNumberTooltip; else nonStringContent">
      {{ tooltipContent }}
    </div>
    <ng-template #nonStringContent>
      <ng-container *ngTemplateOutlet="tooltipContent ; context: tooltipContext"></ng-container>
    </ng-template>
  `, host: {
                        '[class.no-tip]': 'noTip',
                        '[class.tooltip-from-top]': 'tooltipPosition == "top"',
                        '[class.tooltip-from-top-right]': 'tooltipPosition == "top-right"',
                        '[class.tooltip-from-top-left]': 'tooltipPosition == "top-left"',
                        '[class.tooltip-from-bottom]': 'tooltipPosition == "bottom"',
                        '[class.tooltip-from-bottom-right]': 'tooltipPosition == "bottom-right"',
                        '[class.tooltip-from-bottom-left]': 'tooltipPosition == "bottom-left"',
                        '[class.tooltip-from-left]': 'tooltipPosition == "left"',
                        '[class.tooltip-from-left-top]': 'tooltipPosition == "left-top"',
                        '[class.tooltip-from-left-bottom]': 'tooltipPosition == "left-bottom"',
                        '[class.tooltip-from-right]': 'tooltipPosition == "right"',
                        '[class.tooltip-from-right-top]': 'tooltipPosition == "right-top"',
                        '[class.tooltip-from-right-bottom]': 'tooltipPosition == "right-bottom"',
                        'class': 'un-tooltip',
                        '[style.--tootipColor]': "tooltipTextColor?.startsWith('#') ? tooltipTextColor : 'var(--' + tooltipTextColor + ')' ",
                        '[style.--tooltipBg]': "tooltipBgColor?.startsWith('#') ? tooltipBgColor : 'var(--' + tooltipBgColor + ')' ",
                        '[style.--tipOffset]': "tipOffset+'px'",
                    }, styles: [":host(.un-tooltip){display:flex;flex-direction:column;min-width:40px;max-width:240px;gap:4px;padding:8px;box-sizing:border-box;position:fixed;width:max-content;border-radius:5px;font-size:12px;font-weight:400;background:var(--tooltipBg);color:var(--tootipColor);box-shadow:0 4px 24px #0000001a;transition:opacity .3s ease,visibility .3s ease}:host(.un-tooltip):not(.no-tip):after{content:\"\";position:absolute;height:0px;width:0px;border-bottom-right-radius:2px;border:5px solid;border-color:transparent var(--tooltipBg) var(--tooltipBg) transparent;margin:auto;pointer-events:none}:host(.tooltip-from-top){transform:translate(-50%) translateY(-10px)}:host(.tooltip-from-top):after{left:calc(50% + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-top-right){transform:translate(10px) translateY(-10px)}:host(.tooltip-from-top-right):after{right:calc(10px + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-top-left){transform:translate(-10px) translateY(-10px)}:host(.tooltip-from-top-left):after{left:calc(20px + var(--tipOffset));top:100%;transform:translate(-50%) translateY(-50%) rotate(45deg)}:host(.tooltip-from-bottom){transform:translate(-50%) translateY(10px)}:host(.tooltip-from-bottom):after{left:calc(50% + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-bottom-right){transform:translate(10px) translateY(10px)}:host(.tooltip-from-bottom-right):after{right:calc(10px + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-bottom-left){transform:translate(-10px) translateY(10px)}:host(.tooltip-from-bottom-left):after{left:calc(20px + var(--tipOffset));bottom:100%;transform:translate(-50%) translateY(50%) rotate(-135deg)}:host(.tooltip-from-left){transform:translate(-10px) translateY(-50%)}:host(.tooltip-from-left):after{left:100%;bottom:calc(50% + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-left-top){transform:translate(-10px) translateY(-10px)}:host(.tooltip-from-left-top):after{left:100%;top:calc(10px + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-left-bottom){transform:translate(-10px) translateY(calc(-50% + 10px))}:host(.tooltip-from-left-bottom):after{left:100%;bottom:calc(20px + var(--tipOffset));transform:translate(-50%) translateY(50%) rotate(-45deg)}:host(.tooltip-from-right){transform:translate(10px) translateY(-50%)}:host(.tooltip-from-right):after{right:100%;bottom:calc(50% + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}:host(.tooltip-from-right-top){transform:translate(10px) translateY(-10px)}:host(.tooltip-from-right-top):after{right:100%;top:calc(10px + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}:host(.tooltip-from-right-bottom){transform:translate(10px) translateY(calc(-50% + 10px))}:host(.tooltip-from-right-bottom):after{right:100%;bottom:calc(20px + var(--tipOffset));transform:translate(50%) translateY(50%) rotate(135deg)}\n"] }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { tooltipContent: [{
                type: Input
            }], tooltipPosition: [{
                type: Input
            }], noTip: [{
                type: Input
            }], tooltipBgColor: [{
                type: Input
            }], tooltipTextColor: [{
                type: Input
            }], tooltipContext: [{
                type: Input
            }], tipOffset: [{
                type: Input
            }], tooltipID: [{
                type: HostBinding,
                args: ['attr.tooltipId']
            }], onClickOutside: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class TooltipService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.tooltipComponentRef = null;
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    /**
     * Create and show the tooltip component.
     */
    createTooltip(viewContainerRef, tooltipContent, tooltipContext, tooltipID, tooltipBgColor, tooltipTextColor, tipOffset, noTip) {
        // Destroy any existing tooltip
        this.destroyTooltip();
        // Dynamically create TooltipComponent
        this.tooltipComponentRef =
            viewContainerRef.createComponent(TooltipComponent);
        // Pass inputs to the TooltipComponent instance
        const tooltipInstance = this.tooltipComponentRef.instance;
        tooltipInstance.tooltipContent = tooltipContent;
        tooltipInstance.tooltipContext = tooltipContext;
        tooltipInstance.tooltipID = tooltipID;
        tooltipInstance.tooltipBgColor = tooltipBgColor;
        tooltipInstance.tooltipTextColor = tooltipTextColor;
        tooltipInstance.tipOffset = tipOffset;
        tooltipInstance.noTip = noTip;
        // Return the tooltip's native DOM element for positioning
        const tooltipElement = this.tooltipComponentRef.location.nativeElement;
        document.body.appendChild(tooltipElement);
        return tooltipElement;
    }
    positionTooltip(hostElement, tooltipElement, tooltipPosition, tooltipOffset) {
        const HostTooltip = hostElement.getBoundingClientRect();
        const tooltipWidth = tooltipElement.offsetWidth;
        const tooltipHeight = tooltipElement.offsetHeight;
        const gapToTop = HostTooltip.top - tooltipHeight;
        const gapToBottom = window.innerHeight - HostTooltip.bottom - tooltipHeight;
        const gapToLeft = HostTooltip.left - tooltipWidth;
        const gapToRight = window.innerWidth - HostTooltip.right - tooltipWidth;
        const fitsAbove = gapToTop >= 0;
        const fitsBottom = gapToBottom >= 0;
        const fitsLeft = gapToLeft - 10 >= 0;
        const fitsRight = gapToRight - 10 >= 0;
        // Adjust tooltipPosition based on space
        if (!fitsRight && !fitsLeft) {
            if ([
                'top-right',
                'top-left',
                'right-top',
                'left-top',
                'right',
                'left',
            ].includes(tooltipPosition))
                tooltipPosition = 'top';
            if (['bottom-left', 'left-bottom', 'right-bottom', 'bottom-right'].includes(tooltipPosition))
                tooltipPosition = 'bottom';
        }
        else if (!fitsAbove && !fitsBottom) {
            tooltipPosition = 'left';
        }
        // Switch logic for all positions
        switch (tooltipPosition) {
            case 'top':
                if (gapToLeft + tooltipWidth / 2 <= 0) {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-left', 'bottom-left', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                else if (gapToRight + tooltipWidth / 2 <= 0) {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-right', 'bottom-right', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top', 'bottom', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + HostTooltip.width / 2}px`, `${HostTooltip.bottom}px`, `${HostTooltip.left + HostTooltip.width / 2}px`);
                }
                break;
            case 'top-right':
                if (gapToLeft + 20 <= 0) {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-left', 'bottom-left', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-right', 'bottom-right', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                break;
            case 'top-left':
                if (gapToRight <= 0) {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-right', 'bottom-right', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsAbove || gapToBottom < gapToTop, 'top-left', 'bottom-left', `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                break;
            case 'bottom':
                if (gapToLeft + tooltipWidth / 2 <= 0) {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-left', 'top-left', `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                else if (gapToRight + tooltipWidth / 2 <= 0) {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-right', 'top-right', `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom', 'top', `${HostTooltip.bottom}px`, `${HostTooltip.left + HostTooltip.width / 2}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + HostTooltip.width / 2}px`);
                }
                break;
            case 'bottom-right':
                if (gapToLeft + 20 <= 0) {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-left', 'top-left', `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-right', 'top-right', `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                break;
            case 'bottom-left':
                if (gapToRight <= 0) {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-right', 'top-right', `${HostTooltip.bottom}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.right - tooltipWidth - tooltipOffset}px`);
                }
                else {
                    this.setItooltipPosition(fitsBottom || gapToBottom > gapToTop, 'bottom-left', 'top-left', `${HostTooltip.bottom}px`, `${HostTooltip.left + tooltipOffset}px`, `${HostTooltip.top - tooltipHeight}px`, `${HostTooltip.left + tooltipOffset}px`);
                }
                break;
            case 'left':
                this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left', 'right', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`);
                break;
            case 'left-top':
                if (gapToBottom + tooltipHeight / 2 - 10 <= 0) {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left-bottom', 'right-bottom', `${HostTooltip.top - (tooltipHeight / 2 - 20) - tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top - (tooltipHeight / 2 - 20) - tooltipOffset}px`, `${HostTooltip.right}px`);
                }
                else if (tooltipHeight < 35) {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left', 'right', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`);
                }
                else {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left-top', 'right-top', `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.right}px`);
                }
                break;
            case 'left-bottom':
                if (gapToTop + 10 <= 0) {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left-top', 'right-top', `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.right}px`);
                }
                else if (tooltipHeight < 35) {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left', 'right', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`);
                }
                else {
                    this.setItooltipPosition(fitsLeft || gapToRight < gapToLeft, 'left-bottom', 'right-bottom', `${HostTooltip.top -
                        tooltipHeight / 2 +
                        HostTooltip.height -
                        tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`, `${HostTooltip.top -
                        tooltipHeight / 2 +
                        HostTooltip.height -
                        tooltipOffset}px`, `${HostTooltip.right}px`);
                }
                break;
            case 'right':
                this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right', 'left', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`);
                break;
            case 'right-top':
                if (gapToBottom - 10 <= 0) {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right-bottom', 'left-bottom', `${HostTooltip.bottom - tooltipHeight - tooltipOffset}px`, `${HostTooltip.right}px`, `${HostTooltip.top -
                        tooltipHeight / 2 +
                        HostTooltip.height -
                        tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                else if (tooltipHeight < 35) {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right', 'left', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                else {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right-top', 'left-top', `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.right}px`, `${HostTooltip.top + tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                break;
            case 'right-bottom':
                if (gapToTop <= 0) {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right-top', 'left-top', `${HostTooltip.top - tooltipOffset}px`, `${HostTooltip.right}px`, `${HostTooltip.top - tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                else if (tooltipHeight < 35) {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right', 'left', `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.right}px`, `${HostTooltip.top + HostTooltip.height / 2}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                else {
                    this.setItooltipPosition(fitsRight || gapToRight > gapToLeft, 'right-bottom', 'left-bottom', `${HostTooltip.bottom - tooltipHeight / 2 - tooltipOffset}px`, `${HostTooltip.right}px`, `${HostTooltip.top -
                        tooltipHeight / 2 +
                        HostTooltip.height -
                        tooltipOffset}px`, `${HostTooltip.left - tooltipWidth}px`);
                }
                break;
        }
    }
    setItooltipPosition(fitsCondition, position1, position2, top1, left1, top2, left2) {
        const tooltipElement = this.tooltipComponentRef;
        if (!tooltipElement)
            return;
        if (fitsCondition && tooltipElement) {
            tooltipElement.location.nativeElement.style.top = top1;
            tooltipElement.location.nativeElement.style.left = left1;
            tooltipElement.instance.tooltipPosition = position1;
        }
        else {
            tooltipElement.location.nativeElement.style.top = top2;
            tooltipElement.location.nativeElement.style.left = left2;
            tooltipElement.instance.tooltipPosition = position2;
        }
    }
    /**
     * Destroy the tooltip.
     */
    destroyTooltip() {
        if (this.tooltipComponentRef) {
            this.tooltipComponentRef.destroy();
            this.tooltipComponentRef = null;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipService, deps: [{ token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [{ type: i0.RendererFactory2 }] });

class TooltipDirective {
    get noTip() {
        return this._noTip;
    }
    set noTip(value) {
        this._noTip = coerceBooleanProperty(value);
    }
    get tooltipOnClick() {
        return this._tooltipOnClick;
    }
    set tooltipOnClick(value) {
        this._tooltipOnClick = coerceBooleanProperty(value);
    }
    constructor(elementRef, viewContainerRef, tooltipService, platformId, cdr) {
        this.elementRef = elementRef;
        this.viewContainerRef = viewContainerRef;
        this.tooltipService = tooltipService;
        this.platformId = platformId;
        this.cdr = cdr;
        this.tooltipPosition = 'bottom';
        this.tooltipDelay = 0;
        this.tooltipOffset = 0;
        this.tipOffset = 0;
        this.tooltipBgColor = '#1c1c1c';
        this.tooltipTextColor = '#fffff';
        this.isTooltipVisible = false;
        this.isHoveringTooltip = false;
        this.cleanupObservers = null;
        this.isTouchDevice = false;
        this._noTip = false;
        this._tooltipOnClick = false;
        this.handleOutsideClick = (event) => {
            const target = event.target;
            if (this.isTooltipVisible &&
                !this.elementRef.nativeElement.contains(target) && // Clicked outside host
                (!this.tooltipNativeElement ||
                    !this.tooltipNativeElement.contains(target)) // Clicked outside tooltip
            ) {
                this.hideTooltip();
                document.removeEventListener('click', this.handleOutsideClick, true);
            }
        };
        this.tooltipMouseEnterHandler = () => {
            this.isHoveringTooltip = true;
            clearTimeout(this.mouseLeaveDebounce);
        };
        this.tooltipMouseLeaveHandler = () => {
            if (!this.isTouchDevice) {
                this.isHoveringTooltip = false;
                this.hideTooltip();
            }
        };
        this.isTouchDevice =
            isPlatformBrowser(platformId) &&
                ('ontouchstart' in window || navigator.maxTouchPoints > 0) &&
                matchMedia('(pointer: coarse)').matches;
    }
    onTooltipClick(event) {
        if (!this.isTouchDevice)
            return;
        event.stopPropagation();
        clearTimeout(this.mouseClickDebounce);
        this.mouseClickDebounce = setTimeout(() => {
            if (this.tooltipContent) {
                if (this.isTooltipVisible) {
                    this.tooltipService.destroyTooltip(); // Hide existing tooltip before showing a new one
                    this.isTooltipVisible = false;
                }
                else {
                    this.showTooltip();
                }
            }
        }, 150);
    }
    onMouseEnter() {
        if (this.isTouchDevice)
            return;
        clearTimeout(this.mouseLeaveDebounce); // Clear any pending hide
        this.mouseEnterDebounce = setTimeout(() => {
            if (this.tooltipContent && !this.isTooltipVisible) {
                this.showTooltip();
            }
        }, 150); // Add a 150ms delay
    }
    onMouseLeave() {
        clearTimeout(this.mouseEnterDebounce); // Clear any pending show
        if (!this.isHoveringTooltip && !this.isTouchDevice) {
            this.mouseLeaveDebounce = setTimeout(() => {
                this.hideTooltip();
            }, 100); // Add a 100ms delay
        }
    }
    observeHostPosition() {
        if (!this.elementRef?.nativeElement)
            return;
        let prevRect = this.elementRef.nativeElement.getBoundingClientRect();
        // ResizeObserver - Detects layout shifts and resizes
        const resizeObserver = new ResizeObserver(() => {
            this.checkHostPosition(prevRect, resizeObserver);
        });
        resizeObserver.observe(this.elementRef.nativeElement);
        // Scroll listener - Detects movement due to scrolling
        const onScroll = () => {
            this.checkHostPosition(prevRect, resizeObserver);
        };
        window.addEventListener('scroll', onScroll, true);
        // Cleanup when tooltip is hidden
        this.cleanupObservers = () => {
            resizeObserver.disconnect();
            window.removeEventListener('scroll', onScroll, true); // Properly remove scroll listener
        };
    }
    checkHostPosition(prevRect, observer) {
        const newRect = this.elementRef.nativeElement.getBoundingClientRect();
        if (prevRect.top !== newRect.top || prevRect.left !== newRect.left) {
            this.hideTooltip();
            observer.disconnect();
        }
        prevRect = newRect;
    }
    /**
     * Show the tooltip and position it according to the logic provided.
     */
    showTooltip() {
        const tooltipId = this.generateUniqueID();
        this.isTooltipVisible = true;
        // Create the tooltip component using TooltipService
        this.tooltipNativeElement = this.tooltipService.createTooltip(this.viewContainerRef, this.tooltipContent, this.tooltipContext, tooltipId, this.tooltipBgColor, this.tooltipTextColor, this.tipOffset, this._noTip);
        // Initially hide the tooltip
        this.tooltipNativeElement.style.opacity = '0';
        this.tooltipNativeElement.style.visibility = 'hidden';
        setTimeout(() => {
            this.tooltipNativeElement.style.position = 'fixed';
            this.tooltipNativeElement.style.zIndex = '2147483647';
            this.tooltipService.positionTooltip(this.elementRef.nativeElement, this.tooltipNativeElement, this.tooltipPosition, this.tooltipOffset);
            // Show the tooltip
            this.tooltipNativeElement.style.opacity = '1';
            this.tooltipNativeElement.style.visibility = 'visible';
            this.observeHostPosition();
            if (!this.isTouchDevice) {
                this.tooltipNativeElement.addEventListener('mouseenter', this.tooltipMouseEnterHandler);
                this.tooltipNativeElement.addEventListener('mouseleave', this.tooltipMouseLeaveHandler);
            }
            if (this.isTouchDevice) {
                document.addEventListener('click', this.handleOutsideClick, true);
            }
            this.cdr.markForCheck();
        }, this.tooltipDelay);
    }
    /**
     * Hide the tooltip using TooltipService.
     */
    hideTooltip() {
        this.isTooltipVisible = false;
        this.isHoveringTooltip = false;
        clearTimeout(this.mouseClickDebounce);
        clearTimeout(this.mouseEnterDebounce);
        clearTimeout(this.mouseLeaveDebounce);
        if (this.cleanupObservers) {
            this.cleanupObservers();
            this.cleanupObservers = null;
        }
        if (this.tooltipNativeElement) {
            this.tooltipNativeElement.removeEventListener('mouseenter', this.tooltipMouseEnterHandler);
            this.tooltipNativeElement.removeEventListener('mouseleave', this.tooltipMouseLeaveHandler);
        }
        if (this.isTouchDevice) {
            document.removeEventListener('click', this.handleOutsideClick, true);
        }
        this.tooltipService.destroyTooltip();
    }
    /**
     * Generate a unique ID for each tooltip.
     */
    generateUniqueID() {
        const timestamp = new Date().getTime();
        return `tooltip-${timestamp}`;
    }
    ngOnDestroy() {
        this.hideTooltip();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: TooltipService }, { token: PLATFORM_ID }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: TooltipDirective, isStandalone: true, selector: "[dvTooltip]", inputs: { tooltipContent: ["dvTooltip", "tooltipContent"], tooltipContext: "tooltipContext", tooltipPosition: "tooltipPosition", tooltipDelay: "tooltipDelay", tooltipOffset: "tooltipOffset", tipOffset: "tipOffset", tooltipBgColor: "tooltipBgColor", tooltipTextColor: "tooltipTextColor", noTip: "noTip", tooltipOnClick: "tooltipOnClick" }, host: { listeners: { "click": "onTooltipClick($event)", "mouseenter": "onMouseEnter()", "mouseleave": "onMouseLeave()" }, properties: { "style.cursor": "\"pointer\"" } }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dvTooltip]',
                    host: {
                        '[style.cursor]': '"pointer"',
                    },
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: TooltipService }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }, { type: i0.ChangeDetectorRef }], propDecorators: { tooltipContent: [{
                type: Input,
                args: ['dvTooltip']
            }], tooltipContext: [{
                type: Input,
                args: ['tooltipContext']
            }], tooltipPosition: [{
                type: Input,
                args: ['tooltipPosition']
            }], tooltipDelay: [{
                type: Input,
                args: ['tooltipDelay']
            }], tooltipOffset: [{
                type: Input,
                args: ['tooltipOffset']
            }], tipOffset: [{
                type: Input,
                args: ['tipOffset']
            }], tooltipBgColor: [{
                type: Input
            }], tooltipTextColor: [{
                type: Input
            }], noTip: [{
                type: Input
            }], tooltipOnClick: [{
                type: Input
            }], onTooltipClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter']
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave']
            }] } });

// dv-header.directive.ts
class DvHeaderDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: DvHeaderDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: DvHeaderDirective, isStandalone: true, selector: "[dvHeader]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: DvHeaderDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dvHeader]'
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

// dv-cell.directive.ts
class DvCellDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: DvCellDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: DvCellDirective, isStandalone: true, selector: "[dvCell]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: DvCellDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[dvCell]'
                }]
        }], ctorParameters: () => [{ type: i0.TemplateRef }] });

class TableItem {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TableItem, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: TableItem, isStandalone: true, selector: "dv-table-item", inputs: { label: "label", key: "key", sticky: "sticky" }, queries: [{ propertyName: "cellTemplateRef", first: true, predicate: DvCellDirective, descendants: true }, { propertyName: "headerTemplateRef", first: true, predicate: DvHeaderDirective, descendants: true }], ngImport: i0, template: `<ng-template><ng-content></ng-content></ng-template>`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TableItem, decorators: [{
            type: Component,
            args: [{
                    selector: 'dv-table-item',
                    standalone: true,
                    template: `<ng-template><ng-content></ng-content></ng-template>`,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }], propDecorators: { label: [{
                type: Input
            }], key: [{
                type: Input
            }], sticky: [{
                type: Input
            }], cellTemplateRef: [{
                type: ContentChild,
                args: [DvCellDirective]
            }], headerTemplateRef: [{
                type: ContentChild,
                args: [DvHeaderDirective]
            }] } });

class Table {
    constructor(cdr) {
        this.cdr = cdr;
        this.rows = [];
        this.columns = [];
        this.stickyLeftOffsets = signal([]);
        this.stickyRightOffsets = signal([]);
        this.colWidths = [];
        this.resizingColIndex = null;
        this.startX = 0;
        this.startWidth = 0;
        this.onMouseMove = (event) => {
            if (this.resizingColIndex !== null) {
                const dx = event.clientX - this.startX;
                const newWidth = Math.max(this.startWidth + dx, 50); // minimum width
                this.colWidths[this.resizingColIndex] = newWidth;
                this.computeStickyOffsets();
                this.cdr.detectChanges();
            }
        };
        this.onMouseUp = () => {
            this.resizingColIndex = null;
            document.removeEventListener('mousemove', this.onMouseMove);
            document.removeEventListener('mouseup', this.onMouseUp);
        };
    }
    ngAfterContentInit() {
        this.columns = this.columnDefs.toArray();
        this.columnDefsChangesSub = this.columnDefs.changes.subscribe(() => {
            this.columns = this.columnDefs.toArray();
            requestAnimationFrame(() => {
                this.setInitialColWidths();
                this.computeStickyOffsets();
            });
        });
        requestAnimationFrame(() => {
            this.setInitialColWidths();
            this.computeStickyOffsets();
        });
    }
    ngAfterViewInit() {
        this.thRefs.changes.subscribe(() => {
            requestAnimationFrame(() => {
                this.setInitialColWidths();
                this.computeStickyOffsets();
            });
        });
        requestAnimationFrame(() => {
            this.setInitialColWidths();
            this.computeStickyOffsets();
        });
    }
    setInitialColWidths() {
        this.colWidths = this.thRefs.map((th) => th.nativeElement.getBoundingClientRect().width);
    }
    computeStickyOffsets() {
        const leftOffsets = [];
        const rightOffsets = [];
        // Left sticky
        let leftOffset = 0;
        for (let i = 0; i < this.columns.length; i++) {
            const col = this.columns[i];
            if (col.sticky === 'left') {
                leftOffsets[i] = leftOffset;
                leftOffset += this.colWidths[i] || 0;
            }
            else {
                leftOffsets[i] = 0;
            }
        }
        // Right sticky
        let rightOffset = 0;
        for (let i = this.columns.length - 1; i >= 0; i--) {
            const col = this.columns[i];
            if (col.sticky === 'right') {
                rightOffsets[i] = rightOffset;
                rightOffset += this.colWidths[i] || 0;
            }
            else {
                rightOffsets[i] = 0;
            }
        }
        this.stickyLeftOffsets.set(leftOffsets);
        this.stickyRightOffsets.set(rightOffsets);
        this.cdr.detectChanges();
    }
    onResizeStart(event, index) {
        event.preventDefault();
        this.resizingColIndex = index;
        this.startX = event.clientX;
        this.startWidth = this.colWidths[index];
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }
    ngOnDestroy() {
        this.columnDefsChangesSub?.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Table, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: Table, isStandalone: true, selector: "dv-table", inputs: { rows: "rows" }, queries: [{ propertyName: "columnDefs", predicate: TableItem }], viewQueries: [{ propertyName: "thRefs", predicate: ["thRef"], descendants: true }], ngImport: i0, template: "<table class=\"dv-table\">\n  <thead>\n    <tr>\n      <th\n        #thRef\n        *ngFor=\"let col of columns; let i = index\"\n        [class.sticky-left]=\"col.sticky === 'left'\"\n        [class.sticky-right]=\"col.sticky === 'right'\"\n        [style.left.px]=\"col.sticky === 'left' ? stickyLeftOffsets()[i] : null\"\n        [style.right.px]=\"col.sticky === 'right' ? stickyRightOffsets()[i] : null\"\n      >\n        <div class=\"th-content\" [style.width.px]=\"colWidths[i]-32\">\n          <ng-container *ngIf=\"col.headerTemplateRef?.templateRef; else defaultHeader\">\n            <ng-container *ngTemplateOutlet=\"col.headerTemplateRef?.templateRef\"></ng-container>\n          </ng-container>\n          <ng-template #defaultHeader>{{ col.label }}</ng-template>\n        </div>\n        <div class=\"resize-handle\" (mousedown)=\"onResizeStart($event, i)\"></div>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of rows\">\n      <td\n        *ngFor=\"let col of columns; let i = index\"\n        [class.sticky-left]=\"col.sticky === 'left'\"\n        [class.sticky-right]=\"col.sticky === 'right'\"\n        [style.left.px]=\"col.sticky === 'left' ? stickyLeftOffsets()[i] : null\"\n        [style.right.px]=\"col.sticky === 'right' ? stickyRightOffsets()[i] : null\"\n        [attr.data-label]=\"col.label\"\n      >\n        <ng-container *ngIf=\"col.cellTemplateRef?.templateRef; else defaultCell\">\n          <ng-container *ngTemplateOutlet=\"col.cellTemplateRef?.templateRef; context: { $implicit: row }\"></ng-container>\n        </ng-container>\n        <ng-template #defaultCell>\n          {{ col.key ? row[col.key] : '' }}\n        </ng-template>\n      </td>\n    </tr>\n  </tbody>\n</table>\n", styles: [":host{--table-bg: #ffffff16;--table-text: #f0f0f0;--table-header-bg: #ffffff16;--table-header-text: #ffffff;--table-hover-bg: #ffffff36;--table-border-color: #ffffff46;display:block;width:100%;overflow:auto}.dv-table{border-collapse:collapse;font-family:var(--table-font-family);font-size:var(--table-font-size);color:var(--table-text);background-color:var(--table-bg);table-layout:auto;width:100%}.dv-table th,.dv-table td{position:relative;padding:6px 10px;text-align:left;vertical-align:middle;white-space:nowrap;border:1px solid var(--table-border-color);box-sizing:border-box;min-width:100%;overflow:hidden;box-sizing:content-box}.dv-table thead{background-color:var(--table-header-bg);color:var(--table-header-text)}.dv-table thead th{font-weight:600;border-bottom:2px solid var(--table-border-color);background-color:var(--table-header-bg);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);position:sticky;top:0;z-index:3}.dv-table thead th .th-content{display:block;min-width:fit-content}.dv-table thead th .resize-handle{position:absolute;top:0;right:0;width:4px;height:100%;transform:translate(50%);cursor:col-resize;background-color:transparent}.dv-table tbody tr{border-bottom:1px solid var(--table-border-color);transition:background-color .2s ease}.dv-table tbody tr:hover td{background-color:var(--table-hover-bg)}.dv-table tbody td{padding:6px 10px;text-align:left;vertical-align:middle;white-space:nowrap}.dv-table th.sticky-left,.dv-table td.sticky-left,.dv-table th.sticky-right,.dv-table td.sticky-right{position:sticky;z-index:2;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.dv-table th.sticky-left,.dv-table th.sticky-right{background-color:var(--table-header-bg)}.dv-table td.sticky-left,.dv-table td.sticky-right{background-color:var(--table-bg)}.dv-table th.sticky-left,.dv-table th.sticky-right{z-index:4!important}@media (max-width: 768px){.dv-table{display:block;overflow-x:auto;white-space:nowrap}.dv-table thead{display:none}.dv-table tbody,.dv-table tr,.dv-table td{display:block}.dv-table tr{margin-bottom:16px}.dv-table td{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--table-border-color);padding:6px 10px}.dv-table td:before{content:attr(data-label);font-weight:600;color:var(--table-header-text);flex:1}}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Table, decorators: [{
            type: Component,
            args: [{ selector: 'dv-table', standalone: true, imports: [CommonModule], template: "<table class=\"dv-table\">\n  <thead>\n    <tr>\n      <th\n        #thRef\n        *ngFor=\"let col of columns; let i = index\"\n        [class.sticky-left]=\"col.sticky === 'left'\"\n        [class.sticky-right]=\"col.sticky === 'right'\"\n        [style.left.px]=\"col.sticky === 'left' ? stickyLeftOffsets()[i] : null\"\n        [style.right.px]=\"col.sticky === 'right' ? stickyRightOffsets()[i] : null\"\n      >\n        <div class=\"th-content\" [style.width.px]=\"colWidths[i]-32\">\n          <ng-container *ngIf=\"col.headerTemplateRef?.templateRef; else defaultHeader\">\n            <ng-container *ngTemplateOutlet=\"col.headerTemplateRef?.templateRef\"></ng-container>\n          </ng-container>\n          <ng-template #defaultHeader>{{ col.label }}</ng-template>\n        </div>\n        <div class=\"resize-handle\" (mousedown)=\"onResizeStart($event, i)\"></div>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let row of rows\">\n      <td\n        *ngFor=\"let col of columns; let i = index\"\n        [class.sticky-left]=\"col.sticky === 'left'\"\n        [class.sticky-right]=\"col.sticky === 'right'\"\n        [style.left.px]=\"col.sticky === 'left' ? stickyLeftOffsets()[i] : null\"\n        [style.right.px]=\"col.sticky === 'right' ? stickyRightOffsets()[i] : null\"\n        [attr.data-label]=\"col.label\"\n      >\n        <ng-container *ngIf=\"col.cellTemplateRef?.templateRef; else defaultCell\">\n          <ng-container *ngTemplateOutlet=\"col.cellTemplateRef?.templateRef; context: { $implicit: row }\"></ng-container>\n        </ng-container>\n        <ng-template #defaultCell>\n          {{ col.key ? row[col.key] : '' }}\n        </ng-template>\n      </td>\n    </tr>\n  </tbody>\n</table>\n", styles: [":host{--table-bg: #ffffff16;--table-text: #f0f0f0;--table-header-bg: #ffffff16;--table-header-text: #ffffff;--table-hover-bg: #ffffff36;--table-border-color: #ffffff46;display:block;width:100%;overflow:auto}.dv-table{border-collapse:collapse;font-family:var(--table-font-family);font-size:var(--table-font-size);color:var(--table-text);background-color:var(--table-bg);table-layout:auto;width:100%}.dv-table th,.dv-table td{position:relative;padding:6px 10px;text-align:left;vertical-align:middle;white-space:nowrap;border:1px solid var(--table-border-color);box-sizing:border-box;min-width:100%;overflow:hidden;box-sizing:content-box}.dv-table thead{background-color:var(--table-header-bg);color:var(--table-header-text)}.dv-table thead th{font-weight:600;border-bottom:2px solid var(--table-border-color);background-color:var(--table-header-bg);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);position:sticky;top:0;z-index:3}.dv-table thead th .th-content{display:block;min-width:fit-content}.dv-table thead th .resize-handle{position:absolute;top:0;right:0;width:4px;height:100%;transform:translate(50%);cursor:col-resize;background-color:transparent}.dv-table tbody tr{border-bottom:1px solid var(--table-border-color);transition:background-color .2s ease}.dv-table tbody tr:hover td{background-color:var(--table-hover-bg)}.dv-table tbody td{padding:6px 10px;text-align:left;vertical-align:middle;white-space:nowrap}.dv-table th.sticky-left,.dv-table td.sticky-left,.dv-table th.sticky-right,.dv-table td.sticky-right{position:sticky;z-index:2;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.dv-table th.sticky-left,.dv-table th.sticky-right{background-color:var(--table-header-bg)}.dv-table td.sticky-left,.dv-table td.sticky-right{background-color:var(--table-bg)}.dv-table th.sticky-left,.dv-table th.sticky-right{z-index:4!important}@media (max-width: 768px){.dv-table{display:block;overflow-x:auto;white-space:nowrap}.dv-table thead{display:none}.dv-table tbody,.dv-table tr,.dv-table td{display:block}.dv-table tr{margin-bottom:16px}.dv-table td{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--table-border-color);padding:6px 10px}.dv-table td:before{content:attr(data-label);font-weight:600;color:var(--table-header-text);flex:1}}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { rows: [{
                type: Input
            }], columnDefs: [{
                type: ContentChildren,
                args: [TableItem]
            }], thRefs: [{
                type: ViewChildren,
                args: ['thRef']
            }] } });

class TabItemComponent {
    constructor() {
        this.active = false;
        this.label = '';
        this.slug = '';
        this.iconLeft = '';
        this.iconRight = '';
        this.iconHeight = 20;
        this.iconWidth = 20;
        this.disabled = false;
        this.iconPrefix = '';
    }
    static { this.uniqueIdCounter = 0; }
    ngOnChanges(changes) {
        if (changes['label'] && this.label) {
            this.id = this?.slug ? this.slug : this.generateSlug(this.label);
        }
    }
    generateSlug(label) {
        const safeLabel = label
            .replace(/\s+/g, '-')
            .replace(/[^\w\-]/g, '')
            .toLowerCase();
        const uniqueId = ++TabItemComponent.uniqueIdCounter;
        return `dv-tab-item-${safeLabel}-${uniqueId}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: TabItemComponent, isStandalone: true, selector: "dv-tab-item", inputs: { active: "active", label: "label", slug: "slug", iconLeft: "iconLeft", iconRight: "iconRight", iconHeight: "iconHeight", iconWidth: "iconWidth", disabled: "disabled", iconPrefix: "iconPrefix" }, usesOnChanges: true, ngImport: i0, template: "<div class=\"tab_item\" [class.active]=\"active\" *ngIf=\"active\">\n  <ng-content></ng-content>\n</div>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-tab-item', standalone: true, imports: [CommonModule], template: "<div class=\"tab_item\" [class.active]=\"active\" *ngIf=\"active\">\n  <ng-content></ng-content>\n</div>\n" }]
        }], propDecorators: { active: [{
                type: Input,
                args: ['active']
            }], label: [{
                type: Input,
                args: ['label']
            }], slug: [{
                type: Input,
                args: ['slug']
            }], iconLeft: [{
                type: Input,
                args: ['iconLeft']
            }], iconRight: [{
                type: Input,
                args: ['iconRight']
            }], iconHeight: [{
                type: Input,
                args: ['iconHeight']
            }], iconWidth: [{
                type: Input,
                args: ['iconWidth']
            }], disabled: [{
                type: Input,
                args: ['disabled']
            }], iconPrefix: [{
                type: Input,
                args: ['iconPrefix']
            }] } });

class TabsComponent {
    static { this.uniqueIdCounter = 0; }
    constructor(cdr) {
        this.cdr = cdr;
        this.default = '';
        this.tabId = '';
        this.height = '70px';
        this.currentTabChange = new EventEmitter();
    }
    ngOnInit() {
        if (!this.tabId) {
            this.tabId = `un-tab-${++TabsComponent.uniqueIdCounter}`;
        }
    }
    ngOnChanges(changes) {
        if (changes['default'] && !changes['default'].isFirstChange()) {
            this.activateDefaultTab();
        }
    }
    ngAfterContentInit() {
        this.activateDefaultTab();
        this.tabs_list.changes.subscribe(() => {
            queueMicrotask(() => {
                const current = this.tabs_list.find(tab => tab.active);
                if (current) {
                    this.selectTab(current);
                }
                else if (this.default) {
                    const defaultTab = this.tabs_list.find(tab => (tab.slug || tab.label) === this.default);
                    if (defaultTab) {
                        this.selectTab(defaultTab);
                    }
                    else {
                        this.selectTab(this.tabs_list.first);
                    }
                }
                else {
                    this.selectTab(this.tabs_list.first);
                }
                this.cdr.markForCheck();
            });
        });
    }
    selectTab(tab) {
        if (!tab.disabled) {
            this.tabs_list.forEach(t => (t.active = false));
            tab.active = true;
            this.currentTabChange.emit(tab);
        }
    }
    activateDefaultTab() {
        if (!this.tabs_list || this.tabs_list.length === 0)
            return;
        queueMicrotask(() => {
            const tab = this.tabs_list.find(tab => (tab.slug || tab.label) === this.default);
            if (tab) {
                this.selectTab(tab);
            }
            else {
                this.selectTab(this.tabs_list.first);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabsComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: TabsComponent, isStandalone: true, selector: "dv-tabs", inputs: { default: "default", tabTemplate: "tabTemplate", tabId: "tabId", height: "height" }, outputs: { currentTabChange: "currentTabChange" }, queries: [{ propertyName: "tabs_list", predicate: TabItemComponent }], usesOnChanges: true, ngImport: i0, template: "<div class=\"tab-header\">\n  <ng-container *ngFor=\"let tab of tabs_list\">\n    <ng-container\n      *ngTemplateOutlet=\"\n        tabTemplate;\n        context: { $implicit: tab, tabs:tabs_list.toArray(), selectTab: selectTab.bind(this) }\n      \"\n    >\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-content></ng-content>\n", dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dv-tabs', standalone: true, imports: [CommonModule], template: "<div class=\"tab-header\">\n  <ng-container *ngFor=\"let tab of tabs_list\">\n    <ng-container\n      *ngTemplateOutlet=\"\n        tabTemplate;\n        context: { $implicit: tab, tabs:tabs_list.toArray(), selectTab: selectTab.bind(this) }\n      \"\n    >\n    </ng-container>\n  </ng-container>\n</div>\n\n<ng-content></ng-content>\n" }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { tabs_list: [{
                type: ContentChildren,
                args: [TabItemComponent]
            }], default: [{
                type: Input
            }], tabTemplate: [{
                type: Input,
                args: [{ required: true }]
            }], tabId: [{
                type: Input
            }], height: [{
                type: Input
            }], currentTabChange: [{
                type: Output
            }] } });

class Breadcrumb {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.breadcrumbs = [];
    }
    ngOnInit() {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
            this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
        });
    }
    buildBreadcrumbs(route, url = '', breadcrumbs = []) {
        const children = route.children;
        if (children.length == 0) {
            return breadcrumbs;
        }
        for (const child of children) {
            const routeUrl = child.snapshot.url.map(segment => segment.path).join('/');
            if (routeUrl !== '') {
                url += `${routeUrl}`;
            }
            const label = child.snapshot.data['breadcrumb'];
            if (label !== undefined && label !== null) {
                breadcrumbs.push({ label, url });
            }
            return this.buildBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Breadcrumb, deps: [{ token: i1$1.Router }, { token: i1$1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: Breadcrumb, isStandalone: true, selector: "dv-breadcrumb", ngImport: i0, template: "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        @for(breadcrumb of breadcrumbs ; track breadcrumb ; let last = $last){\n        <li class=\"breadcrumb-item\">\n            @if(!last){\n            <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\n            }@else{\n            <span>{{ breadcrumb.label }}</span>\n            }\n\n        </li>\n\n        }\n\n    </ol>\n</nav>", styles: [".breadcrumb{background-color:transparent;padding:0;margin:0;list-style:none}\n"], dependencies: [{ kind: "directive", type: RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Breadcrumb, decorators: [{
            type: Component,
            args: [{ selector: 'dv-breadcrumb', imports: [RouterLink], template: "<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        @for(breadcrumb of breadcrumbs ; track breadcrumb ; let last = $last){\n        <li class=\"breadcrumb-item\">\n            @if(!last){\n            <a [routerLink]=\"breadcrumb.url\">{{ breadcrumb.label }}</a>\n            }@else{\n            <span>{{ breadcrumb.label }}</span>\n            }\n\n        </li>\n\n        }\n\n    </ol>\n</nav>", styles: [".breadcrumb{background-color:transparent;padding:0;margin:0;list-style:none}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.Router }, { type: i1$1.ActivatedRoute }] });

class TabsModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: i0, type: TabsModule, imports: [TabsComponent, TabItemComponent, CommonModule], exports: [TabsComponent, TabItemComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabsModule, imports: [TabsComponent, TabItemComponent, CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: TabsModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [TabsComponent, TabItemComponent, CommonModule],
                    exports: [TabsComponent, TabItemComponent],
                }]
        }] });

class Radio {
    constructor() {
        this.checked = false;
        this.disabled = false;
        this.hasCustomName = false;
        this.onChange = () => { };
    }
    set name(val) {
        this._name = val;
        this.hasCustomName = val != null;
    }
    get name() {
        return this._name;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Radio, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: Radio, isStandalone: true, selector: "dv-radio", inputs: { value: "value", checked: "checked", disabled: "disabled", name: "name", onChange: "onChange" }, ngImport: i0, template: `
    <label>
      <input
        type="radio"
        [attr.name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange?.()" />
      <ng-content />
    </label>
  `, isInline: true, styles: ["input[type=radio]{appearance:none;-webkit-appearance:none;position:absolute;opacity:0;pointer-events:none;height:0;width:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Radio, decorators: [{
            type: Component,
            args: [{ selector: 'dv-radio', standalone: true, imports: [CommonModule], template: `
    <label>
      <input
        type="radio"
        [attr.name]="name"
        [value]="value"
        [checked]="checked"
        [disabled]="disabled"
        (change)="onChange?.()" />
      <ng-content />
    </label>
  `, encapsulation: ViewEncapsulation.None, styles: ["input[type=radio]{appearance:none;-webkit-appearance:none;position:absolute;opacity:0;pointer-events:none;height:0;width:0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], name: [{
                type: Input
            }], onChange: [{
                type: Input
            }] } });

class RadioGroup {
    constructor() {
        this.onChange = (val) => { };
        this.onTouched = () => { };
    }
    ngAfterContentInit() {
        this.radios.forEach(radio => {
            // Inject group name if not set explicitly
            if (!radio.hasCustomName) {
                radio.name = this.name;
            }
            // Set initial checked state
            radio.checked = radio.value === this.value;
            // Setup change handler
            radio.onChange = () => {
                this.select(radio.value);
            };
        });
    }
    writeValue(val) {
        this.value = val;
        if (this.radios) {
            this.radios.forEach(r => r.checked = r.value === val);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    select(val) {
        this.value = val;
        this.writeValue(val);
        this.onChange(val);
        this.onTouched();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: RadioGroup, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: RadioGroup, isStandalone: true, selector: "dv-radio-group", inputs: { name: "name" }, providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioGroup),
                multi: true
            }], queries: [{ propertyName: "radios", predicate: Radio, descendants: true }], ngImport: i0, template: `<ng-content />`, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: RadioGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'dv-radio-group',
                    standalone: true,
                    imports: [CommonModule, FormsModule],
                    template: `<ng-content />`,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioGroup),
                            multi: true
                        }]
                }]
        }], propDecorators: { name: [{
                type: Input,
                args: [{ required: true }]
            }], radios: [{
                type: ContentChildren,
                args: [Radio, { descendants: true }]
            }] } });

class RadioGroupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: RadioGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: i0, type: RadioGroupModule, imports: [RadioGroup, Radio], exports: [RadioGroup, Radio] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: RadioGroupModule, imports: [RadioGroup, Radio] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: RadioGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RadioGroup, Radio],
                    exports: [RadioGroup, Radio]
                }]
        }] });

class Checkbox {
    constructor() {
        this.checked = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Checkbox, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: Checkbox, isStandalone: true, selector: "dv-checkbox", inputs: { value: "value", checked: "checked", disabled: "disabled", onChange: "onChange" }, ngImport: i0, template: `
    <label class="checkbox-wrapper">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [value]="value"
        (change)="onChange?.()"
      />
      <ng-content />
    </label>
  `, isInline: true, styles: ["input[type=checkbox]{position:absolute;opacity:0;pointer-events:none;height:0;width:0}\n"], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: Checkbox, decorators: [{
            type: Component,
            args: [{ selector: 'dv-checkbox', standalone: true, template: `
    <label class="checkbox-wrapper">
      <input
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [value]="value"
        (change)="onChange?.()"
      />
      <ng-content />
    </label>
  `, encapsulation: ViewEncapsulation.None, styles: ["input[type=checkbox]{position:absolute;opacity:0;pointer-events:none;height:0;width:0}\n"] }]
        }], propDecorators: { value: [{
                type: Input
            }], checked: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onChange: [{
                type: Input
            }] } });

class CheckboxGroup {
    constructor() {
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this.selectedValues = [];
    }
    ngAfterContentInit() {
        this.syncCheckboxes();
    }
    syncCheckboxes() {
        this.checkboxes.forEach(checkbox => {
            checkbox.checked = this.selectedValues.includes(checkbox.value);
            checkbox.onChange = () => this.toggleValue(checkbox.value);
        });
    }
    writeValue(value) {
        this.selectedValues = value ?? [];
        if (this.checkboxes) {
            this.syncCheckboxes();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    toggleValue(value) {
        const index = this.selectedValues.indexOf(value);
        if (index === -1) {
            this.selectedValues.push(value);
        }
        else {
            this.selectedValues.splice(index, 1);
        }
        this.syncCheckboxes();
        this.onChange([...this.selectedValues]);
        this.onTouched();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroup, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: CheckboxGroup, isStandalone: true, selector: "dv-checkbox-group", providers: [{
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxGroup),
                multi: true
            }], queries: [{ propertyName: "checkboxes", predicate: Checkbox, descendants: true }], ngImport: i0, template: `<ng-content />`, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroup, decorators: [{
            type: Component,
            args: [{
                    selector: 'dv-checkbox-group',
                    standalone: true,
                    imports: [],
                    template: `<ng-content />`,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxGroup),
                            multi: true
                        }]
                }]
        }], propDecorators: { checkboxes: [{
                type: ContentChildren,
                args: [Checkbox, { descendants: true }]
            }] } });

class CheckboxGroupModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroupModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroupModule, imports: [Checkbox, CheckboxGroup], exports: [Checkbox, CheckboxGroup] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroupModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: CheckboxGroupModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [Checkbox, CheckboxGroup],
                    exports: [Checkbox, CheckboxGroup],
                }]
        }] });

class ChipInput {
    constructor() {
        this.placeholder = '';
        this.chips = [];
        this.inputValue = '';
        this.onChange = (val) => { };
        this.onTouched = () => { };
    }
    writeValue(val) {
        this.chips = val || [];
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    onKeyDown(event) {
        if (event.key === 'Enter' && this.inputValue.trim()) {
            this.addChip(this.inputValue.trim());
            this.inputValue = '';
            event.preventDefault();
        }
        else if (event.key === 'Backspace' &&
            !this.inputValue &&
            this.chips.length) {
            this.removeChip(this.chips.length - 1);
        }
    }
    addChip(value) {
        if (!this.chips.includes(value)) {
            this.chips.push(value);
            this.onChange(this.chips);
        }
    }
    removeChip(index) {
        this.chips.splice(index, 1);
        this.onChange(this.chips);
    }
    focusInput() {
        this.inputRef.nativeElement.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: ChipInput, isStandalone: true, selector: "dv-chip-input", inputs: { placeholder: "placeholder" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ChipInput),
                multi: true,
            },
        ], queries: [{ propertyName: "chipTemplate", first: true, predicate: ["chip"], descendants: true }], viewQueries: [{ propertyName: "inputRef", first: true, predicate: ["inputRef"], descendants: true }], ngImport: i0, template: `
    <div (click)="focusInput()" ngClass="d-content">
      <ng-container
        *ngFor="let chip of chips; let i = index"
        [ngTemplateOutlet]="chipTemplate"
        [ngTemplateOutletContext]="{ $implicit: chip, index: i }"
      >
      </ng-container>

      <input
        #inputRef
        type="text"
        [(ngModel)]="inputValue"
        (keydown)="onKeyDown($event)"
        [placeholder]="placeholder"
      />
    </div>
  `, isInline: true, styles: [".d-content{display:contents}input{all:unset;appearance:none;-webkit-appearance:none;-moz-appearance:none;flex:1;min-width:80px;font-size:1rem;padding:.4rem .6rem;background:transparent;border:none;outline:none;color:#fff;border-bottom:1px solid}input::placeholder{color:#fff6}input:focus{outline:none;background:#ffffff1a;border-radius:6px}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: ChipInput, decorators: [{
            type: Component,
            args: [{ selector: 'dv-chip-input', standalone: true, imports: [CommonModule, FormsModule], template: `
    <div (click)="focusInput()" ngClass="d-content">
      <ng-container
        *ngFor="let chip of chips; let i = index"
        [ngTemplateOutlet]="chipTemplate"
        [ngTemplateOutletContext]="{ $implicit: chip, index: i }"
      >
      </ng-container>

      <input
        #inputRef
        type="text"
        [(ngModel)]="inputValue"
        (keydown)="onKeyDown($event)"
        [placeholder]="placeholder"
      />
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => ChipInput),
                            multi: true,
                        },
                    ], encapsulation: ViewEncapsulation.None, styles: [".d-content{display:contents}input{all:unset;appearance:none;-webkit-appearance:none;-moz-appearance:none;flex:1;min-width:80px;font-size:1rem;padding:.4rem .6rem;background:transparent;border:none;outline:none;color:#fff;border-bottom:1px solid}input::placeholder{color:#fff6}input:focus{outline:none;background:#ffffff1a;border-radius:6px}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], inputRef: [{
                type: ViewChild,
                args: ['inputRef']
            }], chipTemplate: [{
                type: ContentChild,
                args: ['chip', { static: false }]
            }] } });

class OtpInput {
    constructor() {
        this.length = 6;
        this.id = 'inputId';
        this.otpChangeEvent = new EventEmitter();
        this.otpArray = [];
        this.otpBoxesIter = [];
        this.onChange = () => { };
        this.onTouched = () => { };
        this.touched = false;
        this.disabled = false;
    }
    ngOnInit() {
        this.otpArray = new Array(this.length).fill('');
        this.otpBoxesIter = Array.from({ length: this.length }, (_, i) => i);
    }
    ngAfterViewInit() {
        if (this.id === 'inputId') {
            this.focusInput(0);
            this.markAsTouched();
        }
    }
    writeValue(value) {
        const chars = value?.slice(0, this.length).split('') || [];
        this.otpArray = new Array(this.length).fill('');
        chars.forEach((c, i) => (this.otpArray[i] = c));
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    validate(control) {
        const val = control.value;
        return val?.length >= 1 ? { boxValueGreaterThanOne: { otp: val } } : null;
    }
    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }
    onOtpKeyDown(event, index) {
        const key = event.key;
        const inputEl = this.inputs.get(index)?.nativeElement;
        if (!inputEl)
            return;
        if (key === 'Backspace') {
            if (inputEl.value) {
                inputEl.value = '';
                this.otpArray[index] = '';
            }
            else if (index > 0) {
                this.focusInput(index - 1);
            }
            this.emitOtpChange();
            event.preventDefault();
        }
        else if (/[^0-9]/.test(key)) {
            event.preventDefault();
        }
    }
    onOtpInputChange(event, index) {
        const input = event.target;
        const char = input.value.replace(/[^0-9]/g, '').charAt(0);
        this.otpArray[index] = char || '';
        input.value = char;
        if (char && index < this.length - 1) {
            this.focusInput(index + 1);
        }
        this.emitOtpChange();
    }
    onOtpPaste(event) {
        event.preventDefault();
        const pasted = event.clipboardData?.getData('text').replace(/[^0-9]/g, '') || '';
        const chars = pasted.slice(0, this.length).split('');
        for (let i = 0; i < this.length; i++) {
            this.otpArray[i] = chars[i] || '';
        }
        // ✅ Important: replace array reference to trigger change detection
        this.otpArray = [...this.otpArray];
        this.emitOtpChange();
        this.focusInput(chars.length < this.length ? chars.length : this.length - 1);
    }
    emitOtpChange() {
        const otp = this.otpArray.join('');
        this.onChange(otp);
        this.otpChangeEvent.emit(otp);
    }
    focusInput(index) {
        this.inputs.get(index)?.nativeElement.focus();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: OtpInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: OtpInput, isStandalone: true, selector: "dv-otp-input", inputs: { length: "length", error: ["otpStatus", "error"], id: "id" }, outputs: { otpChangeEvent: "otpChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                multi: true,
                useExisting: forwardRef(() => OtpInput),
            },
            {
                provide: NG_VALIDATORS,
                multi: true,
                useExisting: forwardRef(() => OtpInput),
            },
        ], viewQueries: [{ propertyName: "inputs", predicate: ["otpInput"], descendants: true }], ngImport: i0, template: `
    <div class="otp_input" [class.errors]="!!error">
      @for (item of otpBoxesIter; track $index; let i = $index) {
      <input
        #otpInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        autocomplete="off"
        [id]="'otp' + (i + 1) + id"
        name="otp{{ i + 1 }}{{ id }}"
        [(ngModel)]="otpArray[i]"
        (focus)="otpInput.select(); markAsTouched()"
        (keydown)="onOtpKeyDown($event, i)"
        (input)="onOtpInputChange($event, i)"
        (paste)="onOtpPaste($event)"
      />
      }
    </div>
    @if (error) {
    <div class="otp_error">
      {{ error.message }}
    </div>
    }
  `, isInline: true, styles: [".otp_input{display:flex;gap:.5rem;justify-content:center}input{width:2.5rem;height:3rem;text-align:center;font-size:1.5rem;border:1px solid #ccc;border-radius:4px;outline:none}input:focus{border-color:#007bff}input:disabled{background-color:#eee;cursor:not-allowed}.otp_error{color:red;text-align:center;margin-top:.5rem}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: OtpInput, decorators: [{
            type: Component,
            args: [{ selector: 'dv-otp-input', standalone: true, imports: [CommonModule, FormsModule], providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            multi: true,
                            useExisting: forwardRef(() => OtpInput),
                        },
                        {
                            provide: NG_VALIDATORS,
                            multi: true,
                            useExisting: forwardRef(() => OtpInput),
                        },
                    ], template: `
    <div class="otp_input" [class.errors]="!!error">
      @for (item of otpBoxesIter; track $index; let i = $index) {
      <input
        #otpInput
        type="text"
        inputmode="numeric"
        maxlength="1"
        autocomplete="off"
        [id]="'otp' + (i + 1) + id"
        name="otp{{ i + 1 }}{{ id }}"
        [(ngModel)]="otpArray[i]"
        (focus)="otpInput.select(); markAsTouched()"
        (keydown)="onOtpKeyDown($event, i)"
        (input)="onOtpInputChange($event, i)"
        (paste)="onOtpPaste($event)"
      />
      }
    </div>
    @if (error) {
    <div class="otp_error">
      {{ error.message }}
    </div>
    }
  `, styles: [".otp_input{display:flex;gap:.5rem;justify-content:center}input{width:2.5rem;height:3rem;text-align:center;font-size:1.5rem;border:1px solid #ccc;border-radius:4px;outline:none}input:focus{border-color:#007bff}input:disabled{background-color:#eee;cursor:not-allowed}.otp_error{color:red;text-align:center;margin-top:.5rem}\n"] }]
        }], propDecorators: { length: [{
                type: Input
            }], error: [{
                type: Input,
                args: [{ alias: 'otpStatus' }]
            }], id: [{
                type: Input
            }], otpChangeEvent: [{
                type: Output,
                args: ['otpChange']
            }], inputs: [{
                type: ViewChildren,
                args: ['otpInput']
            }] } });

class UploadBoxComponent {
    constructor() {
        this.accept = '.csv';
        this.maxSizeMB = 10;
        this.stateChange = new EventEmitter();
        this.error = new EventEmitter();
        this.fileImported = new EventEmitter();
        this.cleared = new EventEmitter();
        this._state = signal('idle');
        this.file = signal(null);
        this.fileName = computed(() => this.file()?.name ?? null);
        this.fileSize = computed(() => this.file()?.size ?? null);
        this.fileExtension = computed(() => {
            const name = this.fileName();
            return name ? name.split('.').pop()?.toLowerCase() ?? null : null;
        });
        this.disabled = false;
        this.onChange = (value) => { };
        this.onTouched = () => { };
    }
    get state() {
        return this._state();
    }
    openFilePicker() {
        if (!this.file() && this.state === 'idle' && !this.disabled) {
            this.fileInputRef.nativeElement.click();
        }
    }
    onDropAreaClick() {
        this.openFilePicker();
    }
    importFile(event) {
        if (this.disabled)
            return;
        const input = event.target;
        const file = event.dataTransfer?.files?.[0] ||
            input?.files?.[0];
        if (!file)
            return;
        input.value = '';
        this._state.set('loading');
        const isOnline = navigator.onLine;
        const sizeLimit = this.maxSizeMB * 1024 * 1024;
        const acceptedTypes = this.accept.split(',').map(ext => ext.trim());
        const isValidType = acceptedTypes.some(ext => file.name.endsWith(ext));
        if (!isOnline) {
            this.emitError('network-issue', 'Upload failed. Please try again.');
            return;
        }
        if (!isValidType) {
            this.emitError('invalid-file-type', `Only ${this.accept} file allowed.`);
            return;
        }
        if (file.size > sizeLimit) {
            this.emitError('file-size-exceeded', `Please upload file <= ${this.maxSizeMB} MB`);
            return;
        }
        this.file.set(file);
        this.fileImported.emit(file);
        this._state.set('success');
        this.stateChange.emit('success');
        this.onChange(file);
        this.onTouched();
    }
    reset(event) {
        event?.stopPropagation();
        this.file.set(null);
        this._state.set('idle');
        this.onChange(null);
        this.stateChange.emit('idle');
        this.cleared.emit();
    }
    delete(event) {
        event?.stopPropagation();
        this.file.set(null);
        this._state.set('idle');
        this.onChange(null);
        this.stateChange.emit('idle');
        this.cleared.emit();
    }
    emitError(type, message) {
        this.error.emit({ type, message });
        this.reset();
    }
    // ControlValueAccessor methods
    writeValue(value) {
        this.file.set(value);
        this._state.set(value ? 'success' : 'idle');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    // Validator
    validate(control) {
        return this.file() ? null : { required: true };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UploadBoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: UploadBoxComponent, isStandalone: true, selector: "dv-upload-box", inputs: { accept: "accept", maxSizeMB: "maxSizeMB" }, outputs: { stateChange: "stateChange", error: "error", fileImported: "fileImported", cleared: "cleared" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => UploadBoxComponent),
                multi: true,
            },
            {
                provide: NG_VALIDATORS,
                useExisting: forwardRef(() => UploadBoxComponent),
                multi: true,
            },
        ], viewQueries: [{ propertyName: "fileInputRef", first: true, predicate: ["fileInput"], descendants: true, static: true }], ngImport: i0, template: `
    <ng-content></ng-content>
    <input
      type="file"
      [accept]="accept"
      hidden
      #fileInput
      (change)="importFile($event)"
    />
  `, isInline: true, dependencies: [{ kind: "ngmodule", type: CommonModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: i0, type: UploadBoxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dv-upload-box',
                    standalone: true,
                    imports: [CommonModule],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => UploadBoxComponent),
                            multi: true,
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => UploadBoxComponent),
                            multi: true,
                        },
                    ],
                    template: `
    <ng-content></ng-content>
    <input
      type="file"
      [accept]="accept"
      hidden
      #fileInput
      (change)="importFile($event)"
    />
  `,
                }]
        }], propDecorators: { fileInputRef: [{
                type: ViewChild,
                args: ['fileInput', { static: true }]
            }], accept: [{
                type: Input
            }], maxSizeMB: [{
                type: Input
            }], stateChange: [{
                type: Output
            }], error: [{
                type: Output
            }], fileImported: [{
                type: Output
            }], cleared: [{
                type: Output
            }] } });

/*
 * Public API Surface of ui
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionItemComponent, AlertComponent, AnchorMenu, AvatarComponent, Breadcrumb, ButtonComponent, Checkbox, CheckboxGroup, CheckboxGroupModule, ChipInput, DvCellDirective, DvHeaderDirective, FooterComponent, HeaderComponent, IconComponent, ImageSliderComponent, LayoutComponent, OtpInput, ProgressBarComponent, Radio, RadioGroup, RadioGroupModule, SidebarComponent, TabItemComponent, Table, TableItem, TabsComponent, TabsModule, TooltipComponent, TooltipDirective, TooltipService, UiComponent, UiService, UploadBoxComponent };
//# sourceMappingURL=deepverse-ui.mjs.map
