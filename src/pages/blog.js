import React, { Component } from 'react';
import Layout from '../components/layout';
import styles from '../components/blog.module.css';

class Blog extends Component {
  render() { 
    return (  
      <Layout>
        <div className={styles.blog}>
          <h1 className={styles.title}>this is out blog page</h1>
          <h2>this second heading</h2>
        </div>
      </Layout>
    );
  }
}
 
export default Blog;