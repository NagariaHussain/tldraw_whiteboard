import * as React from "react";
import { Tldraw } from '@tldraw/tldraw'


export function App() {
  return (
    <div style={{ position: 'fixed', inset: 0, marginTop: '112px' }}>
      <Tldraw persistenceKey={frappe.session.user} />
    </div>
  );
}