import { askAICofounder } from "./ai.service";

export const askCofounder = async (message: string) => {

  const response = await askAICofounder(message);

  return response;

};