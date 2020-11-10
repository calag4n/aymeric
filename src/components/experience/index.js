//@ts-check
import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../../content/experiences'


/**
 * Experience section displays a timeline
 * 
 * @component
 * @example
 * <Experience />
 */
const Experience = () => {
  return (
    <VerticalTimeline>
      {experiences.map(exp => {
        const {
          contentStyle,
          contentArrowStyle,
          date,
          iconStyle,
          Icon,
          title,
          location,
          image,
          imageAlt,
          description,
        } = exp

        return (
          <VerticalTimelineElement
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={date}
            iconStyle={iconStyle}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{location}</h4>
            {image && (
              <img
                src={image}
                style={{ float: 'right', width: '100px' }}
                alt={imageAlt}
              />
            )}
            <p>{description}</p>
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  )
}

export default Experience
