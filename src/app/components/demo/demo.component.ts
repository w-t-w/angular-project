import {Component} from '@angular/core';

interface oType {
  username: string,
  age: number
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.less']
})
export class DemoComponent {
  // public title:string = 'demo component';
  // title:string = 'demo wtw component';
  // num:number = 1234567890;
  // title:string = '这是一个demo wtw的title';
  // content="<h2>这是一个 wtw person's project</h2>"
  // arr:Array<any> = ['Gary', 'Simon', 'Frank'];
  // o: {
  //   username: string,
  //   age: number
  // } = {
  //   username: 'wtw',
  //   age: 29
  // };
  // o: oType = {
  //   username: 'wtw',
  //   age: 29
  // };
  // arr: any[] = [{
  //   username: 'wtw',
  //   age: 29
  // }, {
  //   username: 'wjj',
  //   age: 29
  // }, {
  //   username: 'lzj',
  //   age: 28
  // }];
  arr: Array<any> = [{
    className: 'class 1',
    list: [{
      username: 'wtw',
      age: 29
    }, {
      username: 'wjj',
      age: 29
    }, {
      username: 'lzj',
      age: 28
    }]
  }, {
    className: 'class 2',
    list: [{
      username: 'simon',
      age: 29
    }, {
      username: 'frank',
      age: 28
    }, {
      username: 'lily',
      age: 26
    }]
  }];
  // srcUrl: string = 'assets/luffy.jpeg';
  flags:boolean = false;
  // flags:boolean = false;
  // orderStatus: number = 3;
}
