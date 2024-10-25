'use client';

import { Table } from './components/Table';
import { AppProvider } from './context/AppContext';
export default function Home(props: any) {
  return (
    <div>
      <AppProvider>
        <Table />
      </AppProvider>
    </div>
  );
}
