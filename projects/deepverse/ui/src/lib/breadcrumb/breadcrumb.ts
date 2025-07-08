import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

interface BreadcrumbI {
  label: string;
  url: string;
}

@Component({
  selector: 'dv-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb implements OnInit {
  breadcrumbs: BreadcrumbI[] = [];
  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd)
    ).subscribe(()=>{
      this.breadcrumbs = this.buildBreadcrumbs(this.route.root);
    })
  }

  private buildBreadcrumbs(route: ActivatedRoute, url:string='', breadcrumbs: BreadcrumbI[] = []): BreadcrumbI[] {
    const children: ActivatedRoute[] = route.children;
    if(children.length == 0){
      return breadcrumbs;
    }

    for(const child of children){
      const routeUrl:string = child.snapshot.url.map(segment=> segment.path).join('/');
      if(routeUrl!==''){
        url+=`${routeUrl}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if(label !== undefined && label !== null){
        breadcrumbs.push({label,url});
      }
      return this.buildBreadcrumbs(child , url , breadcrumbs);
    }


    return breadcrumbs;
  }


}
