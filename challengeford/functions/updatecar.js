exports = async function (payload) {
    const body = payload.query;

    const query = { _id: BSON.ObjectId(body.usuario_id) };

    const update = {
        "placa": body.placa,
        "modelo": body.modelo,
        "usuario_id": body.usuario_id,
        "ano": body.ano,
        "km": body.km
    };

    const options = { "upsert": false };

    const mdb = context.services.get('mongodb-atlas');
    const requests = mdb.db("ChallengeFord").collection("Carros")
    const { insertedId } = await requests.updateOne(query, update, options);
    return { msg: body._id };
}