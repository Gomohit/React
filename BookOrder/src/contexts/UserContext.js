import { createContext,useContext } from "react";


export const UserContext=createContext({
    currentUser:[],
    users:[],
    books:[],
    addLogindetails:(name,email,book)=>{},
    deleteUserdetails:(id)=>{},
    allBookdetails:(id)=>{},
})

export const UserProvider=UserContext.Provider

export const useUser=()=>{
    return useContext(UserContext)
}