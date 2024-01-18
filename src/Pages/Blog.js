import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const topics = [
  { id: 'tank', name: 'Tank Maintenance' },
  { id: 'care', name: 'Fish Care' },
  { id: 'freshwater', name: 'Freshwater' },
  { id: 'saltwater', name: 'Saltwater' },
];

const posts = [
  { id: 1, topic: 'tank', title: 'Tips for Clean Tanks' },
  { id: 2, topic: 'care', title: 'Feeding Your Fish Properly' },
  // Add more posts as needed
];

export default function Blog() {
  return (
    <>
      <Container className="text-center">
        <h2>Talk about anything Aqua!</h2>
        <p>We encourage this to be a safe space to debate or talk amongst fish lovers. Any hateful or insulting comments will result in deleted comments, topics, or account termination.</p>
      </Container>

      <Container>
        <Row>
          <Col as='div' className='w-100'>
            <h3>Topics:</h3>
            <ul className='subject-list'>
              {topics.map(topic => (
                <li key={topic.id}><a href={`#${topic.id}`}>{topic.name}</a></li>
              ))}
            </ul>
          </Col>
          <Col as='div'>
            <h3>By Post:</h3>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Render posts based on selected topic */}
      {topics.map(topic => (
        <Container key={topic.id} id={topic.id}>
          <h3>{topic.name}</h3>
          <ul>
            {posts
              .filter(post => post.topic === topic.id)
              .map(filteredPost => (
                <li key={filteredPost.id}>{filteredPost.title}</li>
              ))}
          </ul>
        </Container>
      ))}
    </>
  );
}

{ /* post the topics here ; these will be the links that come from the db */}
 {/* links will lead to single Topic page */}