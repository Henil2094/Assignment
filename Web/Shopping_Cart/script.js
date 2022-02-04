

function Submit(para) {
	var tableBody = document.getElementById("ta").getElementsByTagName('tbody')[0];
	
	var pname = document.getElementById('pname').value;
	var pprice = document.getElementById('pprice').value;
	var pqnt = document.getElementById('pqnt').value;
	var pimg = document.getElementById('pimage').files[0];
	var ImageURL = (pimg != undefined) ? URL.createObjectURL(pimg) : "";
	
	var img = document.createElement("img");
	img.style.width = "50px";
	img.style.height = "50px";
	img.src = ImageURL

	var row = tableBody.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	
	cell1.appendChild(img);
	cell2.innerHTML = pname;
	cell3.innerHTML = pprice;
	cell4.innerHTML = pqnt;
	cell5.innerHTML = '<button type="button" class="btn btn-secondary" onclick="del(this);">Delete</button><button type="button" class="btn btn-secondary" onclick="add_cart(this,\'' + ImageURL + '\');">Add to Cart</button>';
	
	document.getElementsByClassName("form1")[0].reset();
}

function del(btn) {
	var row = btn.parentNode.parentNode;
	row.parentNode.removeChild(row);
}

function remove_cart(btn) {	
	var row = btn.parentNode.parentNode;

	var total = parseInt(document.getElementById("total").textContent);
	var pprice = parseInt(row.cells[2].textContent.trim());
	var pqnt = parseInt(row.cells[3].textContent.trim());

	total -= pprice * pqnt;
	document.getElementById("total").textContent = total;
	row.parentNode.removeChild(row);
}

function add_cart(btn, image){
	var tableBody = document.getElementById("cart").getElementsByTagName('tbody')[0];

	var total = (document.getElementById("total").textContent != "") ? parseInt(document.getElementById("total").textContent) : 0;
	
	var row = btn.parentNode.parentNode;

	var pname = row.cells[1].textContent.trim();
	var pprice = parseInt(row.cells[2].textContent.trim());	
	var pqnt = parseInt(row.cells[3].textContent.trim());	
	total += pprice * pqnt;
	document.getElementById("total").textContent = total;
	
	var img = document.createElement("img");
	img.style.width = "100px";
	img.style.height = "100px";
	img.src = image;

	var row = tableBody.insertRow(-1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.appendChild(img);
	cell2.innerHTML = pname;
	cell3.innerHTML = pprice;
	cell4.innerHTML = pqnt;
	cell5.innerHTML = '<button type="button" class="btn btn-secondary" id="del" onclick="remove_cart(this);">Delete</button>';

}
