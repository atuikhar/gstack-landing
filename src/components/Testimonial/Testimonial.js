import React, { useState } from 'react'
import {
  Wrapper,
  CarouselContainer,
  Title,
  Text,
  Paragraph,
  ImageWrapper,
  WrapperContainer,
} from './TestimonialStyles'
import { Rating } from 'components/Rating/Rating'
import { testimony } from 'constants/data'

const Testimonial = (props) => {
  const [index, setIndex] = useState(0)

  const handleChange = (cur, prev) => {
    setIndex(cur)
  }

  return (
    <>
      <Wrapper>
        <CarouselContainer
          index={index}
          onChange={handleChange}
          interval={4000}
          animation="slide"
          indicators={false}
          stopAutoPlayOnHover
          swipe
        >
          {testimony.map((t, i) => (
            <WrapperContainer key={i}>
              <Title>{t.name}</Title>
              <Text>{t.company}</Text>
              <Paragraph>"{t.desc}"</Paragraph>
              <ImageWrapper src="./Timer2.jpg" alt="img" />
              <Rating value={t.rating} />
              <Title>{t.title}</Title>
            </WrapperContainer>
          ))}
        </CarouselContainer>
        <hr style={{ borderBottom: '4px solid black', margin: '50px' }} />
      </Wrapper>
    </>
  )
}

export default Testimonial
