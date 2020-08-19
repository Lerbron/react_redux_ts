import React from 'react';
import { BrowserRouter, Switch} from 'react-router-dom';
import { Route } from 'react-router';
import CoreLayout from 'components/coreLayout'
import routes from './routes'

export default () => (
	<BrowserRouter>
		<div className='route-container'>
			<Switch>
				<CoreLayout>
					{ routes.map( route => <Route exact key={ route.path } { ...route } /> ) }
				</CoreLayout>			
			</Switch>
		</div>
	</BrowserRouter>
)