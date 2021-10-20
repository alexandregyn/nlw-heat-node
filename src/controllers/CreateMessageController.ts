import { Request, Response,  } from "express";
import { CreateMessageServive } from "../services/CreateMessageService";

class CreateMassegeController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;
    const service = new CreateMessageServive();
    const result =  await service.execute(message, user_id);
    return response.json(result);
  }
}

export { CreateMassegeController }