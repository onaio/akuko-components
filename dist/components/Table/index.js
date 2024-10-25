import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Row, Col } from 'antd';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useContextSelector } from 'use-context-selector';
import { AppContext } from '../../context/AppContext';
import styles from './style.module.css';
export var Table = function (_a) {
    var children = _a.children;
    var post = useContextSelector(AppContext, function (context) { return context === null || context === void 0 ? void 0 : context.post; });
    console.log(post);
    return (_jsx(AntdRegistry, { children: _jsxs("div", { className: styles.akukoTable, children: [_jsx(Row, { children: _jsx(Col, { sm: 24, children: _jsx("h1", { children: "Table" }) }) }), children && _jsx("div", { children: children })] }) }));
};
