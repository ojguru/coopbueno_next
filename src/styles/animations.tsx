import { keyframes } from '@emotion/react'
import { config } from '@react-spring/web'

export const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

export const slideDown = keyframes`
    from{
        transform: translateY(-100px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`

export const slideDownIn = keyframes`
    from{
        transform: translateY(-100px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
`

export const slideDownOut = keyframes`
    from{
        transform: translateY(0px);
        opacity: 1;
    }
    to{
        transform: translateY(100px);
        opacity: 0;
    }
`

export const slideUpIn = keyframes`
    from{
        transform: translateY(100px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity: 1;
    }
`

export const slideUpOut = keyframes`
    from{
        transform: translateY(0px);
        opacity: 1;
    }
    to{
        transform: translateY(-100px);
        opacity: 0;
    }
`

export const sectionAnimation = {
  from: {
    opacity: 0,
    transform: `translateY(20rem)`,
  },
  to: { opacity: 1, transform: 'translateY(0)' },
  config: config.wobbly,
}
