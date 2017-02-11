Rem Installing all packages
Rem you must have Visual Studio 2015 and created empty project 
Rem Install NodeJS version 6.9.5 from the web site
Rem https://nodejs.org/en/
pause
call npm install underscore --save
pause
call npm install express --save
call npm install vash --save
pause
Rem Install Grunt
call npm install grunt-nodemon --save-dev 
call npm install grunt --save-dev
pause
Rem Install Sessions
call npm install connect-flash --save 
call npm install body-parser --save
call npm install cookie-parser --save 
call npm install express-session --save
pause
Rem Install the database
call npm install mongodb --save
pause
Rem install client modules
call bower install underscore
call bower install bootstrap
Rem Modules are installed. Validate installation in VS2015 in npm packages treeview
pause




