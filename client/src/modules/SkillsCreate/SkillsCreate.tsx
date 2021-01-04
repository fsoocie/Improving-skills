import {ArrowLeftOutlined, UserOutlined} from '@ant-design/icons'
import {Avatar, Button, Col, Form, Input, Row} from 'antd'
import React, {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import {MasteryBlock} from '../../components/MasteryBlock/MasteryBlock'
import {message} from '../../core/antd'
import {masteryAPI} from '../../services/api/masteryApi'
import {createSkill} from '../../store/ducks/skills/actionCreators'
import './SkillsCreate.scss'


export const SkillsCreate: React.FC = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  const [image, setImage] = useState<{url: string, file: File} | null>(null);

  const inputRef = useRef<HTMLInputElement>(null)
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  const afterCreatingCallback = (_id: string) => {
    history.push(`/skills/${_id}`)
    message.success({content: 'Skill has been created!', key: 'skill-create'})
  }

  const onInputChangeHandler = (e: any) => {
    const target: HTMLInputElement = e.currentTarget

    const file: File = target.files![0]
    const blob = new Blob([file])
    const url = URL.createObjectURL(blob)
    setImage({
      url, file
    })
  }

  const onSubmitFormHandler = async (formFields: any) => {
    message.loading({content: 'Creating...', key: 'skill-create', duration: 0})
    if (image) {
      const {url: img} = await masteryAPI.upload(image.file)
      dispatch(createSkill({...formFields, img, history}, afterCreatingCallback))
    } else {
      message.error({content: 'Icon is required!', key: 'skill-create'})
    }
  }

  return (
    <MasteryBlock>
      <Row>
        <Col span={24}>
          <div className='skillsHeader'>
            <div className="skillsHeader__controls">
              <Link className='skillsHeader__arrowToBack' to='/skills' ><ArrowLeftOutlined/></Link>
              <span>Create Skill</span>
              <Button className='skillsHeader__saveBtn' onClick={() => submitButtonRef.current?.click()}>SAVE</Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={20} offset={2} style={{padding: 42}}>
          <Form onFinish={onSubmitFormHandler} name='create-skill'>
            <Form.Item
              style={{marginBottom: 32}}
              name="name"
              rules={[{
                required: true,
                message: 'Skill`s name is required!'
              }]}
            >
              <Input className='createSkill__input' placeholder="Name the skill"/>
            </Form.Item>
            <Form.Item
              style={{marginBottom: 32}}
              name="description"
              rules={[{
                required: true,
                message: 'Description is required!'
              }]}
            >
              <Input className='createSkill__input' placeholder="Input description"/>
            </Form.Item>
            <Form.Item
              style={{marginBottom: 32}}
              name="minutes"
              rules={[{
                required: true,
                message: 'Initial progress is required!'
              }]}
            >
              <Input className='createSkill__input' type='number' placeholder="Input initial progress (minutes)"/>
            </Form.Item>
            <Form.Item>
              <input name='image' ref={inputRef} onChange={onInputChangeHandler} type="file" hidden id='icon-file'/>
                <Button onClick={() => inputRef.current?.click()} block className='selectIcon'>
                  {image
                  ? <Avatar size={42} src={image.url} />
                  : <Avatar size={42} icon={<UserOutlined />} />}
                  <span className='selectIcon__text'>Set Icon</span>
                </Button>
            </Form.Item>
            <button type='submit' hidden ref={submitButtonRef}/>
          </Form>
        </Col>
      </Row>
    </MasteryBlock>
  )
}
