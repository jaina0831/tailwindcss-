import styles from './person.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './person.css';
import { AiFillCaretLeft} from "react-icons/ai";


export default function Person() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:true,
      
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    
    return (
        
        <div class="container-fluid" style={{ paddingLeft: "0", paddingRight: "0", backgroundColor: "black", }}>
            <div class="row" style={{marginRight:"0"}}>
                <div class="col-lg-12" style={{marginRight:"0"}}>
                    <h1 className={styles.headerTitle}>
                        Actor
                    </h1>
                    <hr className={styles.hrHeaderLine} />
                </div>
            </div>
            <div className={styles.carousel} >
      
                <Slider {...settings} >
                    <div className={styles.box}>
                        <img
                            className={styles.img}
                            src="/images/person1.jpeg"
                            alt="" />
                        <h3>宋仲基</h3>
                        <p>韓國男演員，畢業於韓國成均館大學。2010年，宋仲基出演古裝劇《成均館緋聞》收穫大量人氣。2012年，主演的電視劇《善良的男人》和電影《狼少年》收視和票房雙雙大賣，迎來首個全盛期。2016年，退伍後以電視劇《太陽的後裔》柳時鎮一角成功回歸。</p>
                    </div>
                    <div className={styles.box}>
                        <img
                            className={styles.img}
                            src="/images/person2.jpeg"
                            alt="" />
                        <h3>宋慧喬</h3>
                        <p>自1996年出道至今，曾演出多部電視劇，代表作有與宋承憲合演的電視劇《藍色生死戀》 、與Rain合演的電視劇《浪漫滿屋》，以及與宋仲基合演的電視劇《太陽的後裔》，這三套劇集令她在亞洲各地廣為人知。</p>
                    </div>
                    <div className={styles.box}>
                        <img
                            style={{objectFit:"cover",objectPosition:"90% 0%"}}
                            className={styles.img}
                            src="/images/person3.jpeg"
                            alt="" />
                        <h3>金智媛</h3>
                        <p>韓國女演員。2013年，於《繼承者們》中飾演的「劉瑞秋」一角逐漸受到關注；2016年，主演的電視劇《太陽的後裔》播出後大受歡迎而為人所熟知。而後主演的《三流之路》、《阿斯達年代記》、《愛在大都會》、《我的出走日記》等皆具有話題性，也因選角的眼光及眾角色的多變與反差，奠定了於電視劇圈的地位</p>
                    </div>
                    <div className={styles.box}>
                        <img
                            style={{objectFit:"cover",objectPosition:"70% 0%"}}
                            className={styles.img}
                            src="/images/person4.jpeg"
                            alt="" />
                        <h3>鄭敬淏</h3>
                        <p>鄭敬淏雖然是星二代，卻沒有因此討到任何便宜，反而比別人加倍努力。鄭敬淏不服輸的個性，讓他決定用演技說話！2004年鄭敬淏因在蘇志燮主演韓劇《對不起，我愛你》中，擔任男配角而打開知名度。時至今日，鄭敬淏和秀英的戀愛史，已經邁入第11個年頭！愛情長跑的兩人，感情依舊甜蜜無比，因此被封為演藝圈的模範情侶檔！</p>
                    </div>
                    <div className={styles.box}>
                        <img
                            style={{objectFit:"cover",objectPosition:"0% 0%"}}
                            className={styles.img}
                            src="/images/person5.jpeg"
                            alt="" />
                        <h3>李鐘碩</h3>
                        <p>韓國男演員、模特兒、SBS第7期藝人。2012年憑藉校園青春成長劇《學校2013》中的高南舜一角而人氣高漲，並以2013年首次擔綱主角的電視劇《聽見你的聲音》出名。2015年登上韓國富比士名人榜第12名。2016年出演《W－兩個世界》，於入伍前2019拍攝了《羅曼史是別冊附錄》，素有「撕漫男」的稱號。</p>
                    </div>
                    <div className={styles.box}>
                        <img
                            className={styles.img}
                            src="/images/person6.jpeg"
                            alt="" />
                        <h3>金泰梨</h3>
                        <p>2016年，在首部長篇電影《下女的誘惑》中以充滿深度的演技演繹了同性間的情感，並憑藉該片榮獲亞洲電影大獎等多項最佳新人獎的肯定。2022年，憑藉第二部主演的電視劇《二十五，二十一》包攬第58屆百想藝術大賞女子人氣賞和電視部門女子最優秀演技賞，成爲首位百想人氣、演技雙冠女演員，以及首位1990年代出生的百想視后。</p>
                    </div>
                    

                </Slider>
                 {/* <Buttons>
                    <button> <AiFillCaretLeft/></button>
                    <button> <AiFillCaretLeft/></button>
                 </Buttons> */}
            </div>
        </div>

    )
}
