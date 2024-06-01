const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://gobind:4512@task-manager.nfzafy6.mongodb.net/?retryWrites=true&w=majority&appName=01-task-manager'


mongoose
    .connect(connectionString,{
        useNewUrlParse: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(()=>console.log('connected to the db...'))
    .catch((err)=>console.log(err))