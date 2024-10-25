'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { Table } from './components/Table';
import { AppProvider } from './context/AppContext';
export default function Home(props) {
    return (_jsx("div", { children: _jsx(AppProvider, { children: _jsx(Table, {}) }) }));
}
