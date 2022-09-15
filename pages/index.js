import Head from 'next/head'
import MainSection from "../components/MainSection"
import { MongoClient, ServerApiVersion } from "mongodb"

export default function Home({staticReminders}) {
  return (
    <>
      <Head>
        <title>Připomínač</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainSection staticReminders={staticReminders} />
    </>
  )
}

export async function getServerSideProps() {
  const normalizeDate = timeStamp => {
    let days = Math.floor(timeStamp/86400000)
    let milis = days*86400000
    return milis
  }
  const getMonday = unixTimeStamp => {  
    const milisInADay = 86400000
    let day = new Date(normalizeDate(unixTimeStamp))//this is now Date data structure
    let dayTimeStamp = normalizeDate(unixTimeStamp)//this is UNIX timestamp of the day variable
    while (day.getDay() !== 1) {//while day isn't monday
      dayTimeStamp -= milisInADay //decrement UNIX miliseconds by day
      day = new Date(dayTimeStamp) //set day to new UNIX time stamp
      //when loop done, day is Monday
    }
    return dayTimeStamp
  }
  const daysInAWeek = 7
  const monday =  Math.floor(getMonday(Date.now())/86400000) //day
  const weekDays = [monday, monday + 1, monday + 2, monday + 3, monday + 4]
  const allDaysNeeded = [] //All week days of last week, this week, and 3 upcoming.
  for (let i = -1; i <= 3; i++) {
    allDaysNeeded.push(...weekDays.map(day => day + i*daysInAWeek))
  }
  const uri = `mongodb+srv://MickenCZ:${process.env.MONGO}@cluster0.iyi7t.mongodb.net/?retryWrites=true&w=majority`
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

  await client.connect(async err => {
    if (err) {client.close(); throw new Error(err)}
  })
  const coll = await client.db("pripominac").collection("reminders");
  const cursor = await coll.find()
  const reminders = []
  await cursor.forEach(obj => {
    for (let day of allDaysNeeded) {
      if (day.toString() === Object.keys(obj)[0]) {
        reminders.push(obj)
      }
    }
  })
  await client.close()
  return {
    props:{
      staticReminders:{
        result:reminders
      }
    },
  }
}