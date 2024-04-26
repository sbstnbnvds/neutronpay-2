import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import placeholderImage from '../../../assets/images/blog/blog-placeholder.png'


const Blogs = () => {



  const blogsList = [
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
    {
      cutline: "Lorem ipsum",
      header: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem quidem doloremque repellat in sit, libero nisi nemo similique saepe id ea, hic delectus vitae veritatis reiciendis minima! A, iusto quasi?',
      image: placeholderImage,
    },
  ]


  return (
    <section className="blogs-section py-5">
      <Container>
        <small className='text-secondary fs-4 fw-medium'>Lorem ipsum</small>


        <Row className='mx-0 my-1 gy-5'>
          {blogsList.map((blog, index) => <Col
            key={index}
            lg={4}
            md={6}
            xs={12}
            className={'px-4 position-relative ' 
            + (index % 3 == 1 ? 'middle-column ' : '') 
            + (index % 2 == 1 ? 'odd-column' : '')}>

            <div className="single-blog-pic w-100 mb-2"
              key={index}>
              <img src={blog.image} alt="" className='w-100 h-100 rounded-4  object-fit-cover' />
            </div>
            <small className='text-secondary '>Lorem ipsum</small>

            <h3 className='grape-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p className='fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sint hic assumenda minima ipsa dolorum eum velit aperiam. Vitae necessitatibus dicta aliquam aut! Dolorum eos accusantium quas fugiat praesentium voluptate.</p>
          </Col>)}
        </Row>

      </Container>
    </section>
  )
}

export default Blogs