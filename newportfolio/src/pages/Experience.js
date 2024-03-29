import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../Styles/Experience.css";
import StarIcon from "@material-ui/icons/StarRate"
import Certificate from "@material-ui/icons/LineWeight"

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
          className="vertical-timeline-element--work"
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

          <p>Gained experience working with ETL, Power Bi, SQL, Batch Uploads, Database, and Powershell</p>

        </VerticalTimelineElement>

        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Programmer Analyst, Remote
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Royal Canadian Mounted Police
          </h4>

          <p>Gained experience with managing cloud application on Microsoft Azure: Cloud Computing Software
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: "#c51e01", color: "#fff" }}
          icon={<Certificate />}
        >
          <h3 className="vertical-timeline-element-title">
            AZ-900 Azure Fundamentals
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Azure Certification
          </h4>

          <p>Fundamental cloud concepts like virtualization, scalability, and elasticity, along with core Azure services including virtual machines, storage, networking, and identity management.
          </p>

        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />

      </VerticalTimeline>
    </div>
  );
}

export default Experience