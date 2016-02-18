'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('increases temperature with up button', function() {
    thermostat.upButton();
    expect(thermostat.temperature).toEqual(21);
  });

  it('decreases temperature with down button', function() {
    thermostat.downButton();
    expect(thermostat.temperature).toEqual(19);
  });

  it('won\'t go lower than 10 degrees', function() {
    for(var i = 0; i<10; i++) {
      thermostat.downButton();
    };
    expect(function() {thermostat.downButton()}).toThrow("Minimum temperature reached.");
  });
});
