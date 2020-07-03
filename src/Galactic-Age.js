export class GalacticAge {
  constructor(age,lifeEx) {
  this.age = age;
  this.lifeEx = lifeEx;
  }

  venusAge() {
    return this.age/.62
  }

  venusExpectency(){

  }

  marsAge() {
    return this.age/1.88
  }

  marsExpectency(){
    
  }


  mercuryAge() {
    return this.age/.24
  }

  mercuryExpectency(){
    
  }

  jupiterAge() {
    return this.age/11.86
  }

  jupiterExpectency(){
    
  }

}