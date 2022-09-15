// POST /api/moreDates 
import initMiddleware from "../../lib/init-middleware"
import validateMiddleware from "../../lib/validate-middleware"
import { check, validationResult } from 'express-validator'
import { MongoClient, ServerApiVersion } from 'mongodb'

const uri = `mongodb+srv://MickenCZ:${process.env.MONGO}@cluster0.iyi7t.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const milisInADay = 86400000
const daysInAWeek = 7

const validateBody = initMiddleware(
  validateMiddleware([
    check("limit").notEmpty().isInt({min:-100, max:200}),
    check("monday").notEmpty().isInt({min:19000}),
], validationResult)
)


const handler = async (req, res) => {
  if (req.method === "POST") {
    await validateBody(req, res)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    const limit = req.body.limit
      let monday
      if (limit > 0) {
        monday = req.body.monday + limit*daysInAWeek
      }
      else {
        monday = req.body.monday - limit*daysInAWeek
      }
      const weekDays = [monday, monday + 1, monday + 2, monday + 3, monday + 4]
      const allDaysNeeded = [] //All week days of upcoming five weeks, since limit is the first week that breaks the rule, i = 0
      if (limit > 0) {
        for (let i = 1; i <= 5; i++) {
          allDaysNeeded.push(...weekDays.map(day => day + i*daysInAWeek))
        }
      }
      else {
        for (let i = -1; i >= -5; i--) {
          allDaysNeeded.push(...weekDays.map(day => day + i*daysInAWeek))
        }
      }
    const result = []
    await client.connect(async err => {
      if (err) {
        await client.close(); await res.status(500).json({"err":err}); throw new Error(err);
      }
      else {
        const coll = await client.db("pripominac").collection("reminders");
        const cursor = await coll.find()
        const reminders = new Set()
        await cursor.forEach(obj => reminders.add(...Object.keys(obj)))
        for (const day of allDaysNeeded) {
          if (reminders.has(day.toString())) {
            const options = {projection:{_id:0}}
            const obj = await coll.findOne({_id:day.toString()}, options)
            //result.push(...obj[day.toString()])
            result.push(obj)
          }
        }
        await client.close()
        }
        await res.status(200).json({"result":result})
    })
  }
  else {
    await res.status(404).json({errors:"Invalid request type"})
  }
      
      
      

}

export default handler