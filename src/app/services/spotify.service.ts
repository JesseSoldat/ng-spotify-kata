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
		this.artistUrl = this.baseUrl+'artists/'+id;
		return this.http.get(this.artistUrl)
			.map(res => res.json());
	}

	getAlbums(artistId:string){
		this.albumsUrl = this.baseUrl+'artists/'+artistId+'/albums';
		return this.http.get(this.albumsUrl)
			.map(res => res.json());
	}

	getAlbum(id:string){

	}
}