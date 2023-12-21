import React, { useEffect, useState } from 'react';
import ItemsCard from "./Itemscard";
import Loader from './Loader';

const Item = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  async function fetchData() {
    setloading(true);
    try {
      const response = await fetch("https://www.globalmvt.com/api/medical-tourism-apis.php?type=specialityListing");
      const result = await response.json();
      console.log(result.data);
      setdata(result.data);
      setloading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='grid grid-cols-4 gap-4 p-4 w-auto bg-white'>
        
      {loading ? (
        <Loader />
      ) : (
        data.map((item) => (
          <ItemsCard key={item.id} mydata={item} />
        ))
      )}
    </div>
  );
};

export default Item;
