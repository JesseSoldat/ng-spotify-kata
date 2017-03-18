import {Component} from '@angular/core';

@Component({
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})
export class Navbar {
	projectName: string;

	constructor(){
		this.projectName = 'JLab';
	}
}