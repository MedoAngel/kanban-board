import axios, { AxiosPromise } from "axios";
import { BASE_URL } from "../../server.config";

const cardsUrl = `${BASE_URL}/cards`;

export async function getColumnCards(column: Column): AxiosPromise {
  const paramsList = [
    `columnId=${column.id}`,
    `boardId=${column.boardId}`,
    `_sort=position`,
    `_order=asc`,
  ];
  const params = paramsList.join("&");
  const requestLink = `${cardsUrl}?${params}`;

  return await axios.get(requestLink);
}

export async function sendSaveCard(card: Card): AxiosPromise {
  return await axios.post(cardsUrl, card);
}

export async function sendUpdateCard(card: Card): AxiosPromise {
  return await axios.put(`${cardsUrl}/${card.id}`, card);
}
