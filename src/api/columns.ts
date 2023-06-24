import axios, { AxiosPromise } from "axios";
import { BASE_API_URL } from "../../api.config";

const columnsUrl = `${BASE_API_URL}/columns`;

export async function getBoardColumns(board: Board): AxiosPromise {
  return await axios.get(`${columnsUrl}?boardId=${board.id}`);
}

export async function sendSaveColumn(column: Column): AxiosPromise {
  return await axios.post(columnsUrl, column);
}
