const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const express = require('express');
const app = express();

let table; // Veritabanından çekilen veriyi saklamak için bir global değişken

const config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'sa',
            password: '1',
        },
    },
    options: {
        database: 'ModelAcDatabase',
        encrypt: false,
        trustServerCertificate: true,
    },
};
const connection = new Connection(config);

connection.on('connect', (err) => {
    if (err) {
        console.error('Bağlantı hatası:', err);
    } else {
        executeQuery();
    }
});

function executeQuery() {
    const rows = [];

    const request = new Request('SELECT * FROM SONUC', (err, rowCount) => {
        if (err) {
            console.error('Sorgu hatası:', err);
        } else {
            console.log(`Sorgu başarıyla tamamlandı. Toplam satır sayısı: ${rowCount}`);
            table = generateHtmlTable(rows); // Veritabanından çekilen veriyi 'table' değişkenine atama
        }

        connection.close();
    });

    request.on('row', (columns) => {
        const row = {};
        columns.forEach((column) => {
            row[column.metadata.colName] = column.value;
        });
        rows.push(row);
    });

    connection.execSql(request);
}

function generateHtmlTable(data) {
    if (!data || !Array.isArray(data) || data.length === 0) {
        return '<p>Veri bulunamadı.</p>';
    }

    const headers = Object.keys(data[0]);
    let html ='<br><p style="text-align:center;box-sizing: border-box;  font-family: inherit; font-size:36px; font-weight: 500; line-height: 1.1; color:inherit; padding-top: 30px;  padding-bottom: 30px; margin-bottom: 30px;background-color:#eeeeee; ">iŞ DEĞERLENDİRME SONUÇLARI</h1> <br><br><br><br><table style="width: 100%; padding: 8px; line-height: 1.42857143; vertical-align: top; border-top: 1px solid #ddd; font-size:20px; font-family:calibri; height:60%;   border-collapse: collapse; text-align: center;" ><tr>';
    

    headers.forEach((header) => {
        html += `<th>${header}</th>`;
    });

    html += '</tr>';

    data.forEach((row) => {
        html += '<tr>';
        headers.forEach((header) => {
            html += `<td>${row[header]}</td>`;
        });
        html += '</tr>';
    });
    html += '</table>';
    return html;
}

app.get('/', (req, res) => {
    res.send(table); // 'table' değişkenini gönderme
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
 
connection.connect();
module.exports = {
    table: table
};
