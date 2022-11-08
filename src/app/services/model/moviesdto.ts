export class Moviesdto  {
    movieId!: string;
    movieName!: string;
    movieDescription!: string;
    duration!: Date;
    actor!: string;
    director!: string;
    image!: string;
    isShowing!:boolean
    releaseDate!: Date;
    endShowDate!:Date;
    categoryMovies =  [] as Category[];
}

class Category{
  categoryMovieId!: string;
  categoryMovieName!: string;
  createdByUser!: null;
  createdTime!: null;
  deletedTime!: null;
  isDeleted!: false;
  modifiedByUser!: null;
  modifiedTime!: null;
}

