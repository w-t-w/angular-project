import {Component, Input} from '@angular/core';

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
  // arr: Array<any> = [{
  //   className: 'class 1',
  //   list: [{
  //     username: 'wtw',
  //     age: 29
  //   }, {
  //     username: 'wjj',
  //     age: 29
  //   }, {
  //     username: 'lzj',
  //     age: 28
  //   }]
  // }, {
  //   className: 'class 2',
  //   list: [{
  //     username: 'simon',
  //     age: 29
  //   }, {
  //     username: 'frank',
  //     age: 28
  //   }, {
  //     username: 'lily',
  //     age: 26
  //   }]
  // }];
  // srcUrl: string = 'assets/luffy.jpeg';
  // flags:boolean = false;
  // flags:boolean = false;
  // orderStatus: number = 3;
  // date: Date = new Date();
  // date: Date = new Date();
  // title: string = '初始化数据!';
  // setData(newTitle: string) {
  //   this.title = newTitle;
  // }
  // getData() {
  //   console.log(this.title);
  // }
  // onKeyDown() {
  //   console.log('on key down');
  // }
  // onKeyDown(e: KeyboardEvent) {
  // const target: EventTarget | null = e.target;
  // const value = (target as HTMLInputElement)?.value;
  // console.log('value:', value);
  //   const code = e?.charCode || e?.keyCode;
  //   const target = e?.target;
  //   if (code === 13) {
  //     console.log('按了一下回车!');
  //   } else {
  //     console.log((target as HTMLInputElement)?.value);
  //   }
  // }
  // onKeyUp(e: KeyboardEvent) {
  //   const code = e.keyCode || e.charCode;
  //   const target = e.target;
  //   if(code === 13) {
  //     console.log('按了一下回车!');
  //   } else {
  //     console.log((target as HTMLInputElement).value);
  //   }
  // }
  keyboard:string = '初始化数据!';

  onGetValue() {
    console.log(this.keyboard);
  }

  onSetValue(value: string) {
    this.keyboard = value;
  }
}
