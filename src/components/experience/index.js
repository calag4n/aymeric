//@ts-check
import React from 'react'
import styled from 'styled-components'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import ReactMarkdown from 'react-markdown'
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
      {experiences.map((exp, i) => {
        const {
          contentStyle,
          contentArrowStyle,
          date,
          iconStyle,
          Icon,
          title,
          subtitle,
          imageLink,
          image,
          imageAlt,
          description,
        } = exp

        return (
          <VerticalTimelineElement
            key={`experience-${title}-${i}`}
            contentStyle={contentStyle}
            contentArrowStyle={contentArrowStyle}
            date={date}
            iconStyle={iconStyle}
            icon={<Icon />}
          >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            {image && (
              <a href={imageLink} target="_blank" rel="noreferrer">
                <Img
                  src={image}
                  style={{ float: 'right', width: '20%' }}
                  alt={imageAlt}
                />
              </a>
            )}
            <ReactMarkdown>{description}</ReactMarkdown>
          </VerticalTimelineElement>
        )
      })}
    </VerticalTimeline>
  )
}

export default Experience

const Img = styled.img`
  float: right;
  width: 20%;
`
