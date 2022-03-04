// 客户管理新增/编辑页面组件
import '@/less/module/customer.less'
import React, { Component } from 'react'

import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  Space,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const { Option } = Select

export default class ListForm extends Component {
  formRef = React.createRef()
  constructor(props) {
    super(props)
    // 使用bind() this对象给函数更改this的指向或者使用箭头函数访问this
    // this.showDrawer = this.showDrawer.bind(this)
    this.state = {
      visible: false,
      upDates: {} // 记录数据源
    }
  }

  showDrawer = (data = undefined) => {
    this.setState({
      visible: true,
      upDates: data
    })
    // 修改一条数据
    if (data) {
        // 没有vue中类似nextTick的替代方法
        setTimeout(() => {
            this.formRef.current.setFieldsValue(data)
        },0)
    }
  }

  onClose = () => {
    this.setState({
      visible: false,
    })
    this.formRef.current.resetFields()
  }

  onSubmit = () => {
    const query = this.formRef.current.getFieldsValue(true)
    // 新增或更新数据
    let data = {...this.state.upDates, ...query}
    // 将值传递给父元素
    this.props.sendData(data);
    this.onClose()
  }

  render() {
    return (
      <>
        <Button
          type="primary"
          onClick={this.showDrawer}
          className="add-btn"
          icon={<PlusOutlined />}
        >
          新增用户
        </Button>
        <Drawer
          title="新增一个用户"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Space>
              <Button onClick={this.onClose}>取消</Button>
              <Button onClick={this.onSubmit} type="primary">
                确认
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark ref={this.formRef}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="姓名"
                  rules={[
                    { required: true, message: '请输入姓名' },
                  ]}
                >
                  <Input placeholder="请输入姓名" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="年龄"
                  rules={[{ required: true, message: '请输入年龄' }]}
                >
                  <Input placeholder="请输入年龄" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="address"
                  label="住宅"
                  rules={[
                    { required: true, message: '请输入住宅地址' },
                  ]}
                >
                    <Input placeholder="请输入年龄" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="level"
                  label="等级"
                  rules={[
                    { required: true, message: '请选择等级' },
                  ]}
                >
                  <Select placeholder="请选择等级">
                    <Option value="1">红钻</Option>
                    <Option value="2">紫钻</Option>
                    <Option value="3">蓝钻</Option>
                    <Option value="4">黄金</Option>
                    <Option value="5">黄铜</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label="电话"
                  rules={[
                    { required: true, message: '请输入电话' },
                  ]}
                >
                  <Input placeholder="请输入电话" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="e_mail"
                  label="邮箱"
                  rules={[
                    { required: true, message: '请输入邮箱' },
                  ]}
                >
                  <Input placeholder="请输入邮箱" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="备注"
                  rules={[
                    {
                      required: true,
                      message: '请输入备注',
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="请输入备注"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    )
  }
}
