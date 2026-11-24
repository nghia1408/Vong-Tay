import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', message: 'API đang hoạt động' })
})

app.use((error, _request, response, _next) => {
  console.error(error)
  response.status(500).json({ error: 'Đã xảy ra lỗi máy chủ' })
})

app.listen(port, () => {
  console.log(`API đang chạy tại http://localhost:${port}`)
})
