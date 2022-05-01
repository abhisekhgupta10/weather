const search = document.getElementById("search");

const city = document.getElementById("city");
const img = document.querySelector("img");
const tempr = document.getElementById("temp");
const dsc = document.getElementById("dsc");

search.addEventListener("click", weather);
function weather() {
  const srch = document.getElementById("srch").value;
  console.log(srch);

  // initialize AJAX
  xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${srch}&units=metric&appid=94245337c347876b839c6f6dfec6cf3f`,
    true
  );
  xhr.onload = function () {
    respone = JSON.parse(this.responseText);
    value = respone.main;
    value1 = respone.weather;
    city.textContent = srch;
    tempr.textContent = `${value.temp} C`;
    dsc.textContent = `${value1[0].description}`;
    img.src = `http://openweathermap.org/img/wn/${value1[0].icon}@2x.png`;
    document.querySelector(".all").style.display = "block";
    console.log(respone);
    console.log(value1);
  };
  xhr.send();
}

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    weather();
  }
});

//accessing your location

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  console.log(position);

  lat = position.coords.latitude;
  long = position.coords.longitude;
  xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=94245337c347876b839c6f6dfec6cf3f&units=metric`,
    true
  );
  xhr.onload = function () {
    respone = JSON.parse(this.responseText);
    value = respone.main;
    value1 = respone.weather;
    city.textContent =`${respone.name}`;
    tempr.textContent = `${value.temp} C`;
    dsc.textContent = `${value1[0].description}`;
    img.src = `http://openweathermap.org/img/wn/${value1[0].icon}@2x.png`;
    document.querySelector(".all").style.display = "block";
    console.log(respone)
  };
  xhr.send();
}
function error(error) {
  console.log(error);
}
