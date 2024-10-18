import { CORE_CONCEPTS } from '../data';

function CoreConcept({ title, description, image }) {
    return (
        <li>
            <img src={image} alt={description} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}


export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <h2>Core Concepts</h2>
            <ul>
                {
                    CORE_CONCEPTS.map((value, index) => <CoreConcept {...value} key={index} />)
                }
            </ul>
        </section>
    )
}