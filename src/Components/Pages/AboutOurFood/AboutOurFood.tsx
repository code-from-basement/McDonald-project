import React from 'react'
import Styles from './AboutOurFood.module.css'
import banner from '../../../assets/Image/banner/mcd-sv-core-omvarmat-pommesfrites-2col.jpeg'

function AboutOurFood() {
  return (
    <div className={Styles.aboutOurFood}>
      <div className={Styles.bannerContainer}>
        <img src={banner} alt='Potato with the dark background'/>
      </div>
      <div className={Styles.detailsContainer}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, cum dolores placeat itaque dolor quasi eaque quis labore sint nam veniam cupiditate at, reprehenderit voluptatibus a optio temporibus neque! Hic totam voluptatem quasi cum dolorem iusto similique libero dignissimos. Laboriosam enim sequi dolor dicta, explicabo distinctio consequatur, nesciunt repellat necessitatibus minus, quisquam officia ex iste ut ratione debitis cumque rerum voluptates fugit unde? Nisi laboriosam blanditiis expedita voluptatem magni est, voluptates voluptate doloribus libero! In, veniam sunt! Consectetur distinctio quasi, assumenda nemo odit explicabo eaque eum ex a recusandae ea. Quam quisquam eveniet eaque necessitatibus aspernatur quaerat. Hic magni sint laborum natus rem fugiat expedita quos quasi consequatur earum architecto nesciunt, iusto labore, unde eos recusandae quis deleniti eum magnam officiis dolores? Officia velit, nisi corporis perspiciatis in, at temporibus doloribus, suscipit quisquam explicabo dolore accusantium! Aut, modi molestias recusandae pariatur, quis reiciendis excepturi voluptatem fugiat dignissimos minima odio quo.</p>
      </div>
      <div className={Styles.panelWrapper}>
      </div>
    </div>
  )
}

export default AboutOurFood