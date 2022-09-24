class carro {
    constructor(placa, modelo, usuario_id, ano, km) {
        this.placa = placa
        this.modelo = modelo
        this.usuario_id = usuario_id
        this.ano = ano
        this.km = km
    }

    salvar(carro) {
        $.ajax({
            url: `${url_base}savecar`,
            type: 'POST',
            data: carro,
            success: function(data) {
                alert(`Carro salvo com sucesso!`)
                window.location.href = "./cadastro.html"
            }
        });
    }
}