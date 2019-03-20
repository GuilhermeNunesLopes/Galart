module.exports.index = (app, req, res)=>{
    if (req.session.authorized !== true) {
        res.render("componentes/error");
        return;
    }
    
    var conexao = app.dbConfig.database;
    var ProdutoDAO = new app.aplication.model.ProdutoDAO(conexao);
    var data = null;
    
    ProdutoDAO.mostrarProduto(data, res);

}