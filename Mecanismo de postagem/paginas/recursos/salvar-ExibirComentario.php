<?php
try {
    require_once("../../includes/connections/connection.php");
    $cd = $_POST['id'];    

    $sql = "SELECT * FROM vwComentario  where cd_postagem ='$cd';";

    $dados = $conn->query($sql);

    $result = $dados->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_PRETTY_PRINT);

} catch (PDOException $exception) {
    echo "Erro: " . $exception->getMessage() . " - Código " . $exception->getCode();
}
?>