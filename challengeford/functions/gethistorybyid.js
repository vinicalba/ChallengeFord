exports = function(payload){
  const body = payload.query;
  const mongodb = context.services.get("mongodb-atlas");
  const mycollection = mongodb.db("ChallengeFord").collection("Historico");
  return mycollection.find({ "usuario_id": body.usuario_id }).toArray();
};