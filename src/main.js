import san, { DataTypes } from 'san';

const inform ={};
var MyApp = san.defineComponent({
  clear: function(inform){
    console.log(inform);
    console.log(this.data.inform);
    this.data.set('inform.name', '');
    this.data.set('inform.age', '');
    this.data.set('inform.description', '');
    //清除对象内容
  },
  template: 
    '<div>'
      + '<div>'
        + '<input type="text" value="{= inform.name =}" placeholder="姓名（string）">'
        + '<input type="text" value="{= inform.age | toNumber(age) =}" placeholder="年龄（number）">'
        + '<input type="text" value="{= inform.description =}" placeholder="简介（string）">'
      + '</div>'
      + '<div>'
      + '<span>移除信息</span><button on-click="clear(inform)">移除信息</button>'
      + '</div>'
      + '<div>'
        + '<p>姓名：{{inform.name}}</p>'
        + '<p>年龄：{{inform.age}}</p>'
        + '<p>说明：{{inform.description}}</p>'
      + '</div>'
    + '</div>',
  dataTypes: {//对象校验
    name: DataTypes.string,
    age: DataTypes.number,
    description: DataTypes.string,
  },
});


var myApp = new MyApp();
myApp.attach(document.body);