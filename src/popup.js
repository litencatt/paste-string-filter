import storage from './storage';

window.onload = function() {
  var onOffRadio = document.getElementsByName("onoff");
  var onRaido = document.getElementById("enable");
  var offRaido = document.getElementById("disable");

  let enable = false;
  storage.get(["enable"]).then((items) => {
    enable = items['enable'];
    if (enable == 1) {
      onRaido.checked = true;
    } else {
      offRaido.checked = true;
    }
  });

  onOffRadio.forEach((radio) => {
    radio.addEventListener('change', function(e){
      console.log(e.target.value)
      if(e.target.value === "0") {
        storage.set({"enable": false});
      } else {
        storage.set({"enable": true});
      }
    });
  });
};
