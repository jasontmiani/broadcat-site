import React, {useState} from "react"
import { graphql } from "gatsby"
import {useSpring, animated} from 'react-spring'

const TwitchContentPage = ( { data } ) => {
    return (
        <pre>{JSON.stringify( data, null, 4 )}</pre>
    );
}

export const query = graphql`
  {
    twitchuser {
      profile_image_url
      login
      description
      display_name
      broadcaster_type
      id
      internal {
        mediaType
        content
        contentDigest
      }
      offline_image_url
      originalID
      type
      view_count
    }
  }
`

export default TwitchContentPage

