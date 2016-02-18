'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSM = true;
};

Thermostat.prototype.upButton = function() {
  if(this.temperature === 25) {
    throw "Maximum temperature reached.";
  };
  this.temperature++;
};

Thermostat.prototype.downButton = function() {
  if(this._minTemp() === true) {
    throw "Minimum temperature reached.";
  };
  this.temperature--;
};

Thermostat.prototype._minTemp = function() {
  return this.temperature === 10;
};