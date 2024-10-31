import { createSlice } from '@reduxjs/toolkit'
import { request, setToken as _setToken, getToken } from '@/utils'

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
  },
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

// 异步获取函数
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // const res = await request.post('/authorizations', loginForm);
    const res = { data: { token: new Date().valueOf() + '' } } // !debug
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }
export default userReducer
