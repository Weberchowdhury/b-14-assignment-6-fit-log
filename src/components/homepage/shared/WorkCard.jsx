import Image from 'next/image';
import React from 'react';

const WorkCard = ({work}) => {

  const {id, image, name, } = work

    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
      src={work.image}
      alt="work img"
      width={300}
      height={300} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {work.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default WorkCard;