// lembretes = { idUserLogado }
function exibirPostagem(){ 
   $.ajax(
    {
        type: "POST",
        url: "paginas/recursos/salvar-ExibirPostagem.php",
        data: {
            chave:'valorizado demais esse AJAX!!', 
            },
        success: function( result ) {     
         console.log(result);
        resultado = JSON.parse(result); 
        
        $("#postagem").empty();  
        $.each(resultado, function (i, contato){
         /*DATA->*/  if(resultado[i].dias == 0 ) { resultado[i].dias = "Hoje às "; }  
                     if(resultado[i].dias == 1 ) { resultado[i].dias = "Ontem ás "; }
                     if(resultado[i].dias > 1 && resultado[i].dias < 7 ) { resultado[i].dias += " dias atrás ás "; }
                     if(resultado[i].dias >= 7  ) { resultado[i].dias = "A uma semana atrás ás "; }
                     
         /*DATA->*/  if(resultado[i].diasC == 0) { resultado[i].diasC = "Hoje às ";}  
                     if(resultado[i].diasC == 1) { resultado[i].diasC = "Ontem ás "; }         
                     if(resultado[i].diasC > 1 && resultado[i].diasC < 7) { resultado[i].diasC += " dias atrás ás ";} 
                     if(resultado[i].diasC > 7)  { resultado[i].diasC = "A uma semana atrás ás "; }

                     // talves if(resultado[i].qtdComentario == 0){
                     // talves    document.getElementById("btnLermais"+resultado[i].cd_postagem).disabled = true;      
                     // talves } 

                     $("#textareaComentar textarea").bind("input", function(e) {
                        if( $(this).outerHeight() < this.scrollHeight +
                                                       parseFloat($(this).css("borderTopWidth")) +
                                                       parseFloat($(this).css("borderBottomWidth"))
                               && $(this).height() < 70 // Altura máxima
                        ) {
                            $(this).height($(this).height()+1); // aumentar em +1
                        }else{
                           $(this).height($(this).height()-1); // diminuir em -1
                        };
                     });


    $("#postagem").append(
       "<div class='divDividir '>" + "</div>" +  
       "<div class='espacoPostagem '>" +
       "<div class='row'>" + // inicio da row
       "<div id='telaPerfil"+resultado[i].cd_postagem+"' class='col-sm-11'>" + // inicio da col nickname
       "</div>" + // Fim da col do nickname
       "<div class='col-sm-1'>" + // inicio da col menu
       "<div class='dropdown show'>" +
       "<a class='dropdown-toggle' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'> <img class='imgMenu'src='assets/img/icon/home/menuHamburger.png' alt=''> </a>" +
       "<div class='opcoesPostagem dropdown-menu'>" +
       "<div id='opcoesDePermissao"+resultado[i].cd_postagem+"'>" +
       "</div>" +
       "</div>" + "</div>" +
       "</div>" + // fim da col menu
       "</div>" + // fim row  
       "<p>" + "<span class='p_relogio'> <img class='imgRelogioPostagem' src='assets/img/icon/home/relogio.jfif'>"+resultado[i].dias + resultado[i].hr_postagem+"</span>" + "</p>" +
       "<div id='telaDeConteudo"+resultado[i].cd_postagem+"'>" + // INICIO DA TELA DE CONTEUDO
       "</div>" + // FIM DA TELA DE CONTEUDO
       "<div class='row'>" +  // inicio row qauntidade 
       "<div class='col-md-4'> <ol> <li id='qtdLike"+resultado[i].cd_postagem+"' value="+resultado[i].qtdLike+">    </li> </ol> </div>" +     // Quantidade de likes
       "<div class='col-md-4'> <ol> <li id='qtdDeslike"+resultado[i].cd_postagem+"' value="+resultado[i].qtdDeslike+"> </li> </ol> </div>" +   // Quantidade de Deslikes
       "<div class='col-md-4'> <ol> <li id='qtdComentario"+resultado[i].cd_postagem+"' value="+resultado[i].qtdComentario+"> </li> </ol> </div>" +// Quantidade de comentarios
       "</div>" +  // fim row quantidade         
       "<div class='row'> <div class='col-md-12'> <p style='float: right; margin: 0px;'> Comentários </p> </div> </div>" + 
       "<div class='row'>" + // inicio row btnsss
       "<div class='col-md-4'>" + "<button type='button' value="+resultado[i].cd_postagem+" id='btnLikePostagem"+resultado[i].cd_postagem+"' class='btnlikes' onclick='LikePostagem(this.value)'>Likes" + "</div>" +  
       "<div class='col-md-4'>" + "<button type='button' value="+resultado[i].cd_postagem+" id='btnDeslikePostagem"+resultado[i].cd_postagem+"' class='btnlikes' onclick='DeslikePostagem(this.value)'>Deslikes" + "</div>" +  
       "<div class='col-md-4'>" + "<button type='button' value="+resultado[i].cd_postagem+" class='btn btn-link' id='btnLermais"+resultado[i].cd_postagem+"' style='float:right; padding: 2px;  text-decoration: none; ' onclick='abriComentario(this.value)' data-toggle='modal' data-target='#modalComentario' >Ler mais</button>" + "</div>" +  
       "</div>" +  // fim row btnss 
       "<br>" +
       "<div class='row'>" + // inicio row comentario
       "<div class='col-sm-12'>" + //inicio col-sm-12            
       "<div id='areaComentario"+resultado[i].cd_postagem+"'>" + // inicio da exibicao dos comentario 
       "<div id='comentarioPostagem"+resultado[i].cd_postagem+"'>  <div>" + // aqui irá aparecer os comentários     
       "<div id='rodapeComentario"+resultado[i].cd_postagem+"'> </div>" + //  rodape do Comentario         
       "</div>" + // fim da exibicao dos comentario 
       "</div>" + //fim de col-sm-12 
       "</div>" + //fim row comentario         
       "<div class='row'>" + // inicio row input comentar
       "<div class='col-lg-12'>" +// inicio de col-lg-12 

      
       "<div class='input-group'>" +  // inicio da div input-group 

       "<div id='textareaComentar'> <textarea id="+resultado[i].cd_postagem+" class='form form-control inputComentarioPostagem"+resultado[i].cd_postagem+"' style='padding: 3px; font-size: 13px; height: 28px; resize: none; overflow: hidden; flex-wrap: wrap;' wrap='hard' placeholder='Comentar' onkeypress='ComentarClickEnter(this.id)'></textarea>  </div>" + 
       
       "<span class='input-group-btn'>" + // inicio do span do btn emojin
       "<button type='button' class='btn-link' value="+resultado[i].cd_postagem+" onclick='abrirTableEmojin(this.value)'> <img src='assets/img/icon/home/emojin.png' alt=''  height='20px';> </button>" + 
       "</span>" +// fim do span do btn emojin

       "<span class='input-group-btn'>" + // inicio do span do btn enviar comentario
       "<button type='button' id='btnComentar"+resultado[i].cd_postagem+"' class='btn-link btnComentar' value="+resultado[i].cd_postagem+" onclick='ComentarPostagem(this.value)'><img class='' src='assets/img/icon/home/enviar.png' alt='' height='25px'; ></button>" +
       "</span>" +// FIM do span do btn enviar comentario
       
       "</div>" + // fim da div input-group 
       

       "</div>" + //fim de col-lg-12 
       "</div>" + //fim row input comentar       
       "<div class='row' id='tbEmojinPostagem"+resultado[i].cd_postagem+"' style='display:none;'>" + //inicio row da table emojin
       "</div>" + // fim da table emojin
       "</div>"                                                 
       );

 /////////////////////////////////////////////////////////////////  verificando opcoes de Permissao  ////////////////////////////////////////////////

   if(resultado[i].cdPerfil == 1){ // idUserLogado
      $('#opcoesDePermissao'+resultado[i].cd_postagem).append( 
      "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_postagem+" onclick='conpartilharPostagem(this.value)' data-toggle='tooltip' data-placement='top' title='Compartilhar' >Compartilhar postagem</button><br>" +
      "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_postagem+" onclick='modalDenunciaPostagem(this.value)' data-toggle='modal' data-target='#modalDenuncia' data-toggle='tooltip' data-placement='top' title='Denunciar' >Denunciar postagem</button><br>" +
      "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_postagem+" onclick='chamadaModalExcluirPosatgem(this.value)' data-toggle='modal' data-target='#modalExcluirPostagem' data-toggle='tooltip' data-placement='top' title='Excluir'>Excluir postagem</button><br>"
      );
   }else{
      $('#opcoesDePermissao'+resultado[i].cd_postagem).append(
      "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_postagem+" onclick='conpartilharPostagem(this.value)' data-toggle='tooltip' data-placement='top' title='Compartilhar' >Compartilhar postagem</button><br>" +
      "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_postagem+" onclick='modalDenunciaPostagem(this.value)' data-toggle='modal' data-target='#modalDenuncia' data-toggle='tooltip' data-placement='top' title='Denunciar' >Denunciar postagem</button><br>" 
      );
   }

    ///////////////////////////////////////////////////////////////// FIM DE verificando opcoes de Permissao  ////////////////////////////////////////////////


///////////////////////////////////////////////////////////// INICIO  verificando TELA DE CONTEUDO  ///////////////////////////////////////////////////////////////////

if(resultado[i].cd_compartilhamento != null && resultado[i].cd_postagem == resultado[i].IDPostagemCompartilhado){  
   $('#telaPerfil'+resultado[i].cd_postagem).append(
   "<p><a onclick='visualizarPerfil("+resultado[i].cdPerfil+")' >" + "<img class='imgPerfilPostagem' src="+resultado[i].imgPerfil+">" + "<span> "+resultado[i].nm_nickname+" </span>" + "</a>" +
   "Compartilhou a postagem de " + "<a onclick='visualizarPerfil("+resultado[i].cdCompartilhou+")' >" +resultado[i].NicknameCompartilhou+ "</a>" + "</p>" 
   );

   $('#telaDeConteudo'+resultado[i].cd_postagem).append(    
    "<div class='telaCompartilhar'>" + // INICIO DE TELA DE COMPARTILHAMENTO
    "<a onclick='visualizarPerfil("+resultado[i].cdCompartilhou+")' >" + "<img class='imgPerfilPostagem' src="+resultado[i].imgPerfil+">" + "<span> "+resultado[i].NicknameCompartilhou+" </span>" + "</a>" +
    "<p>" + "<span class='p_relogio'> <img class='imgRelogioPostagem' src='assets/img/icon/home/relogio.jfif'>"+resultado[i].diasC + resultado[i].horasC+"</span>" + "</p>" +
   
    "<div id='ConteudoPostagem"+resultado[i].cd_postagem+"'>" +  //   Conteudo da Postagem
    "</div>" + // FIM Conteudo da Postagem
    
    "</div>"  // FIM DE TELA DE COMPARTILHAMENTO
    );
}else{
   $('#telaPerfil'+resultado[i].cd_postagem).append(
       "<p><a onclick='visualizarPerfil("+resultado[i].cdPerfil+")' >" + "<img class='imgPerfilPostagem' src="+resultado[i].imgPerfil+">" + "<span> "+resultado[i].nm_nickname+" </span>" + "</a></p>"  
      );
      
   $('#telaDeConteudo'+resultado[i].cd_postagem).append(    
      "<div id='ConteudoPostagem"+resultado[i].cd_postagem+"'>" +  //   Conteudo da Postagem
      "</div>"  // FIM Conteudo da Postagem
      );
}

///////////////////////////////////////////////////////////// INICIO  verificando TELA DE CONTEUDO  ///////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////  verificando media  ///////////////////////////////////////////////////////////////////

   var midia = "";

   if(resultado[i].ds_extensao != null && resultado[i].cd_tipo_postagem == 1){
      midia = "<img class='imagemPostagem' src="+resultado[i].ds_extensao+">";
      //console.log("IMG = "+midia);
   }

   if(resultado[i].ds_extensao != null && resultado[i].cd_tipo_postagem == 2){
      midia =  "<video width='100%' controls><source src="+resultado[i].ds_extensao+" type='video/mp4'></video>";
      while(midia.indexOf("\"") != -1){
      midia = midia.replace(/"/g, '');
      }
      //console.log("VIDEO = "+midia);
}

   if(resultado[i].ds_extensao != null && resultado[i].cd_tipo_postagem == 3){
      midia = "<audio style='width: 100%;' controls> <source src="+resultado[i].ds_extensao+" type='audio/mpeg'> </audio>" ;
      while(midia.indexOf("\"") != -1){
        midia = midia.replace(/"/g, '');       
   }
      //console.log("AUDIO = " +midia);
}
 
   if(resultado[i].ds_extensao != null){  
   
    var ConteudoPostagem =  $('#ConteudoPostagem'+resultado[i].cd_postagem);

    if(resultado[i].nm_titulo != null){
         $(ConteudoPostagem).append(
            "<p class='tituloPostagem'>" + resultado[i].nm_titulo + "</p>" + // tiutlo
            "<p class='MidiaPostagem'>" + midia + "</p>"  //Midia 
           );
      }else{
         $(ConteudoPostagem).append(
            "<p class='MidiaPostagem'>" + midia + "</p>"  //Midia 
         );
      }

   }else{
      
      var ConteudoPostagem =  $('#ConteudoPostagem'+resultado[i].cd_postagem);

      $(ConteudoPostagem).append(
         "<p class='tituloPostagem'>" + resultado[i].nm_titulo + "</p>"  // tiutlo
      );
   }
   
   });
},      
      error: function (result){
         console.error(result);
      }
});
}
//////////////////////////////////////////////////// FIM DE  verificando media  ///////////////////////////////////////////////////////////////////



 // /////////////////////////////////////////////////////////      INICIO  SISTEMA DE EMOJIN        ////////////////////////////////////////////////////////////////// 

function abrirTableEmojin(cd){
   var id = cd;
   var table =  document.getElementById('tbEmojinPostagem'+id);  
   if(table.style.display == 'none'){
      
      table.style.display = 'block';
      table.style.overflowY = 'scroll';
      table.style.height = '150px';
      table.style.marginRight = '0px';
      table.style.marginLeft = '0px';
      $("#tbEmojinPostagem"+id).empty();
      $("#tbEmojinPostagem"+id).append(
          "<div class='tabelaEmojinCaracter'>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128540;"'+",this.value)' value="+id+" id='' >&#128540;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128561;"'+",this.value)' value="+id+" id='' >&#128561;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128514;"'+",this.value)' value="+id+" id='' >&#128514;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128517;"'+",this.value)' value="+id+" id='' >&#128517;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128519;"'+",this.value)' value="+id+" id='' >&#128519;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128513;"'+",this.value)' value="+id+" id='' >&#128513;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129488;"'+",this.value)' value="+id+" id='' >&#129488;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129314;"'+",this.value)' value="+id+" id='' >&#129314;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128520;"'+",this.value)' value="+id+" id='' >&#128520;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128525;"'+",this.value)' value="+id+" id='' >&#128525;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128533;"'+",this.value)' value="+id+" id='' >&#128533;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128529;"'+",this.value)' value="+id+" id='' >&#128529;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128522;"'+",this.value)' value="+id+" id='' >&#128522;</button>" +    
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128524;"'+",this.value)' value="+id+" id='' >&#128524;</button>" +         
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129326;"'+",this.value)' value="+id+" id='' >&#129326;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129316;"'+",this.value)' value="+id+" id='' >&#129316;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128526;"'+",this.value)' value="+id+" id='' >&#128526;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128536;"'+",this.value)' value="+id+" id='' >&#128536;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128548;"'+",this.value)' value="+id+" id='' >&#128548;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128557;"'+",this.value)' value="+id+" id='' >&#128557;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128564;"'+",this.value)' value="+id+" id='' >&#128564;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128527;"'+",this.value)' value="+id+" id='' >&#128527;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129303;"'+",this.value)' value="+id+" id='' >&#129303;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129300;"'+",this.value)' value="+id+" id='' >&#129300;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128580;"'+",this.value)' value="+id+" id='' >&#128580;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128579;"'+",this.value)' value="+id+" id='' >&#128579;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129324;"'+",this.value)' value="+id+" id='' >&#129324;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128523;"'+",this.value)' value="+id+" id='' >&#128523;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128521;"'+",this.value)' value="+id+" id='' >&#128521;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128532;"'+",this.value)' value="+id+" id='' >&#128532;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129296;"'+",this.value)' value="+id+" id='' >&#129296;</button>" +//
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129301;"'+",this.value)' value="+id+" id='' >&#129301;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128534;"'+",this.value)' value="+id+" id='' >&#128534;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128535;"'+",this.value)' value="+id+" id='' >&#128535;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128538;"'+",this.value)' value="+id+" id='' >&#128538;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128539;"'+",this.value)' value="+id+" id='' >&#128539;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128542;"'+",this.value)' value="+id+" id='' >&#128542;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128543;"'+",this.value)' value="+id+" id='' >&#128543;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129325;"'+",this.value)' value="+id+" id='' >&#129325;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128567;"'+",this.value)' value="+id+" id='' >&#128567;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128544;"'+",this.value)' value="+id+" id='' >&#128544;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128546;"'+",this.value)' value="+id+" id='' >&#128546;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128553;"'+",this.value)' value="+id+" id='' >&#128553;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128552;"'+",this.value)' value="+id+" id='' >&#128552;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128554;"'+",this.value)' value="+id+" id='' >&#128554;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128558;"'+",this.value)' value="+id+" id='' >&#128558;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129320;"'+",this.value)' value="+id+" id='' >&#129320;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129299;"'+",this.value)' value="+id+" id='' >&#129299;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128556;"'+",this.value)' value="+id+" id='' >&#128556;</button>" + 
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128562;"'+",this.value)' value="+id+" id='' >&#128562;</button>" +
            "</div>" +
            "<div class='tabelaEmojinMao'>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129304;"'+",this.value)' value="+id+" id='' >&#129304;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129305;"'+",this.value)' value="+id+" id='' >&#129305;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129306;"'+",this.value)' value="+id+" id='' >&#129306;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129307;"'+",this.value)' value="+id+" id='' >&#129307;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129308;"'+",this.value)' value="+id+" id='' >&#129308;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129309;"'+",this.value)' value="+id+" id='' >&#129309;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129310;"'+",this.value)' value="+id+" id='' >&#129310;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#129311;"'+",this.value)' value="+id+" id='' >&#129311;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128070;"'+",this.value)' value="+id+" id='' >&#128070;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128071;"'+",this.value)' value="+id+" id='' >&#128071;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128072;"'+",this.value)' value="+id+" id='' >&#128072;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128073;"'+",this.value)' value="+id+" id='' >&#128073;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128074;"'+",this.value)' value="+id+" id='' >&#128074;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128075;"'+",this.value)' value="+id+" id='' >&#128075;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128076;"'+",this.value)' value="+id+" id='' >&#128076;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128077;"'+",this.value)' value="+id+" id='' >&#128077;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128078;"'+",this.value)' value="+id+" id='' >&#128078;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128079;"'+",this.value)' value="+id+" id='' >&#128079;</button>" +
            "<button class='btn btn-link' onclick='emojinPostagem("+'"&#128080;"'+",this.value)' value="+id+" id='' >&#128080;</button>" +
            "</div>" 
        ); 
}else{
   $("#tbEmojinPostagem"+id).empty();
   table.style.display = 'none';
   }
 
 }
 
 function emojinPostagem(emo, id) {
    console.log(id);
    console.log(emo);
    var valor = $(".inputComentarioPostagem"+id).val();
    var x = $(".inputComentarioPostagem"+id).val(valor + emo);
    console.log(x);
 }
 // /////////////////////////////////////////////////////////      FIM  SISTEMA DE EMOJIN        ////////////////////////////////////////////////////////////////// 


// /////////////////////////////////////////////////////////        MODAL DA DENUNCIA        ////////////////////////////////////////////////////////////////// 
function modalDenunciaPostagem(id){
   document.getElementById('denunciaModal').innerHTML = "";
   document.getElementById('txt1').checked = null;
   document.getElementById('txt2').checked = null;
   document.getElementById('txt3').checked = null;
   document.getElementById('outroDenuncia').innerHTML = "";
   console.log(id);
  var cd = id;
  event.preventDefault();
  console.log('Tentando abrir modal de denuncia');
  $.ajax(
     {
        url: "paginas/recursos/salvar-modal_denuncia.php",
        type: "POST",
        data: {
           chave: 'valorizado demais esse AJAX!!',
           id: cd,
        },
        success: function (result) {
          console.log(result);
          resultado = JSON.parse(result); 
          $.each(resultado, function (i, contato){
           $("#denunciaModal").append(
               "<div class='textoDenuncia'>"  +
               "<p> Deseja denunciar essa postagem efeituada por <a href''>"+resultado[i].nm_nickname+" </a> pelo seguite motivo: </p>" +
               "</div>"
           ); 
         }); 
      },
        error: function (result) {
           console.error(result);
        }
   });
}

function desabilitar(){
   //document.getElementById('outroDenuncia').innerHTML = '';
   var selecionar =  document.getElementById('outroDenuncia');
   var txt1 = document.getElementById('txt1');
   var txt2 = document.getElementById('txt2');
   var txt3 = document.getElementById('txt3');

   if(selecionar.disabled == true ){
    selecionar.disabled = false;
    txt1.disabled = true; txt1.checked = false;
    txt2.disabled = true; txt2.checked = false;
    txt3.disabled = true; txt3.checked = false;    
  }else{
    selecionar.disabled = true;    
    txt1.disabled = false;
    txt2.disabled = false;
    txt3.disabled = false;
        
  }
 }
// /////////////////////////////////////////////////////////       FIM MODAL DA DENUNCIA        ////////////////////////////////////////////////////////////////// 

// /////////////////////////////////////////////////////////       INICIO MODAL EXCLUIR POSTAGEM       ////////////////////////////////////////////////////////////////// 
function chamadaModalExcluirPosatgem(id){
   $("#excluirModal").empty();
   $("#excluirModal").append(
      "<div class='row'>" +
      "<p class='textoConfirmarExcluir'> Deseja realmente excluir esta postagem? </p>" +
      "</div>" +
      "<br>" +
      "<div class='row'>" +
         "<div class='col-sm-6'>" +
         "<p> <button class='btnOpcoes btn btn-success' onclick='modalExcluirPostagemFechar()'> Cancelar </button> </p>" +
         "</div>" +
               "<div class='col-sm-6'>" +
               "<p> <button class='btnOpcoes btn btn-success' value="+id+" onclick='modalExcluirPostagem(this.value)'> Continuar </button> </p>" +
         "</div>" +
      "</div>"
   ); 
}
function modalDenunciaFechar(){
   $('#modalDenuncia').modal('hide'); 
}
function modalExcluirPostagemFechar(){
   $('#modalExcluirPostagem').modal('hide'); 
}

function modalExcluirPostagem(id){
   var cd = id;
   event.preventDefault();
   console.log('Tentando abrir modal de excluir');
   $.ajax(
      {
         url: "paginas/recursos/salvar-modal_excluirPostagem.php",
         type: "POST",
         data: {
            chave: 'valorizado demais esse AJAX!!',
            id: cd,
         },
         success: function (result) {
           console.log(result); 
           console.log("Postagem ("+cd+") excluida com sucesso!");
           setTimeout(function(){this.exibirPostagem(); 
            $("#modalExcluirPostagem").modal('hide'); 
           }, 400);
       },
         error: function (result) {
            console.error(result);
         }
    });
}
// /////////////////////////////////////////////////////////       FIM MODAL EXCLUIR POSTAGEM       ////////////////////////////////////////////////////////////////// 

// /////////////////////////////////////////////////////////       INICIO ABA DE COMENTARIOS        ////////////////////////////////////////////////////////////////// 

function abriComentarioAuxiliar(id){
   var cd = id;   
   var area = document.getElementById('areaComentario'+cd);
   if(area.style.display == 'none'){
    area.style.display = 'block';
    setTimeout(function(){this.exibirComentario(id); }, 200);
   }else{
   area.style.height = 'auto';
   area.style.maxHeight = '300px';
   area.style.paddingTop = '5px';
   area.style.paddingLeft = '15px';
   area.style.paddingRight = '30px';
   area.style.overflowY = 'scroll';   
   area.style.position = 'relative';  
   area.style.backgroundColor= '#F5FFFA';  
   area.style.borderRadius = '12px';  
   setTimeout(function(){this.exibirComentario(id); }, 200); 
   }
}

function abriComentario(id){
   var cd = id;
   var area = document.getElementById('areaComentario'+cd);
   if(area.style.display == 'block'){
    area.style.display = 'none';
   $("#tbEmojinPostagem"+cd).hide();  
}else{
   area.style.display = 'block';
   area.style.height = 'auto';
   area.style.maxHeight = '300px';
   area.style.paddingTop = '5px';
   area.style.paddingLeft = '15px';
   area.style.paddingRight = '30px';
   area.style.overflowY = 'scroll';   
   area.style.position = 'relative';  
   area.style.backgroundColor= '#F5FFFA';  
   area.style.borderRadius = '12px';  
   setTimeout(function(){this.exibirComentario(id); }, 200); 
   }
}

function exibirComentario(id) { 
  var cd = id;   
  $('.inputComentarioPostagem'+cd).focus();
  $.ajax(   
   {
      url: "paginas/recursos/salvar-ExibirComentario.php",
      type: "POST",
      data: {
         chave: 'valorizado demais esse AJAX!!',
         id: cd, 
      },
      success: function (result) {
        console.log(result);         
        resultado = JSON.parse(result); 
        $("#comentarioPostagem"+cd).empty();  
        $.each(resultado, function (i, contato){  
         if(resultado[i].cd_perfil == 1){ // idUserLogado
         $("#comentarioPostagem"+cd).append(      
            "<div class='row rowComentario'>" + // inicio rowComentario
            "<div class='dropdown comentario'>" + // inicio dropdown

            "<a>"+ resultado[i].nm_nickname +": </a>" + "<span>"+resultado[i].ds_comentario+"</span>" +  
            "<button class='btn btn-link dropdown-toggle' type='button' id='dropdownMenuComentario' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' >" + "<img src='assets/img/icon/home/menuPontos.png' height='18px' alt=''>" +  "</button>" + 
            "<div class='dropdown-menu' aria-labelledby='dropdownMenuComentario'>" + // inico dropdown-menu 
            "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_comentario+"  data-toggle='modal' data-target='#modalExcluirComentario' data-toggle='tooltip' data-placement='top' title='Excluir Comentário' onclick='ModalexcluirComentario(this.value,"+cd+")'>Excluir...</button><br>" +
            "<button class='btnOpcoes btn btn-default' value="+resultado[i].cd_comentario+"  data-toggle='modal' data-target='#modalAlterarComentario' data-toggle='tooltip' data-placement='top' title='Alterar Comentário' onclick='alterarComentarioModal(this.value)'>Altera...</button><br>" +            
            "</div>" + // fim dropdown-menu            
            "</div>" + // inicio dropdown
            "</div>" // fim rowComentario
         );              
         }else{
            $("#comentarioPostagem"+cd).append(      
               "<div class='row rowComentario'>"+
               "<p class='comentario'>" + "<a onclick='opcaoComentario("+resultado[i].cd_comentario+")' >"+ resultado[i].nm_nickname +": </a>" + "<span>"+resultado[i].ds_comentario+"</span>" + "</p>" +
               "</div>"
            );  
         }
          var area = document.getElementById('areaComentario'+cd);
          area.scrollTop = area.scrollHeight;      
      });
      },
      error: function (result) {
         console.error(result);            
      }
   });
}

// /////////////////////////////////////////////////////////       INICIO MODAL EXCLUIR COMENTARIO      ////////////////////////////////////////////////////////////////// 

function ModalexcluirComentario(id, id2){ //id do comentario
   $('#excluirComentarioModal').empty();
   $('#excluirComentarioModal').append(
      "<p class='textoConfirmarExcluir'> Deseja realmente excluir o comentário selecionado? </p>" +
      "<br>" +
      "<div class='row'>" +
      "<div class='col-sm-6'>" +
      "<p> <button class='btnOpcoes btn btn-success' onclick='modalExcluirComentarioFechar()'> Cancelar </button> </p>" +
      "</div>" +
            "<div class='col-sm-6'>" +
            "<p> <button class='btnOpcoes btn btn-success' value="+id+" onclick='excluirComentario(this.value,"+id2+")'> Continuar </button> </p>" +
      "</div>" 
   );
}
function modalExcluirComentarioFechar(){
   $('#modalExcluirComentario').modal('hide'); 
}

function alterarComentarioModal(idComentario){
   console.log(idComentario);   
   event.preventDefault();
   console.log('Tentando pegar as infor(s) do comentario');
   $.ajax(
      {
         url: "paginas/recursos/salvar-inforAlterarComentario.php",
         type: "POST",
         data: {
            chave: 'valorizado demais esse AJAX!!',
            id: idComentario, 
         },
         success: function (result) {            
           console.log(result);         
           resultado = JSON.parse(result); 
           $.each(resultado, function (i, contato){ 
            var cdPostagem = resultado[i].cd_postagem;
            var comentario = resultado[i].ds_comentario;

            var input =  $('.inputComentarioPostagem'+cdPostagem); //aqui   
            $("#btnComentar"+cdPostagem).attr('onclick', 'alterarComentario('+resultado[i].cd_comentario+','+cdPostagem+')');          
            input.val(comentario);
            input.select();
         });
         },
         error: function (result) {
            console.error(result);
     }
  });
}
// /////////////////////////////////////////////////////////       INICIO MODAL EXCLUIR COMENTARIO       ////////////////////////////////////////////////////////////////// 


// /////////////////////////////////////////////////////////       FIM ABA DE COMENTARIOS        ////////////////////////////////////////////////////////////////// 

 //////////////////////////////////////////      INICIO DE  LIKE | DESLIKE | COMENTAR | COMPARTILHAR | DENUNCIAR   | excluirComentario |  alterarComentario        ////////////////////////////////////////
function LikePostagem(id){
     console.log(id);   
    var cd = id;
    event.preventDefault();
    console.log('Tentando enviar like');
    $.ajax(
       {
          url: "paginas/recursos/salvar-like.php",
          type: "POST",
          data: {
             chave: 'valorizado demais esse AJAX!!',
             id: cd, 
          },
          success: function (result) {            
            console.log(result); 
            $("#"+cd).val("");
            
          var qtdLike = $("#qtdLike"+cd).val();
          var qtdDeslike = $("#qtdDeslike"+cd).val();
         if(result == true){
            $("#qtdLike"+cd).val(qtdLike + 1);
            console.log("curtiu");
            document.getElementById("btnLikePostagem"+cd).style.color = 'blue';
            
         }
         
         if(result == false) {
          $("#qtdLike"+cd).val(qtdLike - 1);
          console.log("cancelou a curtiu");
          document.getElementById("btnLikePostagem"+cd).style.color = 'black';
         } 

         if(result == ' outro') {
            $("#qtdLike"+cd).val(qtdLike + 1);
            $("#qtdDeslike"+cd).val(qtdDeslike - 1);
            console.log('curtiu e tirou a descurtida');
            document.getElementById("btnLikePostagem"+cd).style.color = 'blue';
            document.getElementById("btnDeslikePostagem"+cd).style.color = 'black';
         } 
          },
          error: function (result) {
             console.error(result);
      }
   });
}

function DeslikePostagem(id){
    console.log(id);
    var cd = id;
    event.preventDefault();
    console.log('Tentando enviar deslike');
    $.ajax(
       {
          url: "paginas/recursos/salvar-deslike.php",
          type: "POST",
          data: {
             chave: 'valorizado demais esse AJAX!!',
             id: cd,
          },
          success: function (result) {
            console.log(result); 
            $("#"+cd).val("");

         var qtdDeslike = $("#qtdDeslike"+cd).val();
         var qtdLike = $("#qtdLike"+cd).val();
         if(result == true){
            $("#qtdDeslike"+cd).val(qtdDeslike + 1);
            console.log("descurtiu");         
            document.getElementById("btnDeslikePostagem"+cd).style.color = 'blue';
         }

         if(result == false) {
            $("#qtdDeslike"+cd).val(qtdDeslike - 1);
            console.log("cancelou descurtida");  
            document.getElementById("btnDeslikePostagem"+cd).style.color = 'black';
         }

         if(result == ' outro') {            
            $("#qtdDeslike"+cd).val(qtdDeslike + 1);
            $("#qtdLike"+cd).val(qtdLike - 1);
            console.log('descurtiu e tirou a curtida');
            document.getElementById("btnDeslikePostagem"+cd).style.color = 'blue';
            document.getElementById("btnLikePostagem"+cd).style.color = 'black';
         }         
           },
          error: function (result) {
             console.error(result);
          }
       });
}

function ComentarPostagem(id){ //id da postagem
   console.log(id);
   var cd = id;
   event.preventDefault();
   console.log('Tentando enviar comentario');
   $.ajax(
      {
         url: "paginas/recursos/salvar-comentario.php",
         type: "POST",
         data: {
            chave: 'valorizado demais esse AJAX!!',
            comentario: $("#"+cd).val(),
            id: $("#"+cd).attr('id'), 
         },
         success: function (result) {
           console.log(result);

          setTimeout(function(){this.abriComentarioAuxiliar(id); }, 200); 
          var qtdComentario = $("#qtdComentario"+cd).val();
          $("#qtdComentario"+cd).val(qtdComentario + 1);

          $("#"+cd).val("")
         },
         error: function (result) {
            console.error(result);            
         }
      });     
}

function conpartilharPostagem(id){
   console.log(id);
  var cd = id;
  event.preventDefault();
  console.log('Tentando conpartilhar');
  $.ajax(
     {
        url: "paginas/recursos/salvar-conpartilhar.php",
        type: "POST",
        data: {
           chave: 'valorizado demais esse AJAX!!',
           id: cd,
        },
        success: function (result) {
          console.log(result);
          setTimeout(function(){this.exibirPostagem(); }, 800); 

         },
        error: function (result) {
           console.error(result);
        }
     });
}
function excluirComentario(id, id2){ //id2 é o id da postagem 
   var cd = id;
   event.preventDefault();
   console.log('Tentando  excluirComentario');
   $.ajax(
      {
         url: "paginas/recursos/salvar-excluirComentario.php",
         type: "POST",
         data: {
            chave: 'valorizado demais esse AJAX!!',
            id: cd,
         },
         success: function (result) {
            console.log(result);
           console.log("Comentário excluido com secesso!");
           $('#modalExcluirComentario').modal('hide');
           setTimeout(function(){this.exibirComentario(id2); }, 500); 

           var qtdComentario = $("#qtdComentario"+id2).val();
           $("#qtdComentario"+id2).val(qtdComentario - 1);

          },
         error: function (result) {
            console.error(result);
         }
      });
}

function alterarComentario(idComentario, idPostagem){
   var cd = idComentario;
   event.preventDefault(); // aqui
   console.log('Tentando  alterar Comentario');
   var input =  $('.inputComentarioPostagem'+idPostagem); 
   $.ajax(
      {
         url: "paginas/recursos/salvar-alterarComentario.php",
         type: "POST",
         data: {
            chave: 'valorizado demais esse AJAX!!',
            id: cd,
            novoComentario: $(input).val(),
         },
         success: function (result) {
            console.log(result);
            console.log("Comentário alterado com secesso!");
            setTimeout(function(){this.exibirComentario(idPostagem); }, 300); 
            $("#btnComentar"+idPostagem).attr('onclick', 'ComentarPostagem(this.value)');
            $('.inputComentarioPostagem'+idPostagem).val("");
         },
         error: function (result) {
            console.error(result);
         }
      });
}
// //////////////////////////////////////        FIM DE LIKE | DESLIKE | COMENTAR | COMPARTILHAR | DENUNCIAR  | excluirComentario  |  alterarComentario     //////////////////////////////////////// 


// /////////////////////////////////////////////////////////   Formulario Postar     ////////////////////////////////////////////////////////// 
$( "#formulario-postagem").on('submit', function( event ){
   event.preventDefault();
  // console.log('Tentando cadastra postagem');    
   var data = new FormData();
   data.append('txtTitulo', $("#txtTitulo").val());
   data.append('txtMidia', $('#txtMidia').prop('files')[0]);
   $.ajax({
       url: 'paginas/recursos/salvar-postagem.php',
       type: 'POST',
       data: data,
       cache: false,
       contentType: false,
       processData: false,       
      
       success: function(result) 
       {
           $("#txttitulo").val(''),
           $("#txtMidia").val('')
           console.log(result);
          // location.href = "home.php";
       }
   });
});   

$( "#formulario-denuncia").submit(function( event ) {
   event.preventDefault();
   console.log('Tentando denunciar postagem'); 
   $.ajax(
      { 
         type: "POST",
         url: "paginas/recursos/salvar-denuncia.php",
         data: {
         chave:'valorizado demais esse AJAX!!',
         txt1: $("input[name='txt1']:checked").val(),
         txt2: $("input[name='txt2']:checked").val(),
         txt3: $("input[name='txt3']:checked").val(),
         txt4: $("input[name='txt4']:checked").val(),
         outroDenuncia: $("#outroDenuncia").val(),
         },
         success: function( result ) {
             console.log(result);
             if(result == true){
               $('#modalDenuncia').modal('hide');     
             }
         },
         error: function (result){
            console.error(result);
      }
   });
});

////////////////////////////////////////////////////////////  Fim Formulario Postar     /////////////////////////////////////////////////////// 


function ComentarClickEnter(id){
   if(event.keyCode == 13){
       $("#btnComentar"+id).click();
   }
}
   