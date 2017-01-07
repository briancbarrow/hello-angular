import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../injectables/user.service'

@Component({
 selector: 'layout-header',
 templateUrl: './header.component.html',
 styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor(
   private userService: UserService
 ) {}
 profile = {};
 loadUser() {
   this.userService.getUser().subscribe(data => this.profile = data);
 }
 // name: string = 'Angular2';
 // @Input() name: string;
 // @Output() onNameChanged = new EventEmitter<string>();
 // user = this.userService.currentUser;
 // changeUser(newUser) {
 //   this.userService.setUser(newUser)
 // }

 // changeName(newName: string) {
 //   this.onNameChanged.emit(newName);
 // }
}
