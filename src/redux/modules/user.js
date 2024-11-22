import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const initialState = {
  isLogged: false,
  error: null,
};

export const __login = createAsyncThunk("login", async (payload, api) => {
  const { email, password } = payload;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const { email: userEmail } = userCredential.user;
    return userEmail;
  } catch (err) {
    console.error(err);
    return api.rejectWithValue(err);
  }
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogged = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // 로그인
      .addCase(__login.fulfilled, (state, action) => {
        state.isLogged = true;
        state.error = null;
        localStorage.setItem("isLogged", true);
      })
      .addCase(__login.rejected, (state, action) => {
        state.isLogged = false;
        state.error = action.payload;
      });
  },
});

export const { setLogin } = userSlice.actions;

export default userSlice.reducer;
