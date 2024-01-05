import { StaticImageData } from "next/image";

export default interface Person {
  id: number,
  firstName: string,
  lastName: string,
  role: string,
  imageSrc: StaticImageData,
}