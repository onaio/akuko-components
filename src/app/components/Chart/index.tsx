// src/app/HelloWorld/index.tsx
import React from 'react';
import { Row, Col } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import styles from './style.module.css';

interface ChartProps {
  children?: React.ReactNode;
}

export const Chart: React.FC<ChartProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <div className={styles.akukoChart}>
        <Row>
          <Col sm={24}>
            <h1>Chart</h1>
          </Col>
        </Row>
      </div>
    </AntdRegistry>
  );
};
