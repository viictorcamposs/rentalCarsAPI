import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const categoriesRoutes = Router();

interface ICategoryProps {
  id: string;
  name: string;
  description: string;
  created_at: Date;
}

const categories: ICategoryProps[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const newCategory: ICategoryProps = {
    id: uuidv4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(newCategory);

  return response.status(201).json(newCategory);
});

export { categoriesRoutes };
