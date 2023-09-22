import { IUser } from "../interface/user";

export class User implements IUser {
  _id: string;
  firstName: string;
  lastName: string;
  picture: string;
  email: string;
  phone: string;
  createdAt: string;
  price: number;

  constructor({
    _id,
    firstName,
    lastName,
    picture,
    email,
    phone,
    createdAt,
    price,
  }: IUser) {
    this._id = _id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.picture = picture;
    this.email = email;
    this.phone = phone;
    this.createdAt = createdAt;
    this.price = price;
  }

  static fromJson(json: IUser) {
    return new User(json);
  }
}
