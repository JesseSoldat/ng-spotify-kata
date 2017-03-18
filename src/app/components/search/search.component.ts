import {Component} from '@angular/core';
import {Artist} from '../../models/Artist';
import {SpotifyService} from '../../services/spotify.service';


@Component({
	selector: 'search',
	templateUrl: './search.component.html'
})

export class Search {
	searchStr: string;
	searchRes: Artist[];
	

	constructor(private spotiyService: SpotifyService){}

	searchMusic(){
		this.spotiyService.searchMusic(this.searchStr)
			.subscribe(res => {
				this.searchRes = res.artists.items;
			
			})
	}
}