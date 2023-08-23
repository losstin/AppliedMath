import React from "react";
import footer_logo from "../../images/Manas_logo.png"; 

const Footer =()=>{

    return(
        <footer>
            <div class="footer-layout">
                <div class="row footer-main">
                    <div class="small-12 medium-3 columns">
                        <div class="text-center">
                            <a href="/index.html">
                                <img alt="Manas" class="footer-logo" src={footer_logo} />
                            </a>
                        </div>
                    </div>
                    <div class="small-12 medium-3 columns">
                        <ul class="footer-list">
							
                            <li>
                                <i class="fa-solid fa-phone"></i>
								<a href="tel:+996 (312) 54 19 41-47"> +996 (312) 54 19 41-47</a>
                            </li>
                            <li> 
								<i i class="fa-sharp fa-regular fa-fax"></i>
								<a href="tel:+996 (312) 54 19 35"> +996 (312) 54 19 35</a>
                            </li>
							<li>
                                <a href="https://www.google.com/maps/@42.8392212,74.5548393,15z">Кампус им. Ч.Айтматова (Джал), 720038, Бишкек, Кыргызстан</a>
                            </li>
                            <li>
								<i class="fa-regular fa-envelope"></i>
                                <a href="https://www.manas.edu.kg/ru/index.php">info@manas.edu.kg</a>
                            </li>

                            <li>
                                &#169;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                All Rights Reserved. Privacy Policy
                            </li>
                        </ul>
                    </div>

                    <div class="small-12 medium-3 columns">
                        <ul class="footer-list footer-list-gray">
                            <li>
                                <a href="https://www.facebook.com/manasuniv/" id="Facebook" itemprop="sameAs"
                                    title="MANAS facebook">
                                    <span class="sr-only">MANAS Facebook</span>
                                    <span aria-hidden="true" aria-label="MANAS Facebook" class="fab fa-facebook"
                                        title="MANAS Facebook"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/manasuniv/?hl=ru" id="Instagram" itemprop="sameAs"
                                    title="MANAS instagram">
                                    <span class="sr-only">MANAS Instagram</span>
                                    <span aria-hidden="true" aria-label="MANAS Instagram" class="fab fa-instagram"
                                        title="MANAS Instagram"></span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/manas-university/?originalSubdomain=ru" id="Linkedin"
                                    itemprop="sameAs" title="manas linkedin">
                                    <span class="sr-only">Manas LinkedIn</span>
                                    <span aria-hidden="true" aria-label="Manas Linkedin" class="fab fa-linkedin"
                                        title="MANAS Linkedin"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="small-12 columns">
                        <a class="border-button border-button-white show-for-small up" href="#contentarea">Баштапкы меню
                            <span aria-hidden="true" class="icon-back-to-top"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;