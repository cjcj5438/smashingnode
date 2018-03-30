module.exports = Person;
// module.exports 和exports 不一样, 它可以重写对想, 而且返回对象只能使用他;
function Person (name) {
  this.name = name;
};

Person.prototype.talk = function () {
  console.log('my name is', this.name);
};
