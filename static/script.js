$(document).ready(function(){

    console.log('Ready')

    //  Busque a data atual e atualize-a no DOM
    let data_time = new Date()
    let current_date = data_time.toLocaleDateString()
    
    $('#date').text("Data: " + current_date)
    



    // Escreva um evento, quando o botão Enviar for clicado
    $('#button').click(function(){

        //  Obtenha o valor do texto da área de texto usando o método 'val()'
        let text_value = $('#text').val()

        //  Converta-o em um objeto JS.
        //  Forneça uma "chave" aqui e escreva o mesmo no arquivo app.py também para extrair dados
        let input_text = {'customer_review' : text_value}
        console.log(input_text)

        //  requisição ajax
        $.ajax({
            url : "predict",
            //  tipo da requisição web
            type : 'POST',

            //  dados a serem enviados no formato JSON
            data : JSON.stringify(),

            //  o tipo de resposta esperado é json
            dataType : 'json',

            //  contentType
            contentType : 'application/json',

            //  se tudo funcionar, execute esta função
            success : function(result){

                // extraia previsão e a URL do emoticon do resultado
                let prediction = result.prediction

                //  atualize os elementos DOM
                let emoji_url = result.url

                //  exiba-os
                console.log(emoji_url)
                $('#sentiment').text(prediction)
                $('#sentiment').show()

                $('#emoji').attr('src', emoji_url)
                $('#emoji').show()
            },

            //  se houver algum erro, execute esta função
            error : function(result){

                console.log(result)
            }
        })


        //  limpando a caixa de texto após cada pressionamento de botão
        $('#text').val("")
    })
        
})