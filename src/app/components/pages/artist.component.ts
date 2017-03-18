import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/Artist';
import {Album} from '../../models/Album';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'artist',
	templateUrl: 'artist.component.html'
})
export class Artists implements OnInit {
	id: string;
	artist: Artist[];
	albums: Album[];

	constructor(private spotifyService: SpotifyService,
							private route: ActivatedRoute){

	}

	ngOnInit(){
		this.route.params
			.map(params => params['id'])
			.subscribe((id) => {
				this.spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist
					})

				this.spotifyService.getAlbums(id)
					.subscribe(albums => {
						this.albums = albums.items;
					})
			})
	}
}