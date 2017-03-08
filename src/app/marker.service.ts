import { Injectable } from '@angular/core';
import { Initr } from './initr';
import { Marker } from './marker';

@Injectable()
export class MarkerService extends Initr {

  constructor() {
  	super();
  	this.load();
   }


  getMarkers(){
  	return JSON.parse(localStorage.getItem('markers'));
  }

  addMarkers(marker){
  	let markers = JSON.parse(localStorage.getItem('markers'));
  	markers.push(marker);
  	localStorage.setItem('markers',JSON.stringify(markers));

  	}

  	updateMarkers(marker,lat,lng){
	  	let markers = JSON.parse(localStorage.getItem('markers'));
	  	for(let i = 0; i < markers.length; i++){
	  		if(marker.lat == markers[i].lat && 
	  		   marker.lng == markers[i].lng	
	  			){	  			
	  			markers[i].lat = lat;
	  			markers[i].lng = lng;
	  		}
	  	}
	  	localStorage.setItem('markers',JSON.stringify(markers));
	  	console.log('Saved');

  	}

  	removeMarker(marker):void{
  		let markers = JSON.parse(localStorage.getItem('markers'));
	  	for(let i = 0; i < markers.length; i++){
	  		if(marker.lat == markers[i].lat && 
	  		   marker.lng == markers[i].lng	
	  			){	  			
	  			markers.splice(i,1);
	  		}
	  	}
	  	localStorage.setItem('markers',JSON.stringify(markers));
	  	console.log('Update');
  	}

}
