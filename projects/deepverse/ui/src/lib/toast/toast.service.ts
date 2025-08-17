import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface ToastI{
  id:number;
  message:string;
  type:'success'|'error'|'info'|'warning';
  duration:number
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts:ToastI[] = [];
  private toastsSubject = new BehaviorSubject<ToastI[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private nextId = 1;
  
  constructor() { }

  show(message:string , type:ToastI['type'] = 'info' , duration:number = 3000 ):void {
    const toast : ToastI ={
      id:this.nextId++,
      message,
      type,
      duration
    };
    this.toasts.push(toast);
    this.toastsSubject.next([...this.toasts]);
    setTimeout(() => this.remove(toast.id), duration);
  }

  remove(id: number): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
    this.toastsSubject.next([...this.toasts]);
  }
}
