const path = require('path');

const launchOptionForLambda = [
    // error when launch(); No usable sandbox! Update your kernel
    '--no-sandbox',
    // error when launch(); Failed to load libosmesa.so
    '--disable-gpu',
    // freeze when newPage()
    '--single-process',
    '--disable-dev-shm-usage',
];

const headlessExecutable = "headless-chromium";
const headlessFile = "headless-chromium-53.zip";
const headlessFilePath = "https://github.com/lmedeiros/puppeteer-lambda/raw/master/bin/headless-chromium-53.zip";
const localChromePath = path.join(__dirname, '../chrome/' + headlessFile);
const remoteChromeS3Bucket = process.env.CHROME_BUCKET;
const remoteChromeS3Key = process.env.CHROME_KEY || headlessFile;

const setupChromePath = path.join(path.sep, 'tmp');
const executablePath = path.join(
    setupChromePath,
    headlessExecutable
);

const DEBUG = process.env.DEBUG;

module.exports = {
    launchOptionForLambda,
    localChromePath,
    headlessFilePath,
    remoteChromeS3Bucket,
    remoteChromeS3Key,
    setupChromePath,
    executablePath,
    headlessExecutable,
    DEBUG,
};
