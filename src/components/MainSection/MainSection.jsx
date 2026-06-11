import './MainSection.css'

function MainSection({className, children, id}){
    return(
        <section id={id} className={`main-section ${className}`}>
            {children}
        </section>
    )
}

export default MainSection