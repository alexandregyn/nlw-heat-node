import { Request, Response,  } from "express";
import { AuthenticateUserSercice } from "../services/AuthemticateUserService";

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { code } = request.body;
    const service = new AuthenticateUserSercice();
    const result = await service.execute(code);
    return response.json(result);
  }
}

export { AuthenticateUserController }