import san, {DataTypes} from 'san'
var MyApp = san.defineComponent({
  initData() {
    return {
      inform: {
        name: '',
        age: null,
        description: '',
      }
    }
  },
  dataTypes: {// 对象校验
    infomation: DataTypes.shape({
      name: DataTypes.string,
      age: DataTypes.number,
      bio: DataTypes.string
    })
  },
  clear: function(inform){
    let info = {
      name: null,
      age: null,
      bio: null
    };
    this.data.set('infomation', info);
    //清除对象内容
  },
  template: 
    `<div>
      <div>
        <input type="text" value="{= inform.name =}" placeholder="姓名（string）">
        <input type="text" value="{= inform.age | toNumber(age) =}" placeholder="年龄（number）">
        <input type="text" value="{= inform.description =}" placeholder="简介（string）">
      </div>
      <div>
        <span>移除信息</span><button on-click="clear(inform)">移除信息</button>
      </div>
      <div>
        <p>姓名：{{inform.name}}</p>
        <p>年龄：{{inform.age}}</p>
        <p>说明：{{inform.description}}</p>
      </div>
    </div>`,
});


var myApp = new MyApp();
myApp.attach(document.body);