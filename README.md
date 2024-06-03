# Movies Oasis API

This API when used will provide its user with new and older movies on the market. The API is a RestAPI architecture design with various endpoints for getting list of all movies, genre, info about movie director. It also has enpionts for ``CRUD`` actions pertaining to users of the app which develpoer will need in the frontend to design user reqistration, allowing user to add favorite movies collections to thier favorite movie array, edit user details and unregistering users. Data are stored in MongoDB, this means you have to work with just two collections namely ``movies collection`` and ``users collcetion`` in a database called ``movieDB``.

Below you will find how you can install an use this API including examples of request and response types.

Checkout the API live [follow link](https://movie-api-h54p.onrender.com/documentation.html)

Copy to clone this repository: <https://github.com/NodEm9/movie_api.git>

## Tech Stack

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### Example Usage

The API assumes that you have Node.js install on your OS already for it to work, if not you can download [Node.js](https://nodejs.org/en) here. Be sure to download the one with ``(LTS)`` which stands for ``Long Term Support``. After download click on the installer and follow the instructuions to properly have it install in your computer.

**For** quick start go ahead and clone the repository with the link above or copy it directly from the code section in the project GitHub repository or fork the repository and on your terminal use ``git clone`` command alone with the copied repository link to clone the project, after that run ``npm install`` to install all the dependencies into your project.

**Note:** ``If you decide to set up your project    differently by starting from scratch but only want to use this API as a guide, you can skip this installation tutoral``.

There a few dependencies you will need to make this project work like ``passport``, ``jsonwebtoken`` and a host of other. 
You will be building your own project so you could ass as many as more depencies as you want but what you will need for this API to work are already in the package.json file.

#### index.js**

<img src="img/server-file.png" alt="server code image" width="600" height="400"/>