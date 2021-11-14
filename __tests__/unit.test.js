// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('testing-3334', () => {
    expect(functions.isPhoneNumber('3334')).toBe(false);
});

  test('testing-3334', () => {
    expect(functions.isPhoneNumber('3334')).toBe(false);
  });   

  test('testing-510-590-2684', () => {
    expect(functions.isPhoneNumber('510-590-2684')).toBe(true);
  });

  test('testing-510-612-4174', () => {
    expect(functions.isPhoneNumber('510-612-4174')).toBe(true);
  });

  //isEmail
  test('testing-zjliang@ucsd.edu', () => {
    expect(functions.isEmail('zjliang@ucsd.edu')).toBe(true);
  });

  test('testing-tiz013@ucsd.edu', () => {
    expect(functions.isEmail('tiz013@ucsd.edu')).toBe(true);
  });

  test('testing-randomword', () => {
    expect(functions.isEmail('randomword')).toBe(false);
  });

  test('testing-notanemail', () => {
    expect(functions.isEmail('notanemail')).toBe(false);
  });

  //isStrongPassword
  test('testing-let', () => {
    expect(functions.isStrongPassword('let')).toBe(false);
  });

  test('testing-morethanfifteencharacters', () => {
    expect(functions.isStrongPassword('morethanfifteencharacters')).toBe(false);
  });

  test('testing-CSE32409', () => {
    expect(functions.isStrongPassword('CSE32409')).toBe(true);
  });

  test('testing-this914_', () => {
    expect(functions.isStrongPassword('this914_')).toBe(true);
  });

  //isDate
test('testing-10/20/2021', () => {
    expect(functions.isDate('10/20/2021')).toBe(true);
  });

  test('testing-11/13/2021', () => {
    expect(functions.isDate('11/13/2021')).toBe(true);
  });

  test('testing-11132021', () => {
    expect(functions.isDate('11132021')).toBe(false);
  });

  test('testing-10202021', () => {
    expect(functions.isDate('10202021')).toBe(false);
  });

  //isHexColor
  test('testing-#000000', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
  });

  test('testing-#FFF', () => {
    expect(functions.isHexColor('#FFF')).toBe(true);
  });

  test('testing-2FFF', () => {
    expect(functions.isHexColor('2FFF')).toBe(false);
  });

  test('testing-FFF#', () => {
    expect(functions.isHexColor('FFF#')).toBe(false);
  });
