$( ".produto-filtro li" ).click(function() {
	
	// Recupero o codigo do filtro
	var codigo = $(this).attr('codigo');
	
	// Desmarcos o item ativo anterior
	$('ul.produto-filtro li').each(function(){
        $(this).removeClass("is-current");
    });
	
	// Atualizo como ativo o atual
	$(this).addClass("is-current");
	
	// Exibir Todos
	if(codigo == 1){
		$('div#produtos-itens div#item').each(function(){ $(this).fadeIn("slow"); });
	}
	else{
	
		// Percorro todos itens habilitando / desabilitando
		$('div#produtos-itens div#item').each(function(){
		
			// Recupero o codigo do item
			var codigo_atual = $(this).attr('codigo');
			
			if(codigo_atual == codigo)
				$(this).fadeIn("slow");
			else
				$(this).fadeOut("slow");
			
		});
	}
	
});