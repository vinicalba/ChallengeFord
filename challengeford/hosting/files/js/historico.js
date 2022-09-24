$(function() {
    var historicos = []
    var html = ``

    $("#menu").load("./menu.html");
    var params = {
        usuario_id: client.auth.user.id
    }
    var jqxhr = $.get(`${url_base}gethistorybyid`, params, function(data) {
        $(data).each(function(i) {
            var oItem = {
                nome: data[i].nome,
                usuario_id: data[i].usuario_id,
                data: data[i].data,
                horario: data[i].horario,
                local: data[i].local
            }
            historicos.push(oItem)
        });
    }).done(function() {
        listar()
    });

    function listar() {
        for (let i = 0; i < historicos.length; i++) {
            html += `<tr class="felix">
                <td>
                ${historicos[i].nome}
                </td>
                <td>
                ${historicos[i].data}
                </td>
                <td>
                ${historicos[i].horario}
                </td>
                <td>
                ${historicos[i].local}
                </td>
                </tr>`;
        }
        $('#tabelaRegistros').append(html);
        html = ``;
    }
})