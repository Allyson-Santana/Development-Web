<?php
try {
    require_once("../../includes/connections/connection.php");

    $sql ="SELECT * FROM vwpostagem;";

    $dados = $conn->query($sql);
        
    $result = $dados->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result, JSON_PRETTY_PRINT);

} catch (PDOException $exception) {
    echo "Erro: " . $exception->getMessage() . " - Código " . $exception->getCode();
}
/*

*/
?>