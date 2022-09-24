exports = async function (payload) {
    const body = payload.query;
    const mdb = context.services.get('mongodb-atlas');
    const requests = mdb.db("ChallengeFord").collection("Usuarios")
    const count = requests.count({"usuario_id": body.usuario_id  });
    if(count == 0){
      const { insertedId } = await requests.insertOne({
        "nome": body.nome,
        "cpf": body.cpf,
        "telefone": body.telefone,
        "dataNasc": body.dataNasc,
        "email": body.email,
        "uf": body.uf,
        "cidade": body.cidade,
        "usuario_id": body.usuario_id
    });
    return { msg: "Usuário cadastrado!" };
    }else{
     return { msg: "Usuário já existe!" }; 
    }
}