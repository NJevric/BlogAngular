import { Component, OnInit } from '@angular/core';
import { IBlog } from '../interfaces/i-blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private postService: BlogService) { }

  public posts: IBlog[]=[];

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void{
    this.postService.getAll().subscribe(data => {
      this.posts = data;
    })
  }
}
