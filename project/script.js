// ================= COOKIES =================

function setCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + date.toUTCString();
}

function getCookie(name) {
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i].trim();
    if (c.indexOf(name + "=") == 0) {
      return decodeURIComponent(c.substring(name.length + 1));
    }
  }
}

function hasCookie(name) {
  return getCookie(name) != undefined;
}

// ================= VALIDATION =================

function validateUsername(username) {
  if (username.length <= 3) {
    return false;
  }
  return true;
}

function validatePassword(password) {
  var hasUpper = false;
  var hasLower = false;
  var hasNumber = false;
  var hasSymbol = false;

  for (var i = 0; i < password.length; i++) {
    var ch = password.charAt(i);

    if (ch >= 'A' && ch <= 'Z') {
      hasUpper = true;
    } 
    else if (ch >= 'a' && ch <= 'z') {
      hasLower = true;
    } 
    else if (ch >= '0' && ch <= '9') {
      hasNumber = true;
    } 
    else {
      hasSymbol = true;
    }
  }

  if (hasUpper && hasLower && hasNumber && hasSymbol) {
    return true;
  } else {
    return false;
  }
}

// ================= SIGN UP =================

function signUp() {
  var u = document.getElementById("suUser").value;
  var p = document.getElementById("suPass").value;
  var msg = document.getElementById("msg");

  if (!validateUsername(u)) {
    msg.innerText = "Username must be more than 3 characters";
    return;
  }

  if (!validatePassword(p)) {
    msg.innerText =
      "Password must contain:\n" +
      "1 Capital letter\n" +
      "1 Small letter\n" +
      "1 Number\n" +
      "1 Symbol";
    return;
  }

  setCookie("username", u, 7);
  setCookie("password", p, 7);

  msg.innerText = "Sign up successful!";
  location.href = "login.html";
}

// ================= LOGIN =================

function login() {
  var u = document.getElementById("liUser").value;
  var p = document.getElementById("liPass").value;

  if (u === getCookie("username") && p === getCookie("password")) {
    setCookie("logged", "true", 1);
    location.href = "home.html";
  } else {
    document.getElementById("msg").innerText = "Wrong username or password";
  }
}

// ================= CHECK LOGIN =================

function checkLogin() {
  if (!hasCookie("logged")) {
    location.href = "login.html";
  }
}

// ================= AUTO SLIDER =================

var images = [];
var index = 0;

function startSlider() {
  setInterval(function () {
    if (images.length > 0) {
      document.getElementById("sliderImg").src = images[index];
      index++;
      if (index >= images.length) index = 0;
    }
  }, 2000);
}

// ================= PRODUCTS API =================

function getProducts() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products");
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var data = JSON.parse(xhr.responseText).products;
      showCards(data);
    }
  };
}

function showCards(data) {
  var container = document.getElementById("cards");

  for (var i = 0; i < data.length; i++) {
    images.push(data[i].thumbnail);

    var div = document.createElement("div");
    div.className = "card";
    div.innerHTML =
      "<img src='" + data[i].thumbnail + "'>" +
      "<h4>" + data[i].title + "</h4>";

    div.onclick = (function (id) {
      return function () {
        location.href = "details.html?id=" + id;
      };
    })(data[i].id);

    container.appendChild(div);
  }
}

// ================= DETAILS PAGE =================

function loadDetails() {
  var id = location.search.split("=")[1];

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products/" + id);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var d = JSON.parse(xhr.responseText);
      document.getElementById("dImg").src = d.thumbnail;
      document.getElementById("dTitle").innerText = d.title;
      document.getElementById("dDesc").innerText = d.description;
    }
  };
}
