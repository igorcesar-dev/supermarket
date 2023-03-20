var knex = require("../database/connection");
var User = require("./User");

class PasswordToken {
  async validity(token) {
    try {
      var result = await knex
        .select()
        .where({ token: token })
        .table("passwordtokens");

      if (result.length > 0) {
        var tk = result[0];

        if (tk.used) {
          return { status: false };
        } else {
          return { status: true, token: tk };
        }
      } else {
        return { status: false };
      }
    } catch (err) {
      console.log(err);
      return { status: false };
    }
  }

  async setUsed(token){
    await knex.update({used: 1}).where({token: token}).table("passwordtokens");
  }
}

module.exports = new PasswordToken();
