import React from 'react'
import Core from '@/modules/customer/login/core';
import Content from '@/modules/customer/login/components';

const Page: React.FC = (props: any) => {
  return (
    <Core
      Content={Content}
      {...props}
    />
  )
}

export default Page;