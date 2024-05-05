# YogaWebsite
A Yoga Website Example. Tech Stack: Docker, Gulp, Webpack, Python (Flask), SCSS, Bootstrap, HTML

# Commands
Build: docker build -t <name> .
Run: docker run -p 5000:5000 <name>
Remove Images: docker image prune

In Root directory: docker run -p 5000:5000 -v ${pwd/PWD}/src:/app/src -v ${pwd/PWD}/app.py:/app/app.py <name>
In Root directory: docker run -p 5000:5000 -v ${pwd/PWD}/dist:/app/dist -v ${pwd/PWD}/app.py:/app/app.py <name>


# NPM Stuff
npm init

npm i --global-cli
npm i --save-dev gulp
npm i --save-dev gulp-webp
npm i --save-dev sass
npm i --save-dev webpack
npm i --save-dev webpack-cli
npm i --save-dev webpack-stream
npm i --save-dev concurrently
npm i --save-dev css-loader
npm i --save-dev style-loader
npm i --save-dev sass-loader
npm i --save-dev browser-sync


