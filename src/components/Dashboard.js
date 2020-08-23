import React from "react";
import ProjectItem from "./Projects/ProjectItem";

class DashBoard extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to Dashboard</h1>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    );
  }
}

export default DashBoard;
