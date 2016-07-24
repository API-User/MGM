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

