import { Link } from '@chakra-ui/react'
import React from 'react'

export default function GoogleMapEmbed(props: { link: string }) {
  const { link } = props
  return (
    <Link href={link} variant="highlight" target="_blank">
      Buka di Google Maps
    </Link>
  )
}
