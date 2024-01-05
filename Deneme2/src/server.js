const express = require('express');
const cors = require('cors');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const config = {
    
    server: 'http://localhost:3000/',
    database: 'ModelAcDatabase',
    options: {
      encrypt: true,
      trustedConnection: true,
    },
  };

async function connectToDatabase() {
  try {
    await sql.connect(config);
    console.log('Connected to MSSQL Database');
  } catch (err) {
    console.error('Error connecting to MSSQL Database', err);
  }
}

app.get('/api/results', async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Sonuclar`;
    res.json(result.recordset);
  } catch (err) {
    console.error('Error fetching data from MSSQL Database', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Kayıtlar alınıyor ${PORT}`);
});
