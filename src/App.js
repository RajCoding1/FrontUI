import React from 'react';
import './App.css'; // Import the CSS file

function App() {
    return (
      <div>
        <nav className="navbar bg-body-tertiary fixed-top">
          <div className="container d-flex align-items-center"> {/* Added align-items-center to vertically center content */}
            <a className="navbar-brand" href="#">
              <img src="download1.png" alt="Bootstrap" width={114} height={48} />
            </a>
            <button type="button" className="btn btn-primary btn-lg">LOGIN</button>
          </div>
        </nav>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="logo-of-standard-chartered-seen-in-the-city-of-london-uk-in-november-2A823RJ.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="istockphoto-1369383269-612x612.jpeg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="standard-chartered_660_121418082936.jpeg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container">
          <h2 className="mt-4">Enjoy discounts* &amp; rewards* on hotel* &amp; flight bookings along with complimentary lounge access</h2>
          <div className="wrapper">
            <div className="image">
              <img src="Platinum-Debit-Card.webp" alt="" />
            </div>
            <div className="text">
              <h1 className="display-4">Platinum Card</h1>
              <ul>
                <li>Get 4X Rewards on every usage</li>
                <li>No Joining Fee</li>
                <li>Free Lounge access</li>
                <li>Fuel Surcharge Waiver</li>
                <li>Bonus Offers </li>
                <li>Cashbacks</li>
              </ul>
              <h6>Eligibility</h6>
              <p>Applicant’s age should be between 18 and 65 years for Salaried person and for Self Employed age should be 18 and 67 years.
                Other Requirements.</p>
              <div className="mt-4">
                <button type="button" className="btn btn-success btn-lg">LOGIN</button>
                <a href="https://www.sc.com/in/credit-cards/rewards-credit-card/?pid=cc_rewardscard_cclp&cid=cc_rewardscard_cclp">
                  <button type="button" className="btn btn-outline-success btn-lg ms-3">KNOW MORE</button>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <h2 className="mt-4">Earn 4X rewards on all retail spends* + bonus 4X rewards*. No Joining Fee, Free lounge access, Fuel Surcharge waiver and many more.</h2>
          <div className="wrapper">
            <div className="image">
              <img src="Platinum-Debit-Card.webp" alt="" />
            </div>
            <div className="text">
              <h1 className="display-4">EasymyTrip Credit Card</h1>
              <ul>
                <li>Get 4X Rewards on every usage</li>
                <li>No Joining Fee</li>
                <li>Free Lounge access</li>
                <li>Fuel Surcharge Waiver</li>
                <li>Bonus Offers </li>
                <li>Cashbacks</li>
              </ul>
              <h6>Eligibility</h6>
              <p>Applicant’s age should be between 18 and 65 years for Salaried person and for Self Employed age should be 18 and 67 years.</p>
              <div className="mt-4">
                <button type="button" className="btn btn-success btn-lg">LOGIN</button>
                <a href="https://www.sc.com/in/credit-cards/rewards-credit-card/?pid=cc_rewardscard_cclp&cid=cc_rewardscard_cclp">
                  <button type="button" className="btn btn-outline-success btn-lg ms-3">KNOW MORE</button>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <h2 className="mt-4">Enjoy cashback of 2%* on your Online spends &amp; 1%* across other spends</h2>
          <div className="wrapper">
            <div className="image">
              <img src="Platinum-Debit-Card.webp" alt="" />
            </div>
            <div className="text">
              <h1 className="display-4">Gold Credit Card</h1>
              <ul>
                <li>Get 4X Rewards on every usage</li>
                <li>No Joining Fee</li>
                <li>Free Lounge access</li>
                <li>Fuel Surcharge Waiver</li>
                <li>Bonus Offers </li>
                <li>Cashbacks</li>
              </ul>
              <h6>Eligibility</h6>
              <p>Applicant’s age should be between 18 and 65 years for Salaried person and for Self Employed age should be 18 and 67 years.</p>
              <div className="mt-4">
                <button type="button" className="btn btn-success btn-lg ">LOGIN</button>
                <a href="https://www.sc.com/in/credit-cards/rewards-credit-card/?pid=cc_rewardscard_cclp&cid=cc_rewardscard_cclp">
                  <button type="button" className="btn btn-outline-success btn-lg ms-3">KNOW MORE</button>
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="box">
          <h3>Other Credit Cards</h3>
          <div className="card-deck d-flex justify-content-between ">
            <div className="card" style={{width: '18rem'}}>
              <img src="image_search_1682215662470.png" className="card-img-top" alt="Card Image 1" />
              <div className="card-body">
                <h5 className="card-title">Card Title 1</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img src="Standard-Chartered-Platinum-Rewards-Credit-Card.webp" className="card-img-top" alt="Card Image 2" />
              <div className="card-body">
                <h5 className="card-title">Card Title 2</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img src="Standard-Chartered-Manhattan-Credit-Card.png" className="card-img-top" alt="Card Image 3" />
              <div className="card-body">
                <h5 className="card-title">Card Title 3</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img src="Contactless-Visa-Credit-Card.jpeg" className="card-img-top" alt="Card Image 4" />
              <div className="card-body">
                <h5 className="card-title">Card Title 4</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
            <div className="card" style={{width: '18rem'}}>
              <img src="Cover-Review-2.jpeg" className="card-img-top" alt="Card Image 5" />
              <div className="card-body">
                <h5 className="card-title">Card Title 5</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container1 mt-10">
          <h2 className="mb-4">Credit Card FAQs</h2>
          <div className="accordion" id="faqAccordion">
            <div className="card">
              <div className="card-header" id="question1">
                <h5 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    Question 1: What is a credit card?
                  </button>
                </h5>
              </div>
              <div id="collapse1" className="collapse" aria-labelledby="question1" data-parent="#faqAccordion">
                <div className="card-body">
                  A credit card is a simple and efficient way to make payments. It negates the need to carry cash or issue checks and is designed to make spending a rewarding experience. It is the perfect way to handle all physical and online payments and has you covered in the event of a cash emergency too.
                </div>
              </div>
            </div>
            <div className="accordion" id="faqAccordion">
              <div className="card">
                <div className="card-header" id="question2">
                  <h5 className="mb-0">
                    <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse2" aria-expanded="true" aria-controls="collapse1">
                      Question 2: What are the benefits of a credit card?
                    </button>
                  </h5>
                </div>
                <div id="collapse2" className="collapse" aria-labelledby="question2" data-parent="#faqAccordion">
                  <div className="card-body">
                    Standard Chartered credit cards provide you with a plethora of additional benefits to enhance your premium lifestyle.
                  </div>
                </div>
              </div>
              <div className="accordion" id="faqAccordion">
                <div className="card">
                  <div className="card-header" id="question3">
                    <h5 className="mb-0">
                      <button className="btn 1 btn-link" type="button" data-toggle="collapse" data-target="#collapse3" aria-expanded="true" aria-controls="collapse1">
                        Question 3: What are the benefits of a rewards credit card?
                      </button>
                    </h5>
                  </div>
                  <div id="collapse3" className="collapse" aria-labelledby="question3" data-parent="#faqAccordion">
                    <div className="card-body">
                      Rewards credit cards offer various benefits such as cashback, travel rewards, and points for every purchase. These rewards can be redeemed for discounts, free flights, and more.
                    </div>
                  </div>
                </div>
                <footer style={{background: '#2c3a87', backgroundImage: 'linear-gradient(to right, #2c3a87 , #0061c7)'}}>
                  <div className="container text-white py-4">
                    <div className="row">
                      <div className="col-md-6">
                        <h5>About Us</h5>
                        <p>Standard Chartered Bank Operating for over 160years.</p>
                      </div>
                      <div className="col-md-6">
                        <h5>Contact Us</h5>
                        <p>Email: customer.care@sc.com</p>
                        <p>Phone: +6601 4444 / 3940 4444</p>
                      </div>
                    </div>
                  </div>
                </footer>
              </div></div></div></div></div>
    );
}
export default App;

