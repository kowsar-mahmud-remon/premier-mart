import { useRouter } from 'next/router';
import React from 'react';

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h2>This is Category. Id: {id}</h2>
    </div>
  );
};

export default index;