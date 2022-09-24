class usuario extends pessoa {
    salvar(usuario) {
        $.ajax({
            url: `${url_base}saveuser`,
            type: 'POST',
            data: usuario,
            success: function(data) {
                alert(`Registro salvo com sucesso!`)
                window.location.href = "./cadastro.html"
            }
        });
    }
}