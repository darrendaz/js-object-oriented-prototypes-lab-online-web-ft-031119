function BoardMember(name, homeState, training) {
  this.name = name
  this.homeState = homeState
  this.training = training

  // this.veto = function(){
  //   return 'No, I must disagree'
  // }
  // this.approve = function(){
  //   return 'You can do that!'
  // }
  // this.doCharity = function(){
  //   return "I like to help people."
  // }

  // this.releasePressStatement = function(){
  //   return "You will see great things from Scuber."
  // }

  // this.sayHi = function(){
  //   return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  // }
}

BoardMember.prototype.veto = () => 'No, I must disagree'
BoardMember.prototype.approve = () => 'You can do that!'
BoardMember.prototype.doCharity = () => 'I like to help people.'
BoardMember.prototype.releasePressStatement = () => 'You will see great things from Scuber.'
BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}
BoardMember.prototype.sayHi = function () {
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}

backSlappingGene = new BoardMember("Mr. Gene", "Delaware", "business")

backSlappingGene.sayHi();