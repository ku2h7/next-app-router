import React from 'react'

const Core = (props: any) => {
  const { Content } = props;

  const contentProps = {
    ...props,
    data: "ada data nya"
};

  return (
    <Content {...contentProps} {...props} />
  )
}

export default Core