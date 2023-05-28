const db = require('../db');

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado)=>{

            db.query('SELECT * FROM salads', (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (codigo) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('SELECT * FROM salads WHERE codigo = ?', [codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, tamanho, preco) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('INSERT INTO salads (nome, tamanho, preco) VALUES (?, ?, ?)',
                [nome, tamanho, preco],
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
                }
            );
        });
    },

    alterar: (codigo, nome, tamanho, preco) => {
        return new Promise((aceito,rejeitado)=>{

            db.query('UPDATE salads SET nome = ?, tamanho = ?, preco = ? WHERE codigo = ?',
                [nome, tamanho, preco, codigo],
                (error, results)=>{
                    if(error) { rejeitado(error); return; }
                    aceito(results);
                }
            );
        });
    },

    excluir: (codigo) =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('DELETE FROM salads WHERE codigo = ?',[codigo], (error, results)=>{
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};