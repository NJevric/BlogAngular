import { Component, OnInit } from '@angular/core';
import { ICategories } from '../interfaces/i-categories';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  
  public categories: ICategories[]=[];


  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void{
    this.categoriesService.getAll().subscribe(data => {
      this.categories = data;
    })
  }

}
