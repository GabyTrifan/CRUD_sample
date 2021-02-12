[![](https://tokei.rs/b1/github.com/TheSlayer-666/CRUD_Sample)](https://github.com/TheSlayer-666/CRUD_Sample)
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
> `/notes`    __which has__ the following requests:
* **POST**, where you can upload a Note
* **GET**, to get all the notes made
> `/notes/<name>`, where `<name>` is the note's name
> This note has the following **requests**:
* **GET** Request to get a specific note
* **PUT** Request where you can update the note's content/name
* **DELETE** Request to delete a specific note

#### JSON Request Object
* Must have the `"name"` and `"content"` properties, which support Strings
* The Strings must have at least 3 characters
##### Example:
```json
{
    "name":"Lorem",
    "content":"Lorem ipsum dolor sit amet, consectetur"
}
``` 
