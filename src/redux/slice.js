import { nanoid } from "nanoid";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: [],
    filter: ""
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        setFilter: (state, { payload }) => { state.filter = payload },
        setContacts: (state, { payload }) => {
            state.contacts.push({ id: nanoid(), ...payload })
        },
        deleteContact: (state, { payload }) => { state.contacts = state.contacts.filter((el) => el.id !== payload) },
    }
})

export const reducer = contactSlice.reducer;
export const { setFilter, deleteContact, setContacts } = contactSlice.actions;
