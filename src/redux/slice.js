import { addNewContactThunk, deleteContactThunk, getAllthunk } from "./thunk";
import { handleFulfilled, handlePending, handleRejected, handlerAddNewContact, handlerAllProducts, handlerDeleteContact } from "./handlers";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    contacts: {
        items: [],
        isLoading: false,
        error: null
    },
    filter: ""
};

const contactSlice = createSlice({
    name: 'contact',
    initialState,

    extraReducers: (builder) => {
        builder
            .addCase(getAllthunk.fulfilled, handlerAllProducts)
            .addCase(addNewContactThunk.fulfilled, handlerAddNewContact)
            .addCase(deleteContactThunk.fulfilled, handlerDeleteContact)
            .addMatcher((action) => action.type.endsWith('/pending'),
                handlePending
            )
            .addMatcher((action) => action.type.endsWith('/rejected'),
                handleRejected
            )
            .addMatcher((action) => action.type.endsWith('/fulfilled'),
                handleFulfilled
            )
    },
    reducers: {
        setFilter: (state, { payload }) => { state.filter = payload },

        deleteContact: (state, { payload }) => { state.contacts.items = state.contacts.items.filter((el) => el.id !== payload) },
    }
})

export const reducer = contactSlice.reducer;
export const { setFilter, deleteContact, setContacts } = contactSlice.actions;
