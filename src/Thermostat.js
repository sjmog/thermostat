'use strict';

function Thermostat() {
  this.temperature = 20;
};

Thermostat.prototype.upButton = function() {
  this.temperature++;
};
