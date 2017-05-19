# Envoy FED Candidate Demo
This is a demo project to gauge a candidate's HTML, CSS and JS knowledge.

It uses Node and npm modules to setup localserver.

## Fork the repository
This repository is read only so to push your changes you'll need to fork it.

* In Bitbucket click the `+` button on the left hand navigation
* In the _GET TO WORK_ section, choose _Fork this repository_
* In your forked repo click the _Settings_ cog in the left hand navigation and choose _General_ / _User and group access_
  Give read access to `lukaszpietraszek` and `timhillman`

## Getting Started
The project is a Node project. 

Please make use you have it installed it on your local machine.

To install all necessary npm modules run: 
`npm install`

Start up the server by running
`npm start`

Now you should have access to local server at: `http://127.0.0.1:8080/`

It will watch for all the changes in less folder - however it won't auto-reload your browser.

**There is no need to install Grunt/Gulp/Webpack**

## Tips
* Try to have a least one commit per task so that we can see the work progress
Use descriptive commit comments
* It's up to you whether you want to push regularly or once you are finished with all of your commits
* Bootstrap 3 and jQuery are already added in each HTML file
* Use Less preprocessor to style it main.less file is already included in less folder
* Bare in mind performance and site loading time

## Tasks
### 1. Create product list page
* Create a full width page with a header, a footer and a main section in index.html.
*The main section should contain a content section and a sidebar. 
* Set the width of the content section to 70% and the sidebar section to 30%. 
* Content section should be populated with at least 3 products using grid view
* For each product include image thumbnail, product name, product price and 'view more' button - linked to `product.html` 
* Images are located in img folder
* It should be fully responsive
### 2. Create Product details page
* Use `product.html` file
* Implement 2 column (70% and 30% width)layout for desktop and 1 column layout for mobile
* Under main image add a carousel with thumbnails. (you can use same images as on PLP)
* On click of thumbnail main image should be replaced with clicked image
* Smaller column should contain product details such us: price, stock level, and add to basket button
### 3. Add Accordion to PDP using content populated via AJAX
* Demonstrate that you understand Git branching by creating a new feature branch with a descriptive name.
* Add some FAQ data to `faq.json` located in data folder 
* Use `product.html` same file as used in task#2 
* Create accordion with FAQ about product in form of accordion - content should be populated from `products.json`
* By default all answers should be collapsed
on click of question - accordion should open answer and collapse previously opened questions if any
* Create a pull request for this branch
## Finished
Once you've completed the above, please email `stephanie.wilson@envoydigital.com` so that we know your work is ready to be reviewed.