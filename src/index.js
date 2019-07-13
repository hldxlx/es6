import 'babel-polyfill';
//import './js/01';
//import './js/reflect';
//import './js/Promise';
//import './js/for...of&Iterator';
//import './js/Generator';
//import './js/module';
import login from './login/init';
import './api/FetchMock';
login({
    container:document.getElementById("container")
});

