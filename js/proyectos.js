function mandarDatos(){
	var titu;
	var date;
	var tag;
	var descr;

	var proyecto= {
		"titulo":""+titu,
	    "fecha": ""+date,
	    "etiquetas": ""+tag,
	    "descripcion": ""+descr
	};

	$.ajax({
	    type: 'post',
	    url: 'json/proyectos.json',
	    data: JSON.stringify(proyecto),
	    contentType: "application/json; charset=utf-8",
	    traditional: true,
	    success: function (data) {
	    	console.log("ya ta");
	    }
	});
}

$(document).ready(function(){
    mandarDatos();

});