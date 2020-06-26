export class galacticAge {
  constructor(age,name,lifeEx){
  this.age = age;
  this.name = name;
  this.lifeEx = lifeEx;
  this.venusAge();
  this.marsAge();
  this.mercuryAge();
  this.jupiterAge();
  }

  venusAge(){
    //  age/.62 = age
    // lifeEx/.62 = lifeEx
    this.age = (age/.62);
    this.lifeEx = (lifeEx/.62);
  }

  marsAge(){
    //  age*1.88 = age
    // lifeEx*1.88 = lifeEx
    this.age = (age*1.88)
    this.lifeEx = (lifeEx*1.88)
  }

  mercuryAge(){
    // age/.24=age
    // lifeEx/.24= lifeEx
    this.age = (age/.24)
    this.lifeEx = (lifeEx/.24)
  }

  jupiterAge(){
    // age*11.86 = age
    // lifeEx*11.86 = lifeEx
    this.age = (age*11.86)
    this.lifeEx = (lifeEx*11.86)
  }
}