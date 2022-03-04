import axios from "axios"
import { useParams } from "react-router-dom"

const API = 'https://youtube.googleapis.com/youtube/v3/'
const KEY = '&key=AIzaSyACxWmywexUO2PdB-N7BdEKriLQZcdyRCM'
const RESULTS = 20
const GET_ALL_VIDEO = API + 'search?&part=snippet&maxResults=' + RESULTS + '&type=video' + KEY + '&q='
const GET_INFO_BY_ID = API + 'videos?part=snippet%2CcontentDetails%2Cstatistics' + KEY + '&id='

export const getAllVideoOrByName = (name = '') => {
    return axios.get(GET_ALL_VIDEO + name)
}

export const getVideoById = (id) => {
    return axios.get(GET_INFO_BY_ID + id)
}