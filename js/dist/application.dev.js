"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

document.addEventListener('DOMContentLoaded', ready); // @@@@@@@@@@@@@ start  @@@@@@@@@@@@@@@@@@@@

function ready() {
  var addNewLink = document.getElementsByClassName('parent_new')[0];
  var formLinks = document.getElementsByClassName('form_links')[0];
  addNewLink.addEventListener('click', function () {
    var formLinks = document.getElementsByClassName('form_links')[0];
    document.getElementById('url').focus();
    formLinks.style.opacity = "1";
    formLinks.style.transform = "scale(1) ";
    formLinks.style.zIndex = "5";
    formLinks.style.borderRadius = "0%";
  }); // @@@@@@@ start @@@@@@@@@@@

  var menuExit = document.getElementsByClassName('menu_exit')[0];
  menuExit.addEventListener('click', function () {
    var formLinks = document.getElementsByClassName('form_links')[0];
    formLinks.style.opacity = "0";
    formLinks.style.zIndex = "-5";
    formLinks.style.transform = "scale(0) ";
    formLinks.style.borderRadius = "50%";
  }); // @@@@@@@@ end @@@@@@@@@@@

  var URLWebsite = document.getElementById('url').value;
  var title = document.getElementById('title').value;
  var imageSrc = document.getElementById('src');
  var URL = document.getElementById('url');
  var titless = document.getElementById('title');
  var warn = document.getElementsByClassName('warn_img')[0];
  var warning = document.getElementsByClassName('warning_img')[0];
  var checked = document.getElementsByClassName('checked_img')[0];
  URL.addEventListener('keyup', checkFunc);

  function checkFunc() {
    if (URLWebsite == '' || !URLWebsite.startsWith("https")) {
      truue();
    }

    if (!URLWebsite == '' || URLWebsite.startsWith("https")) {
      falsse();
    }
  }

  function truue() {
    warn.style.display = 'none';
    warning.style.display = 'flex';
    checked.style.display = 'none';
  }

  function falsse() {
    warn.style.display = 'none';
    warning.style.display = 'none';
    checked.style.display = 'flex';
  } // @@@@@@@@ start createIcon @@@@@@@@@@@@@@


  var createIcon = document.getElementsByClassName('add_submit')[0];
  var arrayItems = JSON.parse(localStorage.getItem('icons')) ? JSON.parse(localStorage.getItem('icons')) : [];
  imageSrc.addEventListener('change', IMGFUNC);

  function IMGFUNC() {
    var fileImge = imageSrc.files[0];
    var reader = new FileReader();

    reader.onload = function () {
      var SRC = reader.result;
      arrayItems.push(SRC);
    };

    reader.readAsDataURL(fileImge);
  }

  createIcon.addEventListener('click', addIcons);

  function addIcons() {
    var URLWebsite = document.getElementById('url').value;
    var title = document.getElementById('title').value;
    var imgSrccArray = [];

    for (var i = 0; i < arrayItems.length; i = i + 3) {
      var mg = arrayItems[i];
      imgSrccArray.push(mg);
    } // let objec = {}


    if (URLWebsite == '' || !URLWebsite.startsWith("https")) {
      console.log("sorry the url input is empty");
      alert("Please Fill all Inputs ");
      return;
    } else if (title == "") {
      console.log("sorry the title input is empty");
      alert("Please Fill all Inputs ");
      return;
    } else if (imageSrc.files[0] == null) {
      console.log("sorry the img file input is empty");
      alert("Please Fill all Inputs ");
      return;
    }

    var ask = window.confirm('Are You Sure You Want to Create New Icon');

    if (ask === false) {
      window.console.log("you cancle");
      return;
    }

    var createNewParent = document.createElement('a');
    createNewParent.classList.add('parent-div');
    createNewParent.setAttribute('href', "".concat(URLWebsite));
    createNewParent.setAttribute('target', '_blank');
    var footer = document.getElementById('footer');
    footer.appendChild(createNewParent);
    var parentContent = "\n            <img src=\"".concat(imgSrccArray[imgSrccArray.length - 1], "\" alt=\"").concat(title, "\" class=\"first-img\">\n            <span class=\"second-span\"> ").concat(title, "</span>\n                ");
    createNewParent.innerHTML = parentContent;
    createNewParent.style.background = "white";
    console.log(createNewParent);
    formLinks.style.opacity = "0";
    formLinks.style.zIndex = "-1";
    URLWebsite == imageSrc == " ";
    arrayItems.push(URLWebsite, title);
    localStorage.setItem('icons', JSON.stringify(arrayItems));
    console.log(arrayItems);
  } // @@@@@@@@@@@@ end  createIcon@@@@@@@@@@@@@@@@@@@@
  // @@@@@@@@@@@@ start  putItemLSIntoHTML @@@@@@@@@@@@@@@@@@@@


  function putItemLSIntoHTML() {
    if (JSON.parse(localStorage.getItem("icons"))) {
      var arryfromls = JSON.parse(localStorage.getItem("icons"));

      var newArr = _toConsumableArray(arryfromls);

      var footer = document.getElementsByClassName('footer')[0];
      var hrefLocation;
      var titleName;
      var imgSrcItems;
      var hrefLocationArr = [];
      var titleNameArr = [];
      var imgSrcItemsArr = [];

      for (var i = 0; i < newArr.length; i = i + 3) {
        var imgSrcItems = newArr[i];
        imgSrcItemsArr.push(imgSrcItems);
      }

      for (var _i = 1; _i < newArr.length; _i = _i + 3) {
        var hrefLocation = newArr[_i];
        hrefLocationArr.push(hrefLocation);
      }

      for (var _i2 = 2; _i2 < newArr.length; _i2 = _i2 + 3) {
        var titleName = newArr[_i2];
        titleNameArr.push(titleName);
      }

      for (var x = 0; x < hrefLocationArr.length; x++) {
        var newLink = document.createElement('a');
        newLink.classList.add('parent-div');
        newLink.setAttribute('href', "".concat(hrefLocationArr[x]));
        newLink.setAttribute('target', '_blank');
        var parentContent = "\n                <img src=\"".concat(imgSrcItemsArr[x], "\" alt=\"").concat(titleNameArr[x], "\" class=\"first-img\">\n                <span class=\"second-span\"> ").concat(titleNameArr[x], "</span>\n                ");
        newLink.style.background = "white";
        newLink.innerHTML = parentContent;
        footer.insertBefore(newLink, footer.children[footer.children.length - 1]);
      }
    }
  } // @@@@@@@@@@@@ end putItemLSIntoHTML@@@@@@@@@@@@@@@@@@@@


  putItemLSIntoHTML();
} //this bracket from ready function