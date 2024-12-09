import api from "@/Config/Api"
import { ACCEPT_INVITATION_REQUEST, ACCEPT_INVITATION_SUCCESS, CREATE_PROJECT_REQUEST, CREATE_PROJECT_SUCCESS, DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, FETCH_PROJECT_BY_ID_REQUEST, FETCH_PROJECT_REQUEST, FETCH_PROJECT_SUCCESS, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS, SEARCH_PROJECT_REQUEST, SEARCH_PROJECT_SUCCESS } from "./ActionType"

export const fetchProjects =({category,tags}) =>async(dispatch)=>{
    dispatch({type:FETCH_PROJECT_REQUEST})
    try {
        const {data} =await api.get("/projects",{params:{category,tags}})
        console.log("all projects",data)
        dispatch({type:FETCH_PROJECT_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
} 

export const searchProjects =(keyword) =>async(dispatch)=>{
    dispatch({type:SEARCH_PROJECT_REQUEST})
    try {
        const {data} =await api.get("/projects/search?keyword="+keyword)
        console.log("search projects",data)
        dispatch({type:SEARCH_PROJECT_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
} 


export const createProjects =({projectData}) =>async(dispatch)=>{
    dispatch({type:CREATE_PROJECT_REQUEST})
    try {
        const {data} =await api.post("/projects",projectData)
        console.log("create projects",data)
        dispatch({type:CREATE_PROJECT_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
} 


export const ProjectById =({projectId}) =>async(dispatch)=>{
    dispatch({type:FETCH_PROJECT_BY_ID_REQUEST})
    try {
        const {data} =await api.get("/projects/projectId"+projectId)
        console.log("projects",data)
        dispatch({type:FETCH_PROJECT_SUCCESS,projects:data})
    } catch (error) {
        console.log("error",error)
    }
} 

export const inviteProject =({email,projectId}) =>async(dispatch)=>{
    dispatch({type:INVITE_TO_PROJECT_REQUEST})
    try {
        const {data} =await api.post("/projects/invite"+{email,projectId})
        console.log("invite projects",data)
        dispatch({type:INVITE_TO_PROJECT_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error)
    }
} 

export const acceptInvite =({invitationToken,navigate}) =>async(dispatch)=>{
    dispatch({type:ACCEPT_INVITATION_REQUEST})
    try {
        const {data} =await api.get("/projects/acceptInvite",{
            params:{
                token:invitationToken
            }
        })
        navigate("/project"+data.projectId)
        console.log("invite projects",data)
        dispatch({type:ACCEPT_INVITATION_SUCCESS,payload:data})
    } catch (error) {
        console.log("error",error)
    }
} 
