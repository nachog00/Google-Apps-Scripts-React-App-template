// this function serves the compiled app to the client
// it is called by the doGet function in the webapp

const doGet = (e) => {

    let options = {
        appName: '<YourAppName>', // add your app name here
        favicon: '', // add your favicon url here
    }

    console.log(`Opening App: ${options.appName}`)
    try{
        // add the path to the directory containing your compiled app
        let path = 'apps/webapp/app/';
        return HtmlService
            .createHtmlOutputFromFile(path + 'client/index.html')
            .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
            .addMetaTag('viewport', 'width=device-width, initial-scale=1')
            .setFaviconUrl(options.favicon)
            .setTitle(options.appName)

    } catch (error) {
        console.log(error)
        return HtmlService.createHtmlOutput(error.stack)
    }
}