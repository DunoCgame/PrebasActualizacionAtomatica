const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');
const updates =require('./Updater.js');
const electron = require("electron");
const Menu = electron.Menu;
const MenuItem = electron.MenuItem;
const globalShortcut = electron.globalShortcut;


let mainWindow;

function createWindow (){
		mainWindow = new BrowserWindow({
		//tamaño
		width: 800,
		height: 600,

		//preferencia
		webPreferences: {
		nodeIntegration:true,
		},
		});
		mainWindow.loadFile('index.html');
		mainWindow.on('closed', function () {
		mainWindow = null;
		
		
  });
}

app.on('ready', () => {
  createWindow();
  mainWindow.webContents.openDevTools();
  // autoUpdater.checkForUpdatesAndNotify();
  // autoUpdater.checkForUpdates();
  
  /*******************************************************/
  /*Menu*/   /*Menu*/   /*Menu*/   /*Menu*/   /*Menu*/
  
  // const template = [
    // {
      // label: 'Edit',
      // submenu: [
        // { role: 'undo' },
        // { role: 'redo' },
        // { type: 'separator' },
        // { role: 'cut' },
        // { role: 'copy' },
        // { role: 'paste' },
        // { role: 'pasteandmatchstyle' },
        // { role: 'delete' },
        // { role: 'selectall' }
      // ]
    // },
    // {
      // label: 'Demo',
      // submenu: [
        // {
          // label: 'Submenu1',
          // click: function () {
            // console.log('Clicked sub menu 1');
          // }
        // },
        // {
          // type: 'separator'
        // },
        // {
          // label: 'Submenu2'
        // }
      // ]
    // },
    // {
      // label: 'Help',
      // submenu: [
        // {
          // label: 'About Electron',
          // click: function () {
            // electron.shell.openExternal('http://electron.atom.io');
          // },
          // accelerator: 'CmdOrCtrl + Shift + H'
        // }
      // ]
    // },

   // {
      // label: 'update',
      // submenu: [
        // {
          // label: 'UPdate Electron',
          // click: function () {
          // updates.checkForUpdates("update", "mainWindow", "click");
          // },
          
        // }
      // ]
    // },
	
	
	
  // ];

  // const menu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(menu);

  // globalShortcut.register('Alt+1', function () {
    // win.show()
  // })
  
});//cierre
 /*Menu*/   /*Menu*/   /*Menu*/   /*Menu*/   /*Menu*/



app.on('will-quit', function () {
  globalShortcut.unregisterAll()
})

app.on('window-all-closed', function () {
		  if (process.platform !== 'darwin') {
										app.quit();
		  }
});

app.on('activate', function () {
			  if (mainWindow === null) {
								createWindow();
			  }
});

//Update automatica
ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version:app.getVersion() });
});

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
   event.reply('asynchronous-reply', 'function')
    // event.returnValue = 'pong'
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})

// autoUpdater.on('update-available', () => {
  // mainWindow.webContents.send('update_available');
// });

// autoUpdater.on('update-downloaded', () => {
  // mainWindow.webContents.send('update_downloaded');
// });

// ipcMain.on('restart_app', () => {
 // autoUpdater.quitAndInstall();
// });

/*Menu*/ /*Menu*/ /*Menu*/ /*Menu*/
// app.on('browser-window-created', function (event, win) {
  // const ctxMenu = new Menu()
  // ctxMenu.append(new MenuItem(
    // {
      // label: 'Hello',
      // click: function(){
        // console.log('ctx menu clicked')
      // }
    // }
  // ))
  // ctxMenu.append(new MenuItem({ role: 'selectall' }))
  // win.webContents.on('context-menu', function (e, params) {
    // ctxMenu.popup(win, params.x, params.y)
  // })
// });

/*Menu*/ /*Menu*/ /*Menu*/ /*Menu*/