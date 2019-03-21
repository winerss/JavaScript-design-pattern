/**
 * <<设计模式之单例模式>>
 * 
 * 在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。
 * 
 *  */

// var mySingleton = function () {
//   //  声明私有变量和方法
//   var privateVariable = 'something private';
//   function showPrivate() {
//     console.log(privateVariable);
//   }

//   // 公有变量和方法
//   return {
//     publicMethod: showPrivate,
//     publicVar: 'the public can see this!'
//   };
// };

// var single = mySingleton();
// single.publicMethod();
// console.log(single.publicVar);


// 但如果我们想做到只有在使用的时候才初始化，那该如何做呢？为了节约资源的目的，我们可以另外一个构造函数里来初始化这些代码，如下：
var mySingleton = (function(){
  var instantisted; // （实例化）
  var privateVariable = 'something';
  function showPrivate() {
    console.log(privateVariable);
  }
  function init() {
    return {
      publicMethod: showPrivate,
      publicVar: 'the public can see this!'
    };
  }
  return {
    getInstance: function () {
      if(!instantisted) {
        instantisted = init();
      }
      return instantisted;
    }
  }
})();
mySingleton.getInstance().publicMethod();
