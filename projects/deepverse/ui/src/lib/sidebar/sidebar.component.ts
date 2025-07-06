import { Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavGroup } from '../utilites/interfaces';

@Component({
  selector: 'dv-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  host: {
    'class': 'sidebar-component',
    '[class]': 'size == "sm" ? "sm" : ""',
    '[class.expanded]': 'expandState !== "noExpand" && (sidebarExpand || expandState === "noCollapse" || (_showSidebar && viewport!=="desktop")) ',
    '[class.fixCollapse]': 'expandState == "noExpand"',
  }
})
export class SidebarComponent {

  @Input('config') config: any;
  @Input('size') size: any // 'sm';
  @Input('enableExpand') enableExpand = true;
  private _showSidebar = false;
  @Input('expandState') expandState : 'noExpand' | 'noCollapse' | 'default' = 'default';
  @Input() set showSidebar( value : boolean)  {
    if(value){
      this._showSidebar = value;
      this.updateBodyClass();
    }
    else{
      this.renderer.removeClass(document.body, 'hide-scroll');
    }
  } //mobile sidebar

  @Output() externalLinks = new EventEmitter<any>();
  @Output() hideSidebar = new EventEmitter<any>();
  @Output() expandEvent = new EventEmitter<any>();
  @Output() logoEvent = new EventEmitter<any>();
  @Input() sidebarExpand = false;
  viewport: string = 'desktop';
  isActive!: string;
  isHovered = false;
  constructor(
    private el: ElementRef, private renderer: Renderer2
  ) { 
    this.renderer.listen('window', 'click',(e:Event)=>{
      if(e.target == this.el.nativeElement ){
        this.sidebarExpand = false;
        this._showSidebar = false;
        this.hideSidebar.emit(false);
        this.expandEvent.emit(this.sidebarExpand)
    }
    })
  }

  toggleSidebar() {
    this.sidebarExpand = !this.sidebarExpand;
    this.expandEvent.emit(this.sidebarExpand);
    if(!this.sidebarExpand){
      this.closeAllChildren()
;    }
  }


  closeAllChildren(){
    this.config.menuItems.forEach((item: any) => {
      if (item?.isExpand) {
        item.isExpand = false;
      }
      if (item?.children) {
        this.recursivelyClose(item.children);
      }
    });
  }
  
  recursivelyClose(items: any[]) {
    items.forEach((child: any) => {
      child.isExpand = false;
      if (child.children) {
        this.recursivelyClose(child.children);
      }
    });
  }
  
  

  closeSidebar() {
    if(this.viewport !== 'desktop'){
      this.sidebarExpand = false;
      this._showSidebar = false;
      this.hideSidebar.emit(false);
      this.expandEvent.emit(this.sidebarExpand)
      this.renderer.removeClass(document.body, 'hide-scroll');
    }
    else {
      if(this.sidebarExpand == false){
        this.sidebarExpand = true;
        this.expandEvent.emit(this.sidebarExpand)
      }

    };
  }

  ngOnInit(): void {
    this.onWindowResize();
  }
  ngAfterViewInit() {
    if (this.config) {
      if (!this.config.iconPrefix) {
        this.config.iconPrefix = '';
      }
    }

  }

  private updateBodyClass() {
    if (this._showSidebar && this.viewport !=='desktop') {
      this.renderer.addClass(document.body, 'hide-scroll');
    } else {
      this.renderer.removeClass(document.body, 'hide-scroll');
    }
  }


  public customLinks(type:string) {
    if (type) {
      this.externalLinks.emit(type); 
    this.isActive = type;
    }
    this.closeSidebar();
  }

  @HostListener("window:resize", ["$event"])
  onWindowResize() {
    if (window.innerWidth <= 767) {
      this.viewport = "mobile";
    } else if( window.innerWidth > 767 && window.innerWidth <= 992) {
      this.viewport = "tablet";
    }else{
      this.viewport = "desktop";
    }
    this.updateBodyClass();
  }
}
