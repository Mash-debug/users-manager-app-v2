import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";


export default class Gantt extends Component {
  componentDidMount() {
    gantt.config.date_format = "%Y-%m-%d %H:%i";
    gantt.config.layout = {
      css: "gantt_container",
      cols: [
        {
          width: 335,
          rows: [
            {
              cols: [
                {
                  rows: [
                    {
                      view: "grid",
                      scrollX: "gridScrollX",
                      scrollable: true,
                      scrollY: "gridScrollY",
                    },
                    { view: "scrollbar", id: "gridScrollX" },
                  ],
                },
                { view: "scrollbar", id: "gridScrollY" },
              ],
            },
          ],
        },
        { resizer: true, width: 1 },
        {
          rows: [
            {
              cols: [
                {
                  rows: [
                    {
                      view: "timeline",
                      scrollX: "scrollHor",
                      scrollY: "scrollVer",
                    },
                    { view: "scrollbar", id: "scrollHor" },
                  ],
                },
                { view: "scrollbar", id: "scrollVer" },
              ],
            },
          ],
        },
      ],
    };


    this.initGanttDataProcessor();
    const { tasks } = this.props;
    gantt.init(this.ganttContainer);
    gantt.i18n.setLocale("fr");
    gantt.parse(tasks);
  }

  componentDidUpdate() {
    gantt.clearAll();
    gantt.parse(this.props.tasks);
    gantt.render();
  }

  render() {
    return (
      <div
        ref={(input) => {
          this.ganttContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      ></div>
    );
  }

  componentWillUnmount() {
    if (this.dataProcessor) {
      this.dataProcessor.destructor();
      this.dataProcessor = null;
    }
  }

  initGanttDataProcessor() {
    const onDataUpdated = this.props.onDataUpdated;
    this.dataProcessor = gantt.createDataProcessor(
      (entityType, action, item, id) => {
        return new Promise((resolve, reject) => {
          if (onDataUpdated) {
            onDataUpdated(entityType, action, item, id);
          }
          return resolve();
        });
      }
    );
  }
}
