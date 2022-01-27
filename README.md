# Getting Started with Breadfast App

### Libraries 
This react project was created using: 
- ag-grid-react.
- antd
- redux-saga.
- react-router-dom.
- axios

### Handled Features
- Fetches the data of "Products" and creates a List view.
- Creates List view supported with search filter.
- Creates List row actions (Edit, Delete, view).
- App Store Management (redux-saga as recommended) to manage product (fetching, deleting, updating) through BE APIs.
- Handle App Routing.
- Basic UI.
- using Antd UI for the following:
  - Delete - confirmation modal
  - Edit - Form
  - View - modal 
  - icons

### Wireframe
architecture component for Breadfast App

![alt text](https://github.com/MaramHoraiz/breadfast-app/blob/master/public/Breadfast-app-wireframe.png)
### The APIs

- Get all Products 'https://jsonplaceholder.typicode.com/posts (GET)'
- Delete Product by id https://jsonplaceholder.typicode.com/posts/1 (DELETE)
- Edit Product by id https://jsonplaceholder.typicode.com/posts/1 (GET & **POST**). 
    P.S. the mentioned method it has 404 response, intead i used **PUT** method.
