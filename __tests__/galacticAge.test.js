import { GalacticAge } from '../src/galacticAge.js'

describe ('galacticAge', () => {
  
  //Venus age test
  test('This will give you your age for venus', () => {
    let GL_Age = new GalacticAge(80,32);
    let expectedResult = GL_Age.age/.62;
    let ageResult = GL_Age.venusAge();
    expect(ageResult).toEqual(expectedResult); 
  });

  test('This test gives you the life expectency on Venus', () => {
    let GL_Age = new GalacticAge(80,32);
    let lifeExpectiencyResult = (GL_Age.lifeEx/.62)-GL_Age.venusAge();
    let lifeResult = GL_Age.venusExpectency();
    expect(lifeResult).toEqual(lifeExpectiencyResult);
  });

  //Mars Age test
  test('This will give you your age for Mars' , () => {
    let GL_Age = new GalacticAge(80,32);
    let expectedResult = GL_Age.age/1.88;
    let ageResult = GL_Age.marsAge();
    expect(ageResult).toEqual(expectedResult); 
  });

  test('This test gives you the life expectency on Mars', () => {
    let GL_Age = new GalacticAge(80,32);
    let lifeExpectiencyResult = GL_Age.lifeEx-GL_Age.marsAge();
    let lifeResult = GL_Age.marsExpectency();
    expect(lifeResult).toEqual(lifeExpectiencyResult);
  });

  //Mercury Age test
  test('This will give you your age on Mercury' , () => {
    let GL_Age = new GalacticAge(80,32);
    let expectedResult = GL_Age.age/.24;
    let ageResult = GL_Age.mercuryAge();
    expect(ageResult).toEqual(expectedResult); 
  });

  test('This test gives you the life expectency on Mercury', () => {
    let GL_Age = new GalacticAge(80,32);
    let lifeExpectiencyResult = GL_Age.lifeEx-GL_Age.mercuryAge();
    let lifeResult = GL_Age.mercuryExpectency();
    expect(lifeResult).toEqual(lifeExpectiencyResult);
  });

  //Jupiter Age test
  test('This will give you the age on Jupiter' , () => {
    let GL_Age = new GalacticAge(80,32);
    let expectedResult = GL_Age.age/11.86;
    let ageResult = GL_Age.jupiterAge();
    expect(ageResult).toEqual(expectedResult); 
  });

  test('This test gives you the life expectency on Jupiter', () => {
    let GL_Age = new GalacticAge(80,32);
    let lifeExpectiencyResult = GL_Age.lifeEx-GL_Age.jupiterAge();
    let lifeResult = GL_Age.jupiterExpectency();
    expect(lifeResult).toEqual(lifeExpectiencyResult);
  });

});
