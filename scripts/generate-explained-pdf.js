const { app, BrowserWindow } = require("electron");
const path = require("path");
const fs = require("fs");

const htmlPath = path.join(__dirname, "..", "docs", "explained.html");
const outputPath = path.join(__dirname, "..", "docs", "EXPLAINED.pdf");

async function generatePdf() {
  const win = new BrowserWindow({
    show: false,
    webPreferences: { offscreen: true }
  });

  await win.loadFile(htmlPath);
  const pdfData = await win.webContents.printToPDF({
    pageSize: "A4",
    marginsType: 1,
    printBackground: true
  });
  await fs.promises.writeFile(outputPath, pdfData);
  win.close();
}

app.whenReady().then(async () => {
  try {
    await generatePdf();
  } finally {
    app.quit();
  }
});
