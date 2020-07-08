export class GalacticAge {
  constructor(age,lifeEx) {
  this.age = age;
  this.lifeEx = lifeEx;
  }

  venusAge() {
    return this.age/.62
  }

  venusExpectency(){
    return (this.lifeEx/.62)-this.venusAge()
  }

  marsAge() {
    return this.age/1.88
  }

  marsExpectency(){
    return this.lifeEx-this.marsAge()
  }


  mercuryAge() {
    return this.age/.24
  }

  mercuryExpectency(){
    return this.lifeEx-this.mercuryAge()
  }

  jupiterAge() {
    return this.age/11.86
  }

  jupiterExpectency(){
    return this.lifeEx-this.jupiterAge()
  }

}