import {PlusOutlined} from '@ant-design/icons'
import {Col, Empty, Row} from 'antd'
import Spin from 'antd/lib/spin'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {SkillItem} from '../../components/SkillItem/SkillItem'
import {fetchSkills} from '../../store/ducks/skills/actionCreators'
import {selectSkills, selectSkillsIsLoading, selectSkillsLoadingStatus} from '../../store/ducks/skills/selectors'
import {LoadingStatus} from '../../store/types'

export const SkillsList: React.FC = () => {

  const skills = useSelector(selectSkills)
  const isLoading = useSelector(selectSkillsIsLoading)
  const loadingStatus = useSelector(selectSkillsLoadingStatus)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!skills.length && loadingStatus === LoadingStatus.NEVER) {
      dispatch(fetchSkills())
    }
  }, [dispatch, loadingStatus, skills.length])

  return (
    <MasteryBlock>
      <Row>
        <Col span={24}>
          <div className='skillsHeader' style={{textAlign: 'center'}}>
            Skills
          </div>
        </Col>
      </Row>
      <Row className='skillsList__inner'>
        <Col span={24}>
          {isLoading
            ? <Spin size="large" className='masterySpinner' />
            : skills.length
              ? [...skills]
                .sort((a, b) => b.minutes - a.minutes)
                .map(skill => (
                  <SkillItem skill={skill} key={skill._id}/>
                ))
              : <Empty description='There are not skills here'/>
          }
        </Col>
      </Row>
      <Link to='/skills/create' className='skillsList__createLink'><PlusOutlined style={{ fontSize: '18px', color: '#fff' }}/></Link>
    </MasteryBlock>
  )
}
