import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import blogList from '../../../assets/blogs/bola/Blogs'
import facebookIcon from '../../../assets/images/blog/facebook-icon.svg'
import linkedinIcon from '../../../assets/images/blog/linkedin-icon.svg'
import xIcon from '../../../assets/images/blog/x-icon.svg'


const blogInstance = blogList[0]

const socialMedia = [
  ["facebook", facebookIcon],
  ["linked in", linkedinIcon],
  ["x", xIcon],
]

const BlogPage = () => {
  return (
    <section className='blog-instance'>
      <Container className='pt-5 '>
        <Row className='mx-0 mt-5 pt-4 justify-content-center'>
          <Col xs={10} as='h2' className='display-4 fw-semibold mb-4'>
            {blogInstance.title}
          </Col>
          <Col xs={12} as='img' src={blogInstance.image} alt='' className='mb-5'>
          </Col>
          <Col xs={10} as='h2' className='fs-4 mb-5'>
            {blogInstance.text.map((paragraph, index) => <p key={index}>
              {paragraph}
            </p>)}
          </Col>
          <Col xs={10} as='h2' className='fs-4 mb-5'>
            <Row className='mx-0 mb-5 border-top border-1 border-gray pt-1 gy-4'>
              {socialMedia.map((socialMedia, index) =><Col as='a' className='px-2 px-xl-2 px-xxl-2 me-4 me-sm-5 me-xl-2 transition-1' xs={3} sm={2} md={1} key={index} >
                <img src={socialMedia[1]} className='w-100' alt={socialMedia[0]} />

              </Col>)}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default BlogPage