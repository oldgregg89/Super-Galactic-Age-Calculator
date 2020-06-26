import { galacticAge } from '../src/Galactic-Age.js'

describe ('galacticAge', () => {
  let venusAge;
  let marsAge;
  let mercuryAge;
  let jupiterAge;
  let lifeExpectancy;
  let pastLifeExpectancy;

  beforeEach(() => {
    venusAge = new galacticAge
    marsAge = new galacticAge
    mercuryAge = new galacticAge
    jupiterAge = new galacticAge
    lifeExpectancy = new galacticAge
    pastLifeExpectancy = new galacticAge
  });

  test('This will give you your age for venus', () => {
    expect(venusAge.age).toEqual(age);
  });

  // text( , =>{
    
  // }

  // text( , =>{
    
  // }

  // text( , =>{
    
  // }
});
