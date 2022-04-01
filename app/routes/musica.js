module.exports = function (application) {

    application.get(`/musica`, function (req, res) {

        var mysqlConnection = application.config.dbConnection();
        var musicaModel = application.app.models.musicaModel;

        musicaModel.getMusica(mysqlConnection, function(error, result){
            res.render('musica/musica', {musica : result})
        })

       
    })
}