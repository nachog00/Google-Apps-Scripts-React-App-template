// this function serves the compiled app to the client
// it is called by the doGet function in the webapp

const doGet = (e) => {
    console.log('Opening App: <YourAppName>')
    try{
        // add the path to the directory containing your compiled app
        let path = '';
        return HtmlService.createTemplateFromFile(path + 'client/index.html')
    } catch (error) {
        console.log(error)
        return HtmlService.createHtmlOutput(error.stack)
    }
}