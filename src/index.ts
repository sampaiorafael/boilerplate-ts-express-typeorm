import Server from './server/Server'
import configs from './configs/configs'

Server.listen(configs.Server.port, () => {
    console.log(`Servidor rodando na porta ${configs.Server.port}`);
});