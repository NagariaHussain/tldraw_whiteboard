import * as React from "react";
import { useEditor } from "@tldraw/tldraw";

// save the document every 5 seconds
const DB_SAVE_INTERVAL = 5000;

export default function DBStateManager() {
  const editor = useEditor();

  function saveToDB(state) {
    frappe.call({
      method: "tldraw_whiteboard.api.save_user_whiteboard_state",
      args: {
        state: state,
      },
    });
  }

  function loadStateFromDBifExists() {
    frappe.db
      .get_value("User Whiteboard State", frappe.session.user, "state")
      .then(({ message }) => {
        if (message?.state) {
          editor.store.loadSnapshot(JSON.parse(message.state));
        }
      });
  }

  React.useEffect(() => {
    loadStateFromDBifExists();
    const interval = setInterval(() => {
      const snapshot = editor.store.getSnapshot();
      const savable = JSON.stringify(snapshot);

      saveToDB(savable);
    }, DB_SAVE_INTERVAL);
    return () => clearInterval(interval);
  }, [editor]);

  return <></>;
}
