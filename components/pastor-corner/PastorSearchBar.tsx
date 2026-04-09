'use client'
import React from 'react'
import { Search, X } from 'lucide-react';
import { PastorMessage } from '@/lib/types';

interface SearchBarProps {
  setPastorCornerMsgs: (msgs: PastorMessage[]) => void;
  originalMsgs: PastorMessage[];
}

const SearchBar = ({ setPastorCornerMsgs, originalMsgs }: SearchBarProps) => {
  const [checked, setChecked] = React.useState<'topic' | 'all'>('topic');
  const [searchTerm, setSearchTerm] = React.useState('');

  const searchTermHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchVal = e.target.value;
    setSearchTerm(searchVal);

    if (searchVal.trim() !== "") {
      const sterm = searchVal.trim().toLowerCase();
      const pcornercopy = [...originalMsgs];

      const resTopic = pcornercopy.filter((item) => {
        return item.title.toLowerCase().includes(sterm);
      });

      const resBody = pcornercopy.filter((item) => {
        const messageStr = Array.isArray(item.message) ? item.message.join(' ') : item.message;
        return messageStr.toLowerCase().includes(sterm);
      });

      if (checked === "topic") {
        setPastorCornerMsgs(resTopic);
      } else {
        // Combine results and remove duplicates based on slug/id
        const combined = [...resTopic];
        resBody.forEach(item => {
          if (!combined.some(c => c.id === item.id)) {
            combined.push(item);
          }
        });
        setPastorCornerMsgs(combined);
      }
    } else {
      setPastorCornerMsgs(originalMsgs);
    }
  }

  const resetSearchTermHandler = () => {
    setSearchTerm('');
    setPastorCornerMsgs(originalMsgs);
  };

  React.useEffect(() => {
    resetSearchTermHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [originalMsgs]);

  return (
    <div className='mx-10 mb-8'>
      <div className='flex flex-row bg-white items-center
        bg-clip-padding border border-solid border-gray-300
        rounded-lg transition-all duration-300
        px-4  hover:border-blue-400 max-w-[700px] mt-3 shadow-sm'>
        {!searchTerm ?
          <Search size={22} className='text-slate-400' />
          : <X size={22}
            onClick={resetSearchTermHandler}
            className='cursor-pointer text-slate-400 hover:text-red-500 transition-colors' />
        }
        <input
          placeholder='Search by topic or the entire message....'
          value={searchTerm}
          onChange={searchTermHandler}
          className={
            `form-control block
              w-full
              px-3
              py-3
              text-base
              font-normal
              text-slate-700
              bg-transparent
              outline-none
              border-none focus:ring-0
              `}
        />

      </div>
      <div className='flex flex-wrap flex-row mt-4 gap-6 px-2'>
        <label className='flex items-center gap-2 cursor-pointer group'>
          <input
            className='w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer'
            type="radio"
            name="searchScope"
            value="topic"
            checked={checked === "topic"}
            onChange={() => setChecked('topic')}
          />
          <span className='text-sm font-medium text-slate-600 group-hover:text-primary transition-colors'>Search Topic</span>
        </label>
        <label className='flex items-center gap-2 cursor-pointer group'>
          <input
            className='w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2 cursor-pointer'
            type="radio"
            name="searchScope"
            value="all"
            checked={checked === "all"}
            onChange={() => setChecked('all')}
          />
          <span className='text-sm font-medium text-slate-600 group-hover:text-primary transition-colors'>Search All</span>
        </label>
      </div>
    </div>
  );
}


export default SearchBar;

