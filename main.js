import { app, BrowserWindow, ipcMain, Tray } from 'electron'
import path from 'path'
import openAboutWindow from 'about-window'
import AutoLaunch from 'auto-launch'
import pkg from './package.json'

const iconPath = path.join(__dirname, 'assets/ic_check_black_24dp_1x.png')
let mainWindow = null
let tray = null

const todoAutoLauncher = new AutoLaunch({
  name: 'Todo',
  path: '/Applications/Todo.app'
})

app.dock.hide()

const createTray = () => {
  tray = new Tray(iconPath)
  tray.setToolTip('Gona')
  tray.on('right-click', toggleWindow)
  tray.on('double-click', toggleWindow)
  tray.on('click', event => {
    toggleWindow()

    if (mainWindow.isVisible() && process.defaultApp && event.metaKey) {
      mainWindow.openDevTools({ mode: 'detach' })
    }
  })
}

const getWindowPosition = () => {
  const windowBounds = mainWindow.getBounds()
  const trayBounds = tray.getBounds()

  // Center window horizontally below the tray icon
  const x = Math.round(
    trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2
  )

  // Position window 4 pixels vertically below the tray icon
  const y = Math.round(trayBounds.y + trayBounds.height + 4)

  return { x: x, y: y }
}

const showWindow = () => {
  const position = getWindowPosition()
  mainWindow.setPosition(position.x, position.y, false)
  mainWindow.show()
  mainWindow.focus()
}

const toggleWindow = () => {
  if (mainWindow.isVisible()) {
    mainWindow.hide()
  } else {
    showWindow()
  }
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 350,
    height: 450,
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    webPreferences: {
      backgroundThrottling: false
    }
  })
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.on('blur', () => {
    if (!mainWindow.webContents.isDevToolsOpened()) {
      mainWindow.hide()
    }
  })
}

app.on('ready', () => {
  createTray()
  createWindow()
})

// Quit the app when the window is closed
app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('show-window', () => {
  showWindow()
})

ipcMain.on('show-devtool', () => {
  mainWindow.openDevTools({ mode: 'detach' })
})

ipcMain.on('show-about', () => {
  // TODO: need to set high quality icon
  openAboutWindow({
    icon_path: '../../assets/ic_check_box_black_24dp_2x.png',
    copyright: 'Copyright (c) 2020 Haroo Studio',
    bug_report_url: pkg.bugs.url,
    license: pkg.license,
    description: pkg.description
  })
})

ipcMain.on('enable-start-at-login', (event, enable) => {
  console.log(enable)
  enable ? todoAutoLauncher.enable() : todoAutoLauncher.disable()
})
