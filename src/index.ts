import Server from './server/Server'

Server.listen(Server.get('port'), () => {
    console.log(`Sever online at PORT = ${Server.get('port')}`)
}) 