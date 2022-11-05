import { Model } from "objection";
import knex from "../knex";

import Item from "./Item";

Model.knex(knex);

class Code extends Model {
  static get tableName() {
    return "codes";
  }

  static relationMappings = {
    item: {
      relation: Model.BelongsToOneRelation,
      modelClass: Item,
      join: {
        from: "codes.itemId",
        to: "items.id",
      },
    },
  };
}

export default Code;
