export class Initr {

		load(){
			if(localStorage.getItem('markers') === null ||
				localStorage.getItem('markers') === undefined	
				){

				let markers =[{
			  		name : 'Company One',
			  		lat: 51.64699834847127,
			  		lng: -7.812652587890625,
			  		draggable: true
			 		
			 	 }];

			 	 localStorage.setItem('markers',JSON.stringify(markers));
			 	 return;
			}else {
				console.log('Loding markers');
			}
		}
}
