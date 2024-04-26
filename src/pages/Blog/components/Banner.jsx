import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import dottedTop from '../../../assets/images/dotted-top.svg'
import dottedBottom from '../../../assets/images/dotted-bottom.svg'

import mainImage from '../../../assets/images/blog/main-blog.png'
import placeholderImage from '../../../assets/images/blog/blog-placeholder.png'

const Banner = () => {


  const secondaryBlogs = [
    {
      header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      cutline: "Lorem ipsum",
      image: placeholderImage,
    },
    {
      header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      cutline: "Lorem ipsum",
      image: placeholderImage,
    },
    {
      header: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      cutline: "Lorem ipsum",
      image: placeholderImage,
    },
  ]



  return (
    <section className='blog-banner eerie-black-background py-5 text-white position-relative'>
      <h1 className='display-1 fw-800 text-uppercase text-center pt-5 mt-5 position-relative z-3'>the blog</h1>
      <Container className='position-relative z-3 mb-5'>
        <Row className='mx-0 mt-5 align-items-center'>

          <Col lg={6} xs={12} className='px-5'>
            <div className="main-blog-pic w-100">
              <img src={mainImage} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>

            <h3 className='steel-pink-text fs-4 fw-medium py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quod ea sint adipisci at, tempore enim excepturi dolorum optio, quos debitis quam laudantium numquam. Labore, quidem. Perspiciatis sint libero magni!</p>

          </Col>
          <Col lg={6} xs={12} className='px-5'>
            {secondaryBlogs.map((blog, index) => <Row 
            key={index} 
            className={'mx-0 align-items-center py-4 position-relative ' + (index == 1 ? 'middle-row' : '')}>
              <Col sm={5} xs={12}>
                <div className="secondary-blog-pic w-100">
                  <img src={blog.image} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
                </div>
              </Col>
              <Col sm={7} xs={12} className='my-2'>
                <small className='fs-6 text-white-50'>{blog.cutline}</small>
                <h3 className='fs-4 fw-normal py-1 m-0'>{blog.header}</h3>
              </Col>
            </Row>)}
          </Col>
        </Row>
      </Container>

      <Row className='w-100 justify-content-end position-absolute top-0 end-0 m-0' >
        <Col xs={8} className='m-0 p-0'>
          <img src={dottedTop} alt="" className='w-100 m-0 p-0' />
        </Col>
      </Row>
      <Row className='w-100 justify-content-start position-absolute bottom-0 start-0 m-0' >
        <Col xs={8} className='m-0 p-0'>
          <img src={dottedBottom} alt="" className='w-100 m-0 p-0' />
        </Col>
      </Row>

    </section>
  )
}

export default Banner