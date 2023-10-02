export interface NavGroup {
    icon?:string;
    title: string;
    link?: string;
    childnav?: NavGroup[];   // 'childnav' is now optional
  }