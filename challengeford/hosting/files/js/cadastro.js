$(function() {
    var ufs = []
    var cidades = []
    $("#menu").load("./menu.html");
    //$('.loading-spinner').addClass('active'); // ativa o loading
    //$('.loading-spinner').removeClass('active'); // desativa o loading
    //#region listar-uf
    _ = $.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`, function(data) {
        $(data).each(function(i) {
            var oItem = {
                id: data[i].id,
                sigla: data[i].sigla
            }
            ufs.push(oItem)
        });
    }).done(function() {
        ListarUF()
    });
    //#endregion listar-uf

    //#region popular-select-uf
    function ListarUF() {
        ufs.forEach(function(item) {
            $('#selectUF').append(`<option data-id="${item.id}">${item.sigla}</option>`);
            $('#selectUFKnown').append(`<option data-id="${item.id}">${item.sigla}</option>`);
        });
        ListarCidades(12)
        ListarCidades(12, 2)
        $('.loading-spinner').removeClass('active'); // desativa o loading
    }
    //#endregion popular-select-uf

    //#region popular-select-cidades
    function ListarCidades(uf, modal = 1) {
        $('.loading-spinner').addClass('active'); // ativa o loading
        if (modal == 1) {
            $('#selectCidades').empty()
        } else {
            $('#selectCidadesKnown').empty()
        }
        cidades = []
        _ = $.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`, function(data) {
            $(data).each(function(i) {
                var oItem = {
                    id: data[i].id,
                    nome: data[i].nome
                }
                cidades.push(oItem)
            });
        }).done(function() {
            cidades.forEach(function(item) {
                if (modal == 1) {
                    $('#selectCidades').append(`<option data-cidade-id="${item.id}">${item.nome}</option>`);
                } else {
                    $('#selectCidadesKnown').append(`<option data-cidade-id="${item.id}">${item.nome}</option>`);
                }
            });
            $('.loading-spinner').removeClass('active'); // desativa o loading
        });
    }
    //#endregion popular-select-cidades

    $("#selectUF").on("change", function() {
        var uf = $(this).find(':selected').attr('data-id')
        ListarCidades(uf)
    });

    $("#selectUFKnown").on("change", function() {
        var uf = $(this).find(':selected').attr('data-id')
        ListarCidades(uf, 2)
    });

    $('#btnSalvar').on("click", function() {
        if (confirm(`Deseja salvar o registro?`)) {
            var user = new usuario(
                $('#txtNome').val(), $('#txtCPF').val(), $('#txtTelefone').val(),
                $('#txtDataNascimento').val(), $('#txtEmail').val(), $('#selectUF').val(),
                $('#selectCidades').val(), client.auth.user.id)
            user.salvar(user)
        }
    })

    $('#btnSalvarCarro').on("click", function() {
        if (confirm(`Deseja salvar o carro?`)) {
            var car = new carro($('#txtPlaca').val(), $('#txtModelo').val(),
                client.auth.user.id, $('#txtAno').val(), $('#txtKm').val())
            car.salvar(car)
        }
    })

    $('#btnSalvarKnown').on("click", function() {
        if (confirm(`Deseja salvar o conhecido?`)) {
            var known = new conhecido(
                $('#txtNomeKnown').val(), $('#txtCPFKnown').val(), $('#txtTelefoneKnown').val(),
                $('#txtDataNascimentoKnown').val(), $('#txtEmailKnown').val(), $('#selectUFKnown').val(),
                $('#selectCidadesKnown').val(), client.auth.user.id)
            known.salvar(known)
        }
    })
})