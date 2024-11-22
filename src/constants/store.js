import { configureStore, createSlice } from "@reduxjs/toolkit";
import { iconsItems } from "./iconsItems";

// Slice 생성
const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    isSidebarOpen: false,
    items: iconsItems, // iconsItems에서 가져온 데이터
  },
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

// Redux Store 설정
const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});

// 액션과 스토어 내보내기
export const { toggleSidebar } = sidebarSlice.actions;
export default store;
