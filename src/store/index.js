import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import userSlice from './slice/user'
export const store = configureStore({
  reducer: {
    user: userSlice,
  },
})
setupListeners(store.dispatch)
