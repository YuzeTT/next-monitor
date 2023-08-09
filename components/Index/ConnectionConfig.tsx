"use client"

import {
  Button,
  Content,
  Text,
  IllustratedMessage,
  Item,
  ListView,
  Heading,
  DialogTrigger,
  Dialog,
  Flex,
  Header,
  Divider,
  Form,
  TextField,
  ButtonGroup,
  ContextualHelp,
  ListBox,
  ActionMenu
} from '@adobe/react-spectrum'
import File from '@spectrum-icons/illustrations/File';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import DeviceDesktop from '@spectrum-icons/workflow/DeviceDesktop';
import { useEffect, useState } from 'react';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>无连接</Heading>
      <Content>点击右上角按钮添加一个吧</Content>
    </IllustratedMessage>
  );
}

const ConnectionConfig = () => {
  const [formData, setFormData] = useState({ name: '', ip: '', url: '/video_feed' });

  const [data, setData] = useState<Connection[]>([])

  useEffect(() => {
    const localData = localStorage.getItem("list")
    setData(JSON.parse(localData || "[]"))

    return () => setData([])
  }, [])

  function handleAdd(close: Function) {
    const newData = [...data, formData]
    setData(newData)
    localStorage.setItem("list", JSON.stringify(newData))
    setFormData({ name: '', ip: '', url: '/video_feed' })
    close()
  }

  function handleDelete(id: string) {
    const newData = data.filter((item) => item.name !== id)
    setData(newData)
    localStorage.setItem("list", JSON.stringify(newData))
  }

  function handleEdit(id: string, newText: string) {
    const newData = data.map((item) => {
      if (item.name === id) {
        return { ...item, text: newText };
      }
      return item;
    });
    setData(newData);
  }

  const onAction = (value: string, key: string) => {
    if (value === 'delete') handleDelete(key)
    
  }

  return (
    <div className='p-4 max-w-3xl mx-auto'>
      {/* <Breadcrumbs>
        <Item key="home">Home</Item>
      </Breadcrumbs> */}
      {/* <IllustratedMessage>
        <NotFound />
        <Heading>No results</Heading>
        <Content>Try another search</Content>
      </IllustratedMessage> */}
      <div className='flex items-center justify-between pb-4'>
        <h2 className='text-xl font-bold'>连接配置</h2>
        {/* <ActionButton>Register</ActionButton> */}
        <DialogTrigger>
          <Button variant='accent'>新建</Button>
          {(close) => (
            <Dialog>
              <Heading>
                <Flex alignItems="center" gap="size-100">
                  <DeviceDesktop size="S" />
                  <Text>
                    添加新连接
                  </Text>
                </Flex>
              </Heading>
              <Divider />
              <Content>
                <Form onSubmit={(v) => {
                  console.log(v);
                }}>
                  <TextField label="计算机名称" value={formData.name} autoFocus onChange={(e) => setFormData({ ...formData, name: e })} />
                  <TextField label="IP" value={formData.ip} onChange={(e) => setFormData({ ...formData, ip: e })} />
                  <TextField label={<div className='flex items-center'>
                    <p className='pr-1'>Stream Url</p>
                    <ContextualHelp variant="info">
                      <Heading>高级选项</Heading>
                      <Content>
                        <Text>
                          非专业人员儿请勿触动
                        </Text>
                      </Content>
                    </ContextualHelp>
                  </div>} value={formData.url} onChange={(e) => setFormData({ ...formData, url: e })} />
                </Form>
              </Content>
              <ButtonGroup>
                <Button variant="secondary" onPress={close}>取消</Button>
                <Button variant="accent" onPress={() => { handleAdd(close) }}>添加</Button>
              </ButtonGroup>
            </Dialog>
          )}
        </DialogTrigger>
      </div>
      <ListView
        selectionMode="none"
        aria-label="Static ListView items example"
        onAction={(key) => alert(`Triggering action on item ${key}`)}
        renderEmptyState={renderEmptyState}
        height={400}
      >
        {data.map((v, i) => (
          <Item textValue={i.toString()} key={i}>
            <File />
            <Text>{v.name}</Text>
            <Text slot="description">{v.ip}</Text>
            <ActionMenu onAction={(k)=>{onAction(k.toString(), v.name)}}>
              <Item key="edit" textValue="Edit">编辑</Item>
              <Item key="delete" textValue="Delete">删除</Item>
            </ActionMenu>
          </Item>
        ))}
      </ListView>

      {/* <Well>
        <h2 className='font-bold text-lg mb-2'>测试机</h2>
        <LabeledValue label="IP" value="192.168.0.0" />
      </Well> */}
    </div>
  )
}

export default ConnectionConfig
