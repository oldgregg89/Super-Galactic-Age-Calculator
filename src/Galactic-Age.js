import compareVersions from "compare-versions";

export class GalacticAge {
  constructor(age,name,lifeEx) {
  this.age = age;
  this.name = name;
  this.lifeEx = lifeEx;
  this.modifiedAge = 0;
  this.modifiedLifeEx = 0;
  }

  venusValues() {
    this.modifiedAge = (this.age*.62);
    this.modifiedLifeEx = (this.lifeEx*.62)-this.modifiedAge;
  }

  marsValues() {
    this.modifiedAge = (this.age*1.88);
    this.modifiedLifeEx = (this.lifeEx*1.88)-this.modifiedAge;
  }


  mercuryValues() {
    this.modifiedAge = (this.age*.24);
    this.modifiedLifeEx = (this.lifeEx*.24)-this.modifiedAge;
  }

  jupiterValues() {
    this.modifiedAge = (this.age*11.86);
    this.modifiedLifeEx = (this.lifeEx*11.86)-this.modifiedAge;
  }

}