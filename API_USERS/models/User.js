var knex = require("../database/connection");
var bcrypt = require("bcrypt");
const PasswordToken = require("./PasswordToken");

class User {
  async findAll() {
    try {
      var result = await knex
        .select(["id", "email", "name", "role"])
        .table("users");
      return result;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async findById(id) {
    try {
      var result = await knex
        .select(["id", "email", "name", "role"])
        .where({ id: id })
        .table("users");
      if (result.length > 0) {
        return result[0];
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async findByEmail(email) {
    try {
      var result = await knex
        .select(["id", "email", "password", "name", "role"])
        .where({ email: email })
        .table("users");
      if (result.length > 0) {
        return result[0];
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async update(id, name, email, role) {
    var user = await this.findById(id);

    if (user != undefined) {
      var editUser = {};

      if (email != undefined) {
        if (email != user.email) {
          var result = await this.findEmail(email);
          if (result == false) {
            editUser.email = email;
          } else {
            return { status: false, err: "O e-mail já está cadastrado" };
          }
        }
      }

      if (name != undefined) {
        editUser.name = name;
      }

      if (role != undefined) {
        editUser.role = role;
      }

      try {
        await knex.update(editUser).where({ id: id }).table("users");
        return { status: true };
      } catch (err) {
        return { status: false, err: err };
      }
    } else {
      return { status: false, err: "O usuário não existe!" };
    }
  }

  async new(email, password, name) {
    try {
      var hash = await bcrypt.hash(password, 5);
      await knex
        .insert({ email, password: hash, name, role: 0 })
        .table("users");
    } catch (err) {
      console.log(err);
    }
  }

  async findEmail(email) {
    try {
      var result = await knex.select("*").from("users").where({ email: email });

      if (result.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async delete(id) {
    var user = await this.findById(id);

    if (user != undefined) {
      try {
        await knex.delete().where({ id: id }).table("users");
        return { status: true };
      } catch (err) {
        return {
          status: false,
          err: "O usuário não existe, portando não pode ser deletado.",
        };
      }
    } else {
      return {
        status: false,
        err: "O usuário não existe, portando não pode ser deletado.",
      };
    }
  }

  async changePassword(newPassword, id, token) {
    var hash = await bcrypt.hash(newPassword, 5);
    await knex.update({ password: hash }).where({ id: id }).table("users");
    await PasswordToken.setUsed(token);
  }

  async createToken(email) {
    var user = await this.findByEmail(email);

    if (user != undefined) {
      try {
        var token = Date.now();
        await knex
          .insert({
            user_id: user.id,
            used: 0,
            token: token,
          })
          .table("passwordtokens");
        return { status: true, token: token };
      } catch (err) {
        console.log(err);
        return { satus: false, err: err };
      }
    } else {
      return {
        status: false,
        err: "O e-mail passado não existe no banco de dados.",
      };
    }
  }
}

module.exports = new User();
