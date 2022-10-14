export default function Home() {
  const arr = [{
    title: 'Vision',
    img: './vision.jpg',
    desc: ' To Establish a Single Platform to our clients for their professional needs.'
  },
  {
    title: 'Mission',
    img:'./mission.jpg',
    desc: 'To provide reliable professional services with utmost integriry and commitment to suit our client needs.'
  },
  {
    title: 'Values',
    img:'./values.jpg',
    desc: 'We believe in moral values and abide by the professional ethics with high standards of honesty and integrity.'
  }]
  return (
    <>
      <section class="text-white bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {arr.map(ok => {
            return (

                <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
                  <div class="rounded-lg h-64 overflow-hidden">
                    <img alt="content" class="object-cover object-center h-full w-full" src={ok.img} />
                  </div>
                  <h2 class="text-xl font-medium title-font text-white mt-5 text-center">{ok.title}</h2>
                  <p class="text-base leading-relaxed text-gray-400 mt-2">{ok.desc}</p>

                </div>

)
})}
</div>
        </div>
      </section>

    </>
  );
}
