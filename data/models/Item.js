import { Model } from "objection";
import knex from "../knex";

Model.knex(knex);

class Item extends Model {
  static get tableName() {
    return "items";
  }
}

export default Item;
