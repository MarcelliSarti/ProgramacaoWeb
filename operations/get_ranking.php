<?php
  require_once 'conection.php';

  $ranking_array = [];
  $cont = 1;

  $select_query = "SELECT u.nome, p.modo_jogo, p.tamanho_tabuleiro, p.tempo, p.data, p.resultado FROM partidas p JOIN usuarios u ON u.codigo = p.codigo_usuario order BY p.codigo DESC LIMIT 10";
  
  $stmt = $conn->query($select_query);
  
  while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    $nome = $row["nome"];
    $modo_jogo = $row["modo_jogo"];
    $tamanho_tabuleiro = $row["tamanho_tabuleiro"]."x".$row["tamanho_tabuleiro"];
    $tempo = $row["tempo"];
    $data = $row["data"];
    $resultado = $row["resultado"];
    $array = [$cont++.'°', "", $nome, $modo_jogo, $tamanho_tabuleiro, $tempo, $data, $resultado];
    array_push($ranking_array, $array);
  }
  
  echo json_encode($ranking_array);
?>