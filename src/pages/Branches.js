export default function Home() {
  const branches = [{
    name: 'Gorakhpur',
    address: ' 252, Indrakunj, Buddhanagar, Rustampur, Gorakhpur-273016',
    inCharge: 'Anshika Tandon'
  },
  {
    name: 'Delhi',
    address: 'House No. 539/B, Street No 7-B,E-Block Sangam Vihar, Delhi-110062',
    inCharge: 'Sunil Kumar'
  },
  {
    name: 'Patna',
    address: ' D-217, Dumraon Palace, Fraser Road, Patna-800001',
    inCharge: 'Sumant Kumar Choubey'
  },
  {
    name: 'Mathura',
    address: ' 2C-202, Chandrapuri Colony, Mathura-281001',
    inCharge: 'Rajesh Rastogi'
  },
  {
    name: 'Kurnool',
    address: ' 45/24-K-10, Ashok Nagar, Kurnool-518005',
    inCharge: 'MD Abdur Rahman'
  },
  {
    name: 'Hyderabad',
    address: '5-45/31/303, Fl No 303, Harmony Heavens, Manikonda, Hyderabad-500089 ',
    inCharge: 'Surender Mishra'
  },
  {
    name: 'Bengaluru',
    address: '105 Divya MSR Gateway No 72 MSR Road, Gokula, Bengaluru-560054',
    inCharge: 'Thiyaga Rajan R'
  }]
  return (
    <>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="mb-20 text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
            Our Branches
          </h1>
          <div className="flex flex-wrap -m-4">
            {/* {JSON.stringify(branches)} */}
            {branches.map(branch => {
              return (
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">

                  <div className="h-full text-center">
                    {/* <img
                      alt="testimonial"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                      src="https://dummyimage.com/302x302"
                    /> */}
                    <h2 className="text-white font-medium title-font tracking-wider text-sm">
                      {branch.name}
                    </h2>
                    <span className="flex justify-center">

                      <p className="text-gray-500">Incharge:{" "} </p>
                      <p >{branch.inCharge}</p>
                    </span>
                    <p className="leading-relaxed">
                      {branch.address}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  );
}
