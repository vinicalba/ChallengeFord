exports = async function (payload) {
    const body = payload.query;

    const query = { _id: BSON.ObjectId(body.usuario_id) };

    const update = {
        "Data": new Date(body.Data),
        "Descricao": body.Descricao,
        "Tipo": body.Tipo,
        "Valor": parseFloat(body.Valor),
        "UserId": body.UserId
    };

    const options = { "upsert": false };

    const mdb = context.services.get('mongodb-atlas');
    const requests = mdb.db("ChallengeFord").collection("Usuarios")
    const { insertedId } = await requests.updateOne(query, update, options);
    return { msg: body._id };
}