function ThermostatInitializer() {
  this.thermostat = new Thermostat();
  this.temperatureContainer = $('#temperature_container');
  this.powerSavingStatus = $('#power_saving_status');
  this.temperatureUpButton = $('#temperature_up_button');
  this.temperatureDownButton = $('#temperature_down_button')
  this.resetTemperatureButton = $('#reset_temperature_button');
  this.togglePowerSavingButton = $('#toggle_power_saving');
};

ThermostatInitializer.prototype.initialize = function() {
  var thermostat = this.thermostat;
  this._setTemperature(thermostat.temperature);
  this._setPowerSavingStatus(thermostat.powerSavingMode);
  this._initializeButtons();
};

ThermostatInitializer.prototype._setTemperature = function(temperature) {
  this.temperatureContainer.text(temperature);
};

ThermostatInitializer.prototype._setPowerSavingStatus = function(powerSavingMode) {
  var status = (powerSavingMode) ? 'on' : 'off';
  this.powerSavingStatus.text(status);
};

ThermostatInitializer.prototype._initializeButtons = function() {
  var self = this;

  this.temperatureUpButton.click(function() {
    self.thermostat.increaseTemperature();
    self._setTemperature(self.thermostat.temperature);
  });

  this.temperatureDownButton.click(function() {
    self.thermostat.decreaseTemperature();
    self._setTemperature(self.thermostat.temperature);
  });

  this.resetTemperatureButton.click(function() {
    self.thermostat.resetTemp();
    self._setTemperature(self.thermostat.temperature);
  });

  this.togglePowerSavingButton.click(function() {
    self.thermostat.changeMode();
    self._setPowerSavingStatus(self.thermostat.powerSavingMode);
  });
};