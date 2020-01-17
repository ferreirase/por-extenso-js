//Middleware de validação do número recebido
//Primeiro verifica se é um número e depois verifica se é um inteiro

module.exports = (req, res, next) => {
  const numero = (req.params.numero);

  if(isNaN(numero) || (numero % 1 !== 0)){
    return res.status(400).json({error: "Valor informado não é um número inteiro!"});
  }else{
    if(numero < -99999 || numero > 99999){
      return res.status(400).json({error: "Número fora do range(min -99999 / max 99999)!"});
    }
  }
  
  return next();
  
}