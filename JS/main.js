$(document).ready(function () {
    
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });

    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#cep').mask('00000-000');

    $('#form').validate({
        rules: {
            nome: "required",
            email: {
                required: true,
                email: true
            },
            telefone: "required",
            cpf: {
                required: true,
                cpfBR: true
            },
            endereco: "required",
            cep: "required"
        },
        messages: {
            nome: "Por favor, insira seu nome completo",
            email: "Por favor, insira um e-mail válido",
            telefone: "Por favor, insira seu telefone",
            cpf: "Por favor, insira um CPF válido",
            endereco: "Por favor, insira seu endereço",
            cep: "Por favor, insira um CEP válido"
        }
    });
});
