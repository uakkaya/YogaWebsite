# YogaWebsite
A Yoga Website Example. Tech Stack: Docker, Gulp, Webpack, Python (Flask), SCSS, Bootstrap, HTML

# Commands
Build: docker build -t <name> .
Run: docker run -p 5000:5000 <name>
Remove Images: docker image prune

In Root directory: docker run -p 5000:5000 -v ${pwd}/src:/app/src -c ${pwd}/app.py:/app/app.py <name>
