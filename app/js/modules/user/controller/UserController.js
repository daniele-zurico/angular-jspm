/**
 * Created by daniele on 21/04/15.
 */
export class UserController{

  constructor(userService){
    this.userService = userService;
    this.name = "Vale";
  }

  displayName(){
    this.users = this.userService.users;
    return this.users;
  }

};