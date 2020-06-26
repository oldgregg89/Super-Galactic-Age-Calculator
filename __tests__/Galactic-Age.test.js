import { GalacticAge } from '../src/Galactic-Age.js'

describe ('galacticAge', () => {
  
  //first test to try and make work
  test('This will give you your age & life expectency for venus', () => {
    let GL_Age = new GalacticAge(32,"Alex",80);
    let expectedResult = 32*.62;
    let timeLeftResult = (80*.62)-expectedResult;
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.venusValues()
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
    //226.3
  });

  // test( , =>{
    
  // }

  // test( , =>{
    
  // }

  // test( , =>{
    
  // }
});
