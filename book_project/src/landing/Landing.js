import Headerr from '../components/Headerr'
import Footer from '../components/Footer';
function Landing() {
    return (
        <div className='landing-background'>
            <Headerr />

            <div className='content'>
                <h1 className="about-landing">關於本站</h1>
                <p>這是一個有關書籍推薦的網頁，主要針對自己有興趣的書籍與活動做分享與蒐集推廣。</p>
                <p>內容會有一些新書的推薦、自己看過書籍的摘要、對於一些書訊活動的分享...等。</p>
                <p>同時也試圖利用自己所學的一些前後端技巧來架設這個網站，並讓所學得以彰顯。</p>
            </div>
            <div className='landing-back'>

            </div>

            <Footer />
        </div>
    );
}

export default Landing;
