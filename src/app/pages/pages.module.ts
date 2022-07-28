import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [ProjectComponent, ContactComponent, AboutComponent],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
