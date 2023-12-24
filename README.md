# Weather-Journal App Project

## Objective
An asynchronous web app that uses Web API and user data to dynamically update the UI.

## Instructions
first we need to install this node modules to be able to use it on the server side file: `express` , `body-parser` , `cors`.

This requires to build a server side and a client side and connecting them with each other using the API.

    1- create `server.js` file works as server side
    2- create `app.js` file works as client side

`server.js` file:
                    1-  create an object variable called `projectData`
                        to store the data on it.
                    2-  include the `express` , `body-parser` ,and 
                        `cors` modules using `require()` function 
                    3-  start up an instance of app using express()
                    4-  use `body-parser` module as middle-ware using
                        `app.use()`method and `bodyParser.urlencoded()`
                        method.
                    5-  allow cross origin using `cors` module that 
                        included using `app.use()`method
                    6-  Initialize the main project folder using
                        `app.use(express.static(folderName))`
                    7-  store the port holding the server on a 
                        variable.
                    8-  setup the server using `app.listen()` method.
                    9-  ask the client for a data using
                        POST Request:`app.post` and store the request's body on the `projctData` variable and print the variable to the console of the server side and send to the client that the Post request finished.
                   10-  create an api that send the `projectData`
                        variable to the client side using GET Request
                        `app.get()`.

`app.js` file:      
                    1-  create two variables which will contain the    
                        base URL and the API key.
                    1-  create a variable have the date of today as a
                        string.
                    2-  build a asynchronous function:

                                            1-  first, get the zip code
                                                the user entered on an textBox its id is "zip"
                                            2-  use fetch(link) 
                                                function to do a GET request from the link argument and wait until the request finished and store the return value on a variable
                                            3-  wait untill the data 
                                                converted to understandable object and store it on a variable.
                                            4-  use fetch to do a POST
                                                request to sent the body(object contains: the user feeling,temperature,the date of today) to the server side
                                            5-  use to fetch to do a
                                                GET request to get the 
                                                `ProjectData` object from the server side.
                                            6-  change the textContent
                                                for element with Ids:
                                                "date","temp","content".
                    3-  make an click event that will begin the work 
                        if the generate button clicked and call the async function inside it.
