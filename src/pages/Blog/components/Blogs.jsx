import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import placeholderImage from '../../../assets/images/blog/blog-placeholder.png'


const Blogs = () => {
  return (
    <section className="blogs-section py-5">
      <Container>
        <small className='text-secondary fs-4 fw-medium'>Lorem ipsum</small>
        <Row className='mx-0 my-4 gy-4'>
          <Col lg={4} xs={12} className='px-4'>
            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>
          <Col lg={4} xs={12} className='px-4 position-relative middle-column'>

            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>
          <Col lg={4} xs={12} className='px-4'>

            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>

          <Col lg={4} xs={12} className='px-4'>
            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>
          <Col lg={4} xs={12} className='px-4 position-relative middle-column'>

            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>
          <Col lg={4} xs={12} className='px-4'>

            <div className="single-blog-pic w-100 mb-2">
              <img src={placeholderImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Blogs