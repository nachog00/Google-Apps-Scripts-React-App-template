#  Google Apps Script - React App Template

This is a template for a React app that can be deployed as a Google Apps Script web app.

Due to GAS not allowing for referenced files on html, this template uses a single html file that is generated from a template file. The template file is located in `src/index.html` and the generated file is located in `app/client/index.html`. The template file is used to inject the generated javascript and css files into the html file.

##  Getting Started

You have to follow a few steps to get the setup running:

> You will need to have your own Google Apps Script project loaded with the `clasp` command line tool. That way you can develop locally.

*  ### Clone the project
   Clone this as a separate folder inside your project. Plaese take a look at the `package.json` file to see what is installed.

* ### Install the dependencies
  Run `setup` to install the dependencies. That is one of the 4 defined command on the `package.json` file.

* ###  Start the server:
  Once the dependencies are installed, you can run `start` to start the development server. This will start a local server on port 3000 and will watch for changes on the `src` folder. You can change the port moddifing the `--port` parameter on the `package.json` file's `start` script.

*  ### Build the project
   Once you are done with the development, you can run `build` to build the project. This will generate the `app` folder with the compiled files.

* ### Upload to the GAS project
  Whenever you want your changes to be deployed to the GAS project, you can run `cstart`. This will watch for any changes on the app folder and will upload the files to the GAS project. You can change the GAS project id on the `clasp.json` file.
  >You can also run `cbuild` to build the project and upload it to the GAS project. This is basically the same as running `build` and `cstart` in sequence.

* ###  Deploy the project
   You can deploy it to the GAS project. You can do that by running `cdeploy` on the `package.json` file. This will deploy the project to the GAS project and will open the GAS project in your browser.

---

## Using GAS functions from the React app
When you are running the local server, the `google` object is not available. Also, since the `google.script.run` command isn't all that great, I added a helper function called runGoogleScript. for further documentation visit the [docs](docs/runGoogleScript.md).
