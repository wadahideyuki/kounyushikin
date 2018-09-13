var objcar;
var carval;

function ConnectedSelect(selIdList){
	objcar = document.getElementById('car_id');
	carval = objcar.options[objcar.selectedIndex].value;
	for(var i=0;selIdList[i];i++) {
		var CS = new Object();
		var obj = document.getElementById(selIdList[i]);
		obj.ConnectedSelectDefault = obj.options[obj.selectedIndex].value;
		if(i){
			CS.node=document.createElement('select');
			var GR = obj.getElementsByTagName('optgroup');
			while(GR[0]) {
				CS.node.appendChild(GR[0].cloneNode(true));
				obj.removeChild(GR[0]);
			}
			obj.disabled = true;
		}
		if(selIdList[i+1]) {
			CS.nextSelect = document.getElementById(selIdList[i+1]);
			obj.onchange = function(){ConnectedSelectEnabledSelect(this)};
		} else {
			CS.nextSelect = false;
		}
		obj.ConnectedSelect = CS;
	}
	ConnectedSelectDefault(selIdList);
}

function ConnectedSelectEnabledSelect(oSel){
	var oVal = oSel.options[oSel.selectedIndex].value;
	if(oVal) {
		while(oSel.ConnectedSelect.nextSelect.options[1])oSel.ConnectedSelect.nextSelect.remove(1);
		var eF = false;
		for(var OG=oSel.ConnectedSelect.nextSelect.ConnectedSelect.node.firstChild;OG;OG=OG.nextSibling) {
			if(OG.label == oVal) {
				eF = true;
				for(var OP=OG.firstChild;OP;OP=OP.nextSibling)
					oSel.ConnectedSelect.nextSelect.appendChild(OP.cloneNode(true));
				break;
			}
		}
		oSel.ConnectedSelect.nextSelect.disabled = !eF;
	} else {
		oSel.ConnectedSelect.nextSelect.selectedIndex = 0;
		oSel.ConnectedSelect.nextSelect.disabled = true;
	}
	if(oSel.ConnectedSelect.nextSelect.onchange)oSel.ConnectedSelect.nextSelect.onchange();
}

function ConnectedSelectDefault(selIdList){
	for(var i=0;selIdList[i];i++) {
		if(i){
			var obj = document.getElementById(selIdList[i]);
			obj.disabled = true;
			var oSel = document.getElementById(selIdList[i-1])
			var oVal = oSel.ConnectedSelectDefault;
			for(var OG=obj.ConnectedSelect.node.firstChild;OG;OG=OG.nextSibling) {
				if(OG.label != oVal) { continue; }
				for(var OP=OG.firstChild;OP;OP=OP.nextSibling)
				obj.appendChild(OP.cloneNode(true));
				obj.disabled = false;
				break;
			}
			for (var k=0; k<objcar.options.length; k++){
				if (objcar.options[k].value == carval) {
					objcar.options[k].selected = true;
					break;
				}
			}
		}
	}
}
