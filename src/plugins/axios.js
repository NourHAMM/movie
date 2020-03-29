import Vue from 'vue'

import axios from 'axios'

axios.defaults.baseURL = "https://api.themoviedb.org/3"

axios.defaults.headers.common['Authorization'] = `Bearer ${ "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDA5MGY3MjgwZDBhODY2MjExYjU0NjU1M2YyM2M0YyIsInN1YiI6IjVlN2IzYzA5NjNkNzEzMDAxMjhiMmFlNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pqd8jKi5OQL7K2CIIEfO2VLbQc1XBDLc5GQYpV3M0lE"
}`



Vue.prototype.$axios = axios