import { Model } from "objection";
import knex from "../knex";

import Code from "./Code";

Model.knex(knex);

class UserCode extends Model {
  static get tableName() {
    return "user_codes";
  }

  static relationMappings = {
    code: {
      relation: Model.BelongsToOneRelation,
      modelClass: Code,
      join: {
        from: "user_codes.codeId",
        to: "codes.id",
      },
    },
  };
}

export default UserCode;
