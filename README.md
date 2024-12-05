Concepts Demonstrated
Redux:
The application uses Redux for state management. Here's how it's implemented:

State: The global state of the application is managed by Redux. The state stores the authentication token (JWT) upon successful login.
Store: The store holds the entire state of the app and is created using createStore().
Actions: Actions (LOGIN and LOGOUT) are dispatched to update the authentication state in the store.
Reducers: The authReducer handles changes to the authentication state, updating the token based on the dispatched action.
Dispatch: When the user logs in successfully, the token is dispatched to the store, and the state is updated.
Subscribe: Components can subscribe to changes in the Redux store, which triggers re-rendering when the state is updated.
JWT (JSON Web Token):
The app simulates JWT-based authentication by issuing a token after the user logs in with the correct credentials. The JWT is stored in localStorage and Redux.

Login: The user enters their credentials (username and password).
JWT Token: Upon successful login, a simulated JWT token is generated and stored in both localStorage and Redux state.
Protected Route: The "Welcome" page is protected by checking the token in the state. If the token is missing or invalid, the user is redirected back to the login page.
Usage
Login:
Open the app in your browser.
Enter the following credentials to log in:
Username: admin
Password: password
Upon successful login, you will be redirected to the "Welcome" page.
Protected Route:
The "Welcome" page is protected by the JWT token. If no valid token is found, you will be redirected to the login page.
