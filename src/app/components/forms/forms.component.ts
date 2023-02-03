import {Component} from '@angular/core';

interface UserInfo {
  username: string,
  age: number | null,
  gender: '1' | '2',
  city: Array<string>,
  useCity: string,
  hobby: Array<hobbyType>,
  introduce: string
}

interface hobbyType {
  name: string,
  checked: boolean
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
    gender: '1',
    city: ['北京', '上海', '深圳', '广州', '雄安'],
    useCity: '上海',
    hobby: [{
      name: 'basketball',
      checked: false
    }, {
      name: 'football',
      checked: false
    }, {
      name: 'table tennis',
      checked: false
    }, {
      name: 'volleyball',
      checked: true
    }],
    introduce: ''
  }

  onSubmit(e: Event) {
    const target = e?.target;
    const value = (target as HTMLInputElement).value;
    console.log('value', value);
    console.log('userInfo', this.userInfo);
  }
}
