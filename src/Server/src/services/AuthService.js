const debug = require('debug')('app:AuthService');
const sql = require('mssql');
const Sequelize = require('sequelize');

function AuthService(db) {
  const UserData = db.user;
  function get() {
    return new Promise((resolve, reject) => {
      UserData.findAll().then((user) => {
        resolve(user);
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  function getById(id) {
    return new Promise((resolve, reject) => {
      UserData.getById(id).then((user)=>{
        resolve(user);
      }).catch((err)=>{
        reject(err);
      });
    });
  }

  function getByName(name) {
    return new Promise((resolve, reject) => {
      UserData.findOne({where: {name: name}}).then((user)=>{
        resolve(user);
      }).catch((err)=> {
        reject(err);
      });
    });
  }

  function save(data) {
    return new Promise((resolve, reject) => {
      UserData.findByPk(data.id).then((user) => {
        if (!user) {
          return UserData.create(data);
        } else {
          user.name = data.name;
          user.password = data.password;
          user.email = data.email;
         
          return user.save();
        }
      }).then((newUser) => {
        resolve(newUser);
      }).catch((err) => {
        reject(err);
      });


      // const request = new sql.Request();
      // let queryString = '';
      // if (!data.id) {
      //   queryString = `INSERT INTO UserData (name,email,password)
      //   VALUES (@name,@email,@password)`;
      // } else {
      //   queryString = `Update UserData 
      //   set UserData.name = @name,
      //       UserData.email = @email,
      //       UserData.password = @password
      //   where UserData.id = @id`;
      // }

      // request.input('name', sql.NVarChar, data.name)
      //   .input('id', sql.Int, data.id)
      //   .input('email', sql.VarChar, data.email)
      //   .input('password', sql.VarChar, data.password)
      //   .query(queryString, (err) => {
      //     if (err) {
      //       debug(err);
      //       reject(err);
      //     }
      //     if (!data.id) {
      //       // (async function () {
      //       //   try {
      //       //     const UserDataData = await getById(data.id);
      //       //     resolve(UserDataData);
      //       //   } catch (erro) {
      //       //     resolve(data);
      //       //   }
      //       // }());
      //       resolve(data);
      //     } else {
      //       resolve(data);
      //     }
      //   });
    });
  }

  function remove(id) {
    return new Promise((resolve, reject) => {
      UserData.findById(id).then((user) => {
        if (user) {
          return user.destroy({ force: true });
        }
        return null;
      }).then((user) => {
        resolve(user);
      }).catch((err) => {
        reject(err);
      });
      // const request = new sql.Request();
      // const sqlQueryString = `delete from UserData where id=${id}`;
      // request.query(sqlQueryString, (err, result) => {
      //   if (err) {
      //     reject(err);
      //   }
      //   debug(result);
      //   resolve(result);
      // });
    });
  }
  return {
    get, save, getById, remove, getByName
  };
}
module.exports = AuthService;
