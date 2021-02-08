import axios from 'axios';

const url = "https://opentdb.com/api.php";

export const api = axios.create({baseURL : url});