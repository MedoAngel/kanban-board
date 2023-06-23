import axios, { AxiosPromise } from "axios";
import { BASE_URL } from "../../server.config";

const cardsUrl = `${BASE_URL}/cards`;

export async function getColumnCards(column: Column): AxiosPromise {
  return await axios.get(`${cardsUrl}?columnId=${column.id}&boardId=${column.boardId}`);
}

export async function sendSaveCard(card: Card): AxiosPromise {
  return await axios.post(cardsUrl, card);
}
