import {Component} from '@angular/core';

interface UserInfo {
  username: string,
  age: number | null,
  gender: '1' | '2'
}

@Component({
  selector: 'app-forms',
  styleUrls: ['./forms.component.less'],
  templateUrl: './forms.component.html'
})
export class FormsComponent {
  title: string = '人员登记表';
  userInfo: UserInfo = {
    username: '',
    age: null,
    gender: '1'
  }

  onSubmit(e: Event) {
    const target = e?.target;
    const value = (target as HTMLInputElement).value;
    console.log('value', value);
    console.log('userInfo', this.userInfo);
  }
}
