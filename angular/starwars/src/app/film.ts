export interface IFilm {
  id: string,
  title: string,
  episodeId: number,
  desc: string,
  characters: string[],
  numViews: number,
  [other: string]: any
}
