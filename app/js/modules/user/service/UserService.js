/**
 * Created by daniele on 21/04/15.
 */
export class UserService{

  constructor(){
  }

  get users(){
    var _users = [
      {
        name:"Daniele",
        surname:"Zurico"
      }
      ,
      {
        name:"Valentina",
        surname:"Mandorino"
      }
    ];
    return _users;
  }

};