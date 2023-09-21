import { ICategory } from "../interface/category";

export class Category implements ICategory {
  _id: string;
  name: string;

  constructor({ _id, name }: ICategory) {
    this._id = _id;
    this.name = name;
  }

  static fromJson(json: ICategory) {
    return new Category(json);
  }
}
