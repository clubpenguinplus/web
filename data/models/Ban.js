import { Model } from "objection";
import knex from "../knex";

Model.knex(knex);

class Ban extends Model {
  static get tableName() {
    return "bans";
  }
}

export default Ban;
