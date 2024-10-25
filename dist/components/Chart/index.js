import { jsx as _jsx } from "react/jsx-runtime";
import { Row, Col } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import styles from './style.module.css';
export var Chart = function (_a) {
    var children = _a.children;
    return (_jsx(AntdRegistry, { children: _jsx("div", { className: styles.akukoChart, children: _jsx(Row, { children: _jsx(Col, { sm: 24, children: _jsx("h1", { children: "Chart" }) }) }) }) }));
};
