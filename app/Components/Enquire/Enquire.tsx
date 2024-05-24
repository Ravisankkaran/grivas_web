
export const Enquire: React.FC = () => {
return (
    <>
        <section className="body-font relative h-screen">
            {/* <div><h6>Enquire</h6></div> */}
            <div className="absolute inset-0 ">
                <iframe width="100%" height="100%" frameborder='0' marginheight="0" marginwidth="0" title="map" scrolling="yes"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.54451864933!2d79.99360239726563!3d12.922690500000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525faae6a4c9cd%3A0x8866051772228294!2sGRIVAS%20Technologies!5e0!3m2!1sen!2sin!4v1716574431990!5m2!1sen!2sin" 
                    style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)'}}></iframe>
            </div>
            <div className="container px-5 py-24 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
                    <h2 className="text-gray-900 text-xl mb-1 font-medium title-font">Contact Us!</h2>
                    <p className="leading-relaxed mb-5 text-gray-600">Post-your requirements</p>
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="Name" />
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Email" type="email" />
                    {/* <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Name" type="Name" /> */}
                    <input className="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4" placeholder="Mobile Number" type="Mobile No" />

                    <textarea className="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none" placeholder="Message"></textarea>
                    <button className="text-2lg shadow-2xl   md: text-white rounded-md bg-gradient-to-r from-yellow-200  to-orange-500 px-12 py-3   text-center">Send </button>
                    <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </div>
            </div>
        </section>
    </>
);

}
export default Enquire;
