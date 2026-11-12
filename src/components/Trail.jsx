import Footprint from './Footprints.jsx'

export default function Trail({direction = 'down', steps = 6}) {
    return (
        <div className={`trail ${direction}`} aria-hidden="true">
            {Array.from({ length: steps}, (_, i) => (
                <Footprint
                    key={i}
                    side={i % 2 == 0 ? 'left' : 'right'}
                    delay={direction === 'down' ? 0 : i * 0.2}
                />
            ))}
        </div>
    )
}