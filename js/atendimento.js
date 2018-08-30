function valida(campo, expressao){
	var expre = new RegExp(expressao,"igm"); // i = ignorar ase sensitive; g = global + de uma ocorrencia; multi linhas
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
	 $("#contactForm input:required").each(function(){ // lista todos input required do form
		if($(this).is(':visible') == true){ // pra pegar apenas os elementos que estão visiveis
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
			if(valida($("#mensagem").attr("id"),"(.){2}.*")){
				$("#contactForm").submit();
			}else{
				$("#mensagem").focus();
				$("#mensagem").addClass("destacar");
				$("#mensagem").next("span").css("display","block");
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