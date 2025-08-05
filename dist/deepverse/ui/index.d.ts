import * as i0 from '@angular/core';
import { OnInit, SimpleChanges, EventEmitter, ElementRef, Renderer2, QueryList, AfterViewInit, OnDestroy, OnChanges, ComponentRef, RendererFactory2, ViewContainerRef, ChangeDetectorRef, TemplateRef, AfterContentInit, WritableSignal } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { Router, ActivatedRoute } from '@angular/router';
import * as i3 from '@angular/common';
import { ControlValueAccessor, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

declare class UiService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<UiService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UiService>;
}

declare class UiComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<UiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UiComponent, "lib-ui", never, {}, {}, never, never, true, never>;
}

declare class IconComponent implements OnInit {
    icon: any;
    iconPrefix: any;
    size: string | number;
    bgSize: string | number;
    color: string[];
    bg: string[];
    borderColor: string;
    rounded: 'none' | 'full' | 'sm' | 'md';
    padding: number[];
    alt: string;
    _asBtn: boolean;
    _defaultColor: boolean;
    _disabled: boolean;
    _padding: string;
    classString: {
        filter: string;
        hover: string;
    };
    constructor();
    get asBtn(): boolean;
    set asBtn(value: BooleanInput);
    get disabled(): boolean;
    set disabled(value: BooleanInput);
    ngOnChanges(changes: SimpleChanges): void;
    getIconStyles(): {
        '-webkit-mask-image': string;
        'mask-image': string;
        '--size': string;
        '--color': string;
        '--hover': string;
        '--active': string;
    };
    getIconBgStyles(): {
        '--bgSize': string;
        '--bg': string;
        '--bgHover': string;
        '--bgActive': string;
        '--rounded': string;
        '--borderColor': string;
        '--size': string;
        '--color': string;
        '--hover': string;
        '--active': string;
    };
    ngOnInit(): void;
    private getColorValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "dv-icon", never, { "icon": { "alias": "icon"; "required": false; }; "iconPrefix": { "alias": "iconPrefix"; "required": false; }; "size": { "alias": "size"; "required": false; }; "bgSize": { "alias": "bgSize"; "required": false; }; "color": { "alias": "color"; "required": false; }; "bg": { "alias": "bg"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; "padding": { "alias": "padding"; "required": false; }; "alt": { "alias": "alt"; "required": false; }; "asBtn": { "alias": "asBtn"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class LayoutComponent {
    layoutType: 'full-header' | 'full-sidebar';
    footerFixed: boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutComponent, "dv-layout", never, { "layoutType": { "alias": "layoutType"; "required": false; }; "footerFixed": { "alias": "footerFixed"; "required": false; }; }, {}, never, ["dv-sidebar", "*", "dv-footer", "dv-header"], true, never>;
}

declare class HeaderComponent {
    bgColor: string;
    textColor: string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "dv-header", never, { "bgColor": { "alias": "bgColor"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["[left]", "[center]", "[right]"], true, never>;
}

declare class SidebarComponent {
    private el;
    private renderer;
    config: any;
    size: any;
    enableExpand: boolean;
    expandState: 'noExpand' | 'noCollapse' | 'default';
    sidebarExpand: boolean;
    externalLinks: EventEmitter<any>;
    expandEvent: EventEmitter<any>;
    logoEvent: EventEmitter<any>;
    private _showSidebar;
    get showSidebar(): boolean;
    showSidebarChange: EventEmitter<boolean>;
    set showSidebar(value: boolean);
    viewport: string;
    isActive: string;
    isHovered: boolean;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toggleSidebar(): void;
    closeAllChildren(): void;
    recursivelyClose(items: any[]): void;
    closeSidebar(): void;
    handleCloseSidebar(): void;
    customLinks(type: string): void;
    onWindowResize(): void;
    private updateBodyClass;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SidebarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SidebarComponent, "dv-sidebar", never, { "config": { "alias": "config"; "required": false; }; "size": { "alias": "size"; "required": false; }; "enableExpand": { "alias": "enableExpand"; "required": false; }; "expandState": { "alias": "expandState"; "required": false; }; "sidebarExpand": { "alias": "sidebarExpand"; "required": false; }; "showSidebar": { "alias": "showSidebar"; "required": false; }; }, { "externalLinks": "externalLinks"; "expandEvent": "expandEvent"; "logoEvent": "logoEvent"; "showSidebarChange": "showSidebarChange"; }, never, [".header", "*"], true, never>;
}

declare class FooterComponent {
    bgColor: string;
    textColor: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FooterComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FooterComponent, "dv-footer", never, { "bgColor": { "alias": "bgColor"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; }, {}, never, ["*", "[center]", "[right]"], true, never>;
}

declare class AvatarComponent implements OnInit {
    imageUrl: string;
    name: string;
    shape: string;
    size: string;
    showBorder: boolean;
    bgColor: string;
    textColor: string;
    status: string;
    initials: string;
    cornerRadius: string;
    borderColor: string;
    borderWidth: string;
    borderStyle: string;
    showName: boolean;
    avatarClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onAvatarClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AvatarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AvatarComponent, "dv-avatar", never, { "imageUrl": { "alias": "imageUrl"; "required": false; }; "name": { "alias": "name"; "required": false; }; "shape": { "alias": "shape"; "required": false; }; "size": { "alias": "size"; "required": false; }; "showBorder": { "alias": "showBorder"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "status": { "alias": "status"; "required": false; }; "initials": { "alias": "initials"; "required": false; }; "cornerRadius": { "alias": "cornerRadius"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "borderWidth": { "alias": "borderWidth"; "required": false; }; "borderStyle": { "alias": "borderStyle"; "required": false; }; "showName": { "alias": "showName"; "required": false; }; }, { "avatarClick": "avatarClick"; }, never, never, true, never>;
}

declare class ButtonComponent {
    private elementRef;
    disabled: boolean;
    variant: 'primary' | 'outline' | 'link';
    bg: string;
    color: string;
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    click: EventEmitter<void>;
    handleClick(): void;
    constructor(elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "dv-button", never, { "variant": { "alias": "variant"; "required": false; }; "bg": { "alias": "bg"; "required": false; }; "color": { "alias": "color"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "click": "click"; }, never, ["*"], true, never>;
}

declare class AccordionItemComponent implements OnInit {
    accordion: AccordionComponent;
    private static id;
    componentId: number;
    id: string;
    selectState: boolean;
    title: string;
    group: string;
    multipleOpen: boolean;
    defaultOpen: boolean;
    state: EventEmitter<boolean>;
    change: EventEmitter<any>;
    constructor(accordion: AccordionComponent);
    ngOnInit(): void;
    itemState(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionItemComponent, "dv-accordion-item", never, { "id": { "alias": "id"; "required": false; }; "title": { "alias": "title"; "required": false; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; }; }, { "state": "state"; "change": "change"; }, never, ["*"], true, never>;
}

declare class AccordionComponent {
    group: string;
    multipleOpen: boolean;
    defaultOpen: boolean;
    flush: boolean;
    items: any;
    accordionItems: QueryList<AccordionItemComponent>;
    activeAccordion: EventEmitter<string | string[]>;
    constructor();
    ngAfterContentInit(): void;
    getactiveAcordion(item: string | string[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "dv-accordion", never, { "group": { "alias": "group"; "required": false; }; "multipleOpen": { "alias": "multipleOpen"; "required": false; }; "defaultOpen": { "alias": "defaultOpen"; "required": false; }; "flush": { "alias": "flush"; "required": false; }; }, { "activeAccordion": "activeAccordion"; }, ["accordionItems"], ["*"], true, never>;
}

interface AnchorItem {
    id: string;
    label: string;
}
declare class AnchorMenu implements AfterViewInit, OnDestroy, OnChanges {
    items: AnchorItem[];
    selected: string;
    scrollRoot?: HTMLElement;
    selectedChange: EventEmitter<string>;
    private observer;
    private isProgrammaticScroll;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    anchor(id: string): void;
    private observeSections;
    private scrollToSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<AnchorMenu, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AnchorMenu, "dv-anchor-menu", never, { "items": { "alias": "items"; "required": false; }; "selected": { "alias": "selected"; "required": false; }; "scrollRoot": { "alias": "scrollRoot"; "required": false; }; }, { "selectedChange": "selectedChange"; }, never, never, true, never>;
}

declare class ImageSliderComponent implements OnInit {
    images: string[];
    slideURL: any;
    selectedIndex: number;
    constructor();
    ngOnInit(): void;
    setIndex(index: number, dots: HTMLElement): void;
    sliderNext(dots: HTMLElement): void;
    sliderprev(dots: HTMLElement): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ImageSliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ImageSliderComponent, "dv-image-slider", never, { "images": { "alias": "images"; "required": false; }; }, {}, never, never, true, never>;
}

declare class ProgressBarComponent {
    rounded: boolean;
    border: boolean;
    showPercentage: boolean;
    barHeight: string;
    color: string;
    borderColor: string;
    borderWidth: string;
    textColor: string;
    bgColor: string;
    progress: string;
    animate: boolean;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressBarComponent, "dv-progress-bar", never, { "rounded": { "alias": "rounded"; "required": false; }; "border": { "alias": "border"; "required": false; }; "showPercentage": { "alias": "showPercentage"; "required": false; }; "barHeight": { "alias": "barHeight"; "required": false; }; "color": { "alias": "color"; "required": false; }; "borderColor": { "alias": "borderColor"; "required": false; }; "borderWidth": { "alias": "borderWidth"; "required": false; }; "textColor": { "alias": "textColor"; "required": false; }; "bgColor": { "alias": "bgColor"; "required": false; }; "progress": { "alias": "progress"; "required": false; }; "animate": { "alias": "animate"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class AlertComponent implements OnInit {
    type: 'info' | 'danger' | 'success' | 'warning';
    icon: string | undefined;
    hideIcon: boolean;
    closeIcon: boolean;
    borderRadius: string;
    iconPrefix: string;
    private readonly iconMap;
    constructor();
    ngOnInit(): void;
    private setDefaultIcon;
    private normalizeBorderRadius;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "dv-alert", never, { "type": { "alias": "type"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "hideIcon": { "alias": "hideIcon"; "required": false; }; "closeIcon": { "alias": "closeIcon"; "required": false; }; "borderRadius": { "alias": "borderRadius"; "required": false; }; "iconPrefix": { "alias": "iconPrefix"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class TooltipComponent implements OnInit {
    private elementRef;
    tooltipContent: any;
    tooltipPosition: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom';
    noTip: boolean;
    tooltipBgColor: string;
    tooltipTextColor: string;
    tooltipContext: any;
    tipOffset: number;
    tooltipID: any;
    outsideClick: boolean;
    get isStringOrNumberTooltip(): boolean;
    constructor(elementRef: ElementRef);
    onClickOutside(event: Event): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "dv-tooltip", never, { "tooltipContent": { "alias": "tooltipContent"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "noTip": { "alias": "noTip"; "required": false; }; "tooltipBgColor": { "alias": "tooltipBgColor"; "required": false; }; "tooltipTextColor": { "alias": "tooltipTextColor"; "required": false; }; "tooltipContext": { "alias": "tooltipContext"; "required": false; }; "tipOffset": { "alias": "tipOffset"; "required": false; }; }, {}, never, never, true, never>;
}

type ItooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom';
declare class TooltipService {
    private rendererFactory;
    tooltipComponentRef: ComponentRef<TooltipComponent> | null;
    private renderer;
    constructor(rendererFactory: RendererFactory2);
    /**
     * Create and show the tooltip component.
     */
    createTooltip(viewContainerRef: ViewContainerRef, tooltipContent: string | any, tooltipContext: any, tooltipID: string, tooltipBgColor: string, tooltipTextColor: string, tipOffset: number, noTip: boolean): HTMLElement;
    positionTooltip(hostElement: HTMLElement, tooltipElement: HTMLElement, tooltipPosition: ItooltipPosition, tooltipOffset: number): void;
    private setItooltipPosition;
    /**
     * Destroy the tooltip.
     */
    destroyTooltip(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TooltipService>;
}

declare class TooltipDirective implements OnDestroy {
    private elementRef;
    private viewContainerRef;
    private tooltipService;
    private platformId;
    private cdr;
    tooltipContent: string | any;
    tooltipContext: any;
    tooltipPosition: ItooltipPosition;
    tooltipDelay: number;
    tooltipOffset: number;
    tipOffset: number;
    tooltipBgColor: string;
    tooltipTextColor: string;
    private isTooltipVisible;
    private tooltipNativeElement;
    private mouseEnterDebounce;
    private mouseLeaveDebounce;
    private mouseClickDebounce;
    private isHoveringTooltip;
    private cleanupObservers;
    isTouchDevice: boolean;
    private _noTip;
    private _tooltipOnClick;
    get noTip(): boolean;
    set noTip(value: BooleanInput);
    get tooltipOnClick(): boolean;
    set tooltipOnClick(value: BooleanInput);
    constructor(elementRef: ElementRef, viewContainerRef: ViewContainerRef, tooltipService: TooltipService, platformId: Object, cdr: ChangeDetectorRef);
    onTooltipClick(event: Event): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    private handleOutsideClick;
    private observeHostPosition;
    private checkHostPosition;
    private tooltipMouseEnterHandler;
    private tooltipMouseLeaveHandler;
    /**
     * Show the tooltip and position it according to the logic provided.
     */
    private showTooltip;
    /**
     * Hide the tooltip using TooltipService.
     */
    private hideTooltip;
    /**
     * Generate a unique ID for each tooltip.
     */
    private generateUniqueID;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TooltipDirective, "[dvTooltip]", never, { "tooltipContent": { "alias": "dvTooltip"; "required": false; }; "tooltipContext": { "alias": "tooltipContext"; "required": false; }; "tooltipPosition": { "alias": "tooltipPosition"; "required": false; }; "tooltipDelay": { "alias": "tooltipDelay"; "required": false; }; "tooltipOffset": { "alias": "tooltipOffset"; "required": false; }; "tipOffset": { "alias": "tipOffset"; "required": false; }; "tooltipBgColor": { "alias": "tooltipBgColor"; "required": false; }; "tooltipTextColor": { "alias": "tooltipTextColor"; "required": false; }; "noTip": { "alias": "noTip"; "required": false; }; "tooltipOnClick": { "alias": "tooltipOnClick"; "required": false; }; }, {}, never, never, true, never>;
}

declare class DvHeaderDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DvHeaderDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DvHeaderDirective, "[dvHeader]", never, {}, {}, never, never, true, never>;
}

declare class DvCellDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
    static ɵfac: i0.ɵɵFactoryDeclaration<DvCellDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<DvCellDirective, "[dvCell]", never, {}, {}, never, never, true, never>;
}

declare class TableItem {
    elementRef: ElementRef;
    label: string;
    key?: string;
    sticky?: 'left' | 'right';
    cellTemplateRef?: DvCellDirective;
    headerTemplateRef?: DvHeaderDirective;
    constructor(elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<TableItem, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableItem, "dv-table-item", never, { "label": { "alias": "label"; "required": false; }; "key": { "alias": "key"; "required": false; }; "sticky": { "alias": "sticky"; "required": false; }; }, {}, ["cellTemplateRef", "headerTemplateRef"], ["*"], true, never>;
}

declare class Table implements AfterContentInit, AfterViewInit, OnDestroy {
    private cdr;
    rows: any[];
    columnDefs: QueryList<TableItem>;
    thRefs: QueryList<ElementRef<HTMLTableCellElement>>;
    columns: TableItem[];
    stickyLeftOffsets: WritableSignal<number[]>;
    stickyRightOffsets: WritableSignal<number[]>;
    colWidths: number[];
    private columnDefsChangesSub?;
    private resizingColIndex;
    private startX;
    private startWidth;
    constructor(cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    setInitialColWidths(): void;
    computeStickyOffsets(): void;
    onResizeStart(event: MouseEvent, index: number): void;
    onMouseMove: (event: MouseEvent) => void;
    onMouseUp: () => void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Table, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Table, "dv-table", never, { "rows": { "alias": "rows"; "required": false; }; }, {}, ["columnDefs"], never, true, never>;
}

declare class TabItemComponent {
    active: boolean;
    label: string;
    slug: string;
    iconLeft: string;
    iconRight: string;
    iconHeight: number;
    iconWidth: number;
    disabled: boolean;
    iconPrefix: any;
    id: string;
    private static uniqueIdCounter;
    ngOnChanges(changes: SimpleChanges): void;
    private generateSlug;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabItemComponent, "dv-tab-item", never, { "active": { "alias": "active"; "required": false; }; "label": { "alias": "label"; "required": false; }; "slug": { "alias": "slug"; "required": false; }; "iconLeft": { "alias": "iconLeft"; "required": false; }; "iconRight": { "alias": "iconRight"; "required": false; }; "iconHeight": { "alias": "iconHeight"; "required": false; }; "iconWidth": { "alias": "iconWidth"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "iconPrefix": { "alias": "iconPrefix"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class TabsComponent implements OnInit, AfterContentInit, OnChanges {
    private cdr;
    tabs_list: QueryList<TabItemComponent>;
    default: string;
    tabTemplate: TemplateRef<any>;
    tabId: string;
    height: string;
    currentTabChange: EventEmitter<TabItemComponent>;
    private static uniqueIdCounter;
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    selectTab(tab: TabItemComponent): void;
    private activateDefaultTab;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "dv-tabs", never, { "default": { "alias": "default"; "required": false; }; "tabTemplate": { "alias": "tabTemplate"; "required": true; }; "tabId": { "alias": "tabId"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, { "currentTabChange": "currentTabChange"; }, ["tabs_list"], ["*"], true, never>;
}

interface BreadcrumbI {
    label: string;
    url: string;
}
declare class Breadcrumb implements OnInit {
    private router;
    private route;
    breadcrumbs: BreadcrumbI[];
    constructor(router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    private buildBreadcrumbs;
    static ɵfac: i0.ɵɵFactoryDeclaration<Breadcrumb, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Breadcrumb, "dv-breadcrumb", never, {}, {}, never, never, true, never>;
}

declare class TabsModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<TabsModule, never, [typeof TabsComponent, typeof TabItemComponent, typeof i3.CommonModule], [typeof TabsComponent, typeof TabItemComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<TabsModule>;
}

declare class Radio {
    value: any;
    checked: boolean;
    disabled: boolean | undefined;
    private _name?;
    hasCustomName: boolean;
    set name(val: string | undefined);
    get name(): string | undefined;
    onChange?: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Radio, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Radio, "dv-radio", never, { "value": { "alias": "value"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "name": { "alias": "name"; "required": false; }; "onChange": { "alias": "onChange"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class RadioGroup implements ControlValueAccessor, AfterContentInit {
    name: string;
    radios: QueryList<Radio>;
    private onChange;
    private onTouched;
    private value;
    ngAfterContentInit(): void;
    writeValue(val: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    select(val: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioGroup, "dv-radio-group", never, { "name": { "alias": "name"; "required": true; }; }, {}, ["radios"], ["*"], true, never>;
}

declare class RadioGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RadioGroupModule, never, [typeof RadioGroup, typeof Radio], [typeof RadioGroup, typeof Radio]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RadioGroupModule>;
}

declare class Checkbox {
    value: any;
    checked: boolean;
    disabled?: boolean;
    onChange?: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<Checkbox, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Checkbox, "dv-checkbox", never, { "value": { "alias": "value"; "required": false; }; "checked": { "alias": "checked"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "onChange": { "alias": "onChange"; "required": false; }; }, {}, never, ["*"], true, never>;
}

declare class CheckboxGroup implements ControlValueAccessor, AfterContentInit {
    checkboxes: QueryList<Checkbox>;
    private onChange;
    private onTouched;
    private selectedValues;
    ngAfterContentInit(): void;
    private syncCheckboxes;
    writeValue(value: any[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    toggleValue(value: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxGroup, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxGroup, "dv-checkbox-group", never, {}, {}, ["checkboxes"], ["*"], true, never>;
}

declare class CheckboxGroupModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxGroupModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CheckboxGroupModule, never, [typeof Checkbox, typeof CheckboxGroup], [typeof Checkbox, typeof CheckboxGroup]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CheckboxGroupModule>;
}

declare class ChipInput implements ControlValueAccessor {
    placeholder: string;
    chips: string[];
    inputValue: string;
    inputRef: ElementRef<HTMLInputElement>;
    chipTemplate: TemplateRef<any>;
    private onChange;
    private onTouched;
    writeValue(val: string[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    onKeyDown(event: KeyboardEvent): void;
    addChip(value: string): void;
    removeChip(index: number): void;
    focusInput(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChipInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChipInput, "dv-chip-input", never, { "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, ["chipTemplate"], never, true, never>;
}

declare class OtpInput implements ControlValueAccessor, AfterViewInit, OnInit {
    length: number;
    error?: {
        status_code?: number;
        message?: string;
    };
    id: string;
    otpChangeEvent: EventEmitter<string>;
    inputs: QueryList<ElementRef<HTMLInputElement>>;
    otpArray: string[];
    otpBoxesIter: number[];
    onChange: (otp: string) => void;
    onTouched: () => void;
    touched: boolean;
    disabled: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    writeValue(value: string): void;
    registerOnChange(fn: (otp: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(control: AbstractControl): ValidationErrors | null;
    markAsTouched(): void;
    onOtpKeyDown(event: KeyboardEvent, index: number): void;
    onOtpInputChange(event: Event, index: number): void;
    onOtpPaste(event: ClipboardEvent): void;
    private emitOtpChange;
    private focusInput;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtpInput, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtpInput, "dv-otp-input", never, { "length": { "alias": "length"; "required": false; }; "error": { "alias": "otpStatus"; "required": false; }; "id": { "alias": "id"; "required": false; }; }, { "otpChangeEvent": "otpChange"; }, never, never, true, never>;
}

type UploadState = 'idle' | 'loading' | 'success' | 'failed';
declare class UploadBoxComponent implements ControlValueAccessor, Validator {
    fileInputRef: ElementRef<HTMLInputElement>;
    accept: string;
    maxSizeMB: number;
    stateChange: EventEmitter<UploadState>;
    error: EventEmitter<any>;
    fileImported: EventEmitter<File>;
    cleared: EventEmitter<void>;
    private _state;
    file: i0.WritableSignal<File | null>;
    fileName: i0.Signal<string | null>;
    fileSize: i0.Signal<number | null>;
    fileExtension: i0.Signal<string | null>;
    disabled: boolean;
    private onChange;
    private onTouched;
    get state(): UploadState;
    openFilePicker(): void;
    onDropAreaClick(): void;
    importFile(event: Event): void;
    reset(event?: MouseEvent): void;
    delete(event?: MouseEvent): void;
    private emitError;
    writeValue(value: File | null): void;
    registerOnChange(fn: (value: File | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<UploadBoxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UploadBoxComponent, "dv-upload-box", never, { "accept": { "alias": "accept"; "required": false; }; "maxSizeMB": { "alias": "maxSizeMB"; "required": false; }; }, { "stateChange": "stateChange"; "error": "error"; "fileImported": "fileImported"; "cleared": "cleared"; }, never, ["*"], true, never>;
}

export { AccordionComponent, AccordionItemComponent, AlertComponent, AnchorMenu, AvatarComponent, Breadcrumb, ButtonComponent, Checkbox, CheckboxGroup, CheckboxGroupModule, ChipInput, DvCellDirective, DvHeaderDirective, FooterComponent, HeaderComponent, IconComponent, ImageSliderComponent, LayoutComponent, OtpInput, ProgressBarComponent, Radio, RadioGroup, RadioGroupModule, SidebarComponent, TabItemComponent, Table, TableItem, TabsComponent, TabsModule, TooltipComponent, TooltipDirective, TooltipService, UiComponent, UiService, UploadBoxComponent };
export type { ItooltipPosition, UploadState };
