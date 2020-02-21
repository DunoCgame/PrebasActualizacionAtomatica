// const { ipcRenderer } = require('electron');
const { remote } = require('electron');
const { Menu, MenuItem } = remote;



function L(){
	
	console.log("ZERO");

let PropiedadesPos = document.createElement('label');
PropiedadesPos.id="PosID";
PropiedadesPos.className="PosClass Label_N_fila_Propiedades etiqueta";
PropiedadesPos.type="text";
PropiedadesPos.Name="text";
PropiedadesPos.innerHTML="Fila";
var Propiedades = document.getElementsByClassName('l')[0];
Propiedades.appendChild(PropiedadesPos);
	

}
 
const menu2 = new Menu();
menu2.append(new MenuItem({ label: 'MenuItem1', click() { console.log('item 1 clicked') } }))
menu2.append(new MenuItem({ type: 'separator' }))
menu2.append(new MenuItem({ label: 'MenuItemLuis', type: 'checkbox', checked: true }))

window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  menu.popup({ window: remote.getCurrentWindow() })
}, false)

 const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'Duno',
      submenu: [
        {
          label: 'Zero',
          click: function () {
								L();
          }
        },
        {
          type: 'separator'
        },
        {
          label: 'Submenu2'
        }
      ]
    },
    {
      label: 'Help',
      submenu: [
        {
          label: 'About Electron',
          click: function () {
            electron.shell.openExternal('http://electron.atom.io');
          },
          accelerator: 'CmdOrCtrl + Shift + H'
        }
      ]
    },

   {
      label: 'update',
      submenu: [
        {
          label: 'UPdate Electron',
          click: function () {
          updates.checkForUpdates("update", "mainWindow", "click");
          },
          
        }
      ]
    },
	
	
	
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  
  

 