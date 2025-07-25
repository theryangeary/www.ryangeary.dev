import Navbar from '../components/Navbar'

function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold underline p-4 text-violet-900/50 dark:text-violet-300">
        Projects
      </h1>
      
      <Navbar />
      
      <div className="mt-8">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          My projects will be displayed here.
        </p>
      </div>
    </div>
  )
}

export default Projects