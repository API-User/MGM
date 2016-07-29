function ajax_post(url, vars, callback) {
	var h = new XMLHttpRequest();
  h.open('POST', url, true);
  h.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  h.onreadystatechange = function() {
  	if(h.readyState == 4 && h.status == 200) {
  		callback(h.responseText);
  	}
  }
  h.send(vars);
}

function is_mobile() {
	if(document.width <= 768) {
		return true;
	} else return false;
}

function createPopup(title, url, width, height) {
		window.open(url, title, 'width='+width+',height='+height);
}

function createHeader(type) {
  switch(type) {
    case 0:
        type = 'standard'; break;
    case 1:
        type = 'mobil'; break;
    case 2:
        type = 'development'; break;
  }
  var header = '<div id="header" class="header '+type+'"></div>';
  document.body.insertAdjacentHTML( 'afterbegin', header );
}

function changeText(id, value) {
  document.getElementById(id).innerHTML = value;
}

function addClass(id, className) {
  document.getElementById(id).classList += className;
}

function addClickActivity(id, callback) {
  document.getElementById(id).onclick = callback;
}

function makeEditable(id) {
  document.getElementById(id).ondblclick = startEdit(id);
  document.getElementById(id).onblur = stopEdit(id);
}

  function startEdit(id) { document.getElementById(id).contentEditable = true; }
  function stopEdit(id) { 
    document.getElementById(id).contentEditable  = false;
    var temp = document.getElementById(id).innerHTML.split(' ');
    for(var i = 0;i < temp.length;i++) {
      if(temp[i].indexOf('?') > -1) {
        var arg = temp[i].split('?');
        console.log(arg);
      }
    }
  }
