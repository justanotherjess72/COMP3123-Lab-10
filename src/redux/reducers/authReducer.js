const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        // Modify the login check to use 'admin' as the username and 'password' as the password
        if (action.payload.username === 'admin' && action.payload.password === 'password') {
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload.username,
          };
        } else {
          return state;
        }
      default:
        return state;
    }
  };
  
  export default authReducer;
  