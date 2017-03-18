import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
	searchUrl: string;
	artistUrl: string;
	albumsUrl: string;
	albumUrl: string;
	baseUrl: string;

	constructor(private http: Http) {
		this.baseUrl = 'https://api.spotify.com/v1/';
	}

	searchMusic(str:string, type='artist'){
		this.searchUrl = this.baseUrl+'search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
		return this.http.get(this.searchUrl)
			.map(res => res.json());
	}

	getArtist(id:string){

	}

	getAlbums(artistId:string){

	}

	getAlbum(id:string){

	}
}