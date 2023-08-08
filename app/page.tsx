'use client'
// import IndexHitokoto from '@/component/Index/IndexHitokoto';
import {ActionButton, Breadcrumbs, Button, Cell, Column, Content, Heading, IllustratedMessage, Item, LabeledValue, Row, TableBody, TableHeader, TableView, Well} from '@adobe/react-spectrum'
import NotFound from '@spectrum-icons/illustrations/NotFound';
// import { Suspense } from 'react';

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
      <TableView
        aria-label="机器列表"
      >
        <TableHeader>
          <Column>名称</Column>
          <Column>类型</Column>
          <Column>类型</Column>
          <Column align="center">控制</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>Games</Cell>
            <Cell>File folder</Cell>
            <Cell>6/7/2020</Cell>
            <Cell>
              <Button variant="secondary" style="fill">进入</Button>
            </Cell>
          </Row>
        </TableBody>
      </TableView>
      {/* <Well>
        <h2 className='font-bold text-lg mb-2'>测试机</h2>
        <LabeledValue label="IP" value="192.168.0.0" />
      </Well> */}
    </div>
  )
}
