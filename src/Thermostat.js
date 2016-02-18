'use strict';

function Thermostat() {
  this.temperature = 20;
  this.powerSM = true;
};

Thermostat.prototype.upButton = function() {
  if(this._maxTemp() === true) {
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

Thermostat.prototype.changeMode = function() {
  this.powerSM = !this.powerSM;
};

Thermostat.prototype._minTemp = function() {
  return this.temperature === 10;
};

Thermostat.prototype._maxTemp = function() {
  if(this.powerSM === true){
    return this.temperature === 25;
  }
  else {
    return this.temperature === 32;
  };
};