export default function Data() {
    return(
        <>
            <header className="bg_data">
                <div className="bgContent">
                <h1>Data / Critique</h1>
                <p>
                    <span className="highlighted">
                        <a 
                            href="https://www.epa.gov/smartgrowth/smart-location-mapping"
                            target="_blank"
                            rel="noopener reference"
                            className="textLink"
                        >
                            EPA National Walkability Index, California Block Groups
                        </a>
                    </span>
                </p>
                </div>
            </header>
            <main className="dataPage">
                <div className="statRow">
                    <div className="statBox">
                        <p className="statName">data 1</p>
                    </div>
                    <div className="statBox">
                        <p className="statName">data 2</p>
                    </div>
                    <div className="statBox">
                        <p className="statName">data 3</p>
                    </div>
                    <div className="statBox">
                        <p className="statName">data 4</p>
                    </div>
                </div>
            </main>
        </>
    )
}