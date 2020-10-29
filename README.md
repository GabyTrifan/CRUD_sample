# About this project
Consists in a sample REST API provinding a CRUD functionality (Create Remove Update Delete) with simple notes, which are simple JSON objects with a name and content property.
To start the server you must have ***Nodejs*** installed (greater than 11) along with NPM

### Install dependencies
```bash
    npm i --save
```
### Run App
```bash
    npm start
```
#### Database Connection
This Project supports MongoDB databases,the Database connection URI must be declared in the `DATABASE` environment variable
#### API Routes
> `/api/notes`    __which has__ the following requests:
* **POST**, where you can upload a Note
* **GET**, to get all the notes made
> `/api/notes/<name>`, where `<name>` is the note's name
> This note has the following **requests**:
* **GET** Request to get a specific note
* **PUT** Request where you can update the note's content/name
* **DELETE** Request to delete a specific note

#### JSON Request Object
* Must have the `"name"` and `"content"` properties, which support Strings
* The Strings must have at least 3 characters
Example:
```json
{
    "name":"Lorem",
    "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}
``` 