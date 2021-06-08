import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const newCategory = new Category();

    Object.assign(newCategory, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(newCategory);

    return newCategory;
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }
}
