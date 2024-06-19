import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  address: {
    province: '',
    district: '',
    subDistrict: '',
    postCode: '',
    village: '',
    rt: '',
    rw: '',
  },
  subscriptionDetail: {
    numOfPeople: null,
    mealsPerWeek: null,
    totalServing: null,
    boxPrice: null,
    pricePerServing: null,
    shippingPrice: null,
    totalPrice: null,
    preferences: [],
  },
  subscriptionDelivery: {
    date: '',
    totalRecipe: null,
    recipe: [],
  },
};

const userSubscriptionSlice = createSlice({
  name: 'userSubscription',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setSubscriptionDetail: (state, action) => {
      state.subscriptionDetail = action.payload;
    },
    setSubscriptionDelivery: (state, action) => {
      state.subscriptionDelivery = action.payload;
    },
    resetUserSubscription: (state) => {
      state.user = initialState.user;
      state.address = initialState.address;
      state.subscriptionDetail = initialState.subscriptionDetail;
      state.subscriptionDelivery = initialState.subscriptionDelivery;
    },
  },
});

export const { setUser, setAddress, setSubscriptionDetail, setSubscriptionDelivery, resetUserSubscription } =
  userSubscriptionSlice.actions;
export const selectUserSubscription = (state) => state.userSubscription;
export const userSubscriptionReducer = userSubscriptionSlice.reducer;
