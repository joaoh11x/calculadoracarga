function calcular() {
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var largura = parseFloat(document.getElementById("largura").value);
    var litros = parseFloat(document.getElementById("litros").value);
    var quantidade = parseFloat(document.getElementById("quantidade").value);
  
    var carga = (quantidade * litros) / (comprimento * largura);
  
    document.getElementById("resultado").innerText = "Carga por m³: " + carga.toFixed(2);
  }
  
  function copiarResultado() {
    var resultado = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(resultado);
    alert("Resultado copiado para área de transferência!");
  }
