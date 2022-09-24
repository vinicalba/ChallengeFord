$(function() {

    var carros = []

    $("#menu").load("./menu.html");
    $('#saudacao').append(`${client.auth.user.profile.data.first_name}`);
    $('#info4').append(`${client.auth.user.profile.data.first_name}`);

    var param = {
        usuario_id: client.auth.user.id
    }

    $.ajax({
        url: `${url_base}getcarsbyid`,
        type: 'GET',
        data: param,
        success: function(data) {
            $('#info1').append(`Ano ${data[0].ano} - Automático - ${data[0].km}Km`)
            $('#info2').append(`Carro: ${data[0].modelo}`)
            $('#info3').append(`${data[0].placa}`)
        }
    });
})