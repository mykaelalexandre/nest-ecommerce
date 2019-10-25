import axios from 'axios';
import { LoginDTO, RegisterDTO } from 'src/models/auth.model';
import {API_HOST} from "../environment";

export const login = async (credentials: LoginDTO) =>{
    try {
        const {data} = await axios.post(`${API_HOST}/auth/login`, credentials);

        return data;
    } catch (err) {
        console.log(err);
    }
};

export const register = async (credentials: RegisterDTO) => {
    try {
        const {data} = await axios.post(`${API_HOST}/auth/register`);
        return data;
    } catch (err){
        console.log(err);
    }
};