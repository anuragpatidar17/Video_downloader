const app = require("express")();
const cors = require('cors');
const ytdl = require('ytdl-core');
const server = require("http").createServer(app);

app.use(cors());

const port = process.env.PORT || 4002;
server.listen(port ,() => {
    console.log(`Listening on port ${port}`) 
})




app.get("/", (req,res)=> res.sendFile(__dirname + "/index.html"))

app.get('/download', (req,res) => {
var URL = req.query.URL;
res.header('Content-Disposition', 'attachment; filename="video.mp4"');
ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
});
