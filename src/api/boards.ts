import axios, { AxiosPromise } from "axios";
import { BASE_API_URL } from "../../api.config";

const boardsUrl = `${BASE_API_URL}/boards`;

export async function getBoards(): AxiosPromise {
  return await axios.get(boardsUrl);
}

export async function sendSaveBoard(board: Board): AxiosPromise {
  return await axios.post(boardsUrl, board);
}
