'use client'
// import IndexHitokoto from '@/component/Index/IndexHitokoto';
import {ActionButton, ActionMenu, Breadcrumbs, Button, Cell, Column, Content, Text, IllustratedMessage, Item, LabeledValue, ListView, Row, TableBody, TableHeader, TableView, Well, Heading, ActionGroup} from '@adobe/react-spectrum'
import File from '@spectrum-icons/illustrations/File';
import NotFound from '@spectrum-icons/illustrations/NotFound';
import Edit from '@spectrum-icons/workflow/Edit';
import Delete from '@spectrum-icons/workflow/Delete';
// import { Suspense } from 'react';

function renderEmptyState() {
  return (
    <IllustratedMessage>
      <NotFound />
      <Heading>No results</Heading>
      <Content>No results found</Content>
    </IllustratedMessage>
  );
}

export default function Home() {
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
        <Button variant='accent'>新建</Button>
      </div>
      <ListView
        selectionMode="none"
        aria-label="Static ListView items example"
        onAction={(key) => alert(`Triggering action on item ${key}`)}
        renderEmptyState={renderEmptyState}
        height={400}
      >
        {/* <Item>
          <Text>连接配置</Text>
          <ActionButton>新建</ActionButton>
        </Item> */}
        <Item key="1" textValue="Utilities">
          <File />
          <Text>DESK</Text>
          <Text slot="description">192.168.1.8</Text>
          {/* <ActionButton>
            <ChevronRight/>
          </ActionButton> */}
          <ActionMenu>
            <Item key="edit" textValue="Edit">编辑</Item>
            <Item key="delete" textValue="Delete">删除</Item>
          </ActionMenu>
        </Item>
      </ListView>
      
      {/* <Well>
        <h2 className='font-bold text-lg mb-2'>测试机</h2>
        <LabeledValue label="IP" value="192.168.0.0" />
      </Well> */}
    </div>
  )
}
