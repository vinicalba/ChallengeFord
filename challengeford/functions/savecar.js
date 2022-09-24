exports = async function (payload) {
    const body = payload.query;
    const mdb = context.services.get('mongodb-atlas');
    const requests = mdb.db("ChallengeFord").collection("Carros")
    const { insertedId } = await requests.insertOne({
        "placa": body.placa,
        "modelo": body.modelo,
        "usuario_id": body.usuario_id,
        "ano": body.ano,
        "km": body.km
    });
    return { msg: "finished!" };
}