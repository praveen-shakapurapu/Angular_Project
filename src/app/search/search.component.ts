import { Component } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms'
import { JsonDataService } from '../services/json-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor ( private service:JsonDataService){}

  searchResult:any;
  SearchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    console.log(this.SearchForm.value, 'searchForm#');
    this.service.getSearchMovie(this.SearchForm).subscribe((result)=>{
      console.log(result, 'searchmovie');
      this.searchResult = result.results
    })
  }
}
