<?php
        try{
            require_once("../../includes/connections/connection.php");
                          
            $cd_postagem = $_POST['id'];
         
            $sql = "DELETE FROM tb_postagem WHERE cd_postagem = '$cd_postagem';";
                    
            $dados = $conn->query($sql);       
            
        }catch(PDOException $exception){
            echo "Erro: " . $exception->getMessage() . " - Código " . $exception->getCode();
        }
    
?>

