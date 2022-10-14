export default function Home() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              About us
            </h1>
            <p className="mb-8 leading-relaxed">
              OUR TEAM Our dedicated team comprises of competent people with
              extensive knowledge and experience. Our professionalism and
              expertise helps us to service our clients to their satisfaction.
              Some of the key members of our firm are:
            </p>
            <h2 className="text-white text-2xl mb-2">
              SANTOSH MISHRA & ASSOCIATES (Proprietor)
            </h2>
            <p className="mb-4">
              Associate Chartered Accountant, Commerce Graduate CA SANTOSH MISHRA & ASSOCIATES
              is a member of the Institute of Chartered Accountants of India
              (ICAI) since 2014. He has vast experience in consultancy of
              Indirect taxes and handling corporate affairs in different areas.
              He has carved his mark at Price Waterhouse & Co LLP (PWC), and
              Manohar Chowdhry and Associates (MCA).
            </p>
            {/* <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./about.svg"
            />
          </div>
        </div>
      </section>
      
    </>
  );
}
