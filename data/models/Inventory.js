import { Model } from "objection";
import knex from "../knex";

Model.knex(knex);

class Inventory extends Model {
  static get tableName() {
    return "inventories";
  }

  static get idColumn() {
    return ["userId", "itemId"];
  }
}

export default Inventory;
