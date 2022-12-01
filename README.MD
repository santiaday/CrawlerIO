<h1>Getting Started </h1>

1. Clone the repo to a local directory

2. Open two different command prompts

3. In one of the command prompts, cd into the "app" directory and run "pip install -r requirements.txt" to install all python dependencies.

    -Run "python -m spacy download en_core_web_sm"

    -In the same command prompt, run "set FLASK_APP=app" and then "set FLASK_ENV=development"
    
    -After that, run "flask run"
    
    -If you get the error "An attempt was made to access a socket in a way forbidden by its access permissions" follow below  
    
        1. Open a new command prompt as an admin
        
        3. Run "netstat -ano | findstr :5000" and then, using the PID found at the far left of the result, run "taskkill /F /PID [PID HERE]"
        
        5. Try running "flask run" again
        
    -If the flask run ran correctly, it should print something like "Running on http://xxx.x.x.x:5000
    
4. In the second command prompt, cd into the client directory and run "npm install"

    -After running npm install, run "npm start"
    
    -The frontend should open in a new tab
    
5. Type in any term into the search bar and press "Search"

    -If everything worked correctly, you should see the results pop up


