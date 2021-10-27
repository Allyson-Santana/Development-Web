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

<body id="boryPostagem" onload="exibirPostagem()"> 

    <div class="container">
        <div class="row">
          <div class="col-md-6"> 
            <div id="postagem">  </div>        
          </div>           
        </div> 
    </div> 

<!-- Modal DENUNCIA Postagem -->
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

<!-- Modal EXCLUIR Postagem-->
<div class="modal" id="modalExcluirPostagem" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body">         
      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>  
        <br><br>
        <div id="excluirModal">

        </div>
        <br>
    </div>    
    </div>
  </div>
</div>

<!-- Modal Excluir Comentario -->
<div class="modal" id="modalExcluirComentario" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">         
      <button type="button" class="close" data-dismiss="modal" aria-label="Fechar"> <span aria-hidden="true">&times;</span> </button>  
        <br><br>
        <div id="excluirComentarioModal">

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





