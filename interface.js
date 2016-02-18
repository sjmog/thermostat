$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('.temperature-upButton').on('click', function(){
    thermostat.upButton();
    updateTemperature();
  });

  $('.temperature-downButton').on('click', function(){
    thermostat.downButton();
    updateTemperature();
  });

  $('.temperature-resetTemp').on('click', function(){
    thermostat.resetTemp();
    updateTemperature();
  });

  $('.power-saving-mode').on('click', function(){
    thermostat.changeMode();
    if (thermostat.powerSM === false){
      $('.power-saving-status').text("off");
    }
    else {
      $('.power-saving-status').text("on");
    };
  });

  function updateTemperature(){
    $('.temperature').text(thermostat.currentTemp() + " degrees");
    $('.temperature').attr('id', thermostat.displayTemp());
  };
});