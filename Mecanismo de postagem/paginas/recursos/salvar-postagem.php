<?php
$erro = "";

if(!isset($_FILES['txtMidia']) && empty($_POST['txtTitulo'])){
    $erro = "Arquivo e titulo vazio";   
}
if($erro == ""){
    try{
       require_once('../../includes/connections/connection.php');

      
           
       date_default_timezone_set("America/Sao_Paulo");
       $data = date("Y-m-d");
       $hora = date("H:i");        
       
       if(isset($_FILES['txtMidia'])){ 
       $nome = $_FILES['txtMidia']['name'];
       $arquivo = $_FILES['txtMidia'];
       $formatosAceitos = array("png", "jpeg", "jpg", "gif", "jfif" , "mp3", "mp4" , "AVI" , "MOV", "WMV" , "WMA" , "MPEG" , "FLV" , "3GP" , "3G2" ,"PCM", "WAV", "OGG", "AIFF", "AAC", "FLAC", "ALAC", "RM", "MKV" ); // difinir valores aceitos 
      
       $extensao = pathinfo($_FILES['txtMidia']['name'], PATHINFO_EXTENSION); // pegando extensão do arquivo
       $extensao = strtolower ($extensao); // deixando a extensão em minusculo  

       /* FORMATOS DE IMAGENS */ if($extensao == "png" || $extensao == "jpeg" || $extensao == "jpg" || $extensao == "gif" || $extensao == "jfif") { $tipoExtensao = 1; }  

       /* FORMATOS DE audios  */ if($extensao == "mp3" || $extensao == "aac" || $extensao == "ogg" || $extensao == "wma" || $extensao == "alac" || 
                                    $extensao == "flac" || $extensao == "pcm" || $extensao == "aiff"|| $extensao == "wav") { $tipoExtensao = 3; } 

       /* FORMATOS DE videos  */ if($extensao == "avi" || $extensao == "mov" || $extensao == "wmv" || $extensao == "mp4" || $extensao == "flv" || 
                                    $extensao == "mkv" || $extensao == "rm" || $extensao == "mpeg" || $extensao == "3gp" || $extensao == "3g2") { $tipoExtensao = 2; } 

       if(in_array($extensao, $formatosAceitos)){  //verificando ser a extensão do arquivo é aceitavel  
       $pasta = "../../assets/img/upload/"; // caminho da pasta
       $nomeTemorario = $_FILES['txtMidia']['tmp_name']; // todo o nome do arquivo (Nome que  servidor gravou a imagem)
       $novoNome = uniqid ( time () ) . '.' . $extensao;       // definir novo unico do arquivo
       $destino = "assets/img/upload/" . $novoNome;
       if(move_uploaded_file($nomeTemorario, $pasta.$novoNome)){ // move o arquivo para a pasta que eu quero
           echo "Upload feito com sucesso! \n";
            if(empty($_POST["txtTitulo"])){

                $SQL = "INSERT INTO tb_postagem( dt_postagem, hr_postagem, ds_extensao, cd_tipo_postagem, cd_perfil) VALUES ";
                $SQL = $SQL .  ' (' . $conn->quote($data) . ', ';
                $SQL = $SQL . $conn->quote($hora) . ', ';
                $SQL = $SQL . $conn->quote($destino) . ', ';
                $SQL = $SQL . $conn->quote($tipoExtensao) . ', ';
                $SQL = $SQL . $conn->quote(1) . ') ';
                $linhaAfetadas = $conn->exec($SQL);
            echo "Postagem somente com a midia realizada";  

            }else{
                $titulo = $_POST["txtTitulo"];
                $SQL = "INSERT INTO tb_postagem(nm_titulo,  dt_postagem, hr_postagem, ds_extensao, cd_tipo_postagem, cd_perfil) VALUES ";
                $SQL = $SQL .  ' (' . $conn->quote($titulo) . ', ';
                $SQL = $SQL . $conn->quote($data) . ', ';
                $SQL = $SQL . $conn->quote($hora) . ', ';
                $SQL = $SQL . $conn->quote($destino) . ', ';
                $SQL = $SQL . $conn->quote($tipoExtensao) . ', ';
                $SQL = $SQL . $conn->quote(1) . ') ';
                $linhaAfetadas = $conn->exec($SQL);
            echo "Postagem com midia e titulo realizadas";  
            }            
          
       }else{
           echo "Falha no upload do aquivo";
       }
    }else{
        echo "Formato inválido!";
    }        
}else{
    $titulo = $_POST["txtTitulo"];
    $SQL = "INSERT INTO tb_postagem(nm_titulo, dt_postagem, hr_postagem, cd_perfil) VALUES ";
    $SQL = $SQL .  ' (' . $conn->quote($titulo) . ', ';
    $SQL = $SQL . $conn->quote($data) . ', ';
    $SQL = $SQL . $conn->quote($hora) . ', ';
    $SQL = $SQL . $conn->quote(1) . ') ';
    $linhaAfetadas = $conn->exec($SQL);
       echo "Postagem somente com o titulo realizada"; 
}

    }catch(PDOException $Exception){
        echo "Erro " . $Exception->getMessage( ) . "  -  Código " . $Exception->getCode( );
    }

}else{
    echo $erro;
}

 ?>

