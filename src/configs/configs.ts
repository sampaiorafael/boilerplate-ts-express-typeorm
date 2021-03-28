import 'dotenv/config'

export default {
    Server:  {
        port: process.env.PORT
    },
    Accounts: {
        bcryptSalt: 12
    }
}