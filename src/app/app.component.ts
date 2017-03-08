import { Component } from '@angular/core';
import { AgmCoreModule , MapsAPILoader, NoOpMapsAPILoader ,MouseEvent , MarkerManager} from 'angular2-google-maps/core';

import {  FormBuilder ,
          FormGroup , 
          Validators
            } from '@angular/forms';


import { MarkerService } from './marker.service';
import { Marker } from './marker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  zoom : number = 10;
  lat: number = 51.678418;
  lng: number = 7.809007;

  markers: Marker[];
  markerForm:FormGroup;
    
  constructor(private _fb: FormBuilder,private _service: MarkerService){
     this.markerForm = this._fb.group({
         name:['',Validators.required],
         lat:['',Validators.required],
         lng:['',Validators.required],
         draggable:[false],
     });
     
    this.markers = this._service.getMarkers();    

  }

  addMarker(e,model: any, isValid: boolean){
    e.preventDefault();    
    if(isValid){
      let newMarker = {
          name : 'Untitle',
          lat: parseFloat(model.lat),
          lng: parseFloat(model.lng),
          draggable: Boolean(model.draggable)
      }
      this.markers.push(newMarker);
      this._service.addMarkers(newMarker);      
      this.markerForm.reset();
   }
    
  }

  clickedMarker(marker:Marker,index):void{
    
  }

  mapClicked(event:MouseEvent):void{
    let newMarker = {
        name : 'Untitle',
        lat: event.coords.lat,
        lng: event.coords.lng,
        draggable: true
    }
    this.markers.push(newMarker);
    this._service.addMarkers(newMarker);

    


  }

  markerDragEnd(marker:any,$event: MouseEvent){

    let updMarker = {
          name : marker.name,
          lat: parseFloat(marker.lat),
          lng: parseFloat(marker.lng),
          draggable: Boolean(marker.draggable)
      }



     this._service.updateMarkers(updMarker,$event.coords.lat,$event.coords.lng);

  }

  removeMarker(marker:Marker){
    for(let i = 0; i < this.markers.length; i++){
        if(marker.lat == this.markers[i].lat && 
           marker.lng == this.markers[i].lng  
          ){          
          
          this.markers.splice(i,1);
        }
      }
      this._service.removeMarker(marker);
  }

}


//Marker type
