import { useLayoutEffect, useRef, useState } from 'react'

export default function Bibliography() {
    const paperRef = useRef(null)
    const [height, setHeight] = useState(null)

    useLayoutEffect(() => {
        setHeight(paperRef.current.scrollHeight)
    }, [])
    return(
        <main className="page">
            <div className="scroll">
                <div className="scrollRoll"></div>
                <div ref={paperRef} className={`scrollPaper ${height ? 'unrolling' : ''}`} style={{ '--paper-height': `${height}px`}}>
                    <h1 className="bibContent">Bibliography</h1>
                    <p>Content</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque hic maxime est, atque ex quod quasi. Dolor magni odit sint porro, facilis quibusdam fugiat non adipisci ipsa laborum assumenda.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod pariatur officiis labore consequatur sapiente suscipit, odit commodi itaque maiores quisquam laborum quos neque! Odio officia modi minus qui harum.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, animi pariatur perferendis sed labore similique enim dolorum magni odit molestiae accusamus, facere sequi delectus, impedit ex eum aspernatur atque earum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repudiandae ab exercitationem accusamus. Odio accusamus omnis repellendus natus consequatur totam delectus unde. Fugit eaque nemo eligendi quia quam, itaque vitae!</p>
                </div>
                <div className="scrollPaper">
                </div>
                <div className={`scrollRoll ${height ? 'spinning' : ''}`}></div>
            </div>
        </main>
    )
}