import san from 'san'
var MyApp = san.defineComponent({
  template: '<div>Hello {{name}}!</div>',

  initData: function () {
    return {
      name: 'San'
    };
  }
});


var myApp = new MyApp();
myApp.attach(document.body);