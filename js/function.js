
$(function(){
	
	Menumobo();
	CliqueBody();
	function Menumobo(){
		$('.menumobo').click(function(e){
			e.stopPropagation();
			$('.menumobo > ul').fadeToggle(0);
		});
	}

	function CliqueBody(){
		var el = $('body');

		el.click(function(){
			$('.menumobo > ul').fadeOut(0);
		})
		$('.body').click(function(e){
			e.stopPropagation();
		})
	}
	


	$('.INICIO').on('click', function() {
	  var target_offset = $("#INICIO").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.SobreJadeID').on('click', function() {
	  var target_offset = $("#SobreJadeID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.ProjetoID').on('click', function() {
	  var target_offset = $("#ProjetoID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.FazemosID').on('click', function() {
	  var target_offset = $("#FazemosID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.IndiferentesID').on('click', function() {
	  var target_offset = $("#IndiferentesID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.AssuntoID').on('click', function() {
	  var target_offset = $("#AssuntoID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.MissãoID').on('click', function() {
	  var target_offset = $("#MissãoID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.ProjetosID').on('click', function() {
	  var target_offset = $("#ProjetosID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	$('.ContactosID').on('click', function() {
	  var target_offset = $("#ContactosID").offset();
	  var target_top = target_offset.top;
	  $('html, body').animate({ scrollTop: target_top }, 500);
	  return false;
	});

	function confirmacao(){
		$.notify({
			message:'Mensagem enviada com sucesso!'
		},{
			type:'danger'
		});
		return false;
	}

});
