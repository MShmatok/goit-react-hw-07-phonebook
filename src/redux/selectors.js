import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = state => state.contacts.items;
export const selectorIsLoading = state => state.contacts.isLoading;
const selectFilter = state => state.filter;

export const selectorFilteredContacts = createSelector([selectAllContacts, selectFilter], (allContacts, filter) => {
    return allContacts.filter(item => {
        return item.name
            .trim()
            .toLocaleLowerCase()
            .includes(filter.trim().toLocaleLowerCase());
    })
});