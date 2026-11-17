import WalkingPath from '../components/WalkingPath'

export default function Home() {
  return (
    <>
      <header className="bg">
        <div className="bgContent">
          <h1>The Walkability Gap</h1>
          <p>
            <span className="highlighted">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas velit repellendus explicabo eaque soluta tenetur unde a ab ad, at aliquam, maiores consectetur impedit sed deleniti voluptates ipsa ex quasi.
            </span>
          </p>
        </div>
      </header>

      <main>
        <WalkingPath>
          <section className="openSection">
            <div className="openText">
              <h2>Historical Context</h2>
              <p>Hello</p>
            </div>
            <div className="openImage">
              <img
                src={`${import.meta.env.BASE_URL}images/history.jpg`}
                alt="[Describe the image]"
              />
            </div>
          </section>

          <section className="openSection">
            <div className="openText">
              <h2>Why we chose this topic</h2>
              <p>because we want to</p>
            </div>
            <div className="openImage">
              <img
                src={`${import.meta.env.BASE_URL}images/why.jpg`}
                alt="[Describe the image]"
              />
            </div>
          </section>
        </WalkingPath>
      </main>
    </>
  )
}