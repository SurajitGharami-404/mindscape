
import { cn } from '@/lib/utils';
import React, { type FC } from 'react'

interface Props {
className?:string;
children: Readonly<React.ReactNode>
}

const Container: FC<Props> = ({className, children}) => {
  return (
    <section className={
        cn("max-w-7xl mx-auto",className)
    }>
        {children}
    </section>
  )
}

export default Container;