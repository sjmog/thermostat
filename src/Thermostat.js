'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSavingMode = true;
  this.MIN_TEMP = 10;
  this.MAX_TEMP_POWER_SAVING_MODE_ON = 25;
  this.MAX_TEMP_POWER_SAVING_MODE_OFF = 32;
  this.MEDIUM_TEMP = 18;
};

Thermostat.prototype.currentTemp = function() {
  return this.temperature;
};

Thermostat.prototype.displayTemp = function() {
  if(this.temperature < this.MEDIUM_TEMP){
    return "GREEN";
  }
  else if(this.temperature < this.MAX_TEMP_POWER_SAVING_MODE_ON) {
    return "YELLOW";
  };
  return "RED";
};

Thermostat.prototype.increaseTemperature = function() {
  if(this._maxTemp() === true) {
    throw "Maximum temperature reached.";
  };
  this.temperature++;
};

Thermostat.prototype.decreaseTemperature = function() {
  if(this._minTemp() === true) {
    throw "Minimum temperature reached.";
  };
  this.temperature--;
};

Thermostat.prototype.changeMode = function() {
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype._minTemp = function() {
  return this.temperature === this.MIN_TEMP;
};

Thermostat.prototype._maxTemp = function() {
  if(this.powerSavingMode === true){
    return this.temperature >= this.MAX_TEMP_POWER_SAVING_MODE_ON;
  }
  else {
    return this.temperature >= this.MAX_TEMP_POWER_SAVING_MODE_OFF;
  };
};