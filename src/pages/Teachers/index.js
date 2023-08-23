import React from "react";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./teachers.css";
import asan from "./img/Asan .jpg";
import dot from "./img/dot.svg" ;
import Celik from "./img/Ercan Celik.jpg";
import ismet from "./img/ismet.jpg";
import taalaybek from "./img/taalaybek.jpg";
import meerim from "./img/Meerim.jpg";
import nazgul from "./img/Nazgul.jpg";
import ella from "./img/Ella.jpg";
import amantur from "./img/amantur.jpg";
import mairambek from  "./img/Mairambek.jpg";


const Teachers = ()=>{

    return(
        <div className={'off-canvas-wrap'}>
            <Header />

            <main class="inner-wrap" id="contentarea" tabindex="-1">
            <a class="exit-off-canvas"></a>

            <div class="container-pro">  
                <p class="p-red">Колдонмо Математика жана Информатика</p>
                <h2 class="heading-pro">Биздин Мугалимдер</h2>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={asan} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">АСАН ӨМҮРАЛИЕВ - Проф.док.
                                Бөлүм башчысы</p>
                            <p class="p-2">Э-куржун: asan.omuraliev@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-217
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>

                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={Celik} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">ЭРЖАН ЧЕЛИК - Проф.док.</p>
                            <p class="p-2">Э-куржун: ercan.celik@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-219
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={ismet} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">ИСМЕТ АЛТЫНТАШ - Проф.док.</p>
                            <p class="p-2">Э-куржун: ismet.altintas@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-219
                                Телефону: 4927888</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={taalaybek} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">ТААЛАЙБЕК КАРАКЕЕВ - Проф.док.</p>
                            <p class="p-2">Э-куржун: taalaybek.karakeev@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-209
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={meerim} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">МЭЭРИМ ИМАШ КЫЗЫ -
                                Доц.док.</p>
                            <p class="p-2">Э-куржун: meerim.imashkyzy@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-210
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src="https://blog.pearsoninternationalschools.com/wp-content/uploads/2020/01/AL1369212_Original_1800x900-1132x670.jpg" alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">Гүлшат Мухамметжанова -
                                Доц.м.а.док.</p>
                            <p class="p-2">Э-куржун: gulshat.muhametjanova@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-308
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={nazgul} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">Назгүл АДАНБАЕВА -
                                Академ. адис</p>
                            <p class="p-2">Э-куржун: nazgul.adanbaeva@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-307
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={ella} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">Элла АБЫЛАЕВА -
                                Кенже илим.кызм.док.</p>
                            <p class="p-2">Э-куржун: ella.abylaeva@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-209
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={amantur} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div> 
                    
                            <p class="p-1">АМАНТУР РЫСПАЕВ</p>
                            <p class="p-2">Э-куржун: ercan.celik@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-219
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                    <div class="container-flex">
                        <div class="column-pro1">
                            <div class="image-radius">
                                <img src={mairambek} alt=""/>
                            </div>
                        </div>
                        <div class="column-pro2">
                            <div class="box-flex">
                                <div class="img-pro">
                                    <img src={dot} alt=""/>
                                </div>
                                <div class="text-phrase">
                                    <p>Колдонмо Математика жана Информатика</p>
                                </div>
                            </div>
                    
                            <p class="p-1">Майрамбек Темиров -
                                Док.</p>
                            <p class="p-2">Э-куржун: mayrambek.temirov@manas.edu.kg</p>
                            <p class="p-3">Кабинет: MFFB-209
                                Телефону: 492788</p>
                        </div>
                    </div>
                    <div class="hr"></div>
                   <div></div>
            </div> 
        </main>
        <div aria-label="subfooter" id="subfooter" role="contentinfo">

            <div class="section-header-content">
                <div class="section-header-title">
                    <div class="title-bg" id="socialLinks" itemscope="itemscope"
                        itemtype="http://schema.org/Organization">
                        <span class="sr-only" itemprop="name">Манас Университет</span>
                        <span class="sr-only" itemprop="telephone">979-845-3211</span>
                        <span class="sr-only" itemprop="address" itemscope="itemscope"
                            itemtype="http://schema.org/PostalAddress">
                            <span itemprop="addressLocality">College Station</span>
                            <span itemprop="addressRegion">TX</span>
                            <span itemprop="postalCode">77843</span>
                            <span itemprop="addressCountry">USA</span>
                        </span>
                        <link href="https://www.manas.edu/" itemprop="url" target="_parent" />
                        <a href="https://www.facebook.com/manas" id="Facebook" itemprop="sameAs"
                            title="manas facebook">
                            <span class="sr-only">Manas Facebook</span>
                            <span aria-hidden="true" aria-label="Manas Facebook" class="fab fa-facebook"
                                title="Manas Facebook"></span>
                        </a>
    
                        <a href="https://www.instagram.com/manas/" id="Instagram" itemprop="sameAs"
                            title="manas instagram">
                            <span class="sr-only">Manas Instagram</span>
                            <span aria-hidden="true" aria-label="Manas Instagram" class="fab fa-instagram"
                                title="Manas Instagram"></span>
                        </a>
    
                        <a href="https://www.linkedin.com/edu/school?id=19491" id="Linkedin" itemprop="sameAs"
                            title="manas linkedin">
                            <span class="sr-only">Manas LinkedIn</span>
                            <span aria-hidden="true" aria-label="Manas Linkedin" class="fab fa-linkedin"
                                title="Manas Linkedin"></span>
                        </a>
    
                        <a href="https://www.youtube.com/manas" id="Youtube" itemprop="sameAs" title="manas youtube">
                            <span class="sr-only">Manas Youtube</span>
                            <span aria-hidden="true" aria-label="Manas YouTube" class="fab fa-youtube"
                                title="Manas YouTube"></span>
                        </a>
    
                    </div>
                </div>
            </div>
        </div>
        
            <Feedback/>
            <Footer/>

    </div>
    )
}

export default Teachers;