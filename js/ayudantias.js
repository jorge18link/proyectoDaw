/*
function initMap() {
    var map2 = new google.maps.Map(document.getElementById('map2'), {
    center: new google.maps.LatLng(-2.145147, -79.966820),
    zoom: 17
    });
    var infoWindow = new google.maps.InfoWindow;
    var marker2 = new google.maps.Marker({
    map: map2,
    label: 'A',
    position: new google.maps.LatLng(-2.144622, -79.967571)
    });
    var infowincontent = document.createElement('div');
    var aula = document.createElement('strong');
    var hora = document.createElement('strong');
    aula.textContent = "Aula: ba-15"
    hora.textContent = "Horario: 15:00 - 17:00"
    infowincontent.appendChild(aula);
    infowincontent.appendChild(document.createElement('br'));
    infowincontent.appendChild(hora);
    marker2.addListener('click', function() {
          infoWindow.setContent(infowincontent);
          infoWindow.open(map2, marker2);
    });          
}
*/

function agregarAyudantes() {
    var url ="http://localhost/proyecto/json/ayudantes.json"
    $.getJSON(url, function(resp){
        console.log(resp);
        var ayudantes = resp.Ayudantes;
        $("#todo").append($("<h1>",{"class":"text-center"}).text("Ayudantes"));
        ayudantes.forEach(function(ayuAct){
        	console.log(ayuAct.matricula);
        	$("#todo").append(
	    		$("<div>",{"class":"ayudante"}).append(
					$("<div>",{"class":"ayu-info"}).append(
						$("<p>").append($("<strong>").text("Nombre: "),""+ayuAct.nombre),
						$("<p>").append($("<strong>").text("Correo: "),""+ayuAct.correo)
					),
					$("<div>",{"class":"ayu-horarios col-md-12","id":""+ayuAct.matricula}).append(
						$("<h3>").text("Ayudantias")
					)		
				)
	   		)
	   		ayuAct.horarios.forEach(function(hor_act){
	   			$("#"+ayuAct.matricula).append(
	   				$("<div>",{"class":"ayu-horario col-md-3"}).append(
	   					$("<p>").append($("<strong>").text("Día: "),""+hor_act.dia),
		   				$("<p>").append($("<strong>").text("Aula: "),""+hor_act.aula),
		   				$("<p>").append($("<strong>").text("Horario: "),""+hor_act.hora),
		   				$("<p>").append($("<strong>").text("Ubicacion en el mapa: "),"WIP")
	   				)
	   			)	
	   		})	
        })	 
    });
}



$(document).ready(function(){
    agregarAyudantes();

});