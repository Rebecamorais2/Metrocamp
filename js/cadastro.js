$('#pessoa_tipo input:radio').click(function(){
	var valor = $(this).val();
	
	if(valor == 'pf'){
		$("#div_pf").fadeIn("slow");
		$("#div_pj").hide();
	}	
	else{
		$("#div_pf").hide();
		$("#div_pj").fadeIn("slow");
	}

});  


function valida(campo, expressao){
	var expre = new RegExp(expressao,"igm");
	var resultado = expre.test($("#"+campo).val());
	if(resultado==true){
		$("#"+campo).next("span").css("display","none");
		$("#"+campo).removeClass("destacar");
	}else{
		$("#"+campo).next("span").css("display","block");
		$("#"+campo).addClass("destacar");
		
	}
	return resultado;
}


 
function f_submit(){
	var aux = 0;
	 $("#form_cadastro input:required").each(function(){
		if($(this).is(':visible') == true){
			if($(this).attr('onblur') && $(this).attr('onblur').substr(0,6) =="valida"){
				var expressao = $(this).attr('onblur').substr(26,$(this).attr('onblur').length-(26+3));
				if(valida($(this).attr('id'),expressao) == false){
					$(this).focus();
					aux=1;
					return false;
				}
			}
		}
	});
	if(aux==0){
		if($("#senha").val()!=$("#confirmarSenha").val()){
			$("#confirmarSenha").focus();
			$("#confirmarSenha").addClass("destacar");
			$("#confirmarSenha").next("span").css("display","block");
		}else{
			$("#form_cadastro").submit();
		}
	}
 }
 
 $(document).ready(function(){
	 var maskBehavior = function (val) {
	  return val.replace(/\D/g, '').length === 11 ? '00 00000-0000' : '00 0000-00009';
	},
	options = {onKeyPress: function(val, e, field, options) {
			field.mask(maskBehavior.apply({}, arguments), options);
		}
	};

	$('#telefone').mask(maskBehavior, options);
	 
 });
 
function check_pass(){
	if($("#senha").val()!=$("#confirmarSenha").val()){
		$("#confirmarSenha").addClass("destacar");
		$("#confirmarSenha").next("span").css("display","block");
	}else{
		$("#confirmarSenha").removeClass("destacar");
		$("#confirmarSenha").next("span").css("display","none");
	}
}