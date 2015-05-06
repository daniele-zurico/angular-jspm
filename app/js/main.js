/**
 * Created by daniele on 21/04/15.
 */

/**
 * @name log
 * @description This function logs a string.
 */
import {Angular} from 'angular';
import {UserService} from 'modules.user/service/UserService';
import {UserController} from 'modules.user/controller/UserController';
//import {UserDirective} from 'minnie/user/directive/UserDirective'
angular
  .module('myApp',[])
  .service('userService', UserService)
  .controller('userCtrl', UserController);
  //.directive('userDirective', UserDirective)
