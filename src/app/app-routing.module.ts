import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [{
  path: "",
  component: LayoutComponent,
  children: [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "contact",
      component: ContactComponent
    },
    {
      path: "blog",
      component: BlogComponent
    },
    {
      path: "blog/:id",
      component: PostComponent
    },
    {
      path: "menu",
      component: MenuComponent
    },
    {
      path: "author",
      component: AuthorComponent
    },
    {
      path: "**",
      component: NotFoundComponent
    }
  ]
  
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
