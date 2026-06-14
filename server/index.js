const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/api/enquiry", (req, res) => {
  console.log("🔥 RECEIVED DATA:", req.body)

  const { name, email, phone } = req.body

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false })
  }

  return res.json({ success: true })
})

app.listen(5000, () => {
  console.log("Backend running on port 5000")
})