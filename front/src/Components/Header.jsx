import React, { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [hamBtn, setHamBtn] = useState(false);

  const ToggleBtn = () => {
    setHamBtn(!hamBtn);
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="Header">
        {screenWidth < 768 ? (
          hamBtn ? (
            <button
              className="Toggle-btn"
              onClick={ToggleBtn}
              style={{
                rotate: '180deg',
                transition: 'rotate 0.5s'
              }}
            >
              |||
            </button>
          ) : (
            <button
              className="Toggle-btn"
              onClick={ToggleBtn}
              style={{
                rotate: '90deg',
                transition: 'rotate 0.5s'
              }}
            >
              |||
            </button>
          )
        ) : null}

        <section className="first-line">
          {screenWidth > 768 || hamBtn ? (
            <div className="contact">
              <svg
                enableBackground="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                id="fi_3178903"
                className="location"
              >
                <path d="m12 24c-.118 0-.236-.042-.331-.125-.354-.313-8.669-7.731-8.669-14.875 0-4.963 4.038-9 9-9s9 4.037 9 9c0 7.144-8.315 14.562-8.669 14.875-.095.083-.213.125-.331.125zm0-23c-4.411 0-8 3.589-8 8 0 5.918 6.451 12.358 8 13.819 1.549-1.461 8-7.901 8-13.819 0-4.411-3.589-8-8-8z"></path>
                <path d="m12 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
              </svg>
              <svg
                height="512"
                viewBox="0 0 32 32"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
                id="fi_3059407"
              >
                <g id="Layer_3" data-name="Layer 3">
                  <path d="m30.035 22.594c-.053-.044-6.042-4.33-7.667-4.049-.781.138-1.228.67-2.123 1.737-.144.172-.491.583-.759.876a12.458 12.458 0 0 1 -1.651-.672 13.7 13.7 0 0 1 -6.321-6.321 12.458 12.458 0 0 1 -.672-1.651c.294-.269.706-.616.882-.764 1.061-.89 1.593-1.337 1.731-2.119.283-1.619-4.005-7.613-4.049-7.667a2.289 2.289 0 0 0 -1.706-.964c-1.738 0-6.7 6.436-6.7 7.521 0 .063.091 6.467 7.988 14.5 8.024 7.888 14.428 7.979 14.491 7.979 1.085 0 7.521-4.962 7.521-6.7a2.287 2.287 0 0 0 -.965-1.706zm-6.666 6.4c-.874-.072-6.248-.781-12.967-7.382-6.635-6.755-7.326-12.144-7.395-12.979a27.054 27.054 0 0 1 4.706-5.561c.04.04.093.1.161.178a35.391 35.391 0 0 1 3.574 6.063 11.886 11.886 0 0 1 -1.016.911 10.033 10.033 0 0 0 -1.512 1.422l-.243.34.072.411a11.418 11.418 0 0 0 .965 2.641 15.71 15.71 0 0 0 7.248 7.247 11.389 11.389 0 0 0 2.641.966l.411.072.34-.243a10.117 10.117 0 0 0 1.428-1.518c.313-.374.732-.873.89-1.014a35.163 35.163 0 0 1 6.078 3.578c.083.07.141.124.18.159a27.031 27.031 0 0 1 -5.561 4.707z"></path>
                </g>
              </svg>
              <svg
                id="fi_2099100"
                enableBackground="new 0 0 511.998 511.998"
                height="512"
                viewBox="0 0 511.998 511.998"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m511.998 111.383c0-25.98-21.137-47.117-47.117-47.117h-417.764c-25.975.001-47.108 21.128-47.117 47.125v.008 289.199c0 26.305 21.352 47.133 47.133 47.133h417.731c26.304 0 47.133-21.351 47.133-47.133v-289.199c0-.002 0-.004 0-.006.001-.003.001-.006.001-.01zm-464.881-17.116h417.764c9.438 0 17.117 7.679 17.117 17.141 0 5.028-2.499 9.695-6.689 12.487l-209.805 139.876c-5.773 3.849-13.235 3.85-19.009 0 0 0-209.81-139.879-209.806-139.876.001.001-.003-.002-.004-.003-4.186-2.789-6.685-7.456-6.685-12.509 0-9.438 7.679-17.116 17.117-17.116zm417.748 323.464h-417.732c-9.339 0-17.133-7.551-17.133-17.133v-245.106l199.853 133.239c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.647 26.147-7.942l199.852-133.239v245.107c0 9.338-7.551 17.132-17.133 17.132z"></path>
              </svg>
            </div>
          ) : null}

              <div className="title-search">
              <div className="title">
                <Link to='/'>
                  <p className="title1">Noa</p>
                </Link>
                <p className="title2">Swimsuit brand</p>
                {screenWidth < 768 && hamBtn ?(
                  <form>
                    <input type="text" name="search" placeholder="Search swimwear, beachwear and more..." />
                  </form>
                ) : null}
              </div>
            </div>
            {screenWidth > 768 || hamBtn ? 
                  <div className="cart">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="transparent" stroke="black" strokeWidth={2} className="heart"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      <svg className="cart-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_11530382"><g fill="rgb(0,0,0)"><path d="m5 7.75c-.13807 0-.25.11193-.25.25v13c0 .1381.11193.25.25.25h14c.1381 0 .25-.1119.25-.25v-13c0-.13807-.1119-.25-.25-.25zm-1.75.25c0-.9665.7835-1.75 1.75-1.75h14c.9665 0 1.75.7835 1.75 1.75v13c0 .9665-.7835 1.75-1.75 1.75h-14c-.9665 0-1.75-.7835-1.75-1.75z"></path><path d="m12 2.75c-1.5188 0-2.75 1.23122-2.75 2.75v3.5c0 .41421-.33579.75-.75.75s-.75-.33579-.75-.75v-3.5c0-2.34721 1.90279-4.25 4.25-4.25 2.3472 0 4.25 1.90279 4.25 4.25v3.5c0 .41421-.3358.75-.75.75s-.75-.33579-.75-.75v-3.5c0-1.51878-1.2312-2.75-2.75-2.75z"></path></g></svg>
                      <svg id="fi_2321232" enableBackground="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg" className="member"><path d="m21.817 15.475c1.349-1.433 2.183-3.356 2.183-5.475 0-4.411-3.589-8-8-8s-8 3.589-8 8c0 2.119.834 4.042 2.183 5.475-3.998 2.231-6.183 6.957-6.183 13.525 0 .553.448 1 1 1h22c.553 0 1-.447 1-1 0-6.569-2.185-11.294-6.183-13.525zm-5.817-11.475c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm-9.982 24c.157-4.234 1.388-9.193 5.883-11.143 1.2.721 2.6 1.143 4.099 1.143s2.899-.422 4.099-1.143c4.494 1.949 5.726 6.909 5.882 11.143z"></path></svg>
                  </div>
            : null}

            </section>
            <hr />
            {screenWidth > 768 || hamBtn ?
            <nav>
            <Link to='/all'>All</Link>
            <Link to='/new-arrivals'>New arrivals</Link>
            <Link to='/best-sellers'>Best sellers</Link>
            <Link to='/promotions'>Promotion</Link>
        </nav> : null}
        </div>
        </>
    )
}

export default Header 