function ocultarTodo(){
	$("#vari-tipos").hide();
	$("#est-ctrl").hide();
	$("#est-rep").hide();
}

$(document).ready(function(){
   $("#pa-ejercicio").hide();

 	$("#varia").click(function(){
 		$("#pa-ejercicio").show();
 		ocultarTodo();
 		$("#vari-tipos").show();
 	});

 	$("#estruc-ctrl").click(function(){
 		$("#pa-ejercicio").show();
 		ocultarTodo();
 		$("#est-ctrl").show();
 	});
 	
 	$("#estruc-rept").click(function(){
 		$("#pa-ejercicio").show();
 		ocultarTodo();
 		$("#est-rep").show();
 	});

 	$(".exito").click(function(){
 		alert("Trabajo subido con exito");
 		$("#pa-ejercicio").hide();
 	});
});