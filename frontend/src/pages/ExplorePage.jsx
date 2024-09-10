import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  const loader = useRef(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
    } catch (error) {
      console.log('error', error);
    }
  };

  // Set up the IntersectionObserver to observe the loader
  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting && pageNo < totalPageNo) {
      setPageNo((prev) => prev + 1); // Increment page number when the loader is in view
    }
  }, [pageNo]);

  useEffect(() => {
    fetchData(); // Fetch data when pageNo changes
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);  // Reset page number and data when params.explore changes
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    });

    if (loader.current) {
      observer.observe(loader.current); // Observe the loader div
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current); // Clean up observer on unmount
      }
    };
  }, [handleObserver]);

  return (
    <div className='py-16 px-16'>
      <div className='container mx-auto'>
        <h3 className='capitalize text-lg lg:text-xl font-semibold my-3'>Popular {params.explore} show</h3>
        <div className='flex flex-wrap gap-6 justify-center lg:justify-between '>
          {
            data.map((exploreData, index) => (
              <Card data={exploreData} key={exploreData.id + "exploreSEction" + index} media_type={params.explore} />
            ))
          }
        </div>
        {pageNo < totalPageNo && (
          <div ref={loader} className="text-center py-8">
            <p>Loading more...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExplorePage;
