function loggin(){
	var testador = /\b(\d{3}\.\d{3}\.\d{3}\-\d{2}|\d{2}\.\d{2}\.\d{3}\/\d{4}\-\d{2})\b/g;
	if(testador.test($("#login").val())){
		$("#login").next("span").css("display","none");
		$("#login").removeClass("destacar");
		return true;
	}else{
		$("#login").next("span").css("display","block");
		$("#login").addClass("destacar");
		return false;
	}
}
function passs(){
	var testador = /.{6}/igm;
	if(testador.test($("#pass").val())){
		$("#pass").next("span").css("display","none");
		$("#pass").removeClass("destacar");
		return true;
	}else{
		$("#pass").next("span").css("display","block");
		$("#pass").addClass("destacar");
		return false;
	}
}

function loggar(){
	if(loggin==true && passs==true){
		$("#frm_login").submit();
	}else{
		loggin();
		passs();
	}
}


$(document).ready(function(){
	 var maskBehavior = function (val) {
	  return val.replace(/\D/g, '').length === 13 ? '00.00.000/0000-00' : '000.000.000-0099';
	},
	options = {onKeyPress: function(val, e, field, options) {
			field.mask(maskBehavior.apply({}, arguments), options);
		}
	};

	$('#login').mask(maskBehavior, options);
	 
 });