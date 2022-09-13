import React from "react";

function Blog(){
    return(
        <div>
      <div className="about-div">
        <h2>The Blog</h2>
      </div>
      <div className="about-details">
        <h2>What we offer</h2>
        <p>
          We offer a online web application for people to write their post. We
          offer a varaiety of posts category you can write. Some of this
          include:{" "}
        </p>
        <ol>
          <li>Song lyrics</li>
          <li>Spirirtual quotes</li>
          <li>Mythical stories</li>
          <li>Poems</li>
          <li>Jokes</li>
          <li>Quotes</li>
          <li>Articles</li>
          <li>Short stories</li>
        </ol>
        <p>and many more.</p>
        <p>
          You're free to create your own category or use those provided at the
          top
        </p>
        <h4>Services we offer</h4>
        <p>
          This is a public forum where you can express your thoughts, make
          jokes, enter the mythycal world or evn get encouraged
        </p>
        <p>
          You can read out peoples posts and like and comment on there posts
        </p>
      </div>
      <div className="footer">
        <p>
          &#169; 2022{" "}
          <a href="https://twitter.com/chibukasiaNelly">
            <i className="bi bi-twitter"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
        </p>
      </div>
    </div>
    )
}

export default Blog