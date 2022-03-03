// 未找到页面组件
import '@/less/module/customer.less'
import { Component } from 'react'

// api
import { apiGetUserList } from '@/api/customer'
import { regExp } from '@/common/regexp'
import { Table, Tag, Space } from 'antd'
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
          render: (text) => <span className='btn-span'>{text}</span>,
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
          render: (text, record) => (
            <Space size="middle">
              <span className='btn-span'>修改</span>
              <span className='btn-span del'>删除</span>
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
    switch (level) {
      case 1:
        return {color:'magenta', value: '红钻'}
      case 2:
        return {color:'purple', value: '紫钻'}
      case 3:
        return {color:'cyan', value: '蓝钻'}
      case 4:
        return {color:'gold', value: '黄金'}
      case 5:
        return {color:'volcano', value: '黄铜'}
      default:
        return {color:'volcano', value: '黄铜'}
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

  render() {
    const { columns, dataSource } = this.state
    return (
      <div className="customer-page">
        <Table columns={columns} dataSource={dataSource} />
      </div>
    )
  }
}
