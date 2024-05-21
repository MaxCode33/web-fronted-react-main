import axios from "axios";
import { CardType } from "../@types/types";

const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards";
const createUrl = `${baseUrl}/create`

export const getCards = () => axios.get(baseUrl);
export const getCardById = (id: string) => axios.get(baseUrl + `/${id}`);
export const createCard = (data:CardType) => axios.post(createUrl, data)
