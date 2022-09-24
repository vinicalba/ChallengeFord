class conhecido extends pessoa {
    salvar(conhecido) {
        $.ajax({
            url: `${url_base}saveknown`,
            type: 'POST',
            data: conhecido,
            success: function(data) {
                alert(`Conhecido salvo com sucesso!`)
                window.location.href = "./cadastro.html"
            }
        });
    }
}