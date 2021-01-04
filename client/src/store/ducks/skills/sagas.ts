import {call, put, takeEvery} from 'redux-saga/effects'
import {message, style} from '../../../core/antd'
import {masteryAPI} from '../../../services/api/masteryApi'
import {setSkills} from './actionCreators'
import {IFetchCreateSkill, SkillsActionTypes} from './types/actionCreators'
import { ISkill } from './types/state'

const key = 'skills-saga'

function* fetchSkillsSaga() {
  try {
    const skills = yield call(masteryAPI.getAllSkills)
    yield put(setSkills(skills))
  } catch (e) {
    message.error({content: 'There is not connection to server', key, style})
  }
}

function* fetchCreateSkillSaga(action: IFetchCreateSkill) {
  try {
    const skill: ISkill = yield call(masteryAPI.createSkill, action.payload)
    action.callback && action.callback(skill._id)
  } catch (e) {
    message.error({content: 'There is not connection to server', key, style})
  }
}

export function* skillsSaga() {
  yield takeEvery(SkillsActionTypes.FETCH_SKILLS, fetchSkillsSaga)
  yield takeEvery(SkillsActionTypes.FETCH_CREATE_SKILL, fetchCreateSkillSaga)
}
