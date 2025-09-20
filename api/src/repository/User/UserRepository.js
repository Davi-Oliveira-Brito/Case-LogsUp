import { con } from '../connection.js';


export async function logon(usuario) {
    const comando = `
        INSERT INTO tb_usuario(nome_usuario, email_usuario, senha_usuario)
			          value(?,?,?);
    `

    const [resposta] = await con.query(comando, [usuario.nome, usuario.email, usuario.senha])
    return resposta.insertId;

}

export async function login(usuario) {
    const comando = `
        SELECT 	id_usuario	        AS id,			
        	    nome_usuario		AS nome,  		
                email_usuario 		AS email, 		
                permissao_usuario	AS permissao
        FROM tb_usuario
        WHERE email_usuario = ? AND senha_usuario = ? AND permissao_usuario IS NOT NULL AND permissao_usuario < 2;
    `

    const [resposta] = await con.query(comando, [usuario.email, usuario.senha]);
    return resposta[0]; 
}