// 评论列表组件,使用hooks函数组件
import '@/less/module/comment.less'
import React, { useState, useEffect } from 'react'
import { Table, Tooltip , Space, message } from 'antd'

// api
import { apiGetCommentList } from '@/api/comment'
export default () => {
  const [loading, setLoading] = useState(false)
  const [tableList, setTableList] = useState([])
  const [columns, setColumns] = useState([
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      align: 'left',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '标题',
      dataIndex: 'title',
      align: 'center',
      key: 'age',
    },
    {
      title: '内容简介',
      dataIndex: 'contents',
      align: 'center',
      key: 'address',
      ellipsis: {
        showTitle: false,
      },
      render: contents => (
        <Tooltip placement="topLeft" title={contents}>
          {contents}
        </Tooltip>
      ),
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (text, record, index) => (
        <Space size="middle">
          <a onClick={() => passList(index)}>通过</a>
          <a onClick={() => disList(index)}>禁用</a>
          <a onClick={() => replyList(index)}>回复</a>
        </Space>
      ),
    },
  ])

  const passList = (index) => {
    message.success('操作成功');
    console.log(`通过评论! -- ${index}`)
  }

  const disList = (index) => {
    message.success('禁用成功');
    console.log(`禁用成功! -- ${index}`)
  }

  const replyList = (index) => {
    message.success('回复成功');
    console.log(`回复成功! -- ${index}`)
  }

  const getList = async param => {
    setLoading(true)
    setTableList([])
    const { data } = await apiGetCommentList(param)
    setTableList(data.data)
    setLoading(false)
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="comment-page">
      <Table columns={columns} dataSource={tableList} loading={loading}/>
    </div>
  )
}
