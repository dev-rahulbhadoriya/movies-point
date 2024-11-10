import { Route, Routes } from "react-router-dom";
import { MovieDetails, MoviesList, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {

    return (
        <div className="dark:bg-slate-800">
            <Routes>
                <Route path="/" element={<MoviesList />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/movies/populer" element={<MovieDetails />} />
                <Route path="/movies/top" element={<MovieDetails />} />
                <Route path="/movies/upcoming" element={<MovieDetails />} />
                <Route path="/movies/search" element={<Search />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}
