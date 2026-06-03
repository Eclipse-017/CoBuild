import './FormSectionVariables.css'
import './FormSectionStyles.css'
import './FormSectionQueries.css'

function FormSection(){
    return(
        <section className="main-section form-section">
            <div className='heading-container'>
                <h2 className="section-heading">Have Questions About Planetary Science?</h2>
                <p className="section-description">
                    Interested in learning more about space, astronomy , or how planetary date is collected or analyzed? Reach out and we wi'll get back to you.
                </p>
            </div>

            <form>
                <div className="form-grid">
                    
                    <div color="form-group">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" id="fullName" placeholder="fullName" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" required />
                    </div>    

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="Please Enter a Valid Phone Number" required />
                    </div>                    
                        
                    <div className="form-group full-width">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" placeholder="Enter Your Message" maxLength="100"></textarea>
                        <small className=''>100 characters</small>
                    </div>   

                </div>

                <button typeof="submit" className="submit-btn">Submit {">"}</button>
            </form>
        </section>

    )
}

export default FormSection