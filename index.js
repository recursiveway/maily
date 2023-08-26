const express = require('express')
const passport = require('passport')

const helmet = require("helmet")
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const dotenv = require('dotenv')
dotenv.config()

require('./services/passportService')
const authRoutes = require('./routes/authRoutes')
const { Passport } = require('passport')


const app = express()

app.use(helmet())

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY]
    })
)
app.use(passport.initialize())
app.use(passport.session())


app.use('/auth/google', authRoutes)
app.use("/api/logout", (req, res) => {
    req.logout()
    res.send(req.user)
})

app.use("/user", (req, res) => {
    res.json(req.user)
})
app.use('/', (req, res) => {
    res.send("hello")
})



mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    console.log("connnected to db"),
    app.listen(5000, () => {
        console.log("hello");
    })
).catch((error) => {
    console.log(error);
}
)
