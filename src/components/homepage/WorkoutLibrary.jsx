import React from 'react';
import WorkCard from './shared/WorkCard';

const WorkoutLibrary = async() => {

    const workData = await fetch('https://api.abcz.workers.dev/api/fitlog');
    const works = await workData.json();
    return (
        <div>
            {
                works.map(work => <WorkCard key={work.id} work={work}></WorkCard>)
            }
        </div>
    );
};

export default WorkoutLibrary;


// export default async function Page() {
//   const data = await fetch('https://api.vercel.app/blog')
//   const posts = await data.json()
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   )
// }