import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {SkillsCreate} from '../../../modules/SkillsCreate/SkillsCreate'
import {SkillsDetail} from '../../../modules/SkillsDetail/SkillsDetail'
import {SkillsIcons} from '../../../modules/SkillsIcons/SkillsIcons'
import {SkillsList} from '../../../modules/SkillsList/SkillsList'
import '../../../styles/Pages/SkillsPage.scss'

export const Skills: React.FC = () => {
  return (
    <div className='masteryPage homeComponent'>
      <Switch>
        <Route exact path='/skills/create' component={SkillsCreate} />
        <Route exact path='/skills/icons' component={SkillsIcons} />
        <Route exact path='/skills/:_id' component={SkillsDetail} />
        <Route exact path='/skills' component={SkillsList} />
      </Switch>
    </div>
  )
}
