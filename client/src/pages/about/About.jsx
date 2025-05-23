import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <div className="hero-section">
            <h1>Welcome to Our Blog</h1>
            <p>Your daily dose of insights, ideas, and inspiration.</p>
        </div>
        <div className="aboutContainer">
            <h1 className='aboutHeader'>About Our Blog</h1>
                <p>
                    Welcome to our blog! We are passionate about sharing insightful and engaging content with our readers.
                    Our blog covers a wide range of topics, including technology, lifestyle, health, travel, and much more.
                    We believe that knowledge and ideas should be accessible to everyone, and our goal is to provide
                    high-quality articles that inspire, inform, and entertain.
                </p>
                <p>
                    Whether you're looking for the latest trends in tech, tips on living a healthier life, or travel guides
                    to help plan your next adventure, you'll find something here that piques your interest. Our team of
                    dedicated writers works hard to ensure that every post delivers value to our readers.
                </p>
                <p>
                    Thank you for being a part of our community. We hope you enjoy reading our blog as much as we enjoy
                    creating it. Feel free to reach out to us with any feedback or suggestions for topics you'd like to
                    see covered.
                </p>
            <h2 className='aboutSecondHeader'>Our Mission</h2>
                <p>
                    Our mission is to create a platform that fosters curiosity, creativity, and learning. We aim to connect
                    people from diverse backgrounds through content that informs, inspires, and encourages personal and
                    professional growth.
                </p>
                <p>
                    We believe that the power of knowledge can transform lives. Whether it's learning something new, gaining
                    a fresh perspective, or discovering untapped potential, our blog is designed to be a resource for all.
                    We strive to break down complex ideas into accessible, easy-to-understand content that resonates with
                    our audience.
                </p>
                <p>
                    Our long-term goal is to become a trusted source of information and a platform where people can connect,
                    engage, and learn from one another.
                </p>
            <h2 className='aboutSecondHeader'>Contact Us</h2>
                <p>
                    If you have any questions or inquiries, feel free to reach out via our <Link className="link" to="/contact">contact page</Link>. We’d love to hear
                    from you!
                </p>
        </div>
    </div>
  )
}
