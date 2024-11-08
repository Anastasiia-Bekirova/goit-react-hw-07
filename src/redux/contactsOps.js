
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://672944316d5fa4901b6cae90.mockapi.io";



export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
 });

export const addContact = createAsyncThunk("contacts/addContact",
    async (finalContact,thunkAPI) => { 
         try {
        const response = await axios.post("/contacts", finalContact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
    });

export const deleteContact = createAsyncThunk("contacts/deleteContact",  
    async (contactId, thunkAPI) => { 
         try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
        
    }
});