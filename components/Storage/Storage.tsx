import { IStorage } from "upcloud"

export const Storage = (props: IStorage) => {
  return <p>{props.title} <span>({props.size} GB)</span></p>
}