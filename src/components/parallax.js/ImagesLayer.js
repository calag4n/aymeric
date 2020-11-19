import { ParallaxLayer } from 'react-spring/renderprops-addons'
import pytorch from '../../images/pytorch.png'
import python from '../../images/python.png'
import keras from '../../images/keras.png'
import tf from '../../images/tf.png'
import skl from '../../images/skl.png'
import github from '../../images/github.png'
import pandas from '../../images/pandas.png'


/**
 * Multiple layers of images
 * 
 * @component
 * @example
 * <ImageLayer />
 */
const ImagesLayer = () => {
  return (
    <>
      <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
        <img
          src={pytorch}
          style={{ display: 'block', width: '20%', marginLeft: '55%' }}
          alt='pytorch logo'
        />
        <img
          src={keras}
          style={{ display: 'block', width: '10%', marginLeft: '15%' }}
          alt='keras logo'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
        <img
          src={skl}
          style={{ display: 'block', width: '20%', marginLeft: '70%' }}
          alt='scikit learn logo'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
        <img
          src={tf}
          style={{ display: 'block', width: '10%', marginLeft: '10%' }}
          alt='tensorflow logo'
        />
        <img
          src={python}
          style={{ display: 'block', width: '20%', marginLeft: '75%' }}
          alt='python logo'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
        <img
          src={pandas}
          style={{ display: 'block', width: '20%', marginLeft: '60%' }}
          alt='pandas logo'
        />
        <img
          src={pytorch}
          style={{ display: 'block', width: '25%', marginLeft: '30%' }}
          alt='pytorch logo'
        />
        <img
          src={pytorch}
          style={{ display: 'block', width: '10%', marginLeft: '80%' }}
          alt='pytorch logo'
        />
      </ParallaxLayer>

      <ParallaxLayer offset={1.5} speed={0.4} style={{ opacity: 0.5 }}>
        <img
          src={github}
          style={{ display: 'block', width: '15%', marginLeft: '15%' }}
          alt='github logo'
        />
      </ParallaxLayer>
    </>
  )
}

export default ImagesLayer
