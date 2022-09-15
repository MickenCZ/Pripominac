//  POST /api/postForm
import initMiddleware from "../../lib/init-middleware"
import validateMiddleware from "../../lib/validate-middleware"
import { check, validationResult } from 'express-validator'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://MickenCZ:${process.env.MONGO}@cluster0.iyi7t.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const milisInADay = 86400000
const permittedTypes = ["test", "domaciUkol", "akce", "ostatni"]
const permittedGrades = ["1V", "2V", "3V", "4V", "5V", "6V", "7V", "8V", "1A", "2A", "3A", "4A"]

const validateBody = initMiddleware(
    validateMiddleware([
    check("subjectIndex").notEmpty().isInt({min:0, max:8}),
    check("date").notEmpty().isInt({min:1658000000000}),
    check("description").notEmpty().isString().isLength({min:4, max:100}).trim().escape(),
    check("reminderType").notEmpty().isString().custom(val => permittedTypes.includes(val)).trim().escape(),
    check("trida").notEmpty().isString().custom(val => permittedGrades.includes(val)).trim().escape(),
    check("subject").notEmpty().isString().isLength({max:6}).trim().escape(),
  ], validationResult)
)


const handler = async (req, res) => {
  if (req.method === "POST") {
    await validateBody(req, res)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    await client.connect(async err => {
      if (err) {
        await client.close(); res.status(500).json({"err":err}); throw new Error(err);
      }
      else {
        const coll = await client.db("pripominac").collection("reminders");
        const timeStamp = Math.floor(req.body.date / milisInADay).toString()//Days since epoch
        const cursor = coll.find()
        const reminders = new Set()
        await cursor.forEach(obj => reminders.add(...Object.keys(obj)))//set of keys
        if (!reminders.has(timeStamp)) {//if key doesnt exist yet
          await coll.insertOne({[timeStamp]:[req.body], _id:timeStamp})
        }
        else {//if it doesnt exist, push to array
          await coll.updateOne({_id:timeStamp},{$push:{[timeStamp]:req.body}})
        }
        await client.close()
        }
    })
    res.status(200).json({message:"success"})
  }
  else {
    res.status(404).json({errors:"Invalid request type"})
  }
      
      
      

}

export default handler