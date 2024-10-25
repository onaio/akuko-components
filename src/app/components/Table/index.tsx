import React from 'react';
import { Row, Col } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../../context/AppContext';
import styles from './style.module.css';

interface TableProps {
  children?: React.ReactNode;
}

interface Post {
  uuid: string;
  title: string;
  components: Array<any>;
  sources: { [key: string]: any };
}

export const Table: React.FC<TableProps> = ({ children }) => {
  const post = useContextSelector(AppContext, (context: any) => context?.post) as Post | undefined;
  console.log(post);
  return (
    <AntdRegistry>
      <div className={styles.akukoTable}>
        <Row>
          <Col sm={24}>
            <h1>Table</h1>
          </Col>
        </Row>
        {children && <div>{children}</div>}
      </div>
    </AntdRegistry>
  );
};
