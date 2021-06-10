import { Request, Response } from "express";

import { Category } from "../../model/Category";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  handle(request: Request, response: Response): Response<Category> {
    const { name, description } = request.body;

    const newCategory = this.createCategoryUseCase.execute({
      name,
      description,
    });

    return response.status(201).json(newCategory);
  }
}
