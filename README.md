# express_Sequelize_RunningQueries_QueryAllActors
An express app utilizing sequelize to connect to mysql and running specific queries. 

COMMAND PROMPT

(1) Run the following to navigate to your Desktop: 

    cd Desktop

(2) Create a new folder on desktop: 

    mkdir Express

(3) Navigate to the Express directory: 

    cd Express

(4) Run the following command to install the Express generator globally onto your computer: 

    npm install express-generator -g

(5) Enter the following command to generate the Express starter app. This will set the view to use Handlebars and will name the app express_Sequelize_RunningQueries_QueryAllActors: 

    express --view=hbs express_Sequelize_RunningQueries_QueryAllActors

(6) Once the process is complete, navigate into the express_Sequelize_RunningQueries_QueryAllActors directory: 

    cd express_Sequelize_RunningQueries_QueryAllActors

(7) Now in the express_Sequelize_RunningQueries_QueryAllActors directory, run the following: 

    npm install

(8) Install Nodemon globally: 

    npm install -g nodemon
    
(9) Install Nodemon as a devDependency in the package.json file within the express_RunningQueries_QueryAllActors directory:

    npm install -save-dev nodemon
    
(10) Install mysql2:

    npm install --save mysql2

(11) Install sequelize: 

    npm install --save sequelize@5.15.1

(12) Open in VS code:

    code . 


VS CODE

(13) Navigate to the routes/index.js file and update.: ![open index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68560100-8921c880-040d-11ea-883a-9fff7d4ec784.JPG)

(14) Require mysql2 in routes/index.js file: ![require mysql2 in index js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68560131-ab1b4b00-040d-11ea-966e-17847dcee166.JPG)

COMMAND PROMPT

(15) Install Sequelize CLI commands globally onto your computer: 

    npm install -g sequelize-cli

(16) Create necessary sequelize folders and filed in project:

    sequelize init
    

VS CODE

(17) Open config/config.json file and change settings to connect to the database: ![open config json file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68606621-d1c49a80-047c-11ea-8b7c-43870e26a8bc.JPG)

![update database info in config json file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68606810-3da70300-047d-11ea-9fa8-436b64480fc8.JPG)

COMMAND PROMPT

(18) Install mysql2 globally so sequelize CLI will be able to connect to the database:

    npm install -g mysql2
    
(19) Install sequelize-auto tool to generate model files: 

    npm install -g sequelize-auto


COMMAND PROMPT

(20) Generate a model file for the actor table. (-h: IP/Hostname; -d: Database; -u: Username for database; -x: Password for database; -o: directory to place the models; -t: comma-seperated names of tables to import):  

    sequelize-auto -h localhost -d sakila -u root -x Password1! -o "./models" -t actor
    
VS CODE

(21) Open app.js file at the root of the project and include the './model" folder so that the models are available everywhere in the application: ![open app js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607026-b3ab6a00-047d-11ea-8968-ade3d0a43943.JPG)

![require models in app js file (express_Sequelize_RunningQueries_QueryAllActors)](https://user-images.githubusercontent.com/35668707/68607590-ef92ff00-047e-11ea-80bb-b2b0401eb61e.JPG)

(22) Add sequelize sync code above module.exports in the app.js file to ensure that the tables within the models in the project are the same as in the database.: 

COMMAND PROMPT

(22) Run nodemon in terminal to see DB sync'd up: 


NODEMON NOTE

Sometimes nodemon crashes in Windows 10 and there is a simple fix:

(1) Open Task manager (press Ctrl+Alt+Delete)

(2) Select the 'Processes tab'

(3) Search for 'Node.js: Server-side JavaScript'

(4) Select it and click on 'End task' button

Now you can run npm start.
