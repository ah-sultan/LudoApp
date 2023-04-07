import Breadcrumb from '@/components/breadcrumb/Breadcrumb'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import THead from '@/components/thead/THead'

function Privacy() {
  return (
    <>
        <THead/>
        <Header/>
        <main>
            <Breadcrumb title="Privacy & Policy"/>
            <section className="py-100px">
                <div className="container">
                    <div>
                        <h3 className="text-black text-22px leading-1.3 font-semibold">Who we are</h3>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">Our website address is: <a href="#" className="text-primary-900">https://themeforest.net/user/hastech/portfolio</a></p>
                        <h3 className="text-black text-22px leading-1.3 font-semibold">Comments</h3>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p>
                        <h3 className="text-black text-22px leading-1.3 font-semibold">Media</h3>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p>
                        <h3 className="text-black text-22px leading-1.3 font-semibold">Cookies</h3>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p>
                        <h3 className="text-black text-22px leading-1.3 font-semibold">Embedded content from other websites</h3>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5">These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5"></p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5"></p>
                        <p className="text-base leading-relaxed text-tGreay-300 mb-5"></p>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

export default Privacy