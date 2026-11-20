import { useEffect, useRef, useState } from 'react'

const team = [
    {
        name: "Alexander Ulloa",
        pronouns: "he/him",
        role: "Data Visualization Specialist",
        photo: null,
        bio: "Alexander Ulloa is a first-year transfer student at UCLA from Orange County, majoring in Physics with an interest in medical physics, emphasizing on medical imaging and radiology. He hopes to pursue a career as a practicing Medical Physicist in a clinical setting. Alex has experience in a lab setting, and has experience in image processing and deep-learning tools. Alex currently works on creating data visualizations, interpreting results, and helping the team maintain a clear goal on this project. (WIP)"
    },

    {
        name: "Avamehr Vaghaiwalla",
        pronouns: "she/her",
        role: "Content Developer",
        photo: null,
        bio: "Avamehr Vaghaiwalla is a fourth-year Environmental Science major and Entrepreneurship minor at UCLA from Los Angeles. She is interested in sustainability and the intersection of environmental preservation with how corporations choose to develop. She has experience in ESG consulting and life cycle analysis research, building databases and analyzing large amounts of data in Excel. Avamehr serves the team as a researcher, writer, and editor, finding complimentary datasets to explore greater findings and ensuring the team’s submissions are in proper format."
    },

    {
        name:"Chloe Sun",
        pronouns: "she/her",
        role: "Webpage Developer",
        photo: null,
        bio: "Chloe Sun is a third-year Statistics and Data Science major at UCLA with interests in data analysis and software development. She has experience building statistical models, working with large datasets, and building websites. Chloe currently designs and works on the website using React, creating accessible and interactive features that bring the team’s research findings together in one piece."
    },

    {
        name: "Kaori Schrader",
        pronouns: "she/her",
        role: "Project Manager",
        photo: null,
        bio: "Kaori Schrader is a first-year transfer student at UCLA from the Bay Area, majoring in psychology with a focus on social and behavioral psychology. She hopes to pursue a career in psychology within the fashion industry. Schrader serves as project manager, keeping the team organized, aligned on deadlines, and focused on clear goals."
    },
    
    {
        name: "Patrick Wong",
        pronouns: "he/him",
        role: "Data Specialist",
        photo: null,
        bio: "Patrick Wong is a first-year transfer student at UCLA, majoring in Statistics and Data Science. He is currently developing fluency in coding and data programs. He is also interested in studying socio-economic patterns, and social behaviors. Patrick has worked on the website’s bibliography and  is currently working on providing images for the project website."
    },

    {
        name: "Zihan Wang",
        pronouns: "she/her",
        role: "Content Developer",
        photo: null,
        bio: "Zihan Wang is a senior transfer student at UCLA from China, majoring in Anthropology with a strong interest in social behavior, culture, and consumer psychology. She has experience in business consulting and digital content creation, and hopes to pursue a career that combines business, data analysis, and consumer insights. Zihan contributes to the team through research, data analysis, and creative problem-solving, helping connect academic findings with real-world applications."
    }
]

function MemberRow({ member, index }) {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting) {
                setVisible(true)
                observer.disconnect()
            }
        }, { threshold: 0.2 })
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const initials = member.name
        .replace(/[\[\]]/g, '')
        .split(' ')
        .map((word) => word[0])
        .join('')
        .slice(0, 2)

    const side = index % 2 === 0 ? 'fromLeft' : 'fromRight'

    return (
        <article ref={ref} className={`member ${side} ${visible ? 'inView' : ''}`}>
            <div className="memberPhoto">
                {member.photo ? (
                <img
                    src={`${import.meta.env.BASE_URL}images/team/${member.photo}`}
                    alt={`Portrait of ${member.name}`}
                />
                ) : (
                <span aria-hidden="true">{initials}</span>
                )}
            </div>

            <div className="memberText">
                <h2>
                <span className="memberName">{member.name}</span>
                {member.pronouns && <span className="pronouns"> ({member.pronouns})</span>}
                </h2>
                <p className="role">{member.role}</p>
                <p>{member.bio}</p>
            </div>
        </article>
    )
}

export default function MeetTheTeam() {
  return (
    <main className="page teamPage">
      <header className="teamHeader">
        <h1>Meet the Team</h1>
        <p>The people behind The Walkability Gap.</p>
      </header>

      {team.map((member, i) => (
        <MemberRow key={member.name} member={member} index={i} />
      ))}
    </main>
  )
}