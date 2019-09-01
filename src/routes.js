import PopularMovies from './views/Movies/containers/PopularMovies/PopularMovies';
import TopRatedMovies from './views/Movies/containers/TopRatedMovies/TopRatedMovies';
import RecentMovies from './views/Movies/containers/RecentMovies/RecentMovies';
import UpcommingMovies from './views/Movies/containers/UpcommingMovies/UpcommingMovies';
import SearchingMovies from './views/Movies/containers/SearchMovies/SearchMovies';
import MovieDetails from './views/Movies/containers/MovieDetails/MovieDetails';
import {PageNotExist} from './constainers/Error/PageNotExist';

export const routes = {
    Default: {
        name: 'default',
        url: '/',
        exact: true,
        component: PopularMovies,
    },

    Popular: {
        name: 'Popular',
        url: '/popular',
        exact: true,
        component: PopularMovies,
    },

    TopRated: {
        name: 'TopRated',
        url: '/top-rated',
        exact: true,
        component: TopRatedMovies,
    },

    Recent: {
        name: 'Recent',
        url: '/recent',
        exact: true,
        component: RecentMovies,
    },

    Upcomming: {
        name: 'Upcomming',
        url: '/upcomming',
        exact: true,
        component: UpcommingMovies,
    },

    Search: {
        name: 'Search',
        url: '/search',
        exact: false,
        component: SearchingMovies,
    },

    MovieDetails: {
        name: 'MovieDetails',
        url: '/movie',
        exact: false,
        component: MovieDetails,
    },

    Error: {
        component: PageNotExist,
    },
};