// 客户管理页面组件
import '@/less/module/customer.less'
import { Component } from 'react'

// api
import { apiGetUserList } from '@/api/customer'
import { regExp } from '@/common/regexp'
import { Table, Tag, Space, Popconfirm, message } from 'antd'
import ListForm from './module/listForm'
export default class Customer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      columns: [
        {
          title: '姓名',
          dataIndex: 'name',
          key: 'name',
          align: 'left',
          render: (text) => <span className="btn-span">{text}</span>,
        },
        {
          title: '年龄',
          dataIndex: 'age',
          key: 'age',
          align: 'center',
        },
        {
          title: '住宅',
          dataIndex: 'address',
          key: 'address',
          align: 'center',
        },
        {
          title: '等级',
          dataIndex: 'level',
          key: 'level',
          align: 'center',
          render: (level) => (
            <>
              {
                <Tag color={this.getLevel(level).color} key={level}>
                  {this.getLevel(level).value}
                </Tag>
              }
            </>
          ),
        },
        {
          title: '电话',
          dataIndex: 'phone',
          key: 'phone',
          align: 'center',
          render: (phone) => phone.replace(regExp.desPhoneNum, '$1****$2'),
        },
        {
          title: '邮箱',
          dataIndex: 'e_mail',
          key: 'e_mail',
          align: 'center',
        },
        {
          title: '操作',
          key: 'action',
          align: 'center',
          render: (text, record, index) => (
            <Space size="middle">
              <span className="btn-span" onClick={() => this.upDatas(record)}>
                修改
              </span>
              <Popconfirm
                placement="bottomRight"
                title={text}
                onConfirm={() => this.deleteData(index)}
                okText="确认"
                cancelText="取消"
              >
                <span className="btn-span del">删除</span>
              </Popconfirm>
            </Space>
          ),
        },
      ],
      dataSource: [],
    }
  }

  UNSAFE_componentWillMount() {
    this.getList()
  }

  getLevel(level) {
    switch (Number(level)) {
      case 1:
        return { color: 'magenta', value: '红钻' }
      case 2:
        return { color: 'purple', value: '紫钻' }
      case 3:
        return { color: 'cyan', value: '蓝钻' }
      case 4:
        return { color: 'gold', value: '黄金' }
      case 5:
        return { color: 'volcano', value: '黄铜' }
      default:
        return { color: 'volcano', value: '黄铜' }
    }
  }

  getList() {
    apiGetUserList().then((res) => {
        let { data } = res
        if (data.status === 200) {
          this.setState({
            dataSource: data.data,
          })
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  deleteData(index = undefined) {
    if (index) {
      let list = this.state.dataSource
      list = list.splice(index, 1)
      this.setState({
        dataSource: [...list],
      })
      message.success('删除成功!', 3)
    }
  }

  addData = (data = undefined) => {
    if (data) {
      let list = this.state.dataSource
      for (let i = 0, leng = list.length; i < leng; i++) {
        if (data.key === list[i].key) {
          // 修改
          list[i] = { ...data }
          this.setState({
            // dataSource: list, 这样写数据更新试图不更新,好多坑吐血
            dataSource: [...list],
          })
          return message.success('修改成功!', 3)
        } else {
          // 新增
          let list = [
            ...this.state.dataSource,
            { ...data, key: this.state.dataSource.length + 1 + '' },
          ]
          this.setState({
            dataSource: list,
          })
        }
    }
    message.success('新增成功!', 3)
    }
  }

  upDatas = (data = undefined) => {
    // 调用子组件方法传值
    this.refs.listForm.showDrawer(data)
  }

  render() {
    const { columns, dataSource } = this.state
    return (
      <div className="customer-page">
        <ListForm sendData={this.addData.bind(this)} ref="listForm" />
        <Table columns={columns} dataSource={this.state.dataSource} />
      </div>
    )
  }
}
