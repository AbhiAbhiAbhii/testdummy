// import { google, GoogleApis } from "googleapis"
import { google } from "googleapis";


async function sheet(req, res){
    if(req.method === 'POST') {
        const { firstData, fullName, number, mail, company, id, location, purpose, event, meeting, interview } = req.body


        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        });

        // call to google sheets
        const sheets = google.sheets({
            // passing an authentication object
            auth,
            version:'v4'
        })

        // call to the api
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId:'1zHrIZmHONPglK3VpuwQXPesa4tIWBYj9VWnH89YXOyo',
            range: 'Sheet1!A2:F',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [[firstData, fullName, number, mail, company, id, location, purpose, event, meeting, interview]]
            }
        })
        res.status(201).json({message:"Data successfully exported to sheets"})

    }
    res.status(200).send("Success")
}

export default sheet