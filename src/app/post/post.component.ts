import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBlog } from '../interfaces/i-blog';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route : ActivatedRoute,private postService: BlogService) { }

  public post:IBlog[]=[];




  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    this.postService.getAll().subscribe(data => {
        this.post = data.filter(x=>x.id==this.route.snapshot.params['id']);
    })
  }

}
