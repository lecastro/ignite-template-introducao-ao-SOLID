import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(request: Request, response: Response): Response {

    try {
      const { name, email } = request.body;
      const user = this.createUserUseCase.execute({ name, email });

      if (typeof user === "undefined") {
        return response.status(404).json({ error: 'user not found' });
      }

      return response.status(201).json(user);

    } catch (error) {

      return error;
    }
  }
}

export { CreateUserController };
