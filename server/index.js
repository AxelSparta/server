import { PORT } from './config.js'
import { connectDB } from './db.js'
import app from './app.js'

//mongodb
connectDB()

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
