import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideons from "../../../../components/movie-videos";

type MovieDetailProps = {
  params: { id: string };
};

export default async function MovieDetail({ params }: MovieDetailProps) {
  const { id } = await params;

  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos...</h1>}>
        <MovieVideons id={id} />
      </Suspense>
    </div>
  );
}
