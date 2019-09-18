/*const element = document.createElement('h1');
element.innerText = 'Hello, Adriana';

const container = document.getElementById('app'); //ste app viene de index.html (body)
container.appendChild(element);*/

/*import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/*serviceWorker.unregister();*/
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';

//import Badge from './components/Badge';
import BadgeNew from './pages/BadgeNew.js'
import Navbar from './components/Navbar.js'
import liquids from './liquids.js'
import './index.css';
//siempre debe aperecer esto para que funcione
//dos argumentos que y donde
//

//******** EJEMPLO 1  *******
// const element = <h1>Hola, Adriana, practicando react</h1>;

//******** EJEMPLO 2  *******
/*const element = React.createElement('h1', {}, 'Hola, Soy Adriana');*/
//h1 es el que llamamos arriba {aqi van los propts, hasta ahora no tenemos ningún atributo} 
 
 //******** EJEMPLO 3  *******
/*const element = React.createElement('a', 
	{href: 'https://platzi.com'}, 
	'Ir a platzi'
	);*/
//ahora si agreguemos atributos

//******** EJEMPLO 4  ******* (agregando variable)

/*const name = 'Enrique';
const sum = () => 3 + 3;*/
// const element = React.createElement(
// 	'h1',
// 	{},
// 	'Hola, soy' + ' ' + name
// 	);

//******** EJEMPLO 4  ******* (lo haremos con JSX, usando la misma variable)
//dentro de las llaves van valores que se puedan evaluar, puede ser una suma, una funcion, etc
//expresiones dentro de la llave (si es tipo falso que son 0, vacio, null, indefinido, no se mostraran)
/*const jsx = <h1>Hola soy, {sum()}</h1> */

//******** EJEMPLO 5  ******* (agregando otros valores)
/*const jsx = ( <div>
<h1>Hola, soy Adri </h1>
<p>Soy Estudiante de Laboratoria Frontend </p>
</div>
)

const element = React.createElement(
'div',
{},
React.createElement('h1', {}, 'Hola, soy Adri'),
React.createElement('p', {}, 'Soy Estudiante de Laboratoria Frontend and Developer'),

);*/

const container = document.getElementById('app');

/*ReactDOM.render(<Badge 
	firstName="Adriana" 
	lastName="Sánchez"
	jobTitle="Frontend-Developer" 
	twitter="adriana_sanchez"
	/>, 
	container
	);*/

ReactDOM.render(
	<BadgeNew
	/>, 
	container
	);






