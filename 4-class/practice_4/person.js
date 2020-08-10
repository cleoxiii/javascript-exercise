// TODO 15: 在这里写实现代码
export default class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }

  // eslint-disable-next-line class-methods-use-this
  basicIntroduce() {
    return 'My name is Tom. I am 21 years old.';
  }
}
