import Link from 'next/link';
import React from 'react';
import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';

const ProjectItem = ({ title, desc, tech, projectUrl,git }) => {
  return (
    <div className="p-2 h-[270px] py-4 shadow-xl rounded-xl hover:scale-100 ease-in duration-200">
      <h3 className="p-4">{title}</h3>
      <p className="p-4">{desc}</p>
      <div className='flex items-center gap-8 mb-4 px-4'>
      <Link href={git}>
      <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
        <FaGithub size={20} />
      </div>
      </Link>
      <Link href={projectUrl}>
      <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
        <FaExternalLinkAlt className="" size={20} />
      </div>
      </Link>
      </div>
      <p className='px-4'>{tech}</p>
    </div>
  );
};

export default ProjectItem;
