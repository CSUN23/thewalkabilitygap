import WalkingPath from '../components/WalkingPath'

export default function Home() {
    return (
        <>
        <header className="bg">
        <div className="bgContent">
          <h1>The Walkability Gap</h1>
          <p>DESCRIPTION</p>
        </div>
      </header>

      <main>
        <WalkingPath>
          <section className="hist">
            <div className="histCont">
              <h2>Historical Context</h2>
              <p>Hello</p>
            </div>
          </section>

          <section className="hist">
            <div className="histCont">
              <h2>Why we chose this topic</h2>
              <p>because we want to</p>
            </div>
          </section>
        </WalkingPath>
      </main>
      </>
    )
}