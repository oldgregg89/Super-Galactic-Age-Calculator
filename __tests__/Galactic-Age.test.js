import { GalacticAge } from '../src/Galactic-Age.js'

describe ('galacticAge', () => {
  
  //Venus age test
  test('This will give you your age & life expectency for venus', () => {
    let GL_Age = new GalacticAge(80,"Ian",32);
    let expectedResult = 80*.62;
    let timeLeftResult = (32*.62)-expectedResult;
    let overtime = (80-32)
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.venusValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
    expect(GL_Age.overtime).toEqual(overtime)
  });

  //Mars Age test
  test('This will give you your age & time left for Mars' , () => {
    let GL_Age = new GalacticAge(80,"Ian",32);
    let expectedResult = 80*1.88;
    let timeLeftResult = (32*1.88)-expectedResult;
    let overtime = (80-32)
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.marsValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
    expect(GL_Age.overtime).toEqual(overtime)
  });

  //Mercury Age test
  test('This will give you your age & time left on Mercury' , () => {
    let GL_Age = new GalacticAge(80,"Ian",32);
    let expectedResult = 80*.24;
    let timeLeftResult = (32*.24)-expectedResult;
    let overtime = (80-32)
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.mercuryValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
    expect(GL_Age.overtime).toEqual(overtime)
  });

  //Jupiter Age test
  test('This will give you the age & time left on Jupiter' , () => {
    let GL_Age = new GalacticAge(80,"Ian",32)
    let expectedResult = 80*11.86;
    let timeLeftResult = (32*11.86)-expectedResult;
    let overtime = (80-32)
    expect(GL_Age.modifiedAge).toEqual(0);
    expect(GL_Age.modifiedLifeEx).toEqual(0);
    GL_Age.jupiterValues();
    expect(GL_Age.modifiedAge).toEqual(expectedResult);
    expect(GL_Age.modifiedLifeEx).toEqual(timeLeftResult);
    expect(GL_Age.overtime).toEqual(overtime)
  });
});
