import { GalacticAge } from '../src/Galactic-Age.js'

describe ('galacticAge', () => {
  
  //Venus age test
  test('This will give you your age & life expectency for venus', () => {
    let GL_Age = new GalacticAge(32,"Ian",80);
    let expectedResult = 32*.62;
    let timeLeftResult = (80*.62)-expectedResult;
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.venusValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
  });

  //Mars Age test
  test('This will give you your age & time left for Mars' , () => {
    let GL_Age = new GalacticAge(32,"Ian",80);
    let expectedResult = 32*1.88;
    let timeLeftResult = (80*1.88)-expectedResult;
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.marsValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
  });

  //Mercury Age test
  test('This will give you your age & time left on Mercury' , () => {
    let GL_Age = new GalacticAge(32,"Ian",80);
    let expectedResult = 32*.24;
    let timeLeftResult = (80*.24)-expectedResult
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.mercuryValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
  });

  //Jupiter Age test
  // test( , () => {
    
  // });
});
