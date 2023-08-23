import React from "react";

const Feedback = ()=>{
    return(
        <>
            <section aria-label="Manas on social media" className="background-white stackla-container js-stackla-container"
            id="stackla">
            <div className="section-header-content tan-header">
                <div className="section-header-title">
                    <a className="skipnav js-skipnav sr-only" href="#subfooter">Skip Social Media Feed</a>
                    <h2 className="up title-bg"><span>Байланыш үчүн</span></h2>
                </div>
            </div>
            <h6 style={{textAlign: 'center', marginTop: '20px'}}> ✉: 720044, Бишкек, КЫРГЫЗСТАН Чынгыз Айтматов 56
                
				☎: +996(312)54 19 42-46 Fax: +996(312)54 19 35 © KTMÜ</h6>
        </section>


        <div aria-label="subfooter" id="subfooter" role="contentinfo">

            <div className="section-header-content">
                <div className="section-header-title">
                    <div className="title-bg" id="socialLinks" itemscope="itemscope"
                        itemtype="http://schema.org/Organization">
                        <span className="sr-only" itemprop="name">Манас Университет</span>
                        <span className="sr-only" itemprop="telephone">979-845-3211</span>
                        <span className="sr-only" itemprop="address" itemscope="itemscope"
                            itemtype="http://schema.org/PostalAddress">
                            <span itemprop="addressLocality">College Station</span>
                            <span itemprop="addressRegion">TX</span>
                            <span itemprop="postalCode">77843</span>
                            <span itemprop="addressCountry">USA</span>
                        </span>
                        <link href="https://www.manas.edu/" itemprop="url" target="_parent" />
                        <a href="https://www.facebook.com/manas" id="Facebook" itemprop="sameAs"
                            title="manas facebook">
                            <span className="sr-only">Manas Facebook</span>
                            <span aria-hidden="true" aria-label="Manas Facebook" className="fab fa-facebook"
                                title="Manas Facebook"></span>
                        </a>

                        <a href="https://www.instagram.com/manas/" id="Instagram" itemprop="sameAs"
                            title="manas instagram">
                            <span className="sr-only">Manas Instagram</span>
                            <span aria-hidden="true" aria-label="Manas Instagram" className="fab fa-instagram"
                                title="Manas Instagram"></span>
                        </a>

                        <a href="https://www.linkedin.com/edu/school?id=19491" id="Linkedin" itemprop="sameAs"
                            title="manas linkedin">
                            <span className="sr-only">Manas LinkedIn</span>
                            <span aria-hidden="true" aria-label="Manas Linkedin" className="fab fa-linkedin"
                                title="Manas Linkedin"></span>
                        </a>

                        <a href="https://www.youtube.com/manas" id="Youtube" itemprop="sameAs" title="manas youtube">
                            <span className="sr-only">Manas Youtube</span>
                            <span aria-hidden="true" aria-label="Manas YouTube" className="fab fa-youtube"
                                title="Manas YouTube"></span>
                        </a>

                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default Feedback;