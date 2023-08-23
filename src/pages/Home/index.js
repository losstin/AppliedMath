import React from "react";
import Feedback from "../../components/Feedback";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = ()=>{

    return(
        <div className="off-canvas-wrap">
            <Header/>
            <main className="inner-wrap" id="contentarea" tabindex="-1">
                <div className="video-wrapper">
                    <div className="bg-video">
                        
                        <div className="text-overlay1">
                            <p className="p">Кош келиниздер</p>
                            <h1 className="h1">Колдонмо математика жана информатика</h1>
                        </div>
                    </div>
        
                </div> 

                <section aria-label="academic calendar" className="tan-background" id="cal-area">
				<div className="cal-header">
					<div className="cal-header-content">
						<div className="cal-header-title">
							<h2 className="serif u-font-size-md"><em id="searchItem">Академия</em></h2>
						</div>
						<div className="cal-header-links text-right">
							<p className="h3 cal-header-link">
								<a href=" " ><span className="icon-arrow-down"></span></a>
							</p>
						</div>
					</div>
				</div>
				<div className="cal-rotater">
					<div className="cal-rotater-content">
						<div className="jcarousel-wrapper hide-div">
							<div className="jcarousel" data-jcarousel="true">
								<ul>
									<li tabindex="0"><a
											href="http://registrar.manas.edu/Catalogs,-Policies-Procedures/Academic-Calendar#2fe2e9a0-0f9b-49d7-b26f-c9c4be359d10"
											title="Faculty and Staff Holiday">
											<div className="date"><span>2022-12-09</span></div>
											<p>Кош келдиң даярдоо курсунун студенти</p>
										</a></li>
									<li tabindex="0"><a
											href="http://registrar.manas.edu/Catalogs,-Policies-Procedures/Academic-Calendar#2fe2e9a0-0f9b-49d7-b26f-c9c4be359d10"
											title="Faculty and Staff Holiday">
											<div className="date"><span>2022-12-08</span></div>
											<p>2022-2023 окуу жылындагы окуу программасы</p>
										</a></li>
									<li tabindex="0"><a
											href="http://registrar.manas.edu/Catalogs,-Policies-Procedures/Academic-Calendar#2fe2e9a0-0f9b-49d7-b26f-c9c4be359d10"
											title="Faculty and Staff Holiday">
											<div className="date"><span>2022-11-23</span></div>
											<p>2022-2023 окуу жылындагы окуу программасы</p>
										</a></li>
								</ul>
							</div>
						</div>
					    </div>
				    </div>
				    <div className="read-button"><a
						href="http://registrar.manas.edu/Catalogs,-Policies-Procedures/Academic-Calendar"
						style={{marginBottom: '1rem'}}><em>Башка жаңылыктар</em><span
							className="icon-arrow-right icon-w-text med-icon"></span></a>
                    </div>
			    </section>

                <section aria-label="departments and programs" className="content-blocks background-white" id="depts-progs"
                    tabindex="-1">
                    <div className="content-layout">
                        <div className="content-image"><img
                                alt="hexagonal images of campus building, professors and researchers" className="img-responsive"
                                src="https://manas.edu.kg/images/front/Science/IMG_9906.JPG" /></div>
                        <div className="content-text">
                            <h2 className="up " id="searchItem">Кыскача маалымат</h2>
                            <p>Колдонмо математика жана информатика бөлүмү 2007-жылы Табигый илимдер факультетинин базасында
                                ачылган. 2007-2008-окуу жылында биринчи студенттерди бөлүмгө кабыл алуу жүргүзүлгөн.
                                Студенттерди (Кыргыз Республикасынын жарандарын жана башка өлкөлөрдүн жарандарын) тандоо
                                жана бөлүмгө кабыл алуу Кыргыз-Түрк "Манас" университетинин Студенттерди тандоо жана
                                бөлүштүрүү борбору тарабынан жүргүзүлгөн сынактын жыйынтыгы жана Жалпы республикалык
                                тестирлөөнүн жыйынтыктары боюнча жүргүзүлөт.

                                .</p>
                            <ul className="two-cols">
                                <li><a href="#index.html">Бөлүм жөнүндө</a></li>
                                <li><a
                                        href="./achievements/achievements.html">Жетишкендиктер</a>
                                </li>
                                <li><a href="./research/research.html">Изилдөөлөр</a></li>
                                <li><a href="./admissions/admissions.html"> Абитуриенттерге</a></li>
                                <li><a
                                        href="./whyUs/whyUs.html">Эмне учун КМИ?</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section aria-label="graduate education links" className="background-img walkway" id="grad-edu" tabindex="-1">
				<div className="content-blocks background-blue-transparent">
					<div className="content-layout">
						<div className="content-text">
							<h2 className="up" id="searchItem">Лабораториялар</h2>
							<p>Колдонмо математика жана информатика бөлүмүндө 23 персоналдык компьютерден турган жана
								окуу планына туура келтирилип жабдылган компьютердик лаборатория негизги функцияны
								аткарат. Лаборатория 2012-жылы ачылып бардык керектелүүчү куралдар менен жабдылган. Бул
								лабораторияда программалоо , графика жана башка сабактардын практикалык бөлүгү өткөрүлөт
								жана студенттер менен ар түрдүү проекттердин үстүндө иштешет. Ошондой эле студенттер
								дипломдук, илимий иштерин жазышып жана өздөрү каалаган информациялык технологияларды
								жана ар түрдүү программалоо тилдерин колдонуу менен алдынча билимин өнүктүрүүгө
								мүмкүнчүлүк түзүлгөн..
								Колдонулуучу программалар</p> 
							<div className="accessory-image show-for-small-only"><img
									alt="scientist in safety glasses and white coat" className="img-responsive"
									src="../assets/images/scientist.png" /></div>
							<ul className="two-cols">
								<li>Borland C++ (Компилятор)</li>
								<li>  PHP Designer </li>
								<li> 1C Predpriyatie (Бухгалтерия) </li>
								<li>  MATLAB</li>
								<li>Corel DRAW</li>
								<li>Adobe Photoshop CS6 </li>
								<li> Visual Studio</li>
								<li> Visual Studio Code</li>
								<li> PyCharm</li>
	
							</ul>
						</div>
						<div className="content-image hide-for-small-only"><img
								alt="scientist in safety glasses and white coat" className="img-responsive"
								src="https://manas.edu.kg/images/front/Science/DSC_7354.JPG" /></div>
					</div>
				</div>
			</section>

            <section aria-label="interanational education links" className="background-img map blue-border" id="int-edu" tabindex="-1">
                <div className="content-blocks">
                    <div className="content-layout content-right">
                        <div className="infographic maroon-circle medium-4 columns"><span className="number">100+</span><br />
							<span className="info-text">студенттер</span>
                            <br/>
                            <span className="number">10+</span>
                            <br />
                            <span className="info-text"> мугалимдер </span>
						</div>
                        <div className="medium-6 columns" >
							<h2 className="up" id="searchItem" style={{marginLeft: '30px'}}>Программалоо</h2>
							<p style={{paddingLeft: '30px'}}>Тустор жана эффекттер менен иштоо, фотомонтаж, ретушь, реставрация, коллаж,
                                HDR панорамдык суроттор.
                                Ар кандай өңдөр менен жана эффекттер менен иштөө, фотомонтаж, ретушь, реставрация,
                                коллаж, фотону бириктирип HDR панорамалык фотографияларды алуу.
                                Буклеттерди,визиткаларды жана чакыруу кагаздарын басмага даярдоо.
                                Программалоо тилдерин үйрөнүү.
                                Персоналдык веб-сайттарды проектирлөө
                                Бухгалтердик эсептөө методдорун үйрөнүү
                                Базалык жана тереңдетилген математикалык эсептөөлөрдү жүргүзүу, алгоритм түзүү, 2D жана
                                3D графикалык тиркемелер, физикалык системаларды программалоо жана моделин түзүу
							</p>
						</div>

                    </div>
                </div>    
			</section>

            <section aria-label="libraries" className="background-white" id="library">
				<div className="content-blocks">
					<div className="content-layout">
						<div className="content-text">
							<h2 className="up" id="searchItem">Билим беруу</h2>
							<p>Математикалык методдорду маалыматтарды моделдөө менен жана колдонмо маселер менен
								байланышкан имитациондук моделдер менен изилдөө.
								Компьютердик тармактардын коопсуздугун жана каражаттарды админдик башкаруу ,
								системаларды автоматташтыруу жана маалыматтарды иштеп чыгуу каражаттарын башкаруу
								методдорун изилдөө..
							</p>
							<ul className="two-cols">
								<li>долбоордук жана өндүрүш-технологиялы ишмердүүлү</li>
								<li>илимий жана илимий-изилдөө иштери</li>
								<li>педагогикалык иш-аракет</li>
								<li>Стажировка/практика</li>
								<li>Кошумча адистик</li>
							</ul>
						</div>
						<div className="content-image"><img alt="Student in library" height="350"
								src="https://manas.edu.kg/images/front/Science/OMR_9178.JPG" width="350" /></div>
					</div>
				</div>
			</section>

            <section aria-label="public notice" className="background-white" id="news-area">
				<div className="news-header">
					<div className="section-header-content" id="searchItem">
						<div className="section-header-title">
							<h2 className="up title-bg"><span>Бөлүмдүн милдеттери, максаттары</span></h2>
						</div>
					</div>
				</div>
				<div className="content-layout" style={{padding: '0 20px'}}>
					<p>
						Колдонмо маселелер менен байланыштуу болгон маалымат жана имитациялык моделдерди моделдөөнүн
						математикалык ыкмаларын изилдөө
						Компьютер тармактарынын коопсуздугун жана администрациялоо каражаттарын, автоматташтырылган
						системаларды жана маалыматтарды иштетүү каражаттарын башкаруу ыкмаларын изилдөө
						Өндүрүштө жана технологиялык ишмердүүлүктө пайда болгон математикалык маселелерди чыгарууда
						сандык ыкмаларды колдонуу
						Программалоо тилдерин үйрөнүү
						Сүрөттөрдү санариптик иштетүүнү, компьютердик графика каражаттарын, мультимедиа жана
						автоматташтырылган долбоорлоону изилдөө
						Болжомолдоо жана системалык анализ жүргүзүүчү маалымат системаларынын математикалык ыкмалары
						Өндүрүш ишмердүүлүгүнүн сапатын башкаруу процесстери менен байланышкан маалымат системаларын
						иштеп чыгуу жана ишке ашыруу
						Колдонмо математика жана информатика бөлүмү эсептөө техникасын жана автоматташтырылган
						системаларды программалык камсыздоо, финансы маалыматтарын иштетүү боюнча адистерди даярдайт.
						Окуу мөөнөтү, Болон системасына ыйлайык, 4 жыл. Бүтүрүүчүлөргө “Колдонмо математика жана
						информатика” багыты боюнча “Бакалавр” академиялык даражасын ыйгаруу менен диплом берилет.</p>
				</div>
			</section>

            <section aria-labelledby="sfaid-nav" className="content-blocks background-white" id="scholarships" tabindex="-1">
				<div className="content-layout">
					<div className="content-image"><img alt="Student pondering laptop in library" className="img-responsive"
							src="https://info.manas.edu.kg/uploads/profile/00068.jpg" /></div>
					<div className="content-text">
						<h2 className="up" id="searchItem">Проф.док.Асан ӨМҮРАЛИЕВ
							Бөлүм башчысы
						</h2>
						<h3>
							Илимий басылмалар</h3>
						<p>1. Омуралиев А.С.Асимптотика решения сингулярно возмущенных параболических задач. LAMBERT,
							Academic Publshing, 2017, 298 c. <br/>

							2. Омуралиев А.С. Регуляризация сингулярно возмущенных параболи-ческих задач.
							Кыргызско-Турецкий уни-верситет «Манас», Бишкек, 2005, 152 с. <br/>

							3. Омуралиев А.С. и др. Информатика, Учебник для ВУЗов. МНиО Кыргызской Республики, Бишкек,
							2009, 399 с. <br/>

							4. Омуралиев А.C.,Мээрим Имаш кызы. "Сингулярно возмущенная парабо-лическая задача с
							многомерными погра-ничными слоями"://Дифференциальные уравнения. 2017. Т. 53, № 12. С.
							1664-1678. <br/>

							5. Омуралиев А.С. Асимп.решения временного уравн. Шредингера с малой конст.Планка // Журнал
							вычислительной математики и математической физики, 2007,т.47,N 10.</p>
						<ul className="blue-bullets">
							<li><a href="asan.omuraliev@manas.edu.kg">asan.omuraliev@manas.edu.kg</a></li>
							<li><a href="492788">492788 </a></li>
						</ul>
					</div>
				</div>
			</section>
		    </main>
            <Feedback/>
            <Footer/>
        </div>
    )
}

export default Home;