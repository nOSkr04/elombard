import { IAuction } from "../interface/auction";

export class Auction implements IAuction {
  _id: string;
  name: string;
  livePrice: number;
  timeLeft: string;
  img: string;
  imgs: string[];
  isBoxed: boolean;
  imei: string;
  problems: string[];

  constructor({
    _id,
    name,
    livePrice,
    timeLeft,
    img,
    imgs,
    isBoxed,
    imei,
    problems,
  }: IAuction) {
    this._id = _id;
    this.name = name;
    this.livePrice = livePrice;
    this.timeLeft = timeLeft;
    this.img = img;
    this.imgs = imgs;
    this.isBoxed = isBoxed;
    this.imei = imei;
    this.problems = problems;
  }

  static fromJson(json: IAuction) {
    return new Auction(json);
  }
}
