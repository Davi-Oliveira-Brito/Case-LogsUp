import { con } from '../connection.js';

export async function login(admin) {
    const comando = `
        SELECT nome_admin	AS Nome,
               email_admin	AS Email,
               senha_admin	AS Senha
        FROM tb_admin
        WHERE email_admin = ? AND senha_admin = ?;
    `

    const [resposta] = await con.query(comando, [admin.email, admin.senha]);
    return resposta[0];
}

export async function permissaoUsuario(usuario) {
    const comando = `
        UPDATE tb_usuario
        SET permissao_usuario = ?
        WHERE id_usuario = ?;
    `

    const [resposta] = await con.query(comando, [usuario.permissao, usuario.id]);
    return resposta
}

export async function listarUsuarios(){
    const comando = `
        SELECT id_usuario		 AS id,			
		       nome_usuario		 AS nome,  		
               email_usuario 	 AS email, 		
               permissao_usuario AS permissao
        FROM tb_usuario
    `
    
    const [resposta] = await con.query(comando, [])
    return resposta
}