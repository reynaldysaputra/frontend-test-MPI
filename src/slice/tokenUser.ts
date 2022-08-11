import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenUser {
  token: string;
}

const initialToken = () => {
  const token: string = JSON.stringify(localStorage.getItem("tokenUser"));
  let tokenUser: TokenUser = {
    token: ""
  };  

  if(token) {
    tokenUser.token = JSON.parse(token);
  }

  return tokenUser.token;
}

const initialState: TokenUser = {
  token:  initialToken()
}

export const tokenUserSlice = createSlice({
  name: "tokenUser",
  initialState,
  reducers: {
    addTokenUser: (state, action: PayloadAction<TokenUser>) => {
      localStorage.setItem('tokenUser', action.payload.token);
      state.token = action.payload.token;
    },
    removeTokenUser: (state) => {
      localStorage.removeItem('tokenUser');
      state.token = "";
    }
  }
})

export const { addTokenUser, removeTokenUser } = tokenUserSlice.actions;
export default tokenUserSlice.reducer;