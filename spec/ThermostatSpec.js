'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases temperature', function() {
    thermostat.increaseTemperature();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases temperature', function() {
    thermostat.decreaseTemperature();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('won\'t go lower than 10 degrees', function() {
    for(var i = 0; i<10; i++) {
      thermostat.decreaseTemperature();
    };
    expect(function() {thermostat.decreaseTemperature()}).toThrow("Minimum temperature reached.");
  });

  it('starts with power saving mode on', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('when power saving mode is on, max temp is 25', function() {
    for(var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    };
    expect(function() { thermostat.increaseTemperature() }).toThrow("Maximum temperature reached.");
  });

  it('can turn power saving mode off', function() {
    thermostat.changeMode();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('power saving mode is off, max temp is 32', function() {
    thermostat.changeMode();
    for(var i=0; i<12; i++) {
      thermostat.increaseTemperature();
    };
    expect(function() { thermostat.increaseTemperature() }).toThrow("Maximum temperature reached.");
  });

  it('can reset temperature', function() {
    thermostat.increaseTemperature();
    thermostat.resetTemp();
    expect(thermostat.temperature).toEqual(20);
  });

  it('colours display green when lower than 18 degrees', function() {
    for(var i=0; i<3; i++) {
      thermostat.decreaseTemperature();
    };
    expect(thermostat.displayTemp()).toEqual('GREEN');
  });

  it('colours display yellow when between 18 and 25 degrees', function() {
    expect(thermostat.displayTemp()).toEqual('YELLOW');
  });

  it('colours display red when above 25 degrees', function() {
    for(var i=0; i<5; i++) {
      thermostat.increaseTemperature();
    };
    expect(thermostat.displayTemp()).toEqual('RED');
  });
});
