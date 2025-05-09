const OurTeam = () => {
    const team = [
        "/about/team1.png",
        "/about/team2.png",
        "/about/team3.png",
    ]
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <h3 className='text-3xl text-center font-bold'>Our Team</h3>
        <p className="max-w-4xl text-gray-400 font-medium text-justify py-5 mx-auto ">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dicta adipisci quas, nesciunt tenetur optio libero aliquam atque ratione unde quis sequi eaque, quo molestiae nemo esse fugiat voluptates natus quae necessitatibus odit, doloribus et laboriosam distinctio. Rem, tempore nemo! </p>
         <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 mx-auto">
                    {team.map((elem,i)=>(<img
                    key={i}
                      src={elem}
                      alt="Techidata office space with team members collaborating"
                      className="object-cover"
                      priority
                    />))}
                  </div>
    </div>
  )
}

export default OurTeam
