import logo from './logo.svg';
import './App.css';
import image from './images/mobile.svg'
import pic1 from './images/img-1.jpeg'
import pic2 from './images/img-2 (1).jpeg'
import pic3 from './images/img-3 (1).jpeg'
import pic4 from './images/img-4.jpeg'
import pic5 from './images/img-2.jpeg'
import pic6 from './images/img-3.jpeg'
import pic7 from './images/imgbg.jpg'
function App() {
  return (
    <div>
    <div className="navbar">
      <div class="navbar-left">
      <a href="/" className="logo text-uppercase navbar-brand">DORSIN</a>
      </div>
      <ul className="navbar-middle">
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
        </ul>
        <div className="navbar-right">
            <button class="say-hello-btn">Try it Free</button>
        </div>
    </div>
    <div className="background-image">
    <div className="overlay"></div>
        <div class="content">
            <h1 class="home-title">We help startups launch their products</h1>
            <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
            <button className="circleplay"><i class="fa-regular fa-circle-play"></i></button>
        </div>
    </div>
    <br></br>
    <center>
    <div><h2>Our Services</h2>  <br></br>
            <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have<br></br> meaning and add a value for our clients.</p></div></center>  <br></br>  <br></br>
            <div class="card-container">
        <div class="card">
            <div class="card-icon"><i class="fa-regular fa-gem"></i></div>
            <h3 class="card-heading">Digital Design</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="card">
            <div class="card-icon"><i class="fa-solid fa-computer"></i></div>
            <h3 class="card-heading">Ultimate Colors</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
        <div class="card">
            <div class="card-icon"><i class="fa-solid fa-piggy-bank"></i></div>
            <h3 class="card-heading">Strategy Solutions</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="card">
            <div class="card-icon"><i class="fa-brands fa-react"></i></div>
            <h3 class="card-heading">Awesome Support</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="card">
            <div class="card-icon"><i class="fa-regular fa-newspaper"></i></div>
            <h3 class="card-heading">Truly Multipurpose</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div class="card">
            <div class="card-icon"><i class="fa-solid fa-plane"></i></div>
            <h3 class="card-heading">Easy to Customize</h3>
            <p class="card-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
   
    <div className="section">
    <div className="div2">
          <div className="contentdiv2"></div>
          <h3>A digital web design studio creating modern & engaging online experiences</h3><br></br><br></br>
          <p className="divcontent">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p><br></br><br></br>
          <p><ul className="divcontent">
          <li>We put a lot of effort in design.</li>
          <li>The most important ingredient of successful website.</li>
          <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
          <li>Submit Your Organization.</li>
          </ul></p><br></br><br></br>       
          <div className="navbar-left">
            <button class="learn-btn">Learn More <i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    <div className="div1">
    <img src ={image} className='logo' alt="logo"/>
    </div>       
    </div>
    <br></br><br></br><br></br>
    <div className="background-image2">
    <div className="overlay"></div>
        <div className="content">
            <h1 className="home-title2">Build your dream website today</h1>
            <center><p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her..</p></center><br></br>
            <button className="planprice">View Plan & Pricing</button>
        </div>
    </div>
    <center>
    <div><h2>Our Pricing</h2><br></br>
            <p>Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p></div></center>
    
    <div class="card-container1">
    <div class="card1">
    <center>
      <h2>ECONOMY</h2><br></br>
      <p>$9.90<br></br><br></br>BILLING PER MONTH</p><br></br>
      <ul>
        <li>Bandwidth: 1GB</li><br></br>
        <li>Onlinespace: 50MB</li><br></br>
        <li>Support: No</li><br></br>
        <li>1 Domain</li><br></br>
        <li>No Hidden Fees</li><br></br>
      </ul>
      <button class="button">Join Now</button>
      </center>
    </div>
    <div class="card1">
    <center>
      <h2>DELUXE</h2><br></br>
      <p>$19.90<br></br><br></br>BILLING PER MONTH</p><br></br>
      <ul>
        <li>Bandwidth: 1GB</li><br></br>
        <li>Onlinespace: 50MB</li><br></br>
        <li>Support: Yes</li><br></br>
        <li>1 Domain</li><br></br>
        <li>No Hidden Fees</li><br></br>
      </ul>
      <button class="button">Join Now</button>
    </center>
    </div>
    <div class="card1">
    <center>
      <h2>ULTIMATE</h2><br></br>
      <p>$29.90<br></br><br></br>BILLING PER MONTH</p><br></br>
      <ul>
        <li>Bandwidth: 2GB</li><br></br>
        <li>Onlinespace: 500MB</li><br></br>
        <li>Support: Yes</li><br></br>
        <li>1 Domain</li><br></br>
        <li>No Hidden Fees</li><br></br>
      </ul>
      <button class="button">Join Now</button>
    </center>
    </div>
  </div>
  <center>
  <br></br><br></br>
  <div><h2>BEHIND THE PEOPLE</h2>
            <p>It is a long established fact that create category leading brand experiences a reader will be distracted by<br></br> the readable content of a page when looking at its layout</p></div></center>

            <div class="card-container">
                <div class="card5">
                <img src ={pic1} className='logo' alt="logo"/>
                  <h3>Frank Johnson</h3>
                  <p>CEO</p>
                </div>
                <div class="card5">
                <img src ={pic2} className='logo' alt="logo"/>
                  <h3>Elaine Stclair</h3>
                  <p>Designer</p>
                </div>
                <div class="card5">
                <img src ={pic3} className='logo' alt="logo"/>
                  <h3>Wanda Arthur</h3>
                  <p>Developer</p>
                </div>
                <div class="card5">
                <img src ={pic4} className='logo' alt="logo"/>
                  <h3>Joshua Stemple</h3>
                  <p>Manager</p>
                </div>
              <center>
            <div className="mid-content"><h2>WORK PROCESS</h2>
            <p>In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web<br></br> copy before the Proin vitae ipsum vel ex finibus semper design starts.</p><br></br>
            <button className="learn-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button></div></center>
  </div>
  <center>
  <br></br><br></br>
  <div><h2>WHAT THEY'VE SAID</h2>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question<br></br> Marks and devious pulvinar metus molestie sed Semikoli.</p><br></br>
            <button class="learn-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button></div></center><br></br><br></br>
    <div className="background-image3">
    <div className="overlay"></div>
        <div className="content">
            <h2 className="home-title2">Let's Get Started</h2>
            <center><p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p></center><br></br>
            <button className="learn-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
    <center>
    <br></br><br></br>
    <div><h2>BLOG</h2><br></br>
            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class <br></br>at a euismod mus ipsum vel ex finibus semper luctus quam. </p><br></br>
            <button class="learn-btn">Get Started <i class="fa-solid fa-arrow-right"></i></button></div></center><br></br><br></br>

            <div class="card-container4">
    <div className="card6">
    <img src ={pic5} className='logo' alt="logo"/>
      <p className="tagline">Doing a cross country road trip</p>
    </div>
    <div className="card6">
    <img src ={pic6} className='logo' alt="logo"/>
      <p className="tagline">Doing a cross country road trip</p>
    </div>
    <div className="card6">
    <img src ={pic7} className='logo' alt="logo"/>
      <p className="tagline">Doing a cross country road trip</p>
    </div>
  </div>
  <center>
  <br></br>
  <div><h2>GET IN TOUCH</h2><br></br>
            <p>We thrive when coming up with innovative ideas but also understand that a smart concept should be <br></br>supported with faucibus sapien odio measurable results.</p></div>
            </center>
            <br></br><br></br><br></br>
            <center>
            <div className="form-section">
            <center>
            <div className="form">
                <input type="text" id="" placeholder="Your Name"/>
                <input type="text" id="" placeholder="Your Email"/><br></br><br></br>
                <input class="big" type="text" id="" placeholder="Your Subject"/>
 
            </div>
            </center>
            <div className="morebig">
                <br></br>
                <input className="morebigg" type="text" id="" placeholder="Your Message"/><br></br>
            </div>
            <div><br></br><br></br>
                <button className="form-btn">Send Message</button>
            </div>
            </div>
            </center>
            <br></br><br></br>
            <div class="footer-copyright">
            <p><i class="fa-brands fa-twitter"></i> &nbsp; <i class="fa-brands fa-facebook"></i> &nbsp; <i class="fa-brands fa-instagram"> &nbsp; <i class="fa-brands fa-google"></i> &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa-solid fa-phone"></i>+91 123 4556 789</i>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <i class="fa-regular fa-envelope"></i>Support@info.com</p>
            </div>
            <div class="footer">
  <div className="footer-column">
    <h3 className="footer-heading">Dosrin</h3><br></br>
    <ul className="footer-list">
      <li className="footer-list-item">Home</li>
      <li className="footer-list-item">About Us</li>
      <li className="footer-list-item">Career</li>
      <li className="footer-list-item">Contact Us</li>
    </ul>
  </div>
  <div class="footer-column">
    <h3 className="footer-heading">Information</h3><br></br>
    <ul className="footer-list">
      <li className="footer-list-item">Terms and Conditions</li>
      <li className="footer-list-item">About Us</li>
      <li className="footer-list-item">Job Bookmarks</li>
    </ul>
  </div>
  <div className="footer-column">
    <h3 className="footer-heading">Support</h3><br></br>
    <ul className="footer-list">
      <li className="footer-list-item">FAQ</li>
      <li className="footer-list-item">Contact</li>
      <li className="footer-list-item">Discussion</li>
    </ul>
  </div>
  <div className="footer-column">
    <h3 className="footer-heading">Subscribe</h3><br></br>
    <p className="footer-paragraph">In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts.</p><br></br><br></br>
    <input type="email" className="footer-input" placeholder="Enter your email"/>
  </div>
  </div>
  <div class="footer-copyright">
  <p>&copy; 2019 - 2023 Dorsin - Themesbrand</p>
  </div>
  </div>
  );
}
export default App;
