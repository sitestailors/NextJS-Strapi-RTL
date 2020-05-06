// You can use any data fetching library
import fetch from 'node-fetch'

// posts will be populated at build time by getStaticProps()
function Index({ songs }) {
  return (
    <ul>
      {songs.map(song => (
        <div>
            <li>{song.uniqueUrl}</li>
        </div>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  const res = await fetch('http://localhost:1337/songs')
  const songs = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
        songs,
    },
  }
}

export default Index