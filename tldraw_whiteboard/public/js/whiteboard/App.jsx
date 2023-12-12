import * as React from "react";
import { Tldraw } from "@tldraw/tldraw";
import DBStateManager from "./DBStateManager";

export function App() {
  return (
    <div style={{ position: "fixed", inset: 0, marginTop: "48px" }}>
      <Tldraw persistenceKey={frappe.session.user}>
        <DBStateManager />
      </Tldraw>
    </div>
  );
}
