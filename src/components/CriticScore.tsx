import { Badge } from "@chakra-ui/react"


interface Props{
    criticScore:number
}

const CriticScore = ({criticScore}:Props) => {
    let color=criticScore>85?'green':criticScore>70?'yellow':''

  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={2}>{criticScore}</Badge>
  )
}

export default CriticScore