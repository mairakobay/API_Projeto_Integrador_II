const SaladService = require('../services/SaladService');

module.exports = {
    buscarTodos: async (req, res)=> {
        let json = {error: '', result:[]};

        let salads = await SaladService.buscarTodos();

        for(let i in salads){
            json.result.push({
                codigo: salads[i].codigo,
                nome: salads[i].nome,
                tamanho: salads[i].tamanho
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let salad = await SaladService.buscarUm(codigo);

        if(salad){
            json.result = salad;
        }

        res.json(json);       
    },

    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let preco = req.body.preco;
        
        if(nome && tamanho && preco){
            let SaladCodigo = await SaladService.inserir(nome, tamanho, preco);
            json.result = {
                codigo: SaladCodigo,
                nome,
                tamanho,
                preco
            };
        }else{
            json.error = 'Campos não enviados';
        }

        res.json(json);       
    },

    alterar: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;
        let nome = req.body.nome;
        let tamanho = req.body.tamanho;
        let preco = req.body.preco;
        
        if(codigo && nome && tamanho && preco){
            await SaladService.alterar(codigo, nome, tamanho, preco);
            json.result = {
                codigo,
                nome,
                tamanho,
                preco
            };
        }else{
            json.error = 'Campos não enviados';
        }
        res.json(json);       
    },
    
    excluir: async(req, res) => {
        let json = {error:'', result:{}};

        await SaladService.excluir(req.params.codigo);

        res.json(json);   
    }
}