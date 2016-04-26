import arrayUnique from 'array-unique';
import 'babel-polyfill';

export const GENRES_DEDUPED = 'GENRES_DEDUPED';
export const GENRE_SELECTED = 'GENRE_SELECTED';

export function dedupeGenres(movies) {
  const destructured = ['All'];
  const genres = movies.map((obj) => {
    for (const val of obj.genres) {
      destructured.push(val);
    }
    return destructured;
  });

  const dedupedGenres = arrayUnique(...genres);

  return {
		type: GENRES_DEDUPED,
		payload: dedupedGenres
	};
}

export function selectGenre(all, genre, movies) {
  let filtered;

  if (genre === all) {
    filtered = movies;
  } else {
    filtered = movies.filter((obj) => {
      let movie;
      for (const val of obj.genres) {
        if (val === genre) {
          movie = obj;
        }
      }
      return movie;
    });
  }

  return {
		type: GENRE_SELECTED,
		payload: filtered
	};
}
