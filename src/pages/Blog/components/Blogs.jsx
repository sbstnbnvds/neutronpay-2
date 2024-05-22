import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import { Link } from 'react-router-dom'



const Blogs = ({ blogList }) => {


  return (
    <section className="blogs-section py-5">
      <Container>
        <small className='text-secondary fs-4 fw-medium'>Blogs</small>


        <Row className='mx-0 my-1 gy-5 justify-content-center justify-content-md-start'>
          {blogList.map((blog, index) => <Col
            key={index}
            lg={4}
            md={6}
            sm={10}
            xs={12}
            className={'px-4 position-relative '
              + (index % 3 == 1 ? 'middle-column ' : '')
              + (index % 2 == 1 ? 'odd-column' : '')}>

            <div className="single-blog-pic w-100 mb-2"
              key={index}>
              <img src={blog.image} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Neutronpay</small>

            <Link className='text-decoration-none' to={`${blog.index}`}>
              <h3 className='grape-text transition-1'>{blog.title.length > 60 ? (blog.title.substring(0, 60) + '...') : blog.title }</h3>
            </Link>
            {/* <p className='fs-6'>{blog.text[0]}</p> */}
          </Col>)}
        </Row>

      </Container>
    </section>
  )
}

export default Blogs