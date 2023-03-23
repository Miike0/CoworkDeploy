

function encontrarMasSimilar(oracion, conjuntoOraciones) {
    let oracionMasSimilar = '';
    let distanciaMenor = Infinity;
  
    try {
      conjuntoOraciones.forEach(function(oracionActual) {
        let distancia = distanciaLevenshtein(oracion.toLowerCase(), oracionActual.toLowerCase());
    
        if (distancia < distanciaMenor) {
          distanciaMenor = distancia;
          oracionMasSimilar = oracionActual;
        }
      });
    
      return oracionMasSimilar;
    } catch (error) {
      return 'error';
    }
  }
  
  function distanciaLevenshtein(s, t) {
    const m = s.length;
    const n = t.length;
  
    // Inicializar matriz de resultados intermedios
    const resultados = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(null));
  
    // Inicializar primera fila y columna de la matriz
    for (let i = 0; i <= m; i++) {
      resultados[i][0] = i;
    }
  
    for (let j = 0; j <= n; j++) {
      resultados[0][j] = j;
    }
  
    // Calcular resultados intermedios
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        const costo = s[i - 1] !== t[j - 1] ? 1 : 0;
  
        resultados[i][j] = Math.min(
          resultados[i - 1][j] + 1,
          resultados[i][j - 1] + 1,
          resultados[i - 1][j - 1] + costo
        );
      }
    }
  
    return resultados[m][n];
  }
  
  export default encontrarMasSimilar;