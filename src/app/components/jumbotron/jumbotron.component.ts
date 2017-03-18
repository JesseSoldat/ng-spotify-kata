import {Component} from '@angular/core';

@Component({
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html'
})

export class Jumbotron{
	jbtHeading: string;
	jbtText: string;
	jbtBtnText: string;
	jbtBtnUrl: string;

	constructor(){
		this.jbtHeading = 'Welcome to JLab';
		this.jbtText = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.';
		this.jbtBtnText = 'Read More';
		this.jbtBtnUrl = 'http://google.com'
	}
}