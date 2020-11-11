# CS 262 Monopoly Webservice

This is the data service application for the 
[CS 262 sample Monopoly project](https://github.com/calvin-cs262-organization/monopoly-project),
 which is deployed here:
          
- <https://arcane-earth-32186.herokuapp.com/>

It is based on the standard Heroku with Node.js tutorial.

- <https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory
and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database server,
user and password are stored as Heroku configuration variables rather than in this 
(public) repo.

ANSWERS FOR HOMEWORK03

<https://arcane-earth-32186.herokuapp.com/players>
<https://arcane-earth-32186.herokuapp.com/players/1>
<https://arcane-earth-32186.herokuapp.com/human_games>
<https://arcane-earth-32186.herokuapp.com/>


b. "/" and "/human_games" are both idempotent and nullipotent. "/players" allows get requests (idempotent and nullipotent) but also allows put, post, and delete requests. Both delete and put are idempotent but not nullipotent and post requests are neither.

c. This service is RESTful. Requests are stateless, there is seperation between client and server, the server uses only standard HTTP methods, and the server uses a url paths to serve data files.

d. No, there is no evidence of impedence mismatch