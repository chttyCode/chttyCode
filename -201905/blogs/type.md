- 接口
  1. 可选属性 ?
  2. 只读属性 readonly
  3. 额外属性 [propName:string]
  4. 索引类型 [index:number]
  5. 类实现接口(implements):接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
  6. 接口继承(extend) let square = <Square>{};断言
  7. 混合类型=>通过断言的方式同时具有多个类型
  8. 接口继承类(extends)
- 类
   1. 类的继承(extend)
   2. 类的修饰符
   3. 
|  修饰符   | 类本身 | 类方法 | 类实例 | 子类本身 | 子类方法 | 子类实例 |
| :-------: | :----: | :----: | :----: | :------: | :------: | :------: |
|  static   |   +    |   -    |   -    |    +     |    -     |    -     |
|  public   |   -    |   +    |   +    |    +     |    -     |    +     |
|  private  |   -    |   +    |   -    |    -     |    -     |    -     |
| protected |   -    |   +    |   -    |    -     |    -     |    +     |

   4. 