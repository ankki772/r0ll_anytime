import React from 'react'

export default function Footer() {
  return (
   <>
   <footer>

<div class="row">

  <div class="column">

    <h4>About Us</h4>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in metus euismod, faucibus metus ut, semper nibh. Aenean euismod justo eu enim dapibus suscipit.</p>

  </div>

  <div class="column">

    <h4>Quick Links</h4>

    <ul>

      <li><a href="#"><i class="fa fa-angle-right"></i> Subscription</a></li>

      <li><a href="#"><i class="fa fa-angle-right"></i> Contact us</a></li>

      <li><a href="#"><i class="fa fa-angle-right"></i> Bug report</a></li>

    </ul>

  </div>

  <div class="column">

    <h4>Connect with Us</h4>

    <ul class="social-icons">

      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>

      <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
      
      <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>

        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>

    </ul>

  </div>

</div>

<p class="copyright">© 2023 All Rights Reserved</p>

</footer>
        <style jsx>{`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  
  a {
    text-decoration: none;
  }
  
  body {
    height: 100%;
    width: 100%;
    background-color: #eceef9;
  }
  
  footer {
    color: #333;
    background-color: #e6f0ff;
    position: fixed;
   f
  }
  
  .row {
    display: flex;
    padding: 1rem;
  }
  
  .column {
    width: calc(100% / 3);
    padding: 0 0.9375rem;
  }
  
  h4 {
    margin-bottom: 0.9375rem;
    font-size: 1.5rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  ul li {
    margin-bottom: 0.625rem;
  }
  
  ul li a {
    color: #333;
    font-size: 1rem;
  }
  
  ul li i {
    color: #6faaff;
  }
  
  ul li a:hover {
    color: #6faaff;
  }
  
  ul.social-icons {
    display: flex;
    column-gap: 0.625rem;
  }
  
  .social-icons i {
    color: white;
  }
  
  ul.social-icons li {
    margin-bottom: 0rem;
  }
  
  ul.social-icons li a {
    display: grid;
    place-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    background-color: #6faaff;
  }
  
  ul.social-icons li:hover a {
    background-color: #6fdeff;
  }
  
  .copyright {
    text-align: center;
    color: #fff;
    background-color: #6faaff;
    padding: 0.6rem 0;
  }
  
  /* Responsive adjustments */
  
  @media screen and (max-width: 768px) {
    .column {
      margin: 0.4rem 0;
      width: 100%;
      padding: 0;
    }
  
    .row {
      display: flex;
      flex-wrap: wrap;
    }
  
    h4 {
      font-size: 1.3125rem;
    }
  
    p {
      font-size: 0.9375rem;
    }
  
    ul li a {
      font-size: 0.9375rem;
    }
  
    ul.social-icons li a {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
  
    `}</style>
   </>
  )
}
