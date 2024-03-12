import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService){}

  ngOnInit(){

  }
  searchResult:any;
  searcForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm(){
    console.log(this.searcForm.value, 'searchform#');
    this.service.getSearchMovie(this.searcForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchResult = result.results;
    })
  }
}
