import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {ActivitiesList} from '../../../modules/ActivitiesList/ActivitiesList'
import {CreateActivity} from '../../../modules/CreateActivity/CreateActivity'
import '../../../styles/Pages/ActivitiesPage.scss'

export const Activities: React.FC = () => {
  return (
    <div className='masteryPage homeComponent'>
      <Switch>
        <Route exact path='/activities/createActivity' component={CreateActivity} />
        <Route exact path='/activities' component={ActivitiesList} />
      </Switch>
    </div>
  )
}
