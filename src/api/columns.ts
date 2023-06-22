import axios, { AxiosPromise } from "axios";
import { BASE_URL } from "../../server.config";

const columnsUrl = `${BASE_URL}/columns`;

export async function getBoardColumns(boardId: string): AxiosPromise {
  return await axios.get(`${columnsUrl}?boardId=${boardId}`);
}
