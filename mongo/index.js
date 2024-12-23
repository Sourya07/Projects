const express = require('express')
const app = express();
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "s3cret";
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://singhsourya7:Singhsingh%4005@cluster0.gca1yn7.mongodb.net/todo-app")
app.use(express.json());
const { auth } = require("./auth");
const { z } = require("zod")


app.post("/signup", async function (req, res) {


    const requirebody = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        name: z.string().min(8)
    })

    const parsedata = requirebody.safeParse(req.body);
    if (!parsedata.success) {
        return res.status(400).json(parsedata.error);
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email,
        password,
        name,
    })
    res.json({
        message: "you are sign up"
    })

})

app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });


    if (response) {
        const token = jwt.sign({
            id: response._id
        }, JWT_SECRET)

        res.json({
            token
        })
    }


    else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
})


app.post("/todo", auth, async function (req, res) {
    const title = req.body.title;

    await TodoModel.create({
        userId: req.usertodoid,
        title
    })
    res.json({
        message: "your todo has been created "
    })

})


app.listen(3000);