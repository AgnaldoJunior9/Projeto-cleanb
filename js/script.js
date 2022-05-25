window.onload = function(){
	var map;

	function initialize(){
		var mapProp = {
			center: new google.maps.LatLng(38.7396949,-9.1520328),
			scrollWheel:false,
			zoom:15,
			MapTypeId: google.maps.MapTypeId.ROADMAP
		}
			map = new google.maps.Map(document.getElementById("mapa"),mapProp);

	}

	function addMarker(lat,long,icon,content){
		var latLng = {'lat':lat,'lng':long};
		var marker = new google.maps.Marker({
			position:latLng,
			map:map,
			icon:icon
		});

		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:400,
			pixelOffset: new google.maps.Size(0,20)
		});
		infoWindow.open(map,marker);
	}

	initialize();
	addMarker(38.7396949,-9.1520328,'imagens/perfilmaps.png','Av. Berna, 26 - Torre A Espaço Empreendedorismo - Lisboa - Portugal - 1069-061');
}

