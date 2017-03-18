import {Component, OnInit} from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../models/Artist';
import {Album} from '../../models/Album';
import {ActivatedRoute} from '@angular/router';

@Component({
	selector: 'album',
  templateUrl: './album.component.html',
})

export class Albums implements OnInit {
	id: string;
	album: Album[];

	constructor(private spotifyService: SpotifyService,
							private route: ActivatedRoute) {}

	ngOnInit(){
		this.route.params	
			.map(params => params['id'])
			.subscribe((id) => {
				this.spotifyService.getAlbum(id)
					.subscribe(album => {
					this.album = album;
					console.log(this.album);
				})
			})
	}
}