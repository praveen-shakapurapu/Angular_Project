import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{

  constructor(private service:MovieApiServiceService, private router: ActivatedRoute){ }
  getMovieDetailsResult:any
  getMovieVideoResult:any
  getMovieCastResult:any
  ngOnInit(){
    let getParamId = this.router.snapshot.paramMap.get('id')
    console.log(getParamId,'getparamid#');
    
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)

  }

  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((result)=>{
      console.log(result,'getmoviedeails##');
      this.getMovieDetailsResult = result;
    })
  }

  getVideo(id:any){
    this.service.getMovieVideo(id).subscribe((result)=>{
      console.log(result,'getmovieVideo##');
      result.results.forEach((element:any) => {
        if(element.type=="Trailer"){
      this.getMovieVideoResult = element.key;
        }
      });

    })
  }

  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((result)=>{
      console.log(result,'movieCast#');
      this.getMovieCastResult = result.cast; 
    })
  }
}
