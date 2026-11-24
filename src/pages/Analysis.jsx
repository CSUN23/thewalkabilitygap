import { useState } from 'react'

const questions = [
  {
    id: 'q1',
    short: 'Redlining',
    question: '[Research question 1]',
    findings: ['[Finding 1]', '[Finding 2]', '[Finding 3]'],
    takeaway: '[One sentence answering the question.]',
  },
  {
    id: 'q2',
    short: 'Transit access',
    question: '[Research question 2]',
    findings: ['[Finding 1]', '[Finding 2]'],
    takeaway: '[One sentence answering the question.]',
  },
  {
    id: 'q3',
    short: 'Health & environment',
    question: '[Research question 3]',
    findings: ['[Finding 1]', '[Finding 2]'],
    takeaway: '[One sentence answering the question.]',
  },
]

export default function Analysis() {
    const [active, setActive] = useState(0) 
    const q = questions[active]
    return(
        <>
            <header className="bg_analysis">
                <div className="bgContent">
                    <h1>Analysis</h1>
                </div>
            </header>
            <main className="analysisPage">
                <div className="qRow">
                    {questions.map((item, i) => (
                        <button
                        key={item.id}
                        className={`qBox ${active === i ? 'activeBox' : ''}`}
                        onClick={() => setActive(i)}
                        >
                        {item.short}
                        </button>
                    ))}
                </div>

                <section key={q.id} className="qPanel">
                    <span className="qLabel">Question {active + 1}</span>
                    <h2>{q.question}</h2>

                    <div className="qGrid">
                        <div className="qViz">
                        [Tableau chart for Q{active + 1}]
                        </div>

                        <div className="qFindings">
                        <h3>What we found</h3>
                        <ul>
                            {q.findings.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>

                        <div className="qTakeaway">
                            <strong>Key takeaway</strong>
                            <p>{q.takeaway}</p>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}