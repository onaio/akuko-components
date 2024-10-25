// src/app/HelloWorld/index.tsx
import React from 'react';
import { Row, Col } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import styles from './style.module.css';

interface TextProps {
  children?: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <AntdRegistry>
      <div className={styles.akukoText}>
        <Row>
          <Col sm={24}>
            <h1>Text</h1>
          </Col>
        </Row>
      </div>
    </AntdRegistry>
  );
};
