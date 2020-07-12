export class GalacticAge {
  constructor(age,lifeEx) {
  this.age = age;
  this.lifeEx = lifeEx;
  this.overTime = (lifeEx-age)>0;
  }

  venusAge() {
    return this.age/.62;
  }

  venusExpectency(){
    return (this.lifeEx/.62);
  }

  marsAge() {
    return this.age/1.88;
  }

  marsExpectency(){
    return (this.lifeEx/1.88);
  }


  mercuryAge() {
    return this.age/.24;
  }

  mercuryExpectency(){
    return (this.lifeEx/.24);
  }

  jupiterAge() {
    return this.age/11.86;
  }

  jupiterExpectency(){
    return (this.lifeEx/11.86);
  }

  calculateYears(lifeEx,age){
    let diffrence = lifeEx-age;
    if(diffrence<0){
      diffrence = Math.abs(diffrence);
      this.overTime = true;
    } else{
      this.overtime = false;
    }
    return diffrence;
  }


}