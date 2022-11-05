import { Model } from "objection";
import knex from "../knex";

Model.knex(knex);

class Penguin extends Model {
  static get tableName() {
    return "users";
  }
}

export default Penguin;
