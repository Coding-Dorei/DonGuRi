const {app, BrowserWindow} = require('electron')

const createWindow = () =>{
    const window = new BrowserWindow({
        width:900,
        height:600
    });
    window.loadFile("./views/index.html")
}

app.whenReady().then(()=>{
    createWindow()
})