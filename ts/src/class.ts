// class
//1存取器 setter getter
// class User {
//     myname:string;
//     constructor(myname: string) {
//         this.myname = myname;
//     }
//     get name() {
//         return this.myname;
//     }
//     set name(value) {
//         this.myname = value;
//     }
// }

// let user = new User('kds');
// user.name = 'kds@'; 
// console.log(user.name); 
//2参数属性

// class User {
//     constructor(public myname: string) {}
//     get name() {
//         return this.myname;
//     }
//     set name(value) {
//         this.myname = value;
//     }
// }

// let user = new User('kds');
// console.log(user.name);

//3.readonly 修饰符  1. 只能在constructor初始化 vs const readonly只是在编译检测，const会在运行时候检测
// class User{
//     public readonly name:string
//     constructor(name:string){
//         this.name=name
//     }
//     changeName(name:string){
//         this.name=name
//     }
// }
// let a = new User('kds');
// a.changeName('kds@');

// 4.继承 
/**
 * 1.public  类里面 子类 其它任何地方外边都可以访问
 *  2.private 类里面可以访问， 子类和其它任何地方都不可以访问
 *  3. protected 类里面 子类 都可以访问,其它任何地方不能访问
 * 4. static静态属性
 */
// class Person {
//     name: string;//定义实例的属性，默认省略public修饰符
//     age: number;
//     private money:number
//     protected child:string
//     constructor(name:string,age:number,money:number=10) {//构造函数
//         this.name=name;
//         this.age=age;
//         this.money=money
//         this.child='6'
//     }
//     getName():string {
//         return this.name;
//     }
//     setName(name:string): void{
//         this.name=name;
//     }
//     getMoney(){
//         return this.money
//     }
// }
// class Student extends Person{
//     no: number;
//     static Father:string='Person'
//     constructor(name:string,age:number,no:number) {
//         super(name,age);
//         this.no=no;
//     }
//     getNo():number {
//         return this.no
//     }
//     getChild():string{
//         return this.child
//     }
// }
// let s1=new Student('kds',10,1);
// console.log(s1);

//5.抽象类 抽象描述一种抽象的概念，无法被实例化，只能被继承
/**
 * readonly
 * static
 * abstract 抽象方法只能出现在抽象类中
 * pulic
 * private
 * protected
 * vs 接口
 *  不同类之间公有的属性或方法，可以抽象成一个接口（Interfaces）
 *  而抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
 * 抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述,既不提供方法的实现，也不为属性进行初始化
 * 一个类可以继承一个类或抽象类，但可以实现（implements）多个接口
 * 抽象类也可以实现接口
 */
abstract class Animal {
    abstract name:string;
    abstract speak():void;
}
class Cat extends Animal{
    name='cat'
    speak(){
        console.log(this.name+'喵喵喵');
    }
}
let cat = new Cat();
cat.speak();
//6.重载
function double(val:number):number
function double(val:string):string
function double(val:any):any{
  if(typeof val == 'number'){
    return val *2;
  }
  return val + val;
}

let r = double(1);
console.log(r);
//7.重写
class Cat2 extends Animal{
    name='cat'
    speak(){
        console.log(this.name+'重写，喵喵喵');
    }
}
let c = new Cat2()
console.log(c.speak())
//8. 继承 vs 多态 
/**
 * 继承（Inheritance）子类继承父类，子类除了拥有父类的所有特性外，还有一些更具体的特性
 * 多态（Polymorphism）由继承而产生了相关的不同的类，对同一个方法可以有不同的响应
 */

class MyClass {
    constructor() {
      // ...
    }
    get prop() {
      return 'getter';
    }
    set prop(value) {
      console.log('setter: ' + value);
    }
  }
export {}