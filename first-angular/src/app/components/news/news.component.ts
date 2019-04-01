import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public  title = '我是个新闻组件';
  public student = {name: '张三', age: 18};
  public html = '<div>我是一个html</div>';
  public list: number[] = [11, 22, 33, 44, 55];
  public arr: Array<any> = ['23e', '年后', 1];

  constructor() {

     this.student.age = 20;
   }

  ngOnInit() {
  }

}
