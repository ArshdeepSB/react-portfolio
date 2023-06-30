import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../Styles/Experience.css";

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{background: "#3e497a", color: "#fff"}}
          icon={<SchoolIcon/>}>
          <h3 className = "vertical-timeline-element-tile">
            Chinguacousy Secondary School (Scitech), Brampton, Ontario
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Highschool Diploma
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Computer Repair Consultant - Wifi Computers
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Brampton, Ontario
          </h4>

          <p>Worked with troubleshooting hardware and software issues for customers</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2025"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Toronto Metropolitan Univerity, Toronto, Ontario
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element-title"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Data Analytics Development Student, Remote
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bruce Power
          </h4>

          <p>Gained experience working with ETL, Power Bi, SQL, Batch Uploads, Database, and Powershell
          </p>

        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  );
}

export default Experience