import { IUser } from "../interface/user";

export class User implements IUser {
  _id: string;
  name: string;
  picture: string;
  email: string;
  phone: string;
  registered: string;
  price: number;

  constructor({ _id, name, picture, email, phone, registered, price }: IUser) {
    this._id = _id;
    this.name = name;
    this.picture = picture;
    this.email = email;
    this.phone = phone;
    this.registered = registered;
    this.price = price;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
