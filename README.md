![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101) ![JavaScript](https://badges.frapsoft.com/javascript/code/javascript.png?v=101)
# espruino-ts-quickstart

Quickstart for Espruino using typescript and Visual Studio Code IDE<br />
(adapted from https://www.espruino.com/Typescript+and+Visual+Studio+Code+IDE)

## How To Use This Repo

This repo is meant to be used as a template for starting a new Espruino Typescript project.

To use this repo:

- git clone https://github.com/dmitch-lynkd/espruino-ts-quickstart.git
- rename the `espruito-ts-quickstart` directory to your desired project name
- cd into the new project directory
- delete the `.git` directory by executing the following: `rm -rf .git`
- initialize a new git repo: `git init`
- stage all changes: `git add .`
- commit the changes: `git commit -m [some message here]`

From here, you can create a repo on GitHub and push to that.

Once you have completed the setup of your project directory:

- run command `npm install`. This will install all require modules

## Project tasks (scripts)
**build:** compiles ts code to javascript and prepares it for espruino use<br />
**deploy:** combines the build and send-to-espruino-console tasks<br />
**espruino-console:** runs Espruino console (check\adjust env-config.yaml config file)<br />
**send-to-espruino-console:** uploads compiled code to board (run espruino console before using this command). Once you run this command then switch back to `espruino-console` view<br />

## Sending code to the Espruino
The Gulp tasks expect the main source file to be `app.ts`. This should either have all of your code or it should import code from other source files. When ready to test the code on the Espruino, open the Espruino console:<br />
&nbsp;&nbsp;&nbsp;&nbsp;```npm run espruino-console```<br />
Next, compile the Typescript to Javascript and send the compiled code to the Espruino. Both can be done together in one step:<br />
&nbsp;&nbsp;&nbsp;&nbsp;```npm run deploy```<br />
or in two steps:<br />
&nbsp;&nbsp;&nbsp;&nbsp;```npm run build```<br />
&nbsp;&nbsp;&nbsp;&nbsp;```npm run send-to-espruino-console```<br />

## espruino-cli
```bash
# List what ports are available
espruino --list

# Connect to Espruino and provide a REPL (Ctrl-C exits)
espruino -p your_port

# Connect to Espruino and upload a file
espruino -p your_port code.js

# Connect to Espruino, provide a REPL, and upload the file whenever it changes
espruino -p your_port -w code.js
```

## More Information Links
espruino-cli: https://github.com/espruino/EspruinoTools<br />
Espurino Pico: https://www.espruino.com/Pico<br />
Espurino Pico pinout: https://www.espruino.com/Pico#pinout<br />
Espruino API Reference: https://www.espruino.com/Reference#software<br />
