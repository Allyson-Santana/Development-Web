<?php
require_once("includes/connections/connection.php");
?>

<!DOCTYPE html>
<html>
<head>
    <?php
        include ('header.php'); 
    ?>
    <title>Postagem</title>
</head>

<body id="boryPostagem" onload="exibirInformacoesPerfil()"> 

<div class="container-fluid">
    <div class="row">

      <div class="col-md-7"> 
        <div id="perfilPessoal">  </div>

        <div class="row">
            <div class="m col-md-12">
            <div id="conteudoChatPessoal">  </div>
            
                           
            <div id="comentario">  </div>   
 <!-- ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff -->
            <div id="emojin">
            <table >
              <tr>
                <td> <button style="border-radius: 50px; margin-left: 15px" onclick="manda('&#128540;')" value='1' id='valId' >&#128540;</button></td>
                <td> <button style="border-radius: 50px; margin-left: 15px" onclick="manda('&#128561;')" value='1' id='valId' >&#128561;</button></td>
                <td> <button style="border-radius: 50px; margin-left: 15px" onclick="manda('&#128514;')" value='1' id='valId' >&#128514;</button></td> 
              </tr>
            </table>
            <input type="text" id='inputEmo' value="">
            </div>

            <style> #emojin {margin:10px; display: none; background-color: whitesmoke; height: 10%;} </style>
            <script>
function abrir() {
   $('#emojin').show();
 }
 
 function manda(emo, cd){
   console.log(emo);   
 $.ajax(   
    {
       url: "paginas/recursos/salvar-ExibirComentario.php",
       type: "POST",
       data: {
          chave: 'valorizado demais esse AJAX!!',
          valor: $('#inputEmo').attr('value'),
          emojin: emo           
       },
       success: function (result) {
         console.log(result);           
       //  resultado = JSON.parse(result); 
       //  $.each(resultado, function (i, contato){  
       //   $("#").append(             
       //   );  
       //});
       },
       error: function (result) {
          console.error(result);            
       }
    });
  }

             /* function vai(emo){
                console.log(emo);
                event.preventDefault();
                console.log('Tentando conpartilhar');
                $.ajax(
                   {
                      url: "paginas/recursos/salvar-aqui.php",
                      type: "POST",
                      data: {
                         chave: 'valorizado demais esse AJAX!!',
                         emojin: emo,
                         id: $('#valId').attr('value')
                      },
                      success: function (result) {
                        console.log(result);
                       },
                      error: function (result) {
                         console.error(result);
                      } });  }*/

            </script>
 <!-- ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff -->
            </div>
        </div>    
      </div>     
         
      <div class="col-md-5"> 
        <div id="postagemPessoal">  </div>
      </div>      
      
    </div>
</div> 

<!-- Modal COMENTARIO -->
<div class="modal fade" id="modalComentario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog " role="document">
    <div class="modal-content">
      <div class="modal-body">         
      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>  
      <br>
        <div id="postagemModal">

        </div>
        <div id="comentarioModal">

        </div>  
        <br>
    </div>
      
    </div>
  </div>
</div>
<!-- Modal DENUNCIA -->
<div class="modal fade" id="modalDenuncia" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">         
      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>  
        <br><br>
        <div id="denunciaModal">

        </div>
        <?php require_once("paginas/formulario/formulario-denuncia.php"); ?> 
        <br>
    </div>    
    </div>
  </div>
</div>
 
</body>
<?php
        include ('footer.php'); 
?>
</html>





