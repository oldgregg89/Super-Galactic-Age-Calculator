import { galacticAge } from '../src/Galactic-Age.js'

describe ('galacticAge', () => {
  let venusAge;
  let marsAge;
  let mercuryAge;
  let jupiterAge;
  let lifeExpectancy;
  let pastLifeExpectancy;
  let age;

  beforeEach(() => {
    venusAge = new galacticAge ();
    marsAge = new galacticAge ();
    mercuryAge = new galacticAge ();
    jupiterAge = new galacticAge ();
    lifeExpectancy = new galacticAge ();
    pastLifeExpectancy = new galacticAge ();
    age = new galacticAge(23);
  });
  //first test to try and make work
  test('This will give you your age for venus', () => {
    expect(venusAge.age).toEqual(37.1);
  });

  // text( , =>{
    
  // }

  // text( , =>{
    
  // }

  // text( , =>{
    
  // }
});
