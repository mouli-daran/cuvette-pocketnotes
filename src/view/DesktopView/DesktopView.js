import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/desktopSidebar/DesktopSidebar";
import DesktopHome from "../../components/desktopHome/DesktopHome";
import DesktopNotes from "../../components/desktopNotes/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
