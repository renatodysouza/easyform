import { ConfigInput } from "./ConfigInput";

export interface Config {
  style: string,
  fields: Array<ConfigInput[]>;
}